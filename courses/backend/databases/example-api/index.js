import express, { json } from "express";
import knex from "knex";

const app = express();
const port = 3000;

// Database configuration

// Development: local SQLite
const developmentConfig = {
	client: "sqlite3",
	connection: {
		filename: "../database/tasks.sqlite3",
		useNullAsDefault: true,
	},
};

// Production: remote PostgreSQL
const productionConfig = {
	client: "pg",
	connection: {
		connectionString: process.env.DATABASE_URL,
		ssl: { rejectUnauthorized: false },
	},
};

const isProductionEnvironment = process.env.NODE_ENV === "production";

// Use the right config based on environment
const config = isProductionEnvironment ? productionConfig : developmentConfig;

// Database configuration
const db = knex(config);

// Middleware
app.use(json());

app.get("/", (req, res) => {
	res.send("Welcome to the Task Management API");
});

// Get all users
app.get("/api/users", async (req, res) => {
	try {
		if (isProductionEnvironment) {
			console.log(`Users from Postgres database: ${config.connection.connectionString}`);
		} else {
			console.log(`Users from SQLite: ${config.connection.filename}`);
		}

		const users = await db.raw('SELECT * FROM "user"');

		// Postgres returns an object with a 'rows' property
		// SQLite returns an array directly
		const result = isProductionEnvironment ? users.rows : users;
		res.json(result);
	} catch (error) {
		res.status(500).json({ error: error.message });
	}
});

// Get all tasks
app.get("/api/stats/tasks-per-user-unoptimized", async (req, res) => {
	try {
		const tasks = await db.raw(
			"SELECT task.*, user_task.user_id FROM task INNER JOIN user_task ON task.id = user_task.task_id"
		);

		const users = await db.raw("SELECT * FROM user");
		const userTaskCounts = {};

		for (const user of users) {
			userTaskCounts[user.name] = 0; // Initialize count

			for (const task of tasks) {
				if (task.user_id === user.id) {
					userTaskCounts[user.name] += 1; // Increment count for this user
				}
			}
		}

		res.json(userTaskCounts);
	} catch (error) {
		res.status(500).json({ error: error.message });
	}
});

// Routes for aggregate functions examples
app.get("/api/stats/tasks-per-user", async (req, res) => {
	try {
		const stats = await db.raw(
			`SELECT u.name, COUNT(ut.task_id) as task_count, SUM(CASE WHEN t.status_id = 1 THEN 1 ELSE 0 END) as completed_tasks
      FROM user u
      LEFT JOIN user_task ut ON u.id = ut.user_id
      LEFT JOIN task t ON ut.task_id = t.id
      GROUP BY u.id, u.name
      ORDER BY task_count DESC`
		);

		res.json(stats);
	} catch (error) {
		res.status(500).json({ error: error.message });
	}
});

app.get("/api/stats/status-distribution", async (req, res) => {
	try {
		const stats = await db.raw(
			`SELECT status.name as status, COUNT(task.id) as count
      FROM task
      JOIN status ON task.status_id = status.id
      GROUP BY status.id, status.name`
		);

		res.json(stats);
	} catch (error) {
		res.status(500).json({ error: error.message });
	}
});

// Vulnerable search endpoint for SQL injection demo
app.get("/api/search/vulnerable", async (req, res) => {
	const { query } = req.query;

	if (!query) {
		return res.status(400).json({ error: "Query parameter required" });
	}

	try {
		// VULNERABLE: Direct string concatenation
		const sql = `SELECT id, title, created FROM task WHERE title LIKE '%${query}%'`;

		console.warn("Executing vulnerable SQL:", sql);
		const results = await db.raw(sql);

		res.json(results);
	} catch (error) {
		res.status(500).json({ error: error.message });
	}
});

// Secure search endpoint
app.get("/api/search/secure", async (req, res) => {
	const { query } = req.query;

	if (!query) {
		return res.status(400).json({ error: "Query parameter required" });
	}

	console.log(query);
	try {
		// SECURE: Using parameterized queries
		const results = await db.raw(`SELECT id, title, created FROM task WHERE title LIKE ?`, [
			`%${query}%`,
		]);

		// Or use the ORM
		const results_orm = await db("task")
			.select("id", "title", "created")
			.where("title", "like", `%${query}%`);

		res.json(results);
	} catch (error) {
		res.status(500).json({ error: error.message });
	}
});

app.post("/api/tasks/:taskId/transfer-unsafe", async (req, res) => {
	try {
		const { fromUserId, toUserId, shouldFail } = req.body;
		const { taskId } = req.params;

		await db.raw("DELETE FROM user_task WHERE user_id = ? AND task_id = ?", [
			fromUserId,
			taskId,
		]);

		// Force failure based on body parameter
		if (shouldFail) {
			throw new Error("System failure - task doesn't belong to anyone");
		}

		await db.raw("INSERT INTO user_task (user_id, task_id) VALUES (?, ?)", [toUserId, taskId]);

		res.json({ message: "Task transferred successfully" });
	} catch (error) {
		res.status(500).json({ error: error.message });
	}
});

app.listen(port, () => {});

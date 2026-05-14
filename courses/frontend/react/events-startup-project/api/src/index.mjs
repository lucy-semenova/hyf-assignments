import "dotenv/config";
import express from "express";
import cors from "cors";
import bodyParser from "body-parser";

const app = express();
app.use(cors());
app.use(bodyParser.json());

const apiRouter = express.Router();

const events = [
  {
    id: 1,
    title: "React Workshop",
    category: "Workshop",
    date: "2026-05-20",
    time: "18:00",
    venue: "Aarhus Tech Hub",
    description: "Learn React basics.",
    price: 100,
    ticketsAvailable: 12,
  },
  {
    id: 2,
    title: "Cybersecurity Talk",
    category: "Cybersecurity",
    date: "2026-05-25",
    time: "17:30",
    venue: "ReDI School Aarhus",
    description: "Beginner-friendly cybersecurity event.",
    price: 50,
    ticketsAvailable: 0,
  },
  {
    id: 3,
    title: "JavaScript Deep Dive",
    category: "Workshop",
    date: "2026-06-01",
    time: "17:00",
    venue: "Aarhus Library",
    description: "Advanced JavaScript concepts and patterns.",
    price: 120,
    ticketsAvailable: 8,
  },
  {
    id: 4,
    title: "Frontend Career Meetup",
    category: "Networking",
    date: "2026-06-03",
    time: "18:30",
    venue: "Startup Hub Aarhus",
    description: "Meet frontend developers and share experiences.",
    price: 0,
    ticketsAvailable: 25,
  },
  {
    id: 5,
    title: "Intro to Cloud Security",
    category: "Cybersecurity",
    date: "2026-06-05",
    time: "16:00",
    venue: "ReDI School Aarhus",
    description: "Basics of cloud security and shared responsibility.",
    price: 60,
    ticketsAvailable: 10,
  },
  {
    id: 6,
    title: "UX/UI Design Basics",
    category: "Design",
    date: "2026-06-08",
    time: "15:00",
    venue: "Design Lab Aarhus",
    description: "Learn principles of good UX and UI design.",
    price: 80,
    ticketsAvailable: 14,
  },
  {
    id: 7,
    title: "Node.js Backend Workshop",
    category: "Workshop",
    date: "2026-06-10",
    time: "17:00",
    venue: "Aarhus Tech Hub",
    description: "Build your first backend with Node.js and Express.",
    price: 110,
    ticketsAvailable: 9,
  },
  {
    id: 8,
    title: "Women in Tech Panel",
    category: "Networking",
    date: "2026-06-12",
    time: "18:00",
    venue: "Dokk1 Aarhus",
    description: "Panel discussion with women in tech roles.",
    price: 0,
    ticketsAvailable: 30,
  },
  {
    id: 9,
    title: "AI for Beginners",
    category: "AI",
    date: "2026-06-15",
    time: "17:30",
    venue: "Innovation Center Aarhus",
    description: "Introduction to AI and machine learning concepts.",
    price: 90,
    ticketsAvailable: 20,
  },
  {
    id: 10,
    title: "Git & GitHub Workshop",
    category: "Workshop",
    date: "2026-06-18",
    time: "16:30",
    venue: "ReDI School Aarhus",
    description: "Learn version control and collaboration with Git.",
    price: 70,
    ticketsAvailable: 15,
  },
  {
      "id": 11,
      "name": "React Copenhagen Conference 2026",
      "date": "2026-04-15",
      "time": "09:00",
      "venue": "Copenhagen Concert Hall",
      "city": "Copenhagen",
      "description": "The largest React conference in Scandinavia. Two tracks covering the latest in React 19, Server Components, and the evolving frontend ecosystem. Keynotes from core React team members and community leaders.",
      "price": 149,
      "ticketsAvailable": 0,
      "totalTickets": 800,
      "category": "Conference"
    },
    {
      "id": 12,
      "name": "Hackathon: Build with AI",
      "date": "2026-04-25",
      "time": "09:00",
      "venue": "BLOX",
      "city": "Copenhagen",
      "description": "A 24-hour hackathon where teams of 2–4 build something real using AI APIs. Cash prizes, free food, and mentoring from engineers at leading AI companies. All skill levels welcome.",
      "price": 0,
      "ticketsAvailable": 60,
      "totalTickets": 150,
      "category": "Hackathon"
    },
    {
      "id": 13,
      "name": "JavaScript: Modern Patterns Workshop",
      "date": "2026-05-03",
      "time": "10:00",
      "venue": "Founders House",
      "city": "Copenhagen",
      "description": "A hands-on full-day workshop covering modern JavaScript patterns: closures, async/await, Promises, modules, and functional techniques. Bring your laptop. Small group, individual coaching included.",
      "price": 79,
      "ticketsAvailable": 12,
      "totalTickets": 30,
      "category": "Workshop"
    },
    {
      "id": 14,
      "name": "TypeScript Deep Dive",
      "date": "2026-05-10",
      "time": "10:00",
      "venue": "IDA Conference Centre",
      "city": "Copenhagen",
      "description": "Go beyond the basics. This workshop covers generics, conditional types, utility types, declaration merging, and integrating TypeScript into large codebases. Prior TypeScript experience required.",
      "price": 89,
      "ticketsAvailable": 18,
      "totalTickets": 25,
      "category": "Workshop"
    },
    {
      "id": 15,
      "name": "Copenhagen JS Meetup",
      "date": "2026-05-20",
      "time": "18:30",
      "venue": "Novo Nordisk Digital Hub",
      "city": "Copenhagen",
      "description": "Monthly JavaScript community meetup. Two talks from local developers, followed by drinks and networking. This month: state management in 2026 and a live coding session on Vite plugins.",
      "price": 0,
      "ticketsAvailable": 85,
      "totalTickets": 120,
      "category": "Meetup"
    },
    {
      "id": 16,
      "name": "Full Stack Bootcamp: React & Node",
      "date": "2026-05-30",
      "time": "09:00",
      "venue": "Aarhus University",
      "city": "Aarhus",
      "description": "An intensive two-day bootcamp covering the full stack: React on the frontend, Node.js + Express on the backend, REST APIs, and deployment. Suitable for developers with basic JavaScript knowledge.",
      "price": 199,
      "ticketsAvailable": 0,
      "totalTickets": 40,
      "category": "Bootcamp"
    },
    {
      "id": 17,
      "name": "Open Source Summit Nordic",
      "date": "2026-06-05",
      "time": "09:00",
      "venue": "Aarhus Congress Centre",
      "city": "Aarhus",
      "description": "Three days of talks, panels, and contributor workshops covering open source infrastructure, sustainability, and community building. Featuring maintainers from Linux, Node.js, Python, and more.",
      "price": 299,
      "ticketsAvailable": 320,
      "totalTickets": 1200,
      "category": "Conference"
    },
    {
      "id": 18,
      "name": "Docker & Kubernetes for Developers",
      "date": "2026-06-12",
      "time": "10:00",
      "venue": "Aarhus School of Architecture",
      "city": "Aarhus",
      "description": "Learn to containerise your apps, write Dockerfiles, and orchestrate with Kubernetes. This practical workshop takes you from zero to a working multi-container deployment. Bring a laptop with Docker installed.",
      "price": 95,
      "ticketsAvailable": 8,
      "totalTickets": 25,
      "category": "Workshop"
    },
    {
      "id": 19,
      "name": "Web Performance Masterclass",
      "date": "2026-06-20",
      "time": "10:00",
      "venue": "Dokk1",
      "city": "Aarhus",
      "description": "A focused half-day on Core Web Vitals, bundle analysis, lazy loading, and caching strategies. Walk away with a clear plan for improving your app's performance scores and real user experience.",
      "price": 59,
      "ticketsAvailable": 40,
      "totalTickets": 60,
      "category": "Workshop"
    },
    {
      "id": 20,
      "name": "Cybersecurity for Web Developers",
      "date": "2026-06-28",
      "time": "13:00",
      "venue": "Incuba Science Park",
      "city": "Aarhus",
      "description": "Understand the OWASP Top 10, common web vulnerabilities, and how to defend against them in your own applications. Includes live demonstrations of XSS, CSRF, SQL injection, and secure authentication patterns.",
      "price": 69,
      "ticketsAvailable": 55,
      "totalTickets": 80,
      "category": "Workshop"
    }
];

apiRouter.get("/", (req, res) => {
  res.json({ message: "API is working" });
});

apiRouter.get("/events", (req, res) => {
  const searchText = req.query.q;
  const page = Number(req.query.page) || 1;
  const limit = Number(req.query.limit) || 4;

  let filteredEvents = events;

if (searchText && searchText.length >= 2) {
  filteredEvents = filteredEvents.filter((event) => {
    const eventTitle = event.title.toLowerCase();
    const searchTextLowerCase = searchText.toLowerCase();

    return eventTitle.includes(searchTextLowerCase);
  });
}

const selectedCategory = req.query.category;

if (selectedCategory) {
  filteredEvents = filteredEvents.filter(
    (event) => event.category === selectedCategory,
  );

  }

  const startIndex = (page - 1) * limit;
  const endIndex = startIndex + limit;

  const paginatedEvents = filteredEvents.slice(startIndex, endIndex);

  res.json({
    events: paginatedEvents,
    totalEvents: filteredEvents.length,
    currentPage: page,
    totalPages: Math.ceil(filteredEvents.length / limit),
  });
});

apiRouter.get("/events/:id", (req, res) => {
  const eventId = Number(req.params.id);

  const event = events.find((event) => event.id === eventId);

  if (!event) {
    res.status(404).json({ error: "Event not found" });
    return;
  }

  res.json(event);
});

apiRouter.post("/login", (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ error: "Email and password are required" });
  }

  res.json({
    accessToken: "fake-token",
    user: {
      email,
    },
  });
});

apiRouter.post("/register", (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ error: "Email and password are required" });
  }

  res.status(201).json({
    accessToken: "fake-token",
    user: {
      email,
    },
  });
});

app.use("/api", apiRouter);

app.listen(process.env.PORT, () => {
  console.log(`API listening on port ${process.env.PORT}`);
});
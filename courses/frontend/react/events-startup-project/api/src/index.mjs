import "dotenv/config";
import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
// import knex from "./database_client.js";
// import nestedRouter from "./routers/nested.js";

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
    filteredEvents = events.filter((event) => {
      const eventTitle = event.title.toLowerCase();
      const searchTextLowerCase = searchText.toLowerCase();

      return eventTitle.includes(searchTextLowerCase);
    });
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
 

app.use("/api", apiRouter);
app.listen(process.env.PORT, () => {
  console.log(`API listening on port ${process.env.PORT}`);
});

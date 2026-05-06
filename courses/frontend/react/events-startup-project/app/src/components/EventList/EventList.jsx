import EventCard from "../EventCard/EventCard";
import { useEffect, useState } from "react";

function EventList() {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
  async function fetchEvents() {
    try {
      setLoading(true);
      setError("");

      const response = await fetch("http://localhost:3001/api/events");

      if (!response.ok) {
        throw new Error("Failed to fetch events");
      }

      const data = await response.json();
      setEvents(data);
    } catch (err) {
      setError("Could not load events");
    } finally {
      setLoading(false);
    }
  }

  fetchEvents();
  }, []);
  

  if (loading) {
    return <p>Loading events...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <section>
      <h1>Upcoming Events</h1>

  
      {events.length === 0 ? (
        <p className="noEvents">No events available.</p>
      ) : (
        <ul>
          {events.map((event) => (
            <EventCard
              key={event.id}
              title={event.title}
              date={event.date}
              time={event.time}
              venue={event.venue}
              city={event.city}
              description={event.description}
              category={event.category}
              price={event.price}
              ticketsAvailable={event.ticketsAvailable}
            />
          ))}
        </ul>
      )}
    </section>
  );
}

export default EventList;



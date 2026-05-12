import EventCard from "../EventCard/EventCard";
import EventSearch from "../EventSearch/EventSearch";
import EventDetail from "../../pages/EventDetail/EventDetail";
import "./EventList.css";
import { useEffect, useState } from "react";
import api from "../../services/api";

function EventList() {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [selectedEventId, setSelectedEventId] = useState(null);

  useEffect(() => {
    async function fetchEvents() {
      try {
        setLoading(true);
        setError("");

        const response = await fetch(
          api(`/events?q=${searchTerm}&page=${page}&limit=4`),
        );

        if (!response.ok) {
          throw new Error("Failed to fetch events");
        }

        const data = await response.json();
        setEvents(data.events);
        setTotalPages(data.totalPages);
      } catch (err) {
        setError("Could not load events");
      } finally {
        setLoading(false);
      }
    }
    const timeoutId = setTimeout(() => {
      fetchEvents();
    }, 300);

    return () => clearTimeout(timeoutId);
  }, [searchTerm, page]);

  if (loading) {
    return <p>Loading events...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <section className="event-list">
      <h1>Upcoming Events</h1>

      <EventSearch
        searchQuery={searchTerm}
        setSearchQuery={(value) => {
          setSearchTerm(value);
          setPage(1);
        }}
      />
      {events.length === 0 ? (
        <p className="noEvents">No events available.</p>
      ) : (
        <>
          {selectedEventId && (
            <EventDetail
              eventId={selectedEventId}
              onClose={() => setSelectedEventId(null)}
            />
          )}
          <ul className="event-grid">
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
                onClick={() => setSelectedEventId(event.id)}
              />
            ))}
          </ul>
          {totalPages > 1 && (
            <div className="pagination">
              <button onClick={() => setPage(page - 1)} disabled={page === 1}>
                Previous
              </button>

              <span>
                Page {page} of {totalPages}
              </span>

              <button
                onClick={() => setPage(page + 1)}
                disabled={page === totalPages}
              >
                Next
              </button>
            </div>
          )}
        </>
      )}
    </section>
  );
}

export default EventList;

import { useState } from "react";
import EventCard from "../EventCard/EventCard";
import events from "../../data/events.js";


function EventList() {
  const [searchQuery, setSearchQuery] = useState("");
  
 const filteredEvents = events.filter((event) =>
    event.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <section>
      <h1>Upcoming Events</h1>

  <input
        type="text"
        placeholder="Search events..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
      {filteredEvents.length === 0 ? (
        <p className="noEvents">No events available.</p>
      ) : (
        <ul>
          {filteredEvents.map((event) => (
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



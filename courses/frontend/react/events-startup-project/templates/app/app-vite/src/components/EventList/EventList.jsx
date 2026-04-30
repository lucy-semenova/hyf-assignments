import EventCard from "../EventCard/EventCard";
import events from "../../data/events.js";

 function EventList() {
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



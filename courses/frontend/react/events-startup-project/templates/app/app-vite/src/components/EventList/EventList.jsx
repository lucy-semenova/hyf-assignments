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


/*import events from "../../data/events.js";
import EventCard from "../EventCard/EventCard";

// TODO: split each event below into its own EventCard component
// TODO: add a "Buy ticket" button to each event card
// TODO: replace the mock data import with a fetch call to GET /events

export default function EventList() {
  return (
    <ul>
      {events.map((event) => (
        <li key={event.id}>
          <h2>{event.name}</h2>
          <p>
            {event.date} at {event.time}
          </p>
          <p>
            {event.venue}, {event.city}
          </p>
          <p>{event.category}</p>
          <p>{event.price === 0 ? "Free" : `€${event.price}`}</p>
          <p>
            {event.ticketsAvailable === 0
              ? "Sold out"
              : `${event.ticketsAvailable} tickets left`}
          </p>
        </li>
      ))}
    </ul>
  );
}
*/
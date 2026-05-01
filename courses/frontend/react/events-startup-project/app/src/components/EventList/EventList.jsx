import EventCard from "../EventCard/EventCard";

function EventList({ filteredEvents = [] }) {
  
  return (
    <section>
      <h1>Upcoming Events</h1>

  
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



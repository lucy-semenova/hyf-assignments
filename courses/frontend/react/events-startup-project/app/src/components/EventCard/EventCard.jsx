import "./EventCard.css";

function EventCard({
  title,
  date,
  time,
  venue,
  city,
  price,
  ticketsAvailable,
  category,
}) {
  const getAvailabilityMessage = () => {
    return ticketsAvailable === 0 ? "Sold out" : `${ticketsAvailable} tickets left`;
  };

  const getPriceMessage = () => {
    return price === 0 ? "Free" : `${price} DKK`;
  };

  return (
    <li className="eventCard">
      <h2 className="eventTitle">{title}</h2>
      <p className="eventDate">
        {date} at {time}
      </p>
      <p className="eventVenue">
        {venue}, {city}
      </p>
      <p className="eventType">{category}</p>
      <p className="eventPrice">{getPriceMessage()}</p>

      <p className="eventTicketsLeft">{getAvailabilityMessage()}</p>
      <button className="buyTicketButton" disabled={ticketsAvailable === 0}>
        {ticketsAvailable === 0 ? "Sold out" : "Buy ticket"}
      </button>
    </li>
  );
}
export default EventCard;

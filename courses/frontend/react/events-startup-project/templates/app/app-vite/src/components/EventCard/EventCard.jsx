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
      <p className="eventPrice">{price === 0 ? "Free" : `${price} DKK`}</p>

      <p className="eventTicketsLeft">
        {ticketsAvailable > 0
          ? `${ticketsAvailable} tickets left`
          : "Sold out"}
      </p>
      <button className="buyTicketButton" disabled={ticketsAvailable === 0}>
        {ticketsAvailable === 0 ? "Sold out" : "Buy ticket"}
      </button>
    </li>
     );
}       
export default EventCard;  

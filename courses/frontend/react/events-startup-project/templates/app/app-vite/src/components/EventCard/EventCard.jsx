import "./EventCard.css";

export default function EventCard(title, date, venue, type, price, ticketsLeft) {
  return (
    <li className="eventCard">
      <h2 className="eventTitle">{title}</h2>
      <p className="eventDate">{date}</p>
      <p className="eventVenue">{venue}</p>
      <p className="eventType">{type}</p>
      <p className="eventPrice">{price === 0 ? "Free" : `${price} DKK`}</p>
      <p className="eventTicketsLeft">{ticketsLeft} tickets left</p>
      <button className="buyBtn">Buy ticket</button>
    </li>
  );
}
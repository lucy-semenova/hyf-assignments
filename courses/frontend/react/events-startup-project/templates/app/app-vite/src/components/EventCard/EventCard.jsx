import "./EventCard.css";

export default function EventCard() {
  return (
    <li className="eventCard">
      <h2 className="eventTitle">Aarhus AI @ Uber</h2>
      <p className="eventDate">May 19, 2026 at 16:00</p>
      <p className="eventVenue">Carl Blochs Gade 89, Aarhus</p>
      <p className="eventType">Technology</p>
      <p className="eventPrice">Free</p>
      <p className="eventTicketsLeft">24 tickets left</p>
      <button className="buyBtn">Buy ticket</button>
    </li>
  );
}
// TODO: use useParams() to get the event id from the URL
// TODO: fetch the event from GET /events/:id instead of using mock data
import { useState } from "react";
import events from "../../data/events";
import "./EventDetail.css";

export default function EventDetail() {
const event = events[2];
  const [quantity, setQuantity] = useState(1);
    
 const getPriceMessage = () => {
  return event.price === 0
     ? "Free" :`${event.price} DKK`;
  };

   const getAvailabilityMessage = () => {
     return event.ticketsAvailable === 0
       ? "Sold out"
       : `${event.ticketsAvailable} tickets left`;
  };

  const getTotalPriceMessage = () => {
    if (event.price === 0) {
      return "Free";
    }
    return `${quantity * event.price} DKK`;
  };

const handleQuantityChange = (e) => {
    const value = Number(e.target.value);
    if (value < 1) {
      setQuantity(1);
    } else if (value > event.ticketsAvailable) {
      setQuantity(event.ticketsAvailable);
    } else {
      setQuantity(value);
    }
  };

  return (
<section>
      <h1>Event Details</h1>

      <h2>{event.title}</h2>

      <p>Date: {event.date}</p>
      <p>Time: {event.time}</p>
      <p>Venue: {event.venue}, {event.city}</p>
      <p>Description: {event.description}</p>
      <p>Price: {getPriceMessage()}</p>
      <p>Availability: {getAvailabilityMessage()}</p>

      {event.ticketsAvailable === 0 ? (
        <p>This event is sold out</p>
      ) : (
        <>
          <label htmlFor="ticketQuantity">Ticket Quantity:</label>

          <input
            type="number"
            id="ticketQuantity"
            min="1"
            max={event.ticketsAvailable}
            value={quantity}
            onChange={handleQuantityChange}
          />

          <p>Total price: {getTotalPriceMessage()}</p>
        </>
      )}
    </section>
  );
}
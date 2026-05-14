import { useState, useEffect } from "react";
import "./EventDetail.css";
import api from "../../services/api";
import { useCart } from "../../context/CartContext";

export default function EventDetail({ eventId, onClose }) {
  const [event, setEvent] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [quantity, setQuantity] = useState(1);

  const { addToCart } = useCart();
  useEffect(() => {
    async function fetchEventDetail() {
      try {
        setLoading(true);
        setError("");

        const response = await fetch(api(`/events/${eventId}`));

        if (!response.ok) {
          throw new Error("Failed to load event detail");
        }

        const data = await response.json();
        setEvent(data);
        setQuantity(1);
      } catch (err) {
        setError("Could not load event details.");
      } finally {
        setLoading(false);
      }
    }

    if (eventId) {
      fetchEventDetail();
    }
  }, [eventId]);

  function handleQuantityChange(event) {
    const value = Number(event.target.value);

    if (value < 1) {
      setQuantity(1);
    } else if (value > event.ticketsAvailable) {
      setQuantity(event.ticketsAvailable);
    } else {
      setQuantity(value);
    }
  }
  function getPriceMessage() {
    return event.price === 0 ? "Free" : `${event.price} DKK`;
  }

  function getAvailabilityMessage() {
    return event.ticketsAvailable === 0
      ? "Sold out"
      : `${event.ticketsAvailable} tickets available`;
  }

  function getTotalPriceMessage() {
    return event.price === 0 ? "Free" : `${event.price * quantity} DKK`;
  }
  function handleAddToCart() {
    addToCart(event, quantity);
  }
  if (loading) return <p>Loading event details...</p>;
  if (error) return <p>{error}</p>;
  if (!event) return null;

  return (
    <div className="event-detail-overlay">
      <section className="event-detail">
        <button className="closeButton" onClick={onClose}>
          ✕
        </button>

        <h1>Event Details</h1>

        <h2>{event.title}</h2>

        <p>Date: {event.date}</p>
        <p>Time: {event.time}</p>
        <p>
          Venue: {event.venue}, {event.city}
        </p>
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
            <button onClick={handleAddToCart}>Add to cart</button>
          </>
        )}
      </section>
    </div>
  );
}

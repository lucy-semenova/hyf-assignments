import "./EventCard.css";
import { CalendarDays, MapPin, Ticket, Users, FileText } from "lucide-react";

function EventCard({
  title,
  date,
  time,
  venue,
  city,
  price,
  description,
  ticketsAvailable,
  category,
  onClick,
}) {
  const getAvailabilityMessage = () => {
    return ticketsAvailable === 0
      ? "Sold out"
      : `${ticketsAvailable} tickets left`;
  };

  const getPriceMessage = () => {
    return price === 0 ? "Free" : `${price} DKK`;
  };

  return (
    <li className="eventCard">
      <h2 className="eventTitle">{title}</h2>
      <p className="eventType">{category}</p>
      <div className="eventInfo">
        <FileText size={20} />
        <p className="eventDescription">{description}</p>
      </div>
      <div className="eventInfo">
        <CalendarDays size={20} />
        <p className="eventDate">
          {date} at {time}
        </p>
      </div>
      <div className="eventInfo">
        <MapPin size={20} />
        <p className="eventVenue">
          {venue}, {city}
        </p>
      </div>
      <div className="eventInfo">
        <Ticket size={20} />
        <p className="eventPrice">{getPriceMessage()}</p>
      </div>
      <div className="eventInfo">
        <Users size={20} />
        <p className="eventTicketsLeft">{getAvailabilityMessage()}</p>
      </div>
      <button
        className="buyTicketButton"
        disabled={ticketsAvailable === 0}
        onClick={onClick}
      >
        {ticketsAvailable === 0 ? "Sold out" : "Buy ticket"}
      </button>
    </li>
  );
}
export default EventCard;

import { useState } from "react";
import events from "../../data/events.js";
import EventList from "../EventList/EventList.jsx";

function EventSection() {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredEvents = events.filter((event) =>
    event.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <section>
      

      <EventList filteredEvents={filteredEvents} />
    </section>
  );
}

export default EventSection;
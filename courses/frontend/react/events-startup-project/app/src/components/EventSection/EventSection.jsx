import { useState } from "react";
import events from "../../data/events.js";
import EventSearch from "../EventSearch/EventSearch.jsx";
import EventList from "../EventList/EventList.jsx";

function EventSection() {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredEvents = events.filter((event) =>
    event.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <section>
      <EventSearch
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
      />

      <EventList filteredEvents={filteredEvents} />
    </section>
  );
}

export default EventSection;
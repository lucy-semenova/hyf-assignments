// TODO: display at least date, time, venue, city, and description for one event
// TODO: use useParams() to get the event id from the URL
// TODO: fetch the event from GET /events/:id instead of using mock data

export default function EventDetail() {
  return (
    <section>
      <h1>Event Details</h1>
      <h2>Aarhus AI @ Uber</h2>
      <p>Date: May 19, 2026</p>
      <p>Time: 16:00</p>
      <p>Carl Blochs Gade 89, Aarhus</p>
      <p>
        Description: Join local developers and tech enthusiasts for an evening of networking and inspiration.
      </p>
    </section>
  );
}

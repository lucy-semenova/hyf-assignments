import OurCrew from "./OurCrew";
import OurPartners from "./OurPartners";
import OurValues from "./OurValues";

export const Crew = () => {
  return (
    <div className="fullBGpicture">
      <main className="mainContent">
        <h1>About us</h1>
        <section className="card">
          <OurValues />
        </section>
        <section className="card">
          <OurCrew />
        </section>
        <section className="card">
          <OurPartners />
        </section>
      </main>
    </div>
  );
};

export default Crew;

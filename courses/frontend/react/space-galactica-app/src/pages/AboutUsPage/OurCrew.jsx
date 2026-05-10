import styles from "./OurCrew.module.css";

const ourCrewData = [
  {
    id: 1,
    image: "/crew/image-anousheh-ansari.png",
    alt: "Captain Sarah Vega",
    name: "Sarah Vega",
    role: "Captain",
    bio: "A former NASA astronaut with over 15 years of experience, Captain Vega leads our missions with unparalleled expertise and a passion for space exploration.",
  },
  {
    id: 2,
    image: "/crew/image-douglas-hurley.png",
    alt: "Dr. Leo Redding",
    name: "Dr. Leo Redding",
    role: "Chief Astrophysicist",
    bio: "Our chief astrophysicist, Dr. Redding, is a renowned scientist who has contributed to major space discoveries. He ensures that every journey is as educational as it is exhilarating.",
  },
  {
    id: 3,
    image: "/crew/image-mark-shuttleworth.png",
    alt: "Chief Engineer Hana Lee",
    name: "Hana Lee",
    role: "Chief Engineer",
    bio: "With her extensive background in aerospace engineering, Hana Lee is responsible for the state-of-the-art technology that powers our spacecraft. Her innovation ensures that our travelers are always in safe hands.",
  },
  {
    id: 4,
    image: "/crew/image-douglas-hurley.png",
    alt: "Mission Specialist Alex Santos",
    name: "Alex Santos",
    role: "Mission Specialist",
    bio: "As a mission specialist, Alex’s job is to ensure that every aspect of the journey runs smoothly. With a background in both science and adventure tourism, Alex is the perfect guide for our space travelers.",
  },
  {
    id: 5,
    image: "/crew/image-douglas-hurley.png",
    alt: "Crew Member Maya Patel",
    name: "Maya Patel",
    role: "Crew Member",
    bio: "Maya brings a unique blend of technical skills and customer service experience to the team. She’s always ready to assist with any needs and to make sure every traveler has an unforgettable experience.",
  },
];
const OurCrewCard = ({ image, alt, name, role, bio }) => {
  return (
    <div className={styles.card}>
      <img className={styles.image} src={image} alt={alt} />
      <p className={styles.name}>{name}</p>
      <p className={styles.role}>{role}</p>
      <p className={styles.bio}>{bio}</p>
    </div>
  );
};

const OurCrew = () => {
  // 🧑🏽‍🚀 Task - Week 1

  // Some inspiration ideas can be found in /data/inspiration_about_us
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>Meet Our Crew</h2>
          <p className={styles.description}>
            Our crew is the heart and soul of Galactica. We are a diverse team
            of seasoned space explorers, engineers, and visionaries who are
            united by a common goal: to make space travel accessible and
            exciting for all.
          </p>
        </div>
        <div className={styles.grid}>
          {ourCrewData.map((member) => (
            <OurCrewCard
              key={member.id}
              image={member.image}
              alt={member.alt}
              name={member.name}
              role={member.role}
              bio={member.bio}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
export default OurCrew;

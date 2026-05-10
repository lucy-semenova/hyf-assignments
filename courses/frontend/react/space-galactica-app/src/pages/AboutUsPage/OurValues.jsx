import styles from "./OurValues.module.css";
const ourValuesData = [
  {
    id: 1,
    title: "Exploration",
    description:
      "We are driven by a deep-seated desire to explore the unknown. We believe that the pursuit of discovery is at the heart of human nature, and we are committed to pushing the boundaries of what is possible.",
  },
  {
    id: 2,
    title: "Innovation",
    description:
      "At Galactica, we prioritize cutting-edge technology and innovation. We are constantly evolving our spacecraft, safety protocols, and services to ensure that our travelers experience the most advanced and secure space journeys available.",
  },
  {
    id: 3,
    title: "Sustainability",
    description:
      "We are committed to making space exploration sustainable for future generations. Our space missions are designed to minimize environmental impact, both on Earth and in space, and to foster a spirit of responsibility towards our universe.",
  },
  {
    id: 4,
    title: "Community",
    description:
      "We believe in the power of collective exploration. Our journeys are not just about reaching new destinations; they are about building a community of space enthusiasts who share a passion for the stars.",
  },
];
const OurValuesCard = ({ number, title, description }) => {
  return (
    <div className={styles.card}>
      <p className={styles.number}>{number}</p>
      <p className={styles.title}>{title}</p>
      <p className={styles.description}>{description}</p>
    </div>
  );
};

const OurValues = () => {
  return (
    <section className={styles.section}>
      <div className={styles.header}>
        <h2 className={styles.title}>OUR VALUES</h2>
      </div>

      <div className={styles.grid}>
        {ourValuesData.map((value) => (
          <OurValuesCard
            key={value.id}
            number={value.number}
            title={value.title}
            description={value.description}
          />
        ))}
      </div>
    </section>
  );
};
export default OurValues;

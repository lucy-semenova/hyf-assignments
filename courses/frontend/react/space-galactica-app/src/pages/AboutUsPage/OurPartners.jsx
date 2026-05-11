import styles from "./OurPartners.module.css";
const ourPartnersData = [
  {
    id: 1,
    image: "/business_partners/alphabet-logo.png",
    alt: "Alphabet logo",
  },

  {
    id: 2,
    image: "/business_partners/amazon_logo.png",
    alt: "Amazon logo",
  },
  {
    id: 3,
    image: "/business_partners/Microsoft-Logo-white.png",
    alt: "Microsoft Logo",
  },
  {
    id: 4,
    image: "/business_partners/nyu-logo.png",
    alt: "Nyu logo",
  },
  {
    id: 5,
    image: "/business_partners/QueensLogo_white.png",
    alt: "Queens Logo",
  },
  {
    id: 6,
    image: "/business_partners/samsung-logo.png",
    alt: "Samsung logo",
  },
];

const OurPartnersCard = ({ image, alt }) => {
  return (
    <div className={styles.card}>
      <img className={styles.image} src={image} alt={alt} />
    </div>
  );
};

const OurPartners = () => {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>Our Partners</h2>
          <p className={styles.description}>
            We collaborate with some of the most respected names in the space
            and technology industries to make every journey extraordinary.
          </p>
        </div>

        <section className={styles.section}>
          <div className={styles.grid}>
            {ourPartnersData.map((partner) => (
              <OurPartnersCard
                key={partner.id}
                image={partner.image}
                alt={partner.alt}
              />
            ))}
          </div>
        </section>
      </div>
    </section>
  );
};

export default OurPartners;

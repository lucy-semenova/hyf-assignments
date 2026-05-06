import styles from "./PlanetCard.module.css";

const PlanetCard = ({
  name,
  description,
  thumbnail,
  isSelected,
  togglePlanetSelection,
}) => {
  return (
    <div className={styles.planetCard}>
      <img className={styles.planetThumbnail} src={thumbnail} alt={name} />
      <div className={styles.planetDescription}>
        <h2>
          {name} {isSelected ? "- SELECTED" : ""}
        </h2>
        <p>{description}</p>
      </div>
      <button onClick={togglePlanetSelection}>
        {isSelected ? "Deselect" : "Select"}
      </button>
    </div>
  );
};

export default PlanetCard;

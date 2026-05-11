import styles from "./DestinationPage.module.css";

const PlanetsWishlistItem = ({ name, thumbnail, onRemove }) => {
  return (
    <div className={styles.wishlistItem}>
      <img className={styles.wishlistItemThumbnail} src={thumbnail} alt="" />
      <div className={styles.wishlistItemContent}>
        <p className={styles.wishlistItemName}>{name.toUpperCase()}</p>

        <button className={styles.removeButton} onClick={onRemove}>
          Remove
        </button>
      </div>
    </div>
  );
};

export default PlanetsWishlistItem;

import { useState } from "react";
import styles from "./DestinationPage.module.css";

export const AddWishlistItem = ({ onAddWishlistItem }) => {
  // 🧑🏽‍🚀 Task - Week 3
  // Add a useState for the handling of the <input id="customWishlist" type="text" />.
  // Connect the setThumbnail to the <select>.
  const [thumbnail, setThumbnail] = useState("/destination/image-europa.png");
  const [wishlistItemName, setWishlistItemName] = useState("");

  const onAddItemPressed = () => {
    // 🧑🏽‍🚀 Task - Week 3
    // The required functionality here:
    // - call the onAddWishlistItem function;
    // - clear the <input/> field .
    if (wishlistItemName.trim() === "") {
      return;
    }
    onAddWishlistItem({
      name: wishlistItemName,
      thumbnail: thumbnail,
    });

    setWishlistItemName("");
  };

  return (
    <div className={styles.addWishlistItem}>
      <p>Add custom planet to wishlist</p>
      <label htmlFor="customWishlist">Wishlist item name</label>
      <input
        id="customWishlist"
        type="text"
        value={wishlistItemName}
        onChange={(event) => setWishlistItemName(event.target.value)}
      />
      <label htmlFor="customWishlistThumbnail">Wishlist item thumbnail</label>
      <select
        id="customWishlistThumbnail"
        value={thumbnail}
        onChange={(event) => setThumbnail(event.target.value)}
      >
        <option value="/destination/image-europa.png">EUROPA</option>
        <option value="/destination/image-mars.png">MARS</option>
        <option value="/destination/image-moon.png">MOON</option>
        <option value="/destination/image-titan.png">TITAN</option>
      </select>
      <button onClick={onAddItemPressed}>ADD CUSTOM</button>
    </div>
  );
};

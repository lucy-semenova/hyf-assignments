import { useState } from "react";
import styles from "./DestinationPage.module.css";
import PlanetsWishlistItem from "./PlanetsWishlistItem";

export const Destinations = () => {
  const [planetsWishlist, setPlanetsWishlist] = useState([]);

  // 🧑🏽‍🚀 Task - Week 2 -Done
  // This should be a simple function to check if a given planet is selected.
  // You will need to work with the array of planets wishlist.
  const isPlanetInWishlist = (planetName) => {
    for (let i = 0; i < planetsWishlist.length; i++) {
      if (planetsWishlist[i].name === planetName) {
        return true;
      }
    }
    return false;
  };

    
  // 🧑🏽‍🚀 Task - Week 2-Done
  // When a planet is selected or deselected (toggled), the state of the wishlist planets should be updated accordingly by 
  // calling the addPlanetToWishlist or removePlanetFromWishlist function. You will need a condition here.

  const togglePlanetSelection = (name, thumbnail) => {
    if (isPlanetInWishlist(name)) {
      removePlanetFromWishlist(name);
    } else {
      addPlanetToWishlist(name, thumbnail);
    }
      
};
 // 🧑🏽‍🚀 Task - Week 2-Done
    // Add the planet to the planets wishlist state.
  
  const addPlanetToWishlist = (name, thumbnail) => {
    setPlanetsWishlist([...planetsWishlist, { name: name, thumbnail: thumbnail }]);
  };
  
// 🧑🏽‍🚀 Task - Week 2-Done
    // Remove the planet from the planets wishlist state.
  const removePlanetFromWishlist = (name) => {
 const updatedList = planetsWishlist.filter(
    (planet) => planet.name !== name
  );

  setPlanetsWishlist(updatedList);    
  };


  {/* 🧑🏽‍🚀 Task - Week 2 - Done*/}
          {/* Display the number of wishlist planets, if there are any planets in the wishlist. */}
  {/* Display the "no planets" message if the wishlist is empty. */ }
  {/* 🧑🏽‍🚀 Use a variable to display the number of wishlist planets:  */}
  const numberOfPlanetsInWishlist = planetsWishlist.length;
  
  function renderWishlistMessage() {
  if (numberOfPlanetsInWishlist === 0) {
    return <p>No planets in your wishlist :(</p>;
  } else {
    return (
      <p>
        You have {numberOfPlanetsInWishlist} planets in your wishlist
      </p>
    );
  }
}

  return (
    <div className="fullBGpicture">
      <main className="mainContent">
        <h1>Travel destinations</h1>
        <section className="card">
          <h2>Wishlist</h2>
          
          { renderWishlistMessage()}
          

          {/* 🧑🏽‍🚀 Task - Week 3 */}
          {/* Use the AddWishlistItem component here. */}

          {/* 🧑🏽‍🚀 Task - Week 3
          <h3>Your current wishlist</h3>
          <div className={styles.wishlistList}>
            ...
            Use .map() to display the wishlist planets with the PlanetsWishlistItem component. 
          </div> 
          */}
        </section>
        <section className="card">
          <h2>Possible destinations</h2>
          {/* 🧑🏽‍🚀 Task - Week 2 */}
          {/* Add all 4 planets: Europa, Moon, Mars, Titan.  */}
          {/* Use the README.md file for descriptions. */}
          {/* Create a <PlanetCard /> component, which accepts the following props: name, description, thumbnail, isSelected, togglePlanetSelection */}
          <div className={styles.planetCard}>
            <img
              className={styles.planetThumbnail}
              src="/destination/image-europa.png"
              alt=""
            />
            <div className={styles.planetDescription}>
              <h2>EUROPA {isPlanetInWishlist("Europa") ? "- SELECTED" : ""}</h2>
              <p>Lorem ipsum...</p>
            </div>
            <button
              className="roundButton"
              onClick={() => togglePlanetSelection("Europa")}
            >
              {isPlanetInWishlist("Europa")
                ? "REMOVE FROM WISHLIST"
                : "ADD TO WISHLIST"}
            </button>
          </div>
          <div className={styles.planetCard}>
            <img
              className={styles.planetThumbnail}
              src="/destination/image-mars.png"
              alt=""
            />
            <div className={styles.planetDescription}>
              <h2>MARS {isPlanetInWishlist("Mars") ? "- SELECTED" : ""}</h2>
              <p>Lorem ipsum...</p>
            </div>
            <button
              className="roundButton"
              onClick={() => togglePlanetSelection("Mars")}
            >
              {isPlanetInWishlist("Mars")
                ? "REMOVE FROM WISHLIST"
                : "ADD TO WISHLIST"}
            </button>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Destinations;

// 🧑🏽‍🚀 Task - Week 4 - part 2
// Hate to break it to you, but you will have to make some changes to the code you already wrote.
// Now that you have context, grab and use the context data in this.
// You will need to replace some of the variables and functions with the ones from the context.

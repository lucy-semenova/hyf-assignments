import { useState } from "react";
import PlanetCard from "../../components/PlanetCard/PlanetCard";  
import styles from "./DestinationPage.module.css";


 // 🧑🏽‍🚀 Task - Week 2 - Done
          //Add all 4 planets: Europa, Moon, Mars, Titan.  
// Use the README.md file for descriptions. 
const planets = [
  {
    name: "Europa",
    description: "Europa, one of Jupiter’s moons, is an icy world with a hidden ocean beneath its surface. This mysterious moon is a prime candidate for the search for extraterrestrial life, making it a thrilling destination for space explorers.",
    thumbnail: "/destination/image-europa.png"
  },
  {
    name: "Mars",
    description: "Mars, the Red Planet, is a barren yet fascinating world with vast deserts, towering volcanoes, and the deepest canyon in the solar system. As humanity’s next frontier, Mars invites us to dream of colonization and the possibilities of life beyond Earth.",
    thumbnail: "/destination/image-mars.png"
  },
  {
    name: "Moon",
    description: "Our closest celestial neighbor, the Moon, is a silent witness to Earth's history. With its stunning craters and desolate landscapes, the Moon offers a unique glimpse into space exploration's past and future, making it a perfect destination for lunar adventurers.",
    thumbnail: "/destination/image-moon.png"
  },
  {
    name: "Titan",
    description: "Titan, Saturn's largest moon, is a world of dense atmosphere and liquid methane lakes. This enigmatic moon is shrouded in a thick orange haze, concealing a landscape that is both alien and strangely familiar, beckoning explorers to uncover its secrets.",
    thumbnail: "/destination/image-titan.png"
  }
];



 const Destinations = () => {
  const [planetsWishlist, setPlanetsWishlist] = useState([]);

  // 🧑🏽‍🚀 Task - Week 2 -Done
  // This should be a simple function to check if a given planet is selected.
  // You will need to work with the array of planets wishlist.
   const isPlanetInWishlist = (planetName) => {
     return planetsWishlist.some((planet) => planet.name === planetName);
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
 

  


//  🧑🏽‍🚀 Task - Week 2 - Done*/}
//     Display the number of wishlist planets, if there are any planets in the wishlist. */}
//   Display the "no planets" message if the wishlist is empty. */ }
//    🧑🏽‍🚀 Use a variable to display the number of wishlist planets:  */}
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
         <div className={styles.planetCardGrid}>
           <PlanetCard
            name={planets[0].name}
            description={planets[0].description}
            thumbnail={planets[0].thumbnail}
            isSelected={isPlanetInWishlist(planets[0].name)}
            togglePlanetSelection={() =>
              togglePlanetSelection(planets[0].name, planets[0].thumbnail)
            }
          />
           <PlanetCard
            name={planets[1].name}
            description={planets[1].description}
            thumbnail={planets[1].thumbnail}
            isSelected={isPlanetInWishlist(planets[1].name)}
            togglePlanetSelection={() =>
              togglePlanetSelection(planets[1].name, planets[1].thumbnail)
            }
          />
           <PlanetCard
            name={planets[2].name}
            description={planets[2].description}
            thumbnail={planets[2].thumbnail}
            isSelected={isPlanetInWishlist(planets[2].name)}
            togglePlanetSelection={() =>
              togglePlanetSelection(planets[2].name, planets[2].thumbnail)
            }
          />
           <PlanetCard
            name={planets[3].name}
            description={planets[3].description}
            thumbnail={planets[3].thumbnail}
            isSelected={isPlanetInWishlist(planets[3].name)}
            togglePlanetSelection={() =>
              togglePlanetSelection(planets[3].name, planets[3].thumbnail)
            }
            />
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

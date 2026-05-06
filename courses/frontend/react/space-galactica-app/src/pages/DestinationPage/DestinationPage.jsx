import { useState } from "react";
import PlanetCard from "../../components/PlanetCard/PlanetCard";  
import styles from "./DestinationPage.module.css";
import { AddWishlistItem } from "./AddWishlistItem";
import PlanetsWishlistItem from "./PlanetsWishlistItem";

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

   const isPlanetInWishlist = (planetName) => {
     return planetsWishlist.some((planet) => planet.name === planetName);
   };
 
  
  const addPlanetToWishlist = (name, thumbnail) => {
    setPlanetsWishlist([...planetsWishlist, { name: name, thumbnail: thumbnail }]);
  };
  
  const removePlanetFromWishlist = (name) => {
 const updatedList = planetsWishlist.filter(
    (planet) => planet.name !== name
  );
    setPlanetsWishlist(updatedList);    
  };
    
  const togglePlanetSelection = (name, thumbnail) => {
    if (isPlanetInWishlist(name)) {
      removePlanetFromWishlist(name);
    } else {
      addPlanetToWishlist(name, thumbnail);
    }
      
};
 

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
          
           {renderWishlistMessage()}
          

           {/* 🧑🏽‍🚀 Task - Week 3 */}
           {/* Use the AddWishlistItem component here. */}
           <div className={styles.wishlistContent}>
             <AddWishlistItem onAddWishlistItem={addPlanetToWishlist} />


             {/* 🧑🏽‍🚀 Task - Week 3
          <h3>Your current wishlist</h3>
          <div className={styles.wishlistList}>
            ...
            Use .map() to display the wishlist planets with the PlanetsWishlistItem component. 
          </div> 
          */}

             <div className={styles.currentWishlist}>
  <h3>Your current wishlist</h3>

  {numberOfPlanetsInWishlist === 0 ? (
               <div className={styles.emptyWishlist}>
                 <p>Your wishlist is empty.</p>
                 <p>Add a planet to start planning your next adventure.</p>
               </div>
             ) : (
               <div className={styles.wishlistList}>
                 {planetsWishlist.map((item) => (
                   <PlanetsWishlistItem
                     key={item.name}
                     name={item.name}
                     thumbnail={item.thumbnail}
                     onRemove={() => removePlanetFromWishlist(item.name)}
                   />
                 ))}
               </div>
             )}
           </div>
  </div>
         </section>
         <section className="card">
         
           <h2>Possible destinations</h2>
           <div className={styles.planetCardGrid}>
             {planets.map((planet) => (
  <PlanetCard
    key={planet.name}
    name={planet.name}
    description={planet.description}
    thumbnail={planet.thumbnail}
    isSelected={isPlanetInWishlist(planet.name)}
    togglePlanetSelection={() =>
      togglePlanetSelection(planet.name, planet.thumbnail)
    }
  />
))}
            
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

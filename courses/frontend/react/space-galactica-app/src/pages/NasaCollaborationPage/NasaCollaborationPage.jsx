import React, { useState, useEffect } from "react";
import styles from "./NasaCollaborationPage.module.css";

// Read "/app/nasa_collaboration/README.md" for more info about the API_KEY
// You need a proper API_KEY for the requests to work
const API_KEY = import.meta.env.VITE_NASA_API_KEY;

const NASA_URLs = {
  astronomyPicOfTheDay: `https://api.nasa.gov/planetary/apod?api_key=${API_KEY}&thumbs=true`,
  marsRoverPhoto: `https://images-api.nasa.gov/search?q=Mars%20rover&media_type=image&page=1&year_start=1920&year_end=2026`,
};

const RoverPhoto = ({ src, date, roverName }) => {
  return (
    <article className={styles.roverCard}>
      <img
        className={styles.nasaImage}
        src={src}
        alt={`Mars photo taken by ${roverName} on ${date}`}
      />
      <p className={styles.date}>Date: {date}</p>
      <h3 className={styles.mediaTitle}>{roverName}</h3>
    </article>
  );
};

export const NasaCollaboration = () => {
  const [dailyImg, setDailyImg] = useState({});
  const [roverPhoto, setRoverPhoto] = useState({});
  console.log(roverPhoto);

  useEffect(() => {
    // 🧑🏽‍🚀 Task - Week 3 Done
    // Fetch the extra data for NASA_URLs.astronomyPicOfTheDay and save it to the dailyImg state variable.
    const fetchPicOfTheDay = async () => {
      const response = await fetch(NASA_URLs.astronomyPicOfTheDay);
      const picOfTheDay = await response.json();
      console.log(picOfTheDay);
      setDailyImg(picOfTheDay);
    };
    fetchPicOfTheDay();

    const fetchRoverPhotos = async () => {
      const response = await fetch(NASA_URLs.marsRoverPhoto);
      const roverPhotoResponse = await response.json();

      console.log(roverPhotoResponse);

      setRoverPhoto(roverPhotoResponse);
    };

    fetchRoverPhotos();
  }, []);

  return (
    <div className="fullBGpicture">
      <main className="mainContent">
        <section className={styles.section}>
          <div className={styles.header}>
            <h1 className={styles.title}>COLLABORATION WITH NASA</h1>
          </div>
          <div className={styles.grid}>
            <article className={styles.card}>
              <p className={styles.number}>01</p>
              <h2 className={styles.cardTitle}>Astronomy Picture of the Day</h2>

              {/* 🧑🏽‍🚀 Task - Week 3 Done*/}
              {/* After fetching data from the NASA_URLs.astronomyPicOfTheDay url, display the returned data here. */}
              {/* You should display the title, explanation, and the image using the url from the response */}
              {dailyImg?.url ? (
                <>
                  <h3 className={styles.mediaTitle}>{dailyImg.title}</h3>
                  <p className={styles.description}>{dailyImg.explanation}</p>

                  {dailyImg.media_type === "image" ? (
                    <img
                      className={styles.nasaImage}
                      src={dailyImg.url}
                      alt={dailyImg.title}
                    />
                  ) : (
                    <img
                      className={styles.nasaImage}
                      src={dailyImg.thumbnail_url}
                      alt={dailyImg.title}
                    />
                  )}
                </>
              ) : (
                <p>Loading astronomy picture...</p>
              )}
            </article>

            <article className={styles.card}>
              <p className={styles.number}>02</p>
              <h2 className={styles.cardTitle}>Mars Rover Photos</h2>

              {/* 🧑🏽‍🚀 Task - Week 3 Done*/}
              {/* Iterate over the roverPhoto?.collection array and display all the pictures. */}
              <div className={styles.roverGrid}>
                {roverPhoto?.collection?.items?.length ? (
                  roverPhoto.collection.items
                    .slice(0, 3)
                    .map((item) => (
                      <RoverPhoto
                        key={item.data[0].nasa_id}
                        src={item.links?.[0]?.href}
                        date={item.data[0].date_created}
                        roverName={item.data[0].title}
                      />
                    ))
                ) : (
                  <p>Loading rover photos...</p>
                )}
              </div>
            </article>
          </div>
        </section>
      </main>
    </div>
  );
};
export default NasaCollaboration;

import React, { useState, useEffect } from "react";
import styles from "./NasaCollaborationPage.module.css";

// Read "/app/nasa_collaboration/README.md" for more info about the API_KEY
// You need a proper API_KEY for the requests to work
const API_KEY = "HKCcsj7cwK0ep0BvPzP9XspmZfsz69BvIw84fcEz";

const NASA_URLs = {
  astronomyPicOfTheDay: `https://api.nasa.gov/planetary/apod?api_key=${API_KEY}`,
  marsRoverPhoto: `https://images-api.nasa.gov/search?q=Mars%20rover&media_type=image&page=1&year_start=1920&year_end=2026`,
};

const RoverPhoto = ({ src, date, roverName }) => {
  return (
    <article>
      <p>Date: {date}</p>
      <p>Rover: {roverName}</p>
      <img
        className={styles.nasaPicOfTheDayImg}
        src={src}
        alt={`Mars photo taken by ${roverName} on ${date}`}
      />
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
        <h1>Collaboration with NASA</h1>
        <section className="card">
          <h2>Astronomy Picture of the day</h2>
          {/* 🧑🏽‍🚀 Task - Week 3 Done*/}
          {/* After fetching data from the NASA_URLs.astronomyPicOfTheDay url, display the returned data here. */}
          {/* You should display the title, explanation, and the image using the url from the response */}
          {dailyImg?.url ? (
            <>
              <h3>{dailyImg.title}</h3>
              <p>{dailyImg.explanation}</p>
              {dailyImg.media_type === "image" ? (
                <img
                  className={styles.nasaPicOfTheDayImg}
                  src={dailyImg.url}
                  alt={dailyImg.title}
                />
              ) : (
                <a href={dailyImg.url} target="_blank" rel="noreferrer">
                  Open NASA media
                </a>
              )}
            </>
          ) : (
            <p>Loading astronomy picture...</p>
          )}
        </section>
        <section className="card">
          <h2>Rover Photos</h2>
          {/* 🧑🏽‍🚀 Task - Week 3 Done*/}
          {/* Iterate over the roverPhoto?.collection array and display all the pictures. */}
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
        </section>
      </main>
    </div>
  );
};

export default NasaCollaboration;

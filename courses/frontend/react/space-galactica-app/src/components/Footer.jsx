import { useLocation, Link } from "react-router-dom";
import styles from "./Footer.module.css";

export const Footer = () => {
  const { pathname } = useLocation();

  const pages = [
    {
      title: "ABOUT US",
      link: "/about_us",
    },
    {
      title: "DESTINATION",
      link: "/destination",
    },
    {
      title: "NASA COLLABORATION",
      link: "/nasa_collaboration",
    },
  ];

  const socialMediaItemLinks = [
    {
      url: "https://facebook.com",
      title: "Facebook",
      icon: "/socialMedia/facebook.svg",
    },
    {
      url: "https://tiktok.com",
      title: "Tiktok",
      icon: "/socialMedia/tiktok.svg",
    },
    {
      url: "https://instagram.com",
      title: "Instagram",
      icon: "/socialMedia/instagram.svg",
    },
    {
      url: "https://www.linkedin.com/",
      title: "LinkedIn",
      icon: "/socialMedia/linkedin.svg",
    },
    {
      url: "https://google.com",
      title: "On the streets at night",
      icon: "/socialMedia/google.svg",
    },
  ];

  const SocialMediaItem = ({ url, title, icon }) => {
    return (
      <li>
        <a
          href={url}
          target="_blank"
          rel="noreferrer"
          className={styles.socialLink}
        >
          <img src={icon} alt={title} className={styles.socialMediaIcon} />
        </a>
      </li>
    );
  };

  return (
    <footer className={pathname !== "/" ? styles.footer : styles.hidden}>
      <div className={styles.footerDescription}>
        <h3>Galactica</h3>
        <p>
          Explore the universe and beyond. Your journey to the stars starts
          here.
        </p>
        <p>&copy; 2024 Galactica. All rights reserved.</p>
      </div>
      {/* 🧑🏽‍🚀 Task - Week 2 */}
      {/* Create a new list for the Pages. */}
      {/* We need to use the <Link /> component here. */}
      <div className={styles.pages}>
        <h3>Pages</h3>
        <ul>
          <li>
            {" "}
            <Link to={pages[0].link}>{pages[0].title}</Link>{" "}
          </li>
          <li>
            {" "}
            <Link to={pages[1].link}>{pages[1].title}</Link>{" "}
          </li>
          <li>
            {" "}
            <Link to={pages[2].link}>{pages[2].title}</Link>{" "}
          </li>
        </ul>
      </div>

      {/* 🧑🏽‍🚀 Task - Week 1 - Done */}
      {/* Add a new list item for LINKEDIN */}

      <div className={styles.footerLinks}>
        <h3>Follow us</h3>
        <ul className={styles.footerList}>
          <SocialMediaItem
            url={socialMediaItemLinks[0].url}
            title={socialMediaItemLinks[0].title}
            icon={socialMediaItemLinks[0].icon}
          />
          <SocialMediaItem
            url={socialMediaItemLinks[1].url}
            title={socialMediaItemLinks[1].title}
            icon={socialMediaItemLinks[1].icon}
          />

          <SocialMediaItem
            url={socialMediaItemLinks[2].url}
            title={socialMediaItemLinks[2].title}
            icon={socialMediaItemLinks[2].icon}
          />
          <SocialMediaItem
            url={socialMediaItemLinks[3].url}
            title={socialMediaItemLinks[3].title}
            icon={socialMediaItemLinks[3].icon}
          />
          <SocialMediaItem
            url={socialMediaItemLinks[4].url}
            title={socialMediaItemLinks[4].title}
            icon={socialMediaItemLinks[4].icon}
          />

          {/* 🧑🏽‍🚀 Task - Week 2 */}
          {/* Create a <SocialMediaItem /> component and replace all of the list items! */}
          {/* SocialMediaItem should accept the following props: url, title, icon. */}
          {/* For the icons, you can download 1-2 social media icons for testing and put it in the /public/socialmedia/ folder. */}
        </ul>
      </div>
    </footer>
  );
};

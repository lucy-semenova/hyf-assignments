import { useLocation, Link } from "react-router-dom";
import styles from "./Footer.module.css";
import { navigationItems } from "../data/navigation";

export const Footer = () => {
  const { pathname } = useLocation();

  const socialMediaItemLinks = [
    {
      url: "https://facebook.com",
      title: "Facebook",
      icon: "/socialMedia/facebook.png",
    },
    {
      url: "https://tiktok.com",
      title: "Tiktok",
      icon: "/socialMedia/tiktok.png",
    },
    {
      url: "https://instagram.com",
      title: "Instagram",
      icon: "/socialMedia/instagram.png",
    },
    {
      url: "https://www.linkedin.com/",
      title: "LinkedIn",
      icon: "/socialMedia/linkedin.png",
    },
    {
      url: "https://google.com",
      title: "On the streets at night",
      icon: "/socialMedia/google.png",
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
          <span>{title}</span>
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

      <div className={styles.pages}>
        <h3>Pages</h3>

        <ul>
          {navigationItems.map((page) => (
            <li key={page.link}>
              <Link to={page.link}>{page.title}</Link>
            </li>
          ))}
        </ul>
      </div>

      <div className={styles.footerLinks}>
        <h3>Follow us</h3>

        <ul className={styles.footerList}>
          {socialMediaItemLinks.map((link) => (
            <SocialMediaItem
              key={link.url}
              url={link.url}
              title={link.title}
              icon={link.icon}
            />
          ))}
        </ul>
      </div>
    </footer>
  );
};
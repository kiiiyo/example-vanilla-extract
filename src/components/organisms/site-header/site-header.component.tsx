import * as styles from "./styles.css";

export const SiteHeader = () => {
  return (
    <header className={styles.headerContainer}>
      <div className={styles.siteBrand}>
        <div className={styles.siteBrandIcon}>🌲</div>
        <div className={styles.siteBrandName}>SiteName</div>
      </div>
    </header>
  );
};

import * as styles from "./styles.css";

export const SiteFooter = () => {
  return (
    <footer className={styles.footer}>
      <nav role="navigation" className={styles.container}>
        <div className={styles.footerGrid}>
          <div className={styles.footerBrand}>
            <div className={styles.footerBrandIcon}>🌲</div>
            <div className={styles.footerBrandName}>SiteName</div>
          </div>

          <div className={styles.footerGroup}>
            <h2 className={styles.footerHeader}>Headline</h2>
            <ul className={styles.footerList}>
              <li className={styles.footerListItem}>
                <a className={styles.footerListAnker}>Link Text</a>
              </li>
              <li className={styles.footerListItem}>
                <a className={styles.footerListAnker}>Link Text</a>
              </li>
              <li className={styles.footerListItem}>
                <a className={styles.footerListAnker}>Link Text</a>
              </li>
            </ul>
          </div>
          <div className={styles.footerGroup}>
            <h2 className={styles.footerHeader}>Headline</h2>
            <ul className={styles.footerList}>
              <li className={styles.footerListItem}>
                <a className={styles.footerListAnker}>Link Text</a>
              </li>
              <li className={styles.footerListItem}>
                <a className={styles.footerListAnker}>Link Text</a>
              </li>
              <li className={styles.footerListItem}>
                <a className={styles.footerListAnker}>Link Text</a>
              </li>
            </ul>
          </div>
          <div className={styles.footerGroup}>
            <h2 className={styles.footerHeader}>Headline</h2>
            <ul className={styles.footerList}>
              <li className={styles.footerListItem}>
                <a className={styles.footerListAnker}>Link Text</a>
              </li>
              <li className={styles.footerListItem}>
                <a className={styles.footerListAnker}>Link Text</a>
              </li>
              <li className={styles.footerListItem}>
                <a className={styles.footerListAnker}>Link Text</a>
              </li>
            </ul>
          </div>
          <div className={styles.footerGroup}>
            <h2 className={styles.footerHeader}>Headline</h2>
            <ul className={styles.footerList}>
              <li className={styles.footerListItem}>
                <a className={styles.footerListAnker}>Link Text</a>
              </li>
              <li className={styles.footerListItem}>
                <a className={styles.footerListAnker}>Link Text</a>
              </li>
              <li className={styles.footerListItem}>
                <a className={styles.footerListAnker}>Link Text</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </footer>
  );
};

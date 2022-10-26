import * as styles from "./styles.css";

export const SiteFooter = () => {
  return (
    <footer className={styles.root}>
      <div className={styles.container}>
        <nav role="navigation" className={styles.inner}>
          <div className={styles.siteContainer}>
            <div className={styles.brandGroup}>
              <div className={styles.brandIcon}>🌲</div>
              <div className={styles.brandName}>Forest UI</div>
            </div>
            <p className={styles.description}>
              TextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextText
            </p>
            <div className={styles.snsGroup}>
              <button className={styles.snsItem}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                  role="img"
                  className={styles.snsIcon}
                  width="1em"
                  height="1em"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="currentColor"
                    d="M17 3.5a.5.5 0 0 0-.5-.5H14a4.77 4.77 0 0 0-5 4.5v2.7H6.5a.5.5 0 0 0-.5.5v2.6a.5.5 0 0 0 .5.5H9v6.7a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5v-6.7h2.62a.5.5 0 0 0 .49-.37l.72-2.6a.5.5 0 0 0-.48-.63H13V7.5a1 1 0 0 1 1-.9h2.5a.5.5 0 0 0 .5-.5Z"
                  ></path>
                </svg>
              </button>
              <button className={styles.snsItem}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                  role="img"
                  className={styles.snsIcon}
                  width="1em"
                  height="1em"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="currentColor"
                    d="M8.08 20A11.07 11.07 0 0 0 19.52 9A8.09 8.09 0 0 0 21 6.16a.44.44 0 0 0-.62-.51a1.88 1.88 0 0 1-2.16-.38a3.89 3.89 0 0 0-5.58-.17A4.13 4.13 0 0 0 11.49 9C8.14 9.2 5.84 7.61 4 5.43a.43.43 0 0 0-.75.24a9.68 9.68 0 0 0 4.6 10.05A6.73 6.73 0 0 1 3.38 18a.45.45 0 0 0-.14.84A11 11 0 0 0 8.08 20"
                  ></path>
                </svg>
              </button>
            </div>
          </div>
          <div className={styles.navigationContainer}>
            <div className={styles.navigationInner}>
              <div className={styles.navigationGroup}>
                <h2 className={styles.navigationTitle}>About</h2>
                <a className={styles.navigationLink}>About us</a>
                <a className={styles.navigationLink}>Contact us</a>
                <a className={styles.navigationLink}>FAQs</a>
              </div>
              <div className={styles.navigationGroup}>
                <h2 className={styles.navigationTitle}>Legal</h2>
                <a className={styles.navigationLink}>Terms and Condition</a>
                <a className={styles.navigationLink}>Privacy Policy</a>
              </div>
              <div className={styles.navigationGroup}>
                <h2 className={styles.navigationTitle}>Links</h2>
                <a className={styles.navigationLink}>Twitter</a>
                <a className={styles.navigationLink}>GitHub</a>
                <a className={styles.navigationLink}>Feed</a>
              </div>
            </div>
          </div>
        </nav>
        <section>
          <div className={styles.copyright}>
            <span>Copyright © 2022 All rights reserved.</span>
          </div>
        </section>
      </div>
    </footer>
  );
};

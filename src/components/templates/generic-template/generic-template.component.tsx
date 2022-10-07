import * as styles from "./styles.css";

export type Props = {
  header?: React.ReactNode;
  footer?: React.ReactNode;
  children?: React.ReactNode;
};

export const GenericTemplate = ({ header, footer, children }: Props) => {
  return (
    <div className={styles.pageContainer}>
      <div className={styles.headerContainer}>{header}</div>
      <main className={styles.mainContainer}>{children}</main>
      <div className={styles.footerContainer}>{footer}</div>
    </div>
  );
};

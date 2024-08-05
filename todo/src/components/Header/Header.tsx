import styles from "./Header.module.css";

export const Header: React.FC = () => {
  return (
    <header className={styles.header}>
      <h1 className={styles.heading}>Create Your First Task</h1>
    </header>
  );
};

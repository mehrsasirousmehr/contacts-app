import styles from "./Header.module.css";

function Header() {
    return (
        <div className={styles.container}>
            <h1>Contact App</h1>
            <p>
                <a href="https://www.linkedin.com/in/mehrsasirousmehr/">Linkedin</a> | Mehrsa Sirousmehr
            </p>
        </div>
    );
}

export default Header;

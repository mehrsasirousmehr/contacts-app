import { useState } from "react";
import styles from "./Contacts.module.css";

function Contacts() {
    const [contact, setContact] = useState({
        name: "",
        lastName: "",
        email: "",
        phone: "",
    });

    const changeHandler = (event) => {
        const { name, value } = event.target;

        setContact((contact) => ({ ...contact, [name]: value }));
    };

    return (
        <div className={styles.container}>
            <div className={styles.form}>
                <input type="text" placeholder="Name" name="name" value={contact.name} onChange={changeHandler} />
                <input type="text" placeholder="Last Name" name="lastName" value={contact.lastName} onChange={changeHandler} />
                <input type="email" placeholder="Email" name="email" value={contact.email} onChange={changeHandler} />
                <input type="number" placeholder="Phone" name="phone" value={contact.phone} onChange={changeHandler} />
                <button onClick={addHandler}>Add contact</button>
            </div>
        </div>
    );
}

export default Contacts;

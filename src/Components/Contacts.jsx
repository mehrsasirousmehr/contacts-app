import { useState } from "react";
import styles from "./Contacts.module.css";

function Contacts() {
    const [alert, setAlert] = useState("");
    const [contacts, setContacts] = useState([]);
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

    // add contacts
    const addHandler = () => {
        if (contact.name && contact.lastName && contact.email && contact.phone) {
            setContacts((contacts) => [...contacts, contact]);
            setContact({
                name: "",
                lastName: "",
                email: "",
                phone: "",
            });
            setAlert("");
        } else {
            setAlert("please fill all the inputs");
        }
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
            <div className={styles.alert}>{alert ? <p>{alert}</p> : ""}</div>
        </div>
    );
}

export default Contacts;

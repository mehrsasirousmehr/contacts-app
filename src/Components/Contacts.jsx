import { useState } from "react";
import { v4 } from "uuid";
import styles from "./Contacts.module.css";

import inputs from "../constants/inputs";

import ContactsList from "./ContactsList";

function Contacts() {
    const [alert, setAlert] = useState("");
    const [contacts, setContacts] = useState([]);
    const [contact, setContact] = useState({
        id: "",
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
            const newContact = { ...contact, id: v4() };
            setContacts((contacts) => [...contacts, newContact]);
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
                {inputs.map((input, index) => (
                    <input key={index} type={input.type} name={input.name} placeholder={input.placeholder} value={contact[input.name]} onChange={changeHandler} />
                ))}

                <button onClick={addHandler}>Add contact</button>
            </div>
            <div className={styles.alert}>{alert ? <p>{alert}</p> : ""}</div>
            <ContactsList contacts={contacts} />
        </div>
    );
}

export default Contacts;

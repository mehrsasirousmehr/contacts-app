function ContactsList({ contacts }) {
    return (
        <div>
            <h3>Contacts List</h3>
            {contacts.length ? (
                <ul>
                    {contacts.map((contact) => (
                        <li key={contact.id}>
                            <p>
                                {contact.name} {contact.lastName}
                            </p>
                            <p>
                                <span>📧</span> {contact.email}
                            </p>
                            <p>
                                <span>📞</span> {contact.phone}
                            </p>
                            <button>🗑</button>
                        </li>
                    ))}
                </ul>
            ) : (
                <p>No contacts yet!</p>
            )}
        </div>
    );
}

export default ContactsList;

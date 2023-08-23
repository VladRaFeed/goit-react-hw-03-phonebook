import PropTypes from 'prop-types';
import css from './ContactsList.module.css'

export const ContactsList = ({ contacts, onDeleteContact }) => {
    if (contacts.length < 1) {
        return (
            <p className={css.contacts_title}>Sorry, there are no contacts in your list</p>
        )
    }

    return (
        <section className={css.contacts_section}>
            <h2 className={css.contacts_title}>Contacts</h2>
            <ul className={css.contacts_list}>
                {contacts.map(contact => (
                    <li key={contact.id} className={css.contact_item}>
                        <p className={css.contact_name}>{contact.name}: {contact.number}</p>
                        <button type="button" onClick={() => {
                            onDeleteContact(contact.id);
                        }} className={css.contact_delete}>Delete</button>
                    </li>
                ))}
            </ul>
        </section>
    )

}

ContactsList.propTypes = {
    contacts: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired,
            number: PropTypes.string.isRequired,
        }),
    ),
}
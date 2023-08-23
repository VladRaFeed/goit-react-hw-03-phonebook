import React from 'react'
import css from './Form.module.css'


class Form extends React.Component {

    state = {
        name: '',
        number: ''
    }

    handleChange = e => {
        const { name, value } = e.target;
        this.setState({ [name]: value });
    };

    handleSubmit = e => {
        e.preventDefault();
        this.props.onSubmit(this.state)
        this.setState({ name: '', number: '' });
    };

    render() {
        return (
        <section className={css.form_section}>
            <h1 className={css.form_title}>Phonebook</h1>
            <form className={css.main_form} onSubmit={this.handleSubmit}>
                <label className={css.form_label}>Name</label>
                    <input
                        className={css.form_input}
                    type="text"
                        name="name"
                        value={this.state.name}
                        pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$" 
                        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                        placeholder='Contact-name'
                        required
                    onChange={this.handleChange}
                    />
                    <label className={css.form_label}>Phone number</label>
                    <input
                        className={css.form_input}
                        type="tel"
                        name="number"
                        value={this.state.number}
                        pattern="\+?\d{1,4}?[ .\-\s]?\(?\d{1,3}?\)?[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,9}"
                        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                        placeholder='Phone-number'
                        required
                    onChange={this.handleChange}
                    />
                <button type="submit" className={css.from_btn}>Add contact</button>
            </form>
        </section>
        )
    }
}

export default Form
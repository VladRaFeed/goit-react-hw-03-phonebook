import PropTypes from 'prop-types';
import css from './Filter.module.css'

export const Filter = ({ value, onChange }) => {
    return (
        <div className={css.filter_wrapper}>
        <label className={css.filter_label}>Filter</label>
        <input type="text" value={value} onChange={onChange} className={css.filter_input} placeholder='example: Rosie'/>
        </div>
    )
}

Filter.propTypes = {
    value: PropTypes.string.isRequired,
    onChange:PropTypes.func,
}
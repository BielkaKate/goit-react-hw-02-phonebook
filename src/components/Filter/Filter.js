import React from 'react';
import PropTypes from 'prop-types';
import s from './Filter.module.css';

const Filter = ({ value, handleInputChange }) => (
  <label>
    Find contacts by name
    <input
      className={s.input}
      type="text"
      value={value}
      onChange={handleInputChange}
    />
  </label>
);

Filter.propTypes = {
  value: PropTypes.string,
  handleInputChange: PropTypes.func,
};

export default Filter;

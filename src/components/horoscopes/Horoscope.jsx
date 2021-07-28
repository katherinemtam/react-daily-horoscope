import React from 'react';
import PropTypes from 'prop-types';
import './Horoscope.css';
import { Link } from 'react-router-dom';

const Horoscope = ({ sign, dateRange, description }) => (
  <div>
    <h1>{sign}</h1>
    <h3>{dateRange}</h3>
    <p>{description}</p>
    <Link to={`/${sign}`}>Click for more!</Link>
  </div>
);

Horoscope.propTypes = {
  sign: PropTypes.string,
  dateRange: PropTypes.string,
  description: PropTypes.string,
};

export default Horoscope;

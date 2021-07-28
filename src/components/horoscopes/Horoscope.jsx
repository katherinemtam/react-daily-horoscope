import React from 'react';
import PropTypes from 'prop-types';

const Horoscope = ({ sign, dateRange, description }) => (
  <>
    <h1>{sign}</h1>
    <h3>{dateRange}</h3>
    <p>{description}</p>
  </>
);

Horoscope.propTypes = {
  sign: PropTypes.string,
  dateRange: PropTypes.string,
  description: PropTypes.string,
};

export default Horoscope;

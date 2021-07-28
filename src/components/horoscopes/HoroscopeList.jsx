import React from 'react';
import PropTypes from 'prop-types';
import Horoscope from './Horoscope';
import './HoroscopeList.css';

const HoroscopeList = ({ horoscopes }) => {
  console.log(horoscopes);
  const horoscopeElements = horoscopes.map(horoscope => (
    <ul key={horoscope.description} >
      <Horoscope
        sign={horoscope.sign}
        dateRange={horoscope.date_range}
        description={horoscope.description}
      />
    </ul>
  ));

  return <ul>{horoscopeElements}</ul>;
};

HoroscopeList.propTypes = {
  horoscopes: PropTypes.arrayOf(
    PropTypes.shape({
      sign: PropTypes.string.isRequired,
      dateRange: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default HoroscopeList;

import React from 'react';
import PropTypes from 'prop-types';
import Horoscope from './Horoscope';

const HoroscopeList = ({ horoscopes }) => {
  const horoscopeElements = horoscopes.map(horoscope => (
    <li key={horoscope.description}>
      <Horoscope
        compatibility={horoscope.compatibility}
        luckyNumber={horoscope.lucky_number}
        color={horoscope.color}
        mood={horoscope.mood} 
      />
    </li>
  ));

  return <ul>{horoscopeElements}</ul>;
};

HoroscopeList.propTypes = {
  horoscopes: PropTypes.arrayOf(
    PropTypes.shape({
      compatibility: PropTypes.string.isRequired,
      lucky_number: PropTypes.string.isRequired,
      color: PropTypes.string.isRequired,
      mood: PropTypes.string.isRequired
    })
  ).isRequired,
};

export default HoroscopeList;

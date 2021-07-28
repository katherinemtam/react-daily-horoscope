import React from 'react';
import PropTypes from 'prop-types';
import Horoscope from './Horoscope';

const HoroscopeList = ({ horoscopes }) => {
  console.log(horoscopes);
  const horoscopeElements = horoscopes.map(horoscope => (
    <li key={horoscope.description}>
      <Horoscope
        sign={horoscope.sign}
        dateRange={horoscope.date_range}
        description={horoscope.description}
      />
    </li>
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

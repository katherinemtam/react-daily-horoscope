import React from 'react';
import PropTypes from 'prop-types';

const Horoscope = ({ compatibility, luckyNumber, color, mood }) => { 
  return (<>
    <p>Compatibility: {compatibility}</p>
    <p>Lucky Number: {luckyNumber}</p>
    <p>Color: {color}</p>
    <p>Mood: {mood}</p>
  </>);
};

Horoscope.propTypes = {
  compatibility: PropTypes.string,
  luckyNumber: PropTypes.string,
  color: PropTypes.string,
  mood: PropTypes.string,
};

export default Horoscope;

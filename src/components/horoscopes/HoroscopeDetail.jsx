import React from 'react';
import PropTypes from 'prop-types';

const HoroscopeDetail = ({ sign, dateRange, description, compatibility, mood, color, luckyNumber, luckyTime }) => (
  <>
    <h1>{sign}</h1>
    <h3>{dateRange}</h3>
    
    <p>Compatibility: {compatibility}</p>
    <p>Lucky Number: {luckyNumber}</p>
    <p>Lucky Time: {luckyTime} </p>
    <p>Color: {color}</p>
    <p>Mood: {mood}</p>
    <p>Description: {description}</p>
  </>
);

HoroscopeDetail.propTypes = {
  sign: PropTypes.string,
  dateRange: PropTypes.string,
  description: PropTypes.string,
  compatibility: PropTypes.string,
  mood: PropTypes.string,
  color: PropTypes.string,
  luckyNumber: PropTypes.string,
  luckyTime: PropTypes.string
};

export default HoroscopeDetail;

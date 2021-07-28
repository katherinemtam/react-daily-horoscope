import React from 'react';
import PropTypes from 'prop-types';

const HoroscopeDetail = ({ sign, dataRange, description, compatibility, mood, color, luckyNumber, luckyTime }) => (
  <>
    <h1>{sign}'s Detail Page</h1>
    <h3>{dataRange}</h3>
    
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
  dataRange: PropTypes.string,
  description: PropTypes.string,
  compatibility: PropTypes.string,
  mood: PropTypes.string,
  color: PropTypes.string,
  luckyNumber: PropTypes.string,
  luckyTime: PropTypes.string
};

import React, { Component } from 'react';
import HoroscopeList from '../components/horoscopes/HoroscopeList';
import { fetchHoroscopes } from '../services/horoscopes.js';
import './AllHoroscopes.css';

export default class AllHoroscopes extends Component {
  state = {
    horoscopes: [],
    loading: true,
  };

  async componentDidMount() {
    const horoscopes = await fetchHoroscopes();
    this.setState({ horoscopes, loading: false });
  }

  render() {
    const { horoscopes, loading } = this.state;

    if(loading) <h1>Loading...</h1>;
   
    return (
      <>
        <h1>Today's Horoscope!</h1>
        <HoroscopeList horoscopes={horoscopes}/>;  
      </>
    );
  } 
}

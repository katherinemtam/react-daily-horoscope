import React, { Component } from 'react';
import HoroscopeList from '../components/horoscopes/HoroscopeList';
import { fetchHoroscopes } from '../services/horoscopes.js';
import './AllHoroscopes.css';

export default class AllHoroscopes extends Component {
  state = {
    horoscopes: [],
    loading: true,
    datetime: ''
  };

  async componentDidMount() {
    const horoscopes = await fetchHoroscopes();
    const currentdate = new Date();
    const datetime = 'Last Sync: ' + (currentdate.getMonth() + 1) + '/'
      + currentdate.getDate() + '/'
      + currentdate.getFullYear() + ' @ '
      + currentdate.getHours() + ':'
      + currentdate.getMinutes() + ':'
      + currentdate.getSeconds();
    this.setState({ horoscopes, loading: false, datetime });
  }

  render() {
    const { horoscopes, loading, datetime } = this.state;

    if(loading) return <h1>Loading...</h1>;
   
    return (
      <>
        <h1>Today's Horoscope!</h1>
        <h2>{datetime}</h2>
        <HoroscopeList horoscopes={horoscopes}/>;  
      </>
    );
  } 
}

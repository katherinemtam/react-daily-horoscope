import React, { Component } from 'react';
import HoroscopeDetail from '../components/horoscopes/HoroscopeDetail';
import { getHoroscope } from '../services/horoscopes';
import { Link } from 'react-router-dom';

export default class DetailPage extends Component {
  state = {
    horoscope: {},
    loading: true,
  }

  async ComponentDidMount() {
    const { match } = this.props;
    try {
      console.log('here!', match.params.sign);
      const horoscope = await getHoroscope(match.params.sign);
      this.setState({ horoscope });
    }
    catch(err) {
      console.log(err.message);
    }
    finally {
      this.setState({ loading: false });
    }
  }

  render() {
    const { horoscope, loading } = this.state;
    
    if(loading) <h1>Loading...</h1>;
    if(!horoscope) return <h1>Oops! Something went wrong</h1>;

    return (
      <div className="Wrapper">
        <HoroscopeDetail 
          sign={horoscope.sign}
          dateRange={horoscope.date_range}
          compatibility={horoscope.compatibility}
          luckyNumber={horoscope.lucky_number}
          luckyTime={horoscope.lucky_time}
          color={horoscope.color}
          mood={horoscope.mood}
          description={horoscope.description}
        />

        <Link to={'/'}>
            Return to All Horoscopes
        </Link>

      </div>
    );
  }
}


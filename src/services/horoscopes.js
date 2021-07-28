export const fetchHoroscopes = async () => {

  const signs = ['Aries', 'Taurus', 'Gemini', 'Cancer', 'Leo', 'Virgo', 'Libra', 'Scorpio', 'Sagittarius', 'Capricorn', 'Aquarius', 'Pisces'];

  const getFetch = async sign => { 
    const res = await fetch(`https://aztro.sameerkumar.website/?sign=${sign}&day=today`, { method: 'POST' });
    return res.json();
  };

  const horoscope = await Promise.all(
    signs.map(async sign => {
      const fetchedInfo = await getFetch(sign);
      return { sign, ...fetchedInfo };
    })
  );

  return horoscope;
};

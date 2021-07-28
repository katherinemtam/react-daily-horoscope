export const fetchHoroscopes = async () => {

  const signs = ['aries', 'taurus', 'gemini', 'cancer', 'leo', 'virgo', 'libra', 'scorpio', 'sagittarius', 'capricorn', 'aquarius', 'pisces'];

  const getFetch = async sign => { 
    const res = await fetch(`https://aztro.sameerkumar.website/?sign=${sign}&day=today`, { method: 'POST' });
    return res.json();
  };

  const horoscope = await Promise.all(signs.map(async sign => await getFetch(sign)));

  return horoscope;
};

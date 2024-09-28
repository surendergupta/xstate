import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [country, setCountry] = useState([]);
  const [state, setState] = useState([]);
  const [city, setCity] = useState([]);
  
  const [countryName, setCountryName] = useState('');
  const [stateName, setStateName] = useState('');
  const [cityName, setCityName] = useState('');
  
  const [message, setMessage] = useState('');
  
  const base_endpoint = 'https://crio-location-selector.onrender.com';
  
  useEffect(() => {
    const getCountry = () => {
      fetch(`${base_endpoint}/countries`)
        .then((res) => res.json())
        .then((data) => setCountry(data))
        .catch((err) => setMessage(err.message))
      };
      getCountry();
     
  }, []);
  
  
    useEffect(() => {
      if(countryName){
        setState([]);
        setCity([]);
        setStateName('');
        setCityName('');

        const getState = () => {
          fetch(`${base_endpoint}/country=${countryName}/states`)
            .then((res) => res.json())
            .then((data) => setState(data))
            .catch((err) => setMessage(err.message))
        };
        getState();
      }
    }, [countryName])

    useEffect(() => {
      if(countryName && stateName){
        setCity([]);
        setCityName('');
      
        const getCity = () => {
          fetch(`${base_endpoint}/country=${countryName}/state=${stateName}/cities`)
            .then((res) => res.json())
            .then((data) => setCity(data))
            .catch((err) => setMessage(err.message))
        };
        getCity();
      }
    }, [countryName, stateName])

    console.log(message);
  
  return (
    <div className="App">
      <h1>Select Location</h1>
      <div className='location'>
        <select 
          value={countryName} 
          onChange={(e) => setCountryName(e.target.value)}
          >
          <option >Select Country</option>
          {country.map((item, c) => (
            <option key={c}>{item}</option>
          ))}
        </select>
        <select 
          value={stateName} 
          onChange={(e) => setStateName(e.target.value)} 
          disabled={!countryName}
          >
          <option >Select State</option>
          {state && state.map((item, s) => (
            <option key={s}>{item}</option>
          ))}
        </select>
        <select 
          value={cityName} 
          onChange={(e) => setCityName(e.target.value)} 
          disabled={!stateName}
          >
          <option >Select City</option>
          {city.length > 0 && city.map((item, c) => (
            <option key={c}>{item}</option>
          ))}
        </select>
        </div>
        { cityName && stateName && countryName ? 
        <div className='message'>You selected <span className='city'>{cityName}</span>, <span className='state'>{stateName}, {countryName}</span></div> : null}
    </div>
  );
}

export default App;

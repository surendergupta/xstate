import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [country, setCountry] = useState([]);
  const [state, setState] = useState([]);
  const [city, setCity] = useState([]);
  
  const [countryName, setCountryName] = useState("");
  const [stateName, setStateName] = useState("");
  const [cityName, setCityName] = useState("");
  
  const [message, setMessage] = useState("");
  
  const base_endpoint = 'https://crio-location-selector.onrender.com';
  
  useEffect(() => {
    const getCountry = async() => {
      try {
        const response = await fetch(`${base_endpoint}/countries`);
        const data = await response.json();
        setState([]);
        setCity([]);
        setStateName("");
        setCityName("");
        setCountry(data);
      } catch (error) {
        setMessage('Failed to fetch countries');
      }
    };
    getCountry();     
  }, []);
  
  
    useEffect(() => {
      const getState = async() => {
        if(countryName){
          setState([]);
          setCity([]);
          setStateName("");
          setCityName("");
        }
        if(countryName.length > 3){
          try {
            const response = await fetch(`${base_endpoint}/country=${countryName}/states`);
            const data = await response.json();
            setState(data);
          } catch (error) {
            setMessage('Failed to fetch states');
          }
        }
      };
      getState();
    }, [countryName])

    useEffect(() => {
      const getCity = async () => {
        if(stateName)
        {
          setCity([]);
          setCityName("");
        }
        if(stateName.length > 2) {
          try {
            const response = await fetch(`${base_endpoint}/country=${countryName}/state=${stateName}/cities`);
            const data = await response.json();
            setCity(data);
          } catch (error) {
            setMessage('Failed to fetch cities');
          }
        }
      };
      getCity();
    }, [countryName, stateName])
  
  return (
    <div className="App">
      <h1>Select Location</h1>
      {message && <p className="error">{message}</p>}
      <div className='location'>
        <select 
          value={countryName} 
          onChange={(e) => setCountryName(e.target.value)}
          >
          <option value="">Select Country</option>
          {country.map((item, index) => (
            <option key={index} value={item}>
              {item}
            </option>
          ))}
        </select>
        <select 
          value={stateName} 
          onChange={(e) => setStateName(e.target.value)} 
          disabled={!countryName}
          >
          <option value="">Select State</option>
          {state.length > 0 && state.map((item, index) => (
            <option key={index} value={item}>
              {item}
            </option>
          ))}
        </select>
        <select 
          value={cityName} 
          onChange={(e) => setCityName(e.target.value)} 
          disabled={!stateName}
          >
          <option value="">Select City</option>
          {city.length > 0 && city.map((item, index) => (
            <option key={index} value={item}>
              {item}
            </option>
          ))}
        </select>
        </div>
        {cityName && stateName && countryName && (
          <div className="message">
            You selected <span className="city">{cityName}</span>,{' '}
            <span className="state">
              {stateName}, {countryName}
            </span>
          </div>
        )}
    </div>
  );
}

export default App;

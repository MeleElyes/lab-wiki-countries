import './App.css';
import NavBar from './Component/Navbar';
import CountriesList from './Component/CountriesList';
import CountryDetails from './Component/CountryDetails';
import { Routes, Route } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';
import CountriesLoading from './asset/CountriesLoading.png';

const App = () => {
  const [countries, setCountries] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchData = async () => {
    try {
      const callData = await axios.get(
        'https://ih-countries-api.herokuapp.com/countries'
      );
      setCountries(callData.data);
      setLoading(true);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="App">
      <NavBar />
      {loading ? (
        <div className="display">
          <Routes>
            <Route path="/" element={<CountriesList Countries={countries} />}>
              <Route
                path="/:id"
                element={<CountryDetails Countries={countries} />}
              />
            </Route>
          </Routes>
        </div>
      ) : (
        <img src={CountriesLoading} width={'200px'} alt="loading" />
      )}
    </div>
  );
};
export default App;

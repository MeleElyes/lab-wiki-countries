
import './App.css';
import NavBar from './Component/Navbar';
import CountriesList from './Component/CountriesList';
import CountryDetails from './Component/CountryDetails'
import { Routes , Route } from 'react-router-dom';
import {useState,useEffect} from 'react'
import axios from 'axios';

const App = () => {
const [countries,setCountries] = useState([])

const fetchData = async () => {
 try{
  const callData = await axios.get("https://ih-countries-api.herokuapp.com/countries")
  setCountries(callData.data)
}
  catch(err){console.log(err)}
}

useEffect(()=>{
  fetchData()
},[]
)

  return (
    <div className="App">
      <NavBar />
      <div className="display">
      <CountriesList Countries={countries} />
      <Routes>
      <Route path="/:id" element={<CountryDetails Countries={countries} />} />
      </Routes>
      </div>
    </div>
  );
};
export default App;

import { useState, useEffect } from "react";
import SearchBar from "./components/SearchBar";
import CountryList from "./components/CountryList";

function App() {

  let [countries, setCountries] = useState([]);
  let [loading, setLoading] = useState(true);
  let [error, setError] = useState(null);
  let [query, setQuery] = useState("");

  useEffect(() => {

    fetch("https://restcountries.com/v3.1/all?fields=name,capital,population,region,flags")
      .then(res => {
        if(!res.ok){
          throw new Error("Failed to fetch countries")
        }
        return res.json()
      })
      .then(data => {
        setCountries(data)
        setLoading(false)
      })
      .catch(err => {
        setError(err.message)
        setLoading(false)
      })

  }, [])


  let filteredCountries = countries.filter(country =>
    country.name.common.toLowerCase().includes(query.toLowerCase())
  )

  if(loading){
    return <h2>Loading countries...</h2>
  }

  if(error){
    return <h2>Error: {error}</h2>
  }

  return (
    <div className="text-center">

      <h1 className="text-6xl mb-10 mt-10">Country Explorer</h1>

      <SearchBar onSearch={setQuery}/>

      <CountryList countries={filteredCountries}/>

    </div>
  )
}

export default App;
function CountryCard({country}) {

  return (

    <div className="border p-4 rounded shadow">

      <img src={country.flags.png} width="120" />

      <h3 className="text-xl font-bold">
        {country.name.common}
      </h3>

      <p>Capital: {country.capital}</p>

      <p>Population: {country.population}</p>

      <p>Region: {country.region}</p>

    </div>

  )
}

export default CountryCard
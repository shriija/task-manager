import CountryCard from "./CountryCard"

function CountryList({countries}) {

  return (

    <div className="grid grid-cols-4 gap-6">

      {
        countries.map((country,index)=>(
          <CountryCard key={index} country={country}/>
        ))
      }

    </div>

  )
}

export default CountryList
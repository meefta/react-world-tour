import { useEffect } from "react";
import { useState } from "react";
import Country from "../Country/Country";
import './Countries.css'



const Countries = () => {
    const [countries , setCountries] = useState([])


    const [visitedCountries , setVisitedCountries] = useState([])
    const [visitedFlag , setflag] = useState([])


    useEffect(()=>{
        fetch('https://restcountries.com/v3.1/all')
        .then(res => res.json())
        .then(data => setCountries(data))
    },[])


    const handleVisitedCountries = (country) =>{
        const newVisitedCountries = [...visitedCountries , country]
        setVisitedCountries(newVisitedCountries)
           console.log('add this to your visited')
          
    }
    const handleFlagVisited = flag =>{
      const newFlag = [...visitedFlag ,  flag  ]
      setflag(newFlag)
    }


    return (
        <div>
            <h2>Countries : {countries.length}</h2>
        <div>
            <h5>Visited Countries : {visitedCountries.length} </h5>
            
                <ol>
                    {
                        visitedCountries.map(country => <li key ={country.cca3}>{country.name.common}</li>)
                    }
                </ol>
        
        </div>
        <div className="flag-container">
            {
               visitedFlag.map(( flag,idx) => <img key={idx} src={flag}></img>) 
            }
        </div>

           <div className="country-container"> 
           {
                countries.map(country => <Country 
                    key={country.cca3} 
                    handleVisitedCountries ={ handleVisitedCountries}
                    handleFlagVisited = {handleFlagVisited}
                    country={country}>

                    </Country>)
            }

           </div>

        </div>
    );
};

export default Countries;
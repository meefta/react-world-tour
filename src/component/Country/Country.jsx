
import { useState } from 'react';
import './country.css'
const Country = ({country ,  handleVisitedCountries , handleFlagVisited}) => {
    const {name} = country;
    const {flags , population , area , cca3} = country;
    const [visited , setVisited] = useState(false)
    const handleVisited =  () => {
      setVisited(!visited)
    }
    return (
        <div className={`country ${visited? 'visited' : 'non-visited'}`}>
            <h3 style={{color :visited? 'purple' :'darkgred'}}>Name : {name?.common}</h3>
            <img src={flags.png} alt="" />
            <h3>Population: {population}</h3>
            <h3>Area:{area}</h3>
            <h3>Code : {cca3}</h3>
            <button className='btn' onClick={() =>handleVisitedCountries(country) }>Mark Visited</button>
            <br />
            <br />
            <button className='btn' onClick={() => handleFlagVisited(country.flags.png)}>Visited Flag</button>
            <br />
            <br />
            <button onClick={handleVisited} className='btn'>{visited? 'Visited' : 'Going'}</button>
            {visited ? 'I have visited this country' : 'I want to visit'}
        </div>
    );
};

export default Country;
import React from 'react';

const Card = (props) => {

  const data = props.data; 
  if (data) {
    return (

      /* make card template based on your JSON-based data here */
            
      <div className="card">
        <h2>
          [{data.topLevelDomain[0]}] &nbsp; 
          <img src={data.flag} alt="" style={{maxHeight: "20px", maxWidth: "40px"}} /> &nbsp; 
          <a href={ "https://en.wikipedia.org/wiki/" + data.name.replace(/ /g, '_')} target="_blank">
            {data.name}
          </a>
        </h2>

        { data.capital ? <p><strong>Capital</strong>: {data.capital} </p> : ""}
        <p><strong>Population</strong>: {data.population.toLocaleString()} </p>
      </div>
    
    )
  }

  return null;
}

export default Card;
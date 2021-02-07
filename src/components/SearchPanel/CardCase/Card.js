import React from 'react';

const Card = (props) => {

  const data = props.data; 
  if (data) {
    return (

      /* make card template here */
            
      <div className="card">
        <h2>{data.name}</h2>
      </div>

    )
  }

  return null;
}

export default Card;
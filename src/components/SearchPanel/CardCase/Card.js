import React from 'react';

const Card = (props) => {

  const data = props.data; 
  if (data) {
    return (

      /* make card template here */
            
      <h1>{data.name}</h1>

    )
  }

  return null;
}

export default Card;
import React from 'react';
import Card from './Card';

const CardCase = ({cardCase = []}) => {
  
  return (
    <>
    { cardCase.map((data, index) => {
      if (data) {
        return (
          <div key={data.name}>
            <Card data={data} />
          </div>
        )
      }
      return null;
    })}
    </>
  )

}

export default CardCase;
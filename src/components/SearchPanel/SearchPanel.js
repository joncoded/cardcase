import React, { useState, useEffect } from 'react';
import SearchInput from './SearchInput/SearchInput';
import CardCase from './CardCase/CardCase';

const SearchPanel = (props) => {

  const [input, setInput] = useState('');
  const [cardCaseDefault, setCardCaseDefault] = useState();
  const [cardCase, setCardCase] = useState();
  const { dataSource, heading } = props.config;

  const getData = async() => {
  
    return await fetch(dataSource)
      .then(response => response.json())
      .then(data => {
        console.log(dataSource);
        // data entry by API 
        setCardCase(data);
        setCardCaseDefault(data);
      });

  }

  const updateInput = async(input) => {

    // go through list and get all countries
    const filtered = cardCaseDefault.filter(caseItem => {
      // ...lowercasing both data and user input to ensure sameness      
      return caseItem.name.toLowerCase().includes(input.toLowerCase())
    })
    
    // set states using hooks
    setInput(input);
    setCardCase(filtered);

  }

  useEffect( () => { getData() }, []);
  
  return (
    <div>
      <h1>{heading}</h1>
      <SearchInput input={input} onChange={updateInput} />
      <CardCase cardCase={cardCase} />
    </div>
  )

}

export default SearchPanel;
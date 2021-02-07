import React from 'react';
import './index.css';
import SearchPanel from './components/SearchPanel/SearchPanel';

function App() {

  { /* STEP 1: configure project */ }
  const config = {
    dataSource : 'https://restcountries.eu/rest/v2/all',
    heading : 'Title'
  }

  { /* STEP 2: configure card template by editing src/components/Cardcase/Card.js */ }
  { /* STEP 3: optionally, style the thing by editing index.css */ }

  return (
    <div className="App">
      <SearchPanel config={config} />
    </div>
  );

}

export default App;
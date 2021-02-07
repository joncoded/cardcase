import React from 'react';
import './index.css';
import SearchPanel from './components/SearchPanel/SearchPanel';

function App() {

  const config = {
    dataSource : 'https://restcountries.eu/rest/v2/all',
    heading : 'Title'
  }

  return (
    <div className="App">
      <SearchPanel config={config} />
    </div>
  );

}

export default App;
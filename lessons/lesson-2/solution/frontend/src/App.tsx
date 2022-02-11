import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {

  const [backendResponse, setBackendResponse] = useState<string>('');

  const onButtonClick = async () => {
    const url = '/colour';
    try {
      const response = await fetch(url);
      setBackendResponse(await response.text());
      console.log({response})
    } catch( error ){
      console.error(error);
    }
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <p>
          <button type="button" onClick={onButtonClick}>click me</button>
        </p>
        {backendResponse && <pre>{backendResponse}</pre>}
      </header>
    </div>
  );
}

export default App;

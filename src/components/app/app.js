import React from 'react';
import  Headers  from "../headers/headers";
import Headerimage from "../Header-image/headerimage";
import './app.scss';

function App() {
  return (
    <div className="app">
      <header className="app-header"> 
        <Headers />
        <Headerimage />
      </header>
    </div>
  );
}

export default App;

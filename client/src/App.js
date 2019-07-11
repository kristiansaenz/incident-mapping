import React from 'react';
import map from './map.svg';
import './App.scss';
import Map from './components/map'

function App() {
  return (
    <section class="hero is-medium is-dark is-bold">
    <div class="hero-body">
      <div class="container">
        <img src={map} className="App-logo" alt="logo" />
        <h1 class="title">Welcome to Incident Mapper</h1>
        <h2 class="subtitle">Enrich 911 emergency incident data to provide better analytics for a fire department.</h2>
        <Map />
      </div>
    </div>
    </section>
  );
}

export default App;

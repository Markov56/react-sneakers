import React from 'react';
import Card from './components/Card.jsx';
import Header from './components/Header';
import Drawer from './components/Drawer';

function App() {
  return (
    <div className="wrapper clear">
      <div className="overlay" style={{ display: 'none' }}>
        <Drawer />
      </div>

      <Header />

      <div className="content p-40">
        <div className="d-flex justify-between align-center">
          <h1>Все кроссовки</h1>

          <div className="content__search-box ">
            <img src="/images/search.svg" alt="" />
            <input className="content__search" type="search" placeholder="Поиск..." />
          </div>
        </div>

        <div className="cards">
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      </div>
    </div>
  );
}

//learning progress
const progress = (args) => {
  const fullTime = 1383;
  let result = (args.reduce((acc, start) => start + acc, 0) * 100) / fullTime;
  console.log(result, '%');
  return result;
};
progress([161]);

export default App;

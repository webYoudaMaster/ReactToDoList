import React from 'react';
import logo from './logo.svg';
import './App.css';
import Title from './components/Title'
import Item from './components/Item'
import Button from './components/Item'

function App() {
  return (
    <div className="AppWrapper">
      <Title />
        <div className="AppMainContent">
            <Item />
        </div>
      <Button />
    </div>
  );
}

export default App;

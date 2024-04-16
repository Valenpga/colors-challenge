import React, { useState } from 'react';
import MyFormChallenge from './components/MyFormChallenge';
import './App.css';

function App() {
  const [selectedColor, setSelectedColor] = useState('');

  const handleColorChange = (e) => {
    setSelectedColor(e.target.value);
  }

  return (
    <>
    <div className='App'>
      <h1>Color</h1>
      <MyFormChallenge onColorChange={handleColorChange}/>
      <input type="text" value={selectedColor} readOnly/>
    </div>
    </>
  )
}

export default App

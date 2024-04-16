import {useEffect, useState, useRef} from 'react';
import BoxColor from './BoxColor';

const colors = ['red', 'green', 'pink', 'yellow', 'purple', 'white', 'blue', 'aqua', 'olive'];

function MyFormChallenge() {
  const [userColor, setUserColor] = useState('');
  const inputRef = useRef('null');

  const handleInputChange = (event) => {
    setUserColor(event.target.value);
    onColorChange(event.target.value);
  }

  useEffect(() => {
    inputRef.current.focus()
    //setUserColor(inputRef.current.userColor);

  }, [] )

  return (
    <>
    <input
      type="text"
      ref={inputRef}
      placeholder="añade el color"
      onChange={handleInputChange}
    />
    <div style={{display: 'flex'}}>
      {colors.map((color, index) => (
        <BoxColor key={index} color={color} userInput={userColor}/>
      ))}
    </div>
    </>
  );
  function onColorChange(newColor) {
    console.log('Color cambiado a :', newColor )
  }
}

export default MyFormChallenge;
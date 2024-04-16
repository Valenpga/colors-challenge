
import {useRef, useState} from 'react'
import {BoxColor} from './BoxColor.jsx'

function MyForm() {
  const inputRef = useRef('')
  const [value, setValue] = useState('')
  const colors = ['red', 'green', 'pink', 'yellow', 'purple', 'white', 'blue', 'aqua', 'olive'];

  return (
    <>
    <input 
      type='text'
      placeholder='choose a color'
      value={value}
      ref={inputRef}
      onChange={() => setValue(inputRef.current.value)} 
    />
    <div className="container">
    {colors.map((color, index) => {
      return(<BoxColor key={index} color={color} value={value} />)
    })
    }
    </div>

  
    </>
  );
}

export default MyForm;
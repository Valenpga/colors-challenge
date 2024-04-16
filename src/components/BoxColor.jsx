import React from "react";

const BoxColor = ({color, userInput}) => {
  const imagePath = `./assets/color-${color.toLowerCase()}.png`;
  
  return(
    <div className={`box ${color}`}>
      <p>{userInput}</p>
      <p>{color === userInput ? 'Soy el color' : 'No soy el color'}</p>
    </div>
  )
}

export default BoxColor;

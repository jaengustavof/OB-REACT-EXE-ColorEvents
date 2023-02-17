import React, { useState, useEffect } from 'react';
import '../../styles/square.scss'


const Square = () => {
    const [color, setColor] = useState({
        backgroundColor: 'black'
    })

    const chgColor = () => {
        const red = Math.floor(Math.random() * 256);
        const green = Math.floor(Math.random() * 256);
        const blue = Math.floor(Math.random() * 256);
        const newColor = `rgb(${red},${green},${blue})`;
        setColor({backgroundColor: newColor})
    }
  
    return (
        <div className='square-content-container' onMouseOver={chgColor} onDoubleClick={chgColor} style={color} ></div>
    );
}

export default Square;

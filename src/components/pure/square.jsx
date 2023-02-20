import React, { useState, useEffect } from 'react';
import '../../styles/square.scss'


const Square = () => {
    const [color, setColor] = useState({
        backgroundColor: 'black'
    })
    const [change, setChange] = useState(false);

    const start = () => {
        setChange(true);
      };
    const stop = () => {
    setChange(false);
    };

    const chgColor = () => {
        const red = Math.floor(Math.random() * 256);
        const green = Math.floor(Math.random() * 256);
        const blue = Math.floor(Math.random() * 256);
        const newColor = `rgb(${red},${green},${blue})`;
        setColor({backgroundColor: newColor})
    }

    useEffect(() => {
        if (change) {
            const id = setInterval(() => {
              chgColor();
            }, 100);
            return () => clearInterval(id);
          }
    }, [change]);
  
    return (
        <div className='square-content-container' onDoubleClick={chgColor} onMouseOver={start} onMouseOut={stop} style={color} ></div>
    );
}

export default Square;

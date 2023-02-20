import React from 'react';
import Square from '../pure/square';
import '../../styles/square.scss'

const SquareContainer = () => {
    return (
        <div className='square-container'>
            <h1>Changes onMouseOver and onDoubleClick</h1>
            <Square></Square>
        </div>
    );
}

export default SquareContainer;

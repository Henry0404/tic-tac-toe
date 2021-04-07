import React from 'react';



const style = {
    background: 'lightgreen',
    border: '2px solid darkgray',
    fontSize: '40px',
    cursor: 'pointer',
    outline: "none"

};

const Square = ({ value, onClick }) => (
    <button style={style} onClick={onClick}>
        {value}

    </button>
);

export default Square;
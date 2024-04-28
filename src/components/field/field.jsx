import React from 'react';
import './field.css';


export default function Field({item, value='', onDrop, color='black'}){
    const handleDrop = (event) => {
        event.preventDefault();
        onDrop();
      };
    const handleDragOver = (event) => {
        event.preventDefault();
      };

    return(
        <div key={item} className='blockInField' onDrop={handleDrop} style={{color: color}} onDragOver={handleDragOver}>
           {value}
        </div>
    )
}
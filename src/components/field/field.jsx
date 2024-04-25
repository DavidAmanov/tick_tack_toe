import React from 'react';
import './field.css';


export default function Field(){
    const numberOfDiv=[1,2,3,4,5,6,7,8,9]
    return(
        <div className='feild'>
            {numberOfDiv.map((item)=>{
                return <div id={item} className='blockInField'>
                    <input type="text" id={item}  className='xOInput'/>
                </div>
            })}
        </div>
    )
}
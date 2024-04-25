import React from "react";
import './block.css'

export default function Block ({name, color}){
    return(
        <div className="block" style={{color: color}}>{name}</div>
    );
}
import React from "react";
import './score.css'

export default function Score({x=0, o=0}){
    return(
    <>
        <div className="score">Score:</div>
        <div>X win {x} times</div>
        <div>O win {o} times</div>
    </>
    )
}
import React from 'react';
import './style.css';

export default function Die(props) {

    function allNewDice() {
        let newArray = [];
        for (let i = 0; i < 10; i++) {
            let digit = Math.floor(Math.random() * 6) + 1;
            newArray.push(digit);
        }
        return newArray;
    }

    return (
        <>
            <div className="die">
                <h2 className='die-num'>{props.value}</h2>
            </div>
        </>
    )
}
import React from 'react';
import './style.css';

export default function Die(props) {
    const dieClass = `die ${props.isHeld ? 'heldDie' : ''}`;

    function handleHold() {
        props.holdDice(props.id);
    }

    return (
        <div className={dieClass} onClick={handleHold}>
            <h2 className='die-num'>{props.value}</h2>
        </div>
    );
}
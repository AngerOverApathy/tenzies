import React from 'react';
import './style.css';

export default function Die(props) {
    // This keeps "die" as the base class, and adds "heldDie" only if isHeld is true
    const dieClass = `die ${props.isHeld ? 'heldDie' : ''}`;

    return (
        <div className={dieClass}>
            <h2 className='die-num'>{props.value}</h2>
        </div>
    );
}
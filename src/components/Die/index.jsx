import React from 'react';
import './style.css';

export default function Die(props) {
    const dieClass = `die ${props.isHeld ? 'heldDie' : ''}`;

    return (
        <div className={dieClass}>
            <h2 className='die-num'>{props.value}</h2>
        </div>
    );
}
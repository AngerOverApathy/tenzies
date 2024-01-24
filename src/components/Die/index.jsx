import React from 'react';
import './style.css';

export default function Die(props) {
    return (
        <>
            <div className="die">
                <h2>{props.value}</h2>
            </div>
        </>
    )
}
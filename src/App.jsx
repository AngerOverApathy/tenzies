import Die from './components/Die'
import { useState } from 'react';
import './App.css';

export default function App() {
    const [dice, setDice] = useState(allNewDice());
    const diceElements = dice.map((die, index) => <Die key={index} value={die.value} isHeld={die.isHeld} />)
    
    function allNewDice() {
        let newArray = [];
        for (let i = 0; i < 10; i++) {
            newArray.push({ 
                value: Math.ceil(Math.random() * 6), 
                isHeld: true 
            });
        }
        return newArray;
    }

    function rollDice() {
        setDice(allNewDice());
    }

    return (
        <div className="container">
            <div className="second-container">
                <div className="dice-container">
                    {diceElements}
                </div>
                <button className='rollBtn' onClick={rollDice}>Roll</button>
            </div>
        </div>
    );
}


import Die from './components/Die'
import { useState } from 'react';
import { nanoid } from 'nanoid';
import './App.css';

export default function App() {
    const [dice, setDice] = useState(allNewDice());
    const diceElements = dice.map((die) => <Die key={die.id} value={die.value} isHeld={die.isHeld} onHold={holdDice} />)
    
    function allNewDice() {
        let newArray = [];
        for (let i = 0; i < 10; i++) {
            newArray.push({ 
                value: Math.ceil(Math.random() * 6), 
                isHeld: true,
                id: nanoid() 
            });
        }
        return newArray;
    }

    function rollDice() {
        setDice(allNewDice());
    }

    function holdDice(id){
        console.log(id)
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


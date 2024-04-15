import Die from './components/Die'
import { useState } from 'react';
import { nanoid } from 'nanoid';
import './App.css';

export default function App() {
    const [dice, setDice] = useState(allNewDice());
    const diceElements = dice.map((die) => <Die key={die.id} value={die.value} isHeld={die.isHeld} holdDice={() => holdDice(die.id)} />)
    
    function allNewDice() {
        let newArray = [];
        for (let i = 0; i < 10; i++) {
            newArray.push({ 
                value: Math.ceil(Math.random() * 6), 
                isHeld: false,
                id: nanoid() 
            });
        }
        return newArray;
    }

    function rollDice() {
        setDice(currentDice => currentDice.map(die => {
        return die.isHeld ? die : {...die, value: Math.ceil(Math.random() * 6)}
        }))
    }

    function holdDice(id) {
        setDice(oldDice => oldDice.map(die => {
            return die.id === id ? 
                {...die, isHeld: !die.isHeld} :
                die
        }))
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


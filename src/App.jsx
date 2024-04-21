import Die from './components/Die'
import { useState, useEffect } from 'react';
import { nanoid } from 'nanoid';
import './App.css';

export default function App() {
    const [dice, setDice] = useState(allNewDice());
    const [tenzies, setTenzies] = useState(false);

    useEffect(() => {
        const allHeld = dice.every(die => die.isHeld);
        const allSameValue = dice.every(die => die.value === dice[0].value);
    
        if (allHeld && allSameValue) {
            setTenzies(true); // Set tenzies to true indicating the game is won
            console.log("You won!"); // Log "You won!" to the console
        }
    }, [dice]); // This useEffect depends on the dice state and runs whenever it changes
    
    
    const diceElements = dice.map((die) => <Die 
        key={die.id} 
        value={die.value} 
        isHeld={die.isHeld} 
        holdDice={() => holdDice(die.id)} 
    />)

    function generateNewDie() {
        return {
            value: Math.ceil(Math.random() * 6),
            isHeld: false,
            id: nanoid()
        }
    }
    
    function allNewDice() {
        const newDice = []
        for (let i = 0; i < 10; i++) {
            newDice.push(generateNewDie())
        }
        return newDice
    }
   
    function rollDice() {
        setDice(oldDice => oldDice.map(die => {
            return die.isHeld ? 
                die :
                generateNewDie()
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
            <h1>Tenzies</h1>
            <p className="instructions">Roll until all dice are the same. Click each die to freeze it at its current value between rolls.</p>
                <div className="dice-container">
                    {diceElements}
                </div>
                <button className='rollBtn' onClick={rollDice}>
                    {dice.every(die => die.isHeld) ? "New Game" : "Roll"}
                </button>
            </div>
        </div>
    );
}


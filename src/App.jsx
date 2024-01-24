import Die from './components/Die'
import './App.css'

function App() {

  return (
    <>
      <div className="container">
        <div className="second-container">
          <div className="dice-container">
            <Die value='1' />
            <Die value='1' />
            <Die value='1' />
            <Die value='1' />
            <Die value='1' />
            <Die value='1' />
            <Die value='1' />
            <Die value='1' />
            <Die value='1' />
            <Die value='1' />
          </div>
        </div>
      </div>
    </>
  )
}

export default App

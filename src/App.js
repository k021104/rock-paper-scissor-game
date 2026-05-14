import { useState } from 'react'
import './App.css'
import ChoiceButton from './components/ChoiceButton'
import { FaUser, FaRobot } from 'react-icons/fa'

function App () {
  const [userChoice, setUserChoice] = useState('')
  const [computerChoice, setComputerChoice] = useState('')
  const [result, setResult] = useState('')
  const [userScore, setUserScore] = useState(0)
  const [computerScore, setComputerScore] = useState(0)
  const [activeChoice, setActiveChoice] = useState('')

  const choices = ['rock', 'paper', 'scissors']

  const handleChoice = choice => {
    setActiveChoice(choice) // highlight clicked

    setUserChoice(choice)

    const randomChoice = choices[Math.floor(Math.random() * choices.length)]

    setComputerChoice(randomChoice)

    const gameResult = getResult(choice, randomChoice)
    setResult(gameResult)

    if (gameResult === 'You Win') {
      setUserScore(prev => prev + 1)
    } else if (gameResult === 'You Lose') {
      setComputerScore(prev => prev + 1)
    }
  }

  const getResult = (user, computer) => {
    if (user === computer) return 'Draw'

    if (
      (user === 'rock' && computer === 'scissors') ||
      (user === 'paper' && computer === 'rock') ||
      (user === 'scissors' && computer === 'paper')
    ) {
      return 'You Win'
    } else {
      return 'You Lose'
    }
  }

  const handleReset = () => {
    setUserChoice('')
    setComputerChoice('')
    setResult('')
    setUserScore(0)
    setComputerScore(0)
  }

  const getResultClass = () => {
    if (result === 'You Win') return 'win'
    if (result === 'You Lose') return 'lose'
    if (result === 'Draw') return 'draw'
    return ''
  }

  const getPlayerResult = () => {
    if (result === 'You Win') return 'user-win'
    if (result === 'You Lose') return 'user-lose'
    if (result === 'Draw') return 'draw'
    return ''
  }

  return (
    <div className='app'>
      {/* HEADER */}
      <h1 className='title'>Rock Paper Scissors</h1>

      {/* GAME AREA */}
      <div className='game-area'>
        {/* USER VS COMPUTER */}
        <div className='players'>
          <div
            className={`player-box ${
              getPlayerResult() === 'user-win'
                ? 'win-box'
                : getPlayerResult() === 'user-lose'
                ? 'lose-box'
                : ''
            }`}
          >
            <h3>You</h3>
            <p>{userChoice || '?'}</p>
          </div>
          <div className='vs'>VS</div>
          <div
            className={`player-box ${
              getPlayerResult() === 'user-win'
                ? 'lose-box'
                : getPlayerResult() === 'user-lose'
                ? 'win-box'
                : ''
            }`}
          >
            <h3>Computer</h3>
            <p>{computerChoice || '?'}</p>
          </div>
        </div>

        {/* RESULT */}
        <h2 className={`result ${getResultClass()}`}>
          {result || 'Make your move'}
        </h2>

        {/* CHOICES */}
        <div className='choices'>
          <ChoiceButton
            choice='rock'
            onClick={handleChoice}
            isActive={activeChoice === 'rock'}
          />
          <ChoiceButton
            choice='paper'
            onClick={handleChoice}
            isActive={activeChoice === 'paper'}
          />
          <ChoiceButton
            choice='scissors'
            onClick={handleChoice}
            isActive={activeChoice === 'scissors'}
          />
        </div>
      </div>

      {/* SCORE PANEL */}
      <div className='score-panel'>
        <div className='score-box'>🏆 You: {userScore}</div>
        <div className='score-box'>💻 Computer: {computerScore}</div>
      </div>

      {/* RESET */}
      <button className='reset-btn' onClick={handleReset}>
        Reset Game
      </button>
    </div>
  )
}

export default App

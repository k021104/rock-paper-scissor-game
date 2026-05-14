import React from 'react'
import { FaHandRock, FaHandPaper, FaHandScissors } from 'react-icons/fa'

const icons = {
  rock: <FaHandRock />,
  paper: <FaHandPaper />,
  scissors: <FaHandScissors />
}

export default function ChoiceButton ({ choice, onClick, isActive }) {
  return (
    <button
      className={`choice-btn ${isActive ? 'active' : ''}`}
      onClick={() => onClick(choice)}
    >
      <span className='icon'>{icons[choice]}</span>
      <span className='label'>{choice}</span>
    </button>
  )
}

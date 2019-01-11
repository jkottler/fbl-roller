import React from 'react'

function DiceDisplay (props) {
  console.log(props.dice)
  return (
    <div>
      <div>{props.dice.filter(die => die.props.type === 'base')}</div>
      <div>{props.dice.filter(die => die.props.type === 'skill')}</div>
      <div>{props.dice.filter(die => die.props.type === 'gear')}</div>
      <div>{props.dice.filter(die => die.props.type === 'mighty')}</div>
    </div>
  )
}

export default DiceDisplay

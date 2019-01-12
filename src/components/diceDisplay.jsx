import React from 'react'

function DiceDisplay (props) {
  return (
    <div>
      <div>{props.dice.filter(die => die.props.type === 'base')}</div>
      <div>{props.dice.filter(die => die.props.type === 'skill')}</div>
      <div>{props.dice.filter(die => die.props.type === 'gear')}</div>
      <div>{props.dice.filter(die => die.props.type === 'mighty')}</div>
      <div>{props.dice.filter(die => die.props.type === 'epic')}</div>
      <div>{props.dice.filter(die => die.props.type === 'legendary')}</div>
    </div>
  )
}

export default DiceDisplay

import React from 'react'

function DiceDisplay (props) {
  console.log(props.dice.map(v=>[v.props.type, v.props.value]))
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

import 'materialize-css/dist/css/materialize.min.css'
import M from 'materialize-css'
import React, { Component } from 'react'
import logo from './components/crossed-swords-white.svg'
import Random from 'random-js'

import './App.css'

import Die from './components/die'
import SelectorForm from './components/selectorForm'
import DiceDisplay from './components/diceDisplay'

// init materialize
M.AutoInit()

// create a Mersenne Twister-19937 that is auto-seeded based on time and other random values
const engine = Random.engines.mt19937().autoSeed()
const distributions = {
  d6:Random.integer(1, 6),
  d8:Random.integer(1,8),
  d10:Random.integer(1,10),
  d12: Random.integer(1,12),
  base:Random.integer(1, 6),
  skill:Random.integer(1, 6),
  gear:Random.integer(1, 6),
  mighty:Random.integer(1, 8),
  epic:Random.integer(1,10),
  legendary:Random.integer(1,12),
}

function roll (distribution) {
  return distributions[distribution](engine)
}

function rollDice (baseCount, skillCount, gearCount, mightyCount, epicCount, legendaryCount) {
  let result = []

  let index = 0

  for (let i = 0; i < baseCount; i++) {
    result.push(<Die value={roll('base')} type='base' key={index} />)
    index++
  }

  for (let i = 0; i < skillCount; i++) {
    result.push(<Die value={roll('skill')} type='skill' key={index} />)
    index++
  }

  for (let i = 0; i < gearCount; i++) {
    result.push(<Die value={roll('gear')} type='gear' key={index} />)
    index++
  }

  for (let i = 0; i < mightyCount; i++) {
    result.push(<Die value={roll('mighty')} type='mighty' key={index} />)
    index++
  }
 
  for (let i = 0; i < epicCount; i++) {
    result.push(<Die value={roll('epic')} type='epic' key={index} />)
    index++
  }

  for (let i = 0; i < legendaryCount; i++) {
    result.push(<Die value={roll('legendary')} type='legendary' key={index} />)
    index++
  }
  return result
}

class App extends Component {
  constructor (props) {
    super(props)

    this.state = {
      baseCount: 0,
      skillCount: 0,
      gearCount: 0,
      mightyCount: 0,
      epicCount: 0,
      legendaryCount: 0,
      dice: rollDice(0, 0, 0),
      pushDisabled: 'disabled',
      rollDisabled: 'disabled',
      prideDisabled: 'disabled'
    }

    this.handleRoll = e => {
      let { baseCount, skillCount, gearCount, mightyCount, epicCount, legendaryCount } = e
      baseCount = parseInt(baseCount, 10)
      skillCount = parseInt(skillCount, 10)
      gearCount = parseInt(gearCount, 10)
      mightyCount = parseInt(mightyCount, 10)
      epicCount = parseInt(epicCount, 10)
      legendaryCount = parseInt(legendaryCount, 10)
      this.setState({
        baseCount,
        skillCount,
        gearCount,
        mightyCount,
        epicCount,
        legendaryCount,
        dice: rollDice(baseCount, skillCount, gearCount, mightyCount, epicCount, legendaryCount),
        pushDisabled: '',
        prideDisabled: ''
      })
    }

    this.handlePush = e => {
      let newDice = []
      for (let die of this.state.dice) {
        if (
          die.props.value >= 6 ||
          (die.props.value === 1 && ['base', 'gear'].indexOf(die.props.type) !== -1)
        ) {
          // keep symbol dice
          newDice.push(die)
        } else {
          // reroll others
          newDice.push(
            <Die value={roll(die.props.type)} type={die.props.type} key={die.key} />
          )
        }
      }
      this.setState({
        dice: newDice,
        pushDisabled: '',
        prideDisabled: ''
      })
    }
  }

  render () {
    return (
      <div className='App'>
        <header className='App-header'>
          <img
            src={logo}
            className='App-logo hide-on-small-only'
            alt='logo'
            style={{ marginBottom: '5px' }}
          />
          <h1 className='App-title'>Welcome to FBL Roller</h1>
        </header>

        <main>
          <div className='container'>
            <div className='row'>
              <div className='col s4'>
                <SelectorForm
                  baseCount={this.state.baseCount}
                  skillCount={this.state.skillCount}
                  gearCount={this.state.gearCount}
                  mightyCount={this.state.mightyCount}
                  epicCount={this.state.epicCount}
                  legendaryCount={this.state.legendaryCount}
                  handleRoll={this.handleRoll}
                  handlePush={this.handlePush}
                  handlePride={this.handlePride}
                  pushDisabled={this.state.pushDisabled}
                  rollDisabled={this.state.rollDisabled}
                  prideDisabled={this.state.prideDisabled}
                />
              </div>
              <div className='col s8'>
                <DiceDisplay dice={this.state.dice} />
              </div>
            </div>
          </div>
        </main>

        <footer className='page-footer'>
          <div className='container'>
            <div className='row'>
              <div className='col s12'>
                <div className='col s4'>
                  A dice roller for:{' '}
                  <a
                    href='http://frialigan.se/en/games/forbidden-lands/'
                    rel='noopener noreferrer'
                    target='_blank'
                  >
                    Forbidden Lands
                  </a>
                </div>
                <div className='col s4'>
                  Icons from:{' '}
                  <a
                    href='http://game-icons.net'
                    rel='noopener noreferrer'
                    target='_blank'
                  >
                    game-icons.net
                  </a>
                </div>
                <div className='col s4'>
                  Contribute on:{' '}
                  <a
                    href='https://github.com/jkottler/fbl-roller'
                    rel='noopener noreferrer'
                    target='_blank'
                  >
                    Github
                  </a>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </div>
    )
  }
}

export default App

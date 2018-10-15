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

document.addEventListener('DOMContentLoaded', function() {
  var elems = document.querySelectorAll('.collapsible');
  var instances = M.Collapsible.init(elems, {});
});

// create a Mersenne Twister-19937 that is auto-seeded based on time and other random values
var engine = Random.engines.mt19937().autoSeed()
var distribution = Random.integer(1, 6)

function roll () {
  return distribution(engine)
}

function rollDice (baseCount, skillCount, gearCount) {
  let result = []

  let index = 0

  for (let i = 0; i < baseCount; i++) {
    result.push(<Die value={roll()} type='base' key={index} />)
    index++
  }

  for (let i = 0; i < skillCount; i++) {
    result.push(<Die value={roll()} type='skill' key={index} />)
    index++
  }

  for (let i = 0; i < gearCount; i++) {
    result.push(<Die value={roll()} type='gear' key={index} />)
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
      dice: rollDice(0, 0, 0),
      pushDisabled: 'disabled',
      rollDisabled: 'disabled',
      prideDisabled: 'disabled'
    }

    this.handleRoll = (e) => {
      let { baseCount, skillCount, gearCount } = e
      baseCount = parseInt(baseCount, 10)
      skillCount = parseInt(skillCount, 10)
      gearCount = parseInt(gearCount, 10)
      this.setState({
        baseCount,
        skillCount,
        gearCount,
        dice: rollDice(baseCount, skillCount, gearCount),
        pushDisabled: '',
        prideDisabled: ''
      })
    };

    this.handlePush = (e) => {
      let newDice = []
      for (let die of this.state.dice) {
        if (
          die.props.value === 6 ||
          (die.props.value === 1 && die.props.type !== 'skill')
        ) {
          // keep symbol dice
          newDice.push(die)
        } else {
          // reroll others
          newDice.push(
            <Die value={roll()} type={die.props.type} key={die.key} />
          )
        }
      }
      this.setState({ dice: newDice,
        pushDisabled: 'disabled',
        prideDisabled: '' })
    }
  }

  render () {
    return (
      <div className='App'>
        <header className='App-header'>
          <img src={logo} className='App-logo hide-on-small-only' alt='logo' />
          <div>
            <h1 className='App-title'>Welcome to FBL Roller</h1>
          </div>
        </header>

        <main>
          <div className='container'>
            <div className='row'>
              <div className='col s4'>
                <SelectorForm
                  baseCount={this.state.baseCount}
                  skillCount={this.state.skillCount}
                  gearCount={this.state.gearCount}
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
                    target='_blank'>
                    Forbidden Lands
                  </a>
                </div>
                <div className='col s4'>
                  Icons from:{' '}
                  <a
                    href='http://game-icons.net'
                    rel='noopener noreferrer'
                    target='_blank'>
                    game-icons.net
                  </a>
                </div>
                <div className='col s4'>
                  Contribute on:{' '}
                  <a
                    href='https://github.com/jkottler/myz-roller'
                    rel='noopener noreferrer'
                    target='_blank'>
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

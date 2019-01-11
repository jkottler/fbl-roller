import React, { Component } from 'react'

import NumberSelector from './numberSelector'

const style = {
  marginLeft: '2px',
  marginRight: '2px',
  display: 'inline',
  height: '44px'
}
class SelectorForm extends Component {
  constructor (props) {
    super(props)
    this.state = {
      baseCount: this.props.baseCount || 0,
      skillCount: this.props.skillCount || 0,
      gearCount: this.props.gearCount || 0,
      mightyCount: this.props.mightyCount ||0,
      epicCount: this.props.epicCount || 0,
      legendaryCount: this.props.legendaryCount || 0,
    }

    this.handleCountChange = (type, count) => {
      this.setState({
        [type + 'Count']: parseInt(count, 10)
      })
    }

    this.handleRoll = e => {
      this.props.handleRoll(this.state)
    }

    this.handlePush = e => {
      this.props.handlePush()
    }

    this.handlePride = e => {
      this.props.handlePride()
    }
  }

  rollEnabled () {
    return this.state.baseCount === 0 &&
      this.state.skillCount === 0 &&
      this.state.gearCount === 0 &&
      this.state.mightyCount === 0 &&
      this.state.epicCount === 0 &&
      this.state.legendaryCount === 0
      ? 'disabled'
      : ''
  }

  render () {
    return (
      <form>
        <NumberSelector
          name='base'
          value={this.state.baseCount}
          onChange={this.handleCountChange}
        />
        <NumberSelector
          name='skill'
          value={this.state.skillCount}
          onChange={this.handleCountChange}
        />
        <NumberSelector
          name='gear'
          value={this.state.gearCount}
          onChange={this.handleCountChange}
        />

        <NumberSelector
          name='mighty'
          value={this.state.mightyCount}
          onChange={this.handleCountChange}
        />
        <NumberSelector
          name='epic'
          value={this.state.epicCount}
          onChange={this.handleCountChange}
        />
        <NumberSelector
          name='legendary'
          value={this.state.legendaryCount}
          onChange={this.handleCountChange}
        />
        <span>
          <div
            style={style}
            className={'waves-effect waves-light btn ' + this.rollEnabled()}
            onClick={this.handleRoll}
          >
            roll
          </div>
          <div
            style={style}
            className={
              'waves-effect waves-light btn ' + this.props.pushDisabled
            }
            onClick={this.handlePush}
          >
            push
          </div>
          <div
            style={style}
            className={
              'waves-effect waves-light btn ' + this.props.prideDisabled
            }
            onClick={this.handlePride}
          >
            pride
          </div>
        </span>
      </form>
    )
  }
}

export default SelectorForm

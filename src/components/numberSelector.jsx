import React, { Component } from 'react'
import IncrementButton from './incrementButton'

const noselect = {
  webkitTouchCallout: 'none' /* iOS Safari */,
  webkitUserSelect: 'none' /* Safari */,
  khtmlUserSelect: 'none' /* Konqueror HTML */,
  mozUserSelect: 'none' /* Firefox */,
  msUserSelect: 'none' /* Internet Explorer/Edge */,
  userSelect:
    'none' /* Non-prefixed version, currently supported by Chrome and Opera */
}

const style = {
  ...noselect,
  fontSize: 'xx-large',
  verticalAlign: 'top'
}

class NumberSelector extends Component {
  constructor(props) {
    super(props)

    this.handleChange = e => {
      this.props.onChange(this.props.name, e.target.value)
    }

    this.handleIncrement = e => {
      if (this.props.value < 8) {
        this.props.onChange(this.props.name, parseInt(this.props.value, 10) + 1)
      }
    }

    this.handleDecrement = e => {
      if (this.props.value > 0) {
        this.props.onChange(this.props.name, parseInt(this.props.value, 10) - 1)
      }
    }
  }

  render() {
    return (
      <div className='row'>
        <div className='input-field'>
          <span className='die-type' style={{}}>{this.props.name}</span>
          <IncrementButton
            label='-'
            type={this.props.name}
            onClick={this.handleDecrement}
          />
          {/* <span className='hide-on-small-only'>
            <Die value='6' type={this.props.name} />
          </span> */}
          <span style={style}>{this.props.value}</span>
          <IncrementButton
            label='+'
            type={this.props.name}
            onClick={this.handleIncrement}
          />
          <input
            style={{ margin: '5px 0px' }}
            placeholder={this.props.name}
            id={this.props.name}
            type='range'
            min='0'
            max='8'
            value={this.props.value}
            onChange={this.handleChange}
          />
        </div>
      </div>
    )
  }
}

export default NumberSelector

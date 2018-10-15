import React from 'react'

import swordWhite from './crossed-swords-white.svg'
import swordBlack from './crossed-swords-black.svg'
import skullWhite from './dread-skull-white.svg'
import skullBlack from './dread-skull-black.svg'
import d8_1 from './d8-1.svg'
import d8_2 from './d8-2.svg'


function Die (props) {
  return (
    <div
      style={{
        ...style,
        background: dieTypes[props.type].background,

        fontFamily: "'Arial Black', Arial-BoldMT, Gadget, 'sans-serif'",
        fontSize: 'xx-large'
      }}>
      <div style={{ ...style2, color: dieTypes[props.type].foreground }}>
        {show(props.type, props.value)}
      </div>
    </div>
  )
}

const style2 = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)'
}

const style = {
  width: '50px',
  height: '50px',
  margin: '3px',
  borderRadius: '5px',
  position: 'relative',
  display: 'inline-block'
}

const dieTypes = {
  base: {
    background: 'silver',
    foreground: 'black',
    special : {
      1:skullBlack,
      6:swordBlack
    }
  },
  skill: {
    background: 'maroon',
    foreground: 'white',
    special: {
      6: swordWhite
    }
  },
  gear: {
    background: 'black',
    foreground: 'white',
    special: {
      1: skullWhite,
      6: swordWhite
    }
  },
  artifactMightyd8: {
    background: 'silver',
    foreground: 'black',
    special: {  
      6: d8_1,
      7: d8_1,
      8: d8_2
    }

  },
  artifactEpicd10: {
    background: 'silver',
    foreground: 'black'
  },
  artifactLegendaryd12: {
    background: 'silver',
    foreground: 'black'
  }
}

const show = (type, value) => {
  let v = parseInt(value, 10)
  if(dieTypes[type].special.hasOwnProperty(v)) {
    return (
      <img
        height='40'
        width='40'
        border-radius='5px'
        src={dieTypes[type].special[v]}
        style={style2}
        alt={dieTypes[type].special[v]}
      />
    )
  }
  return v
}

export default Die

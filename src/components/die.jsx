import React from 'react'

import swordWhite from './crossed-swords-white.svg'
import swordsWhite2 from './2-swords-white.svg'
import swordsYellow from './swords-yellow.svg'
import swordsYellow2 from './2-swords-yellow.svg'
import swordsYellow3 from './3-swords-yellow.svg'
import swordBlack from './crossed-swords-black.svg'
import swordsBlack2 from './2-swords-black.svg'
import swordsBlack3 from './3-swords-black.svg'
import swordsBlack4 from './4-swords-black.svg'
import skullWhite from './dread-skull-white.svg'
import skullBlack from './dread-skull-black.svg'



function Die(props) {
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
    background: 'beige',
    foreground: 'black',
    special: {
      1: skullBlack,
      6: swordBlack
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
  mighty: {
    background: 'green',
    foreground: 'white',
    special: {
      6: swordWhite,
      7: swordWhite,
      8: swordsWhite2
    }

  },
  epic: {
    background: 'blue',
    foreground: 'yellow',
    special: {
      6: swordsYellow,
      7: swordsYellow,
      8: swordsYellow2,
      9: swordsYellow2,
      10: swordsYellow3
    }
  },
  legendary: {
    background: 'orange',
    foreground: 'black',
    special: {
      6: swordBlack,
      7: swordBlack,
      8: swordsBlack2,
      9: swordsBlack2,
      10: swordsBlack3,
      11: swordsBlack3,
      12: swordsBlack4
    }
  }
}

const show = (type, value) => {
  let v = parseInt(value, 10)
  if (dieTypes[type].special.hasOwnProperty(v)) {
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

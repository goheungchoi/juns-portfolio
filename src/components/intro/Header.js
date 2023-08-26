import { useState } from 'react'
import style from '../../style/intro_modules/Header.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { icon } from '@fortawesome/fontawesome-svg-core/import.macro'

function Header(props) {
  const [hover, setHover] = useState(false);

  return (
    <div 
      className={`${style.Header}`}
    >
      <h1>JUN'S <br></br> PORTFOLIO</h1>
      <div 
        onMouseEnter={()=> setHover(true)}
        onMouseLeave={()=> setHover(false)}
        onClick={() => props.onClick(true)}
      >
        Next
        <div className={`${hover?style.Hover:style.Normal}`}>
          <FontAwesomeIcon icon={icon({name:"chevron-right"})} />
        </div>
      </div>
    </div>
  )
}

export default Header;
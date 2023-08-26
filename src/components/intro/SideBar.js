import { useState } from 'react'
import style from '../../style/intro_modules/SideBar.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import CodeSandboxLogo from '../../data/code-sandbox-logo'
import { faEnvelope } from '@fortawesome/free-regular-svg-icons'
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons'

function SideBar(props) {
  return (
    <div 
      className={`${style.SideBar}`}
    >
      <div></div>
      
      <a href='https://www.github.com/goheungchoi'>
        <FontAwesomeIcon icon={faGithub} />
      </a>
      <a href='https://www.linkedin.com/in/goheungchoi/'>
        <FontAwesomeIcon icon={faLinkedin} />
      </a>
      <a href='https://codesandbox.io/u/goheungchoi'>
        <CodeSandboxLogo />
      </a>
      <a href=''>
        <FontAwesomeIcon icon={faEnvelope} />
      </a>
      
    </div>
  )
}

export default SideBar;
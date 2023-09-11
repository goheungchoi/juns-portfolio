import { useState } from 'react'
import style from '../../style/intro_modules/SideBar.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import CodeSandboxLogo from '../../data/code-sandbox-logo'
import { faAt } from '@fortawesome/free-solid-svg-icons'
import { faLinkedin, faGithub, faDiscord } from '@fortawesome/free-brands-svg-icons'

function SideBar(props) {
  return (
    <div 
      className={`${style.SideBar}`}
    >
      <div></div>
      
      <a href='https://www.github.com/goheungchoi'>
        <FontAwesomeIcon icon={faGithub}  />
      </a>
      <a href='https://www.codesandbox.io/u/goheungchoi'>
        <CodeSandboxLogo />
      </a>
      <a href='https://www.linkedin.com/in/goheungchoi/'>
        <FontAwesomeIcon icon={faLinkedin} />
      </a>
      <a href='https://www.discordapp.com/users/888217652273750016'>
        <FontAwesomeIcon icon={faDiscord} size='sm' />
      </a>
      
      <a href='mailto:choi0740@umn.edu'>
        <FontAwesomeIcon icon={faAt} />
      </a>
      
    </div>
  )
}

export default SideBar;
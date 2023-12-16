import style from '../../style/intro_modules/Resume.module.css'

import resume from '../../data/resume_summer23.pdf'

function Resume(props) {
  return (
    <div 
      className={`${style.Resume}`}
    >
      <a 
      href={resume} 
      target="_blank"
      style={{
        textDecoration: "none",
        color: "inherit",
      }}
      >
        <div role='button'>
          Résumé
        </div>
      </a>
    </div>
  )
}

export default Resume;
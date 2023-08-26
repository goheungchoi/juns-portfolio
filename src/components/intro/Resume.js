import style from '../../style/intro_modules/Resume.module.css'

function Resume(props) {
  return (
    <div 
      className={`${style.Resume}`}
    >
      <div role='button'>
        Resume
      </div>
    </div>
  )
}

export default Resume;
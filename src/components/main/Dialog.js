import { useState, useRef, useEffect } from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faX } from '@fortawesome/free-solid-svg-icons'

import style from "../../style/main_modules/Dialog.module.css"

function Dialog({
  title,
  message,
  detail,
  width,
  height,
  onCloseButtonClick,
}) {
  const [visible, setVisible] = useState(false);
  const dialogDiv = useRef(null);

  function toggleVisible() {
    const scrolled = dialogDiv.current.scrollTop; 
    if (scrolled > 200) {
      setVisible(true)
    } else {
      setVisible(false);
    }
  };

  function onGoUpButtonClick() {
    dialogDiv.current.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  };

  useEffect(()=>{
    
    return ()=>{
      // unmount
    };
  }, []);

  return (
    <div 
      ref={dialogDiv} 
      className={style.dialog}
      onScroll={toggleVisible}
    >
      <div className={style.window}
        style={{
          width: width,
          height: height,
        }}
      >
        <div 
          className={style.closeButton}
          onClick={()=>onCloseButtonClick()}
        >
          <FontAwesomeIcon icon={faX}/>
        </div>

        <div className={style.title}>
          {title}
        </div>

        <div className={style.message}>
          {message}
        </div>
        
        <div className={style.detail}>
          {detail}
        </div>
      </div>

      <div 
        role="button"
        className={`${style.goUpButton} ${visible ? style.goUpButton__show : null}`}
        onClick={onGoUpButtonClick}
      >
        Go Top
      </div>
    </div>
  )

}

export default Dialog;
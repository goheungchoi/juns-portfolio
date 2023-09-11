import { useState, useEffect } from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faX } from '@fortawesome/free-solid-svg-icons'

import sleep from "../../utils/Sleep";
import style from "../../style/main_modules/Dialog.module.css"

function Dialog({
  title,
  message,
  detail,
  width,
  height,
  onCloseButtonClick,
}) {

  useEffect(()=>{

    return ()=>{
      // unmount
    };
  }, [])

  return (
    <div className={style.dialog}>
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
    </div>
  )

}

export default Dialog;
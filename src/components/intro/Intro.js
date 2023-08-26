import { useState } from 'react'
import style from '../../style/intro_modules/Intro.module.css'

import Sleep from '../Sleep.js'
import Header from './Header.js'
import Scene from './Scene.js'
import Footer from './Footer'
import SideBar from './SideBar'
import Resume from './Resume'

function Intro(props) {
  const [clicked, setClicked] = useState(false);

  const onClick = async(action) => {
    await setClicked(action);
    await Sleep(3000);
    await props.startTour(action);
  }

  return (
    <>
      <div className={style.background}>
        <Scene />
      </div>  
      <Resume />
      <Header onClick={onClick}/>
      <SideBar />
      <Footer />
      

      <div className={`${clicked?style.transition:style.disable}`}>
      </div>
    </>
  );

}

export default Intro;
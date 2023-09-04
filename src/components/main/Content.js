import { useState, useEffect, useRef } from 'react'
import sleep from '../../utils/Sleep';


import style from '../../style/main_modules/Content.module.css'

function Slides(props) {
  const refs = [useRef(null), useRef(null)];
  const [swapper, setSwapper] = useState({curr: 0, next: 1});
  const [currNav, setCurrNav] = useState(0);
  const [div1Nav, setDiv1Nav] = useState(0);
  const [div2Nav, setDiv2Nav] = useState(0);

  const slideActive = `${style.slide_active}`;
  const slideInactive = `${style.slide_inactive}`;
  const slideInFromBottom = `${style.slide_in__from_bottom}`;
  const slideInFromTop = `${style.slide_in__from_top}`;
  const slideInDone = `${style.slide_in__done}`;
  const slideOutToBottom = `${style.slide_out__to_bottom}`;
  const slideOutToTop = `${style.slide_out__to_top}`;

  async function activeNextSlide(startPosition) {
    if (swapper.next === 1) {
      setDiv2Nav(props.nav);
    } else {
      setDiv1Nav(props.nav);
    }
    refs[swapper.next].current.className = `${slideActive} ${startPosition}`;
  }

  async function slideInNextSlide() {
    refs[swapper.next].current.className = `${slideActive} ${slideInDone}`;
  }

  async function slideOutCurrentSlide(endPosition) { 
    refs[swapper.curr].current.className = `${slideActive} ${endPosition}`;
  }

  async function deactivateCurrentSlide() {
    refs[swapper.curr].current.className = `${slideInactive}`;
  }

  async function updateSlideAnimation() {
    const init = () => {
      if (currNav < props.nav) {
        return [slideInFromBottom, slideOutToTop];
      } else {
        return [slideInFromTop, slideOutToBottom];
      }
    }
    const pos = await init();
    await activeNextSlide(pos[0]);
    await sleep(50);
    await slideInNextSlide();
    await slideOutCurrentSlide(pos[1]);
    await sleep(500);
    await deactivateCurrentSlide();
    await console.log(swapper);
    await swapDiv();
    await setCurrNav(props.nav);
  }

  async function swapDiv() {
    const tmpCurr = swapper.curr;
    const tmpNext = swapper.next;
    setSwapper({curr: tmpNext, next: tmpCurr});
  }

  useEffect(()=> {
    if (props.nav !== currNav) {
      updateSlideAnimation();
    }
  }, [props.nav]);

  return (
    <>
      <div ref={refs[0]} className={`${slideActive} ${slideInDone}`}>
        {props.children[div1Nav]}
      </div>
      <div ref={refs[1]} className={`${slideInactive}`}>
        {props.children[div2Nav]}
      </div>
    </>
  )
}

/** Main Component */
function Main() {
  return (
    <section className={style.left_box}>
      <div className={`${style.header} ${style.font__Nunito}`}>
        Welcome, <br></br>
        I'm Jun
      </div>
      <div className={`${style.headline} ${style.font__PTSans}`}>
        <strong>Computer Science Graduate</strong>
      </div>
      <div className={`${style.info} ${style.font__PTSans}`}>
        Passionate about&nbsp;
        <font color='#372925'>
          <strong>Software Development</strong>
        </font>
        &nbsp;and&nbsp;
        <font color='#372925'>
          <strong>Game Development</strong>
        </font>
      </div>
    </section>
  )
}

/** About Component */
function About() {
  const [states, setStates] = useState([false, false, false]);

  function handleEachClick(index) {
    setStates(states.map((v, i)=>(i===index ? !v : v)))
  }

  return (
    <section className={style.column_box}>
      <div className={`${style.column}`} >
        <div className={`${style.headline} ${style.font__PTSans}`} >
          Expertise
          <div className={`${style.bar}`}></div>
        </div>
        <div 
          className={`${style.row} ${states[0] ? style.row__active : style.row__inactive} ${style.font__PTSans}`} 
          onClick={()=>handleEachClick(0)}
        >
          <div className={`${style.title}`}>
            <div className={`${style.disc} ${states[0] ? style.disc__active : ''}`}></div>
            <div className={`${style.subheader} ${style.font__PTSans}`}>Lorem Ipsum</div>
          </div>
          <div></div>

          {states[0] && 
          <div className={`${states[0] ? style.main : style.main__inactive} ${style.font__PTSans}`}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
            Pellentesque ac scelerisque nunc, in pretium metus.
            Duis suscipit aliquet odio, ut lobortis turpis porttitor ac. 
            Praesent dapibus mi eget neque eleifend volutpat. 
            Donec id nisi sapien. Nullam ut interdum tellus. 
            In semper pulvinar elit et dictum. Phasellus efficitur in ex eget lobortis. 
            Ut eget massa suscipit, bibendum tellus nec, placerat nibh.
          </div>}
        </div>
        <div 
          className={`${style.row} ${states[1] ? style.row__active : style.row__inactive} ${style.font__PTSans}`} 
          onClick={()=>handleEachClick(1)}
        >
          <div className={`${style.title}`}>
            <div className={`${style.disc} ${states[1] ? style.disc__active : ''}`}></div>
            <div className={`${style.subheader}`}>Lorem Ipsum</div>
          </div>
          <div></div>

          {states[1] && 
          <div className={`${states[1] ? style.main : style.main__inactive} ${style.font__PTSans}`}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
            Pellentesque ac scelerisque nunc, in pretium metus.
            Duis suscipit aliquet odio, ut lobortis turpis porttitor ac. 
            Praesent dapibus mi eget neque eleifend volutpat. 
            Donec id nisi sapien. Nullam ut interdum tellus. 
            In semper pulvinar elit et dictum. Phasellus efficitur in ex eget lobortis. 
            Ut eget massa suscipit, bibendum tellus nec, placerat nibh.
          </div>}
        </div>
        <div 
          className={`${style.row} ${states[2] ? style.row__active : style.row__inactive} ${style.font__PTSans}`} 
          onClick={()=>handleEachClick(2)}
        >
          <div className={`${style.title}`}>
            <div className={`${style.disc} ${states[2] ? style.disc__active : ''}`}></div>
            <div className={`${style.subheader}`}>Lorem Ipsum</div>
          </div>
          <div></div>

          {states[2] && 
          <div className={`${states[2] ? style.main : style.main__inactive} ${style.font__PTSans}`}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
            Pellentesque ac scelerisque nunc, in pretium metus.
            Duis suscipit aliquet odio, ut lobortis turpis porttitor ac. 
            Praesent dapibus mi eget neque eleifend volutpat. 
            Donec id nisi sapien. Nullam ut interdum tellus. 
            In semper pulvinar elit et dictum. Phasellus efficitur in ex eget lobortis. 
            Ut eget massa suscipit, bibendum tellus nec, placerat nibh.
          </div>}
        </div>
      </div>
      <div className={`${style.column}`} >
        <div className={`${style.headline} ${style.font__PTSans}`} >
          Div 2
        </div>
      </div>
    </section>
  )
}

/** Work Component */
function Work() {
  return (
    <div className={style.left_box}>
      <div className={`${style.header} ${style.font__Nunito}`} >
        This is Work.
      </div>
    </div>
  )
}

/** Contact Component */
function Contact() {
  return (
    <div className={style.left_box}>
      <div className={`${style.header} ${style.font__Nunito}`} >
        This is Contact.
      </div>
    </div>
  )
}

/**
 * 
 * @param {*} props nav - the navigation index for component switch.
 * @returns 
 */
function Content(props) {

  return (
    <div className={style.body}>
      <Slides nav={props.nav}>
        <Main />
        <About />
        <Work />
        <Contact />
      </Slides>
    </div>
  )
}

export default Content;
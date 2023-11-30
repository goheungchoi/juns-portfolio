import style from "../../../style/main_modules/sub/InnerSlides.module.css";
import { useState, useRef, useEffect } from "react";
import HorizontalIndicator from "./HorizontalIndicator";

import sleep from "../../../utils/Sleep";
/**
 * Provides vertical slide-out and slide-in effects of components.
 * @param {*} props children - React child components
 * @returns slides that wrap up the child components
 */
function InnerSlides(props) {
  const refs = [useRef(null), useRef(null)];
  const [swapper, setSwapper] = useState({ curr: 0, next: 1 });
  const [currNav, setCurrNav] = useState(0);
  const [nextNav, setNextNav] = useState(0);
  const [div1Nav, setDiv1Nav] = useState(0);
  const [div2Nav, setDiv2Nav] = useState(0);

  const slideActive = `${style.slide_active}`;
  const slideInactive = `${style.slide_inactive}`;
  const slideInFromRight = `${style.slide_in__from_right}`;
  const slideInFromLeft = `${style.slide_in__from_left}`;
  const slideInDone = `${style.slide_in__done}`;
  const slideOutToRight = `${style.slide_out__to_right}`;
  const slideOutToLeft = `${style.slide_out__to_left}`;

  async function activeNextSlide(startPosition) {
    if (swapper.next === 1) {
      setDiv2Nav(nextNav);
    } else {
      setDiv1Nav(nextNav);
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
      if (currNav < nextNav) {
        return [slideInFromRight, slideOutToLeft];
      } else {
        return [slideInFromLeft, slideOutToRight];
      }
    };
    const pos = await init();
    await activeNextSlide(pos[0]);
    await sleep(50);
    await slideOutCurrentSlide(pos[1]);
    await sleep(50);
    await slideInNextSlide();
    await sleep(500);
    await deactivateCurrentSlide();
    await swapDiv();
    await setCurrNav(nextNav);
  }

  async function swapDiv() {
    const tmpCurr = swapper.curr;
    const tmpNext = swapper.next;
    setSwapper({ curr: tmpNext, next: tmpCurr });
  }

  useEffect(() => {
    if (nextNav !== currNav) {
      updateSlideAnimation();
    }
  }, [nextNav]);

  return (
    <div className={`${style.container}`}>
      <div className={`${style.body}`}>
        <div ref={refs[0]} className={`${slideActive} ${slideInDone}`}>
          {props.children[div1Nav]}
        </div>
        <div ref={refs[1]} className={`${slideInactive}`}>
          {props.children[div2Nav]}
        </div>
      </div>
      <HorizontalIndicator
          total={props.children.length}
          index={currNav}
          notify={setNextNav}
        />
    </div>
  );
}

export default InnerSlides;

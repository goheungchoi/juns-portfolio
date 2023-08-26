import { useState, useEffect, useRef } from 'react'

import Sleep from '../Sleep.js'

import Style from '../../style/main_modules/Nav.module.css'


function Nav(props) {
  const [index, setIndex] = useState(0);
  const listItemRefs = [useRef(), useRef(), useRef(), useRef()];  // refs of nav list items.
  const underlineRefs = [useRef(), useRef(), useRef(), useRef()]; // refs for underline divs animation.

  /**
   * Designates CSS class names corresponding to their relative positions.
   * For example, if the index of the selected item is greater than 
   * the index of the current item, the underline should move from left
   * to right, and vice versa. Simply, for the current index, 
   * `Nav_underline` to `Nav_underline_to_left` or `Nav_underline_to_right`,
   * and for the selected index, `Nav_underline_from_right` or 
   * `Nav_underline_from_left` to `Nav_underline`.
   * These CSS initial states will help indicating which direction the
   * underlines should move to or from.
   * @param {number} i The index of the selected item
   */
  const initiateClassNames = async(i) => {
    if (i < index) {
      underlineRefs[index].current.className = Style.Nav_underline_to_left;
      underlineRefs[i].current.className = Style.Nav_underline_from_right;
    } else {
      underlineRefs[index].current.className = Style.Nav_underline_to_right;
      underlineRefs[i].current.className = Style.Nav_underline_from_left;
    }
  }


  /**
   * Finalizes the animation of underline movement and 
   * bolds the font of the selected item div.
   * @param {number} i The index of the selected item
   */
  const finalizeClassNames = async(i) => {
    listItemRefs[i].current.className = Style.SelectedItem;
    listItemRefs[index].current.className = null;
    underlineRefs[i].current.className = Style.Nav_underline;
  }

  /**
   * Plays the animation for smooth user interaction with 
   * the nav bar, and notify the change of current page index.
   * @param {number} i The index of the selected item
   * @returns 
   */
  const selectNavItem = async(i) => {
    console.log(i);             // Debugging purpose.
    if (index === i) return;    // No animation when curr index == selected index.

    await initiateClassNames(i);    // Designates appropriate CSS states and move the underline of the curr item.
    await Sleep(50);                // Sleeps shortly for the smooth animation of the selected item.
    await finalizeClassNames(i);    // Moves the underlines of the selected item.
    await setIndex(i);              // Sets the state of `index`.
    await props.notifyItemChange(i);// Notifies to the parent component, `Main`.
  }

  // useEffect(() => {
  //   refs[index].current.className = Style.Nav_underline;
  // }, [index])

  return (
    <div className={Style.Body}>
      <div 
        className={Style.Logo}
        onClick={()=>selectNavItem(0)}
      >
        Jun's Portfolio
      </div>

      <div className={Style.Nav}>
        <ul>
          <li 
            onClick={()=>selectNavItem(0)}
            className={Style.SelectedItem}
            ref={listItemRefs[0]}
          >
            HOME
            <div 
              className={Style.Nav_underline}
              ref={underlineRefs[0]}
            >
            </div>
          </li>
          <li 
            onClick={()=>selectNavItem(1)}
            ref={listItemRefs[1]}
          >
            ABOUT
            <div ref={underlineRefs[1]}></div>
          </li>
          <li 
            onClick={()=>selectNavItem(2)}
            ref={listItemRefs[2]}
          >
            WORK
            <div ref={underlineRefs[2]}></div>
          </li>
          <li 
            onClick={()=>selectNavItem(3)}
            ref={listItemRefs[3]}
          >
            CONTACT
            <div ref={underlineRefs[3]}></div>
          </li>
        </ul>
      </div>
    </div>
  )


}

export default Nav;
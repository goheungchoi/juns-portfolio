import style from "../../../style/main_modules/sub/HorizontalIndicator.module.css";
import React, { useEffect, useState, useMemo } from "react";
import { useRef } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";

function HorizontalIndicator({ total, index, notify }) {
  const [currIndex, setCurrIndex] = useState(index);
  const refs = useRef(new Array(total).fill(null).map(() => React.createRef()));
  const dots = useMemo(() => {
    console.log("Dots are created!");
    return refs.current.map((ref, i) => (
      <div
        key={i}
        className={`${style.dot} ${i === index ? style.active_dot : null}`}
        ref={ref}
      ></div>
    ));
  }, [total]);

  const increaseIndexBy = (scale) => {
    const tempIndex = currIndex + scale;
    const nextIndex =
      tempIndex < 0 ? 0 : tempIndex > total - 1 ? total - 1 : tempIndex;
    notify(nextIndex);
  };

  useEffect(() => {
    if (currIndex !== index) {
      (async () => {
        const currDot = refs.current[currIndex].current;
        await currDot.classList.remove(style.active_dot);
        const nextDot = refs.current[index].current;
        await nextDot.classList.add(style.active_dot);
        await setCurrIndex(index);
      })();
    }
  }, [index, currIndex]);

  return (
    <div className={style.body}>
      <div
        className={`${style.arrow}`}
        onClick={() => increaseIndexBy(-1)}
      >
        <FontAwesomeIcon icon={faChevronLeft} size="sm" />
      </div>

      {dots}

      <div
        className={`${style.arrow}`}
        onClick={() => increaseIndexBy(1)}
      >
        <FontAwesomeIcon icon={faChevronRight} size="sm" />
      </div>
    </div>
  );
}

export default HorizontalIndicator;

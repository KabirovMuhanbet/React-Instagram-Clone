import styles from "../../../styles/Stories.module.scss";
import React, { useRef, useState } from "react";
import Story from "./Story";
import cn from "classnames"

function Stories() {

   const [items, setItems] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]);
   const slider = useRef(null);
   const [prev, setPrev] = useState(false);
   const [next, setNext] = useState(false);

   let position = 0;
   const prevHandler = () => {
      if (position == 0) {
         setPrev(true)
      } else {
         position += 316;
         setPrev(false)
         slider.current.childNodes.forEach(elem => {
            elem.style = `transform: translateX(${position}px)`;
         })
      }
   }
   const nextHandler = () => {
      if (position <= -(items.length - 6) * 316 + 316) {
         setNext(true);
         setPrev(false);
      } else if (position < -600) {
         setNext(true);
      } else {
         setPrev(false);
         position -= 316;
         slider.current.childNodes.forEach(elem => {
            elem.style = `transform: translateX(${position}px)`
         });
      }
   }
   return (
      <div className={styles.stories}>
         <div className={styles.scroll} ref={slider}>
            {
               items.map(() => {
                  return (
                     <Story />
                  )
               })
            }
         </div>
         <button className={cn(styles.scrollBtn, styles.scrollBtn_prev)} onClick={prevHandler}>
            {`<`}
         </button>
         <button className={cn(styles.scrollBtn, styles.scrollBtn_next)} onClick={nextHandler}>
            {`>`}
         </button>
      </div>
   )
}
export default Stories;
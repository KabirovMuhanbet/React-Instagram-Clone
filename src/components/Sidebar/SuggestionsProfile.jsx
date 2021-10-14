import styles from "../../styles/SuggestionsProfile.module.scss";
import React, { useState } from "react";
import Profile from "./Profile";

function SuggestionsProfile() {
   const [text, setText] = useState("Подписаться");
   let handler = (event) => {
      event.preventDefault();
      if (text === "Подписаться") {
         setText("Подписки")
      } else {
         setText("Подписаться");
      }
   }
   return (
      <div className={styles.suggestionsProfile}>
         <Profile iconSize="medium" caption="Подписаны: cristiano и 2" storyBorder={true} />
         <button className={styles.btn} onClick={handler}>{text}</button>
      </div>
   )
}

export default SuggestionsProfile;
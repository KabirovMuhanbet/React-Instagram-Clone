import styles from "../../styles/CardsItem.module.scss";
import Profile from "../Sidebar/Profile";
import { ReactComponent as Dots } from "../../images/dots.svg";
import { ReactComponent as Smile } from "../../images/smile.svg";
import CardsMenu from "./CardsMenu";
import CardsComments from "./CardsComments";
import React, { useState } from "react";

function CardsItem(props) {
   const {
      storyBorder,
      image,
      hours,
      likedByText,
      likedByNumber,
      comments
   } = props;

   const [comment, setComment] = useState([]);
   const myRef = React.createRef();
   let addPost = () => {
      let currentComment = myRef.current.value;
      let commentValue = [...comment, currentComment];
      setComment(commentValue);
      myRef.current.value = "";
   }

   return (
      <div className={styles.cardsItem}>
         <header className={styles.header}>
            <Profile iconSize="medium" storyBorder={storyBorder} />
            <button className={styles.button}><Dots className={styles.dots_icon} /></button>
         </header>
         <img className={styles.cardImage} src={image} alt="card image" />
         <CardsMenu />
         <div className={styles.likedBy}>
            <Profile iconSize="small" hideAccountName={true} />
            <span className={styles.likers}>
               Нравится <strong>{likedByText}</strong> и {" "}
               <strong>{`ещё ${likedByNumber}`}</strong>
            </span>
         </div>
         <div className={styles.comments}>
         {comments.map(comments => {
               return (
                  <div>
                     <CardsComments
                        key={comments.id}
                        accountName={comments.user}
                        comments={comments.text}
                     />
                  </div>
               );
            })}
            {comment.map((item, index) => {
               return (
                  <div>
                     <CardsComments
                        key={index}
                        accountName="sugaruzi"
                        comments={item}
                     />
                  </div>
               );
            })}
         </div>
         <div className={styles.timePosted}>{hours} часов назад</div>
         <div className={styles.addComment}>
            <Smile className={styles.smile} />
            <input className={styles.commentText} type="text"
               placeholder="Добавьте комментарий..." ref={myRef} />
            <button className={styles.postBtn} onClick={addPost}>Опубликовать</button>
         </div>
      </div>
   )
}

export default CardsItem;
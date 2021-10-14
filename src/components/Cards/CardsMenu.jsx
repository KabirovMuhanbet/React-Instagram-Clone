import styles from "../../styles/CardsMenu.module.scss";
import { ReactComponent as Like } from "../../images/cardLike.svg";
import { ReactComponent as Comment } from "../../images/comment.svg";
import { ReactComponent as Repost } from "../../images/repost.svg";
import { ReactComponent as Save } from "../../images/save.svg";
function CardsMenu() {
   return (
      <div className={styles.cardsMenu}>
         <div className={styles.emotions}>
            <Like className={styles.icon}/>
            <Comment className={styles.icon}/>
            <Repost className={styles.icon}/>
         </div>
         <Save className={styles.save_icon}/>
      </div>
   )
}

export default CardsMenu;
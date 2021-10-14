import styles from "../../styles/DirectUsers.module.scss";
import { ReactComponent as AllMessage } from "../../images/allMessage.svg";
import { ReactComponent as ArrowDown } from "../../images/arrowDown.svg";
import cn from "classnames";
import Profile from "../Sidebar/Profile";
function DirectUsers() {
   const userItems = [1,2,3,4,5,6,7,8,9,10,11,12];
   return (
      <div className={styles.directUsers}>
         <div className={styles.changeAccount}>
            <button className={styles.accountBtn}>
               <span className={styles.accountName}>sugaruzi</span>
               <ArrowDown />
            </button>
            <button className={styles.messagesBtn}><AllMessage /></button>
         </div>
         <div className={styles.changeMessages}>
            <a className={cn(styles.filterBtn, styles.active, styles.mainMessages)} href="#">
               Основное
            </a>
            <a className={cn(styles.filterBtn, styles.allMessages)} href="#">Общее</a>
         </div>
         <div className={styles.users}>
            {
               userItems.map(()=>{
                  return <Profile iconSize="big" caption="В сети 1ч.назад"/>
               })
            }
         </div>
      </div>
   )
}

export default DirectUsers;
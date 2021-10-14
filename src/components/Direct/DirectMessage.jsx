import styles from "../../styles/DirectMessage.module.scss";
import { ReactComponent as MessageImg } from "../../images/direct_icon.svg";

function DirectMessage(){
   return (
      <div className={styles.directMessage}>
         <MessageImg className={styles.messageIcon} />
         <h2 className={styles.messageTitle}>Ваши сообщения</h2>
         <p className={styles.messageText}>Отправляйте личные фото и сообщения другу или группе.</p>
         <button className={styles.messageBtn}>Отправить сообщение</button>
      </div>
   )
}

export default DirectMessage;
import styles from "../../styles/ProfileHeader.module.scss";
import avatar from "../../images/madara.jpg";
import {ReactComponent as Settings} from "../../images/settings.svg";

function ProfileHeader(){
   return (
      <div className={styles.profileHeader}>
         <div className={styles.avatar}>
            <button className={styles.avatarBtn}>
               <img className={styles.avatarImg} src={avatar} alt="Сменить фото" />
            </button>
         </div>
         <div className={styles.profileInfo}>
            <div className={styles.sectionInfo}>
               <h1 className={styles.title}>sugaruzi</h1>
               <button className={styles.profileEdit}>Редактировать профиль</button>
               <button className={styles.profileSettings}><Settings/></button>
            </div>
            <ul className={styles.list}>
               <li className={styles.listItem}>
                  <a href="#"><span>999</span> публикаций</a>
               </li>
               <li className={styles.listItem}>
                  <a href="#"><span>10000000</span> подписчиков</a>
               </li>
               <li className={styles.listItem}>
                  <a href="#"><span>77</span> подписок</a>
               </li>
            </ul>
         </div>
      </div>
   )
}

export default ProfileHeader;
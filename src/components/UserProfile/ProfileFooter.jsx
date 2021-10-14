import styles from "../../styles/ProfileFooter.module.scss";

function ProfileFooter(){
   return (
      <div className={styles.profileFooter}>
         <ul className={styles.list}>
            <li className={styles.item}><a href="#">Информация</a></li>
            <li className={styles.item}><a href="#">Блог</a></li>
            <li className={styles.item}><a href="#">Вакансии</a></li>
            <li className={styles.item}><a href="#">Помощь</a></li>
            <li className={styles.item}><a href="#">API</a></li>
            <li className={styles.item}><a href="#">Конфиденциальность</a></li>
            <li className={styles.item}><a href="#">Условия</a></li>
            <li className={styles.item}><a href="#">Популярные аккаунты</a></li>
            <li className={styles.item}><a href="#">Хэштеги</a></li>
            <li className={styles.item}><a href="#">Места</a></li>
            <li className={styles.item}><a href="#">Instagram Lite</a></li>
         </ul>
         <div className={styles.copy}>
            <span>Русский</span>
            <span>© Instagram от Facebook, 2021</span>
         </div>
      </div>
   )
}

export default  ProfileFooter;
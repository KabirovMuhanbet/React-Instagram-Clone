import styles from "../../../styles/Footer.module.scss";
import FooterItem from "./FooterItem";
function Footer() {
   return (
      <div className={styles.footer}>
         <ul className={styles.list}>
            <FooterItem text="Информация"/>
            <FooterItem text="Помощь"/>
            <FooterItem text="Пресса"/>
            <FooterItem text="API"/>
            <FooterItem text="Вакансии"/>
            <FooterItem text="Конфиденциальность"/>
            <FooterItem text="Условия"/>
            <FooterItem text="Места"/>
            <FooterItem text="Популярные аккаунты"/>
            <FooterItem text="Хэштеги"/>
            <FooterItem text="Язык"/>
         </ul>
         <span className={styles.author}>
         © Kabirov Muhanbet, 2021
         </span>
      </div>
   )
}

export default Footer;
import styles from "../../styles/Navigation.module.scss";
import logo from "../../images/logo.png";
import searchIcon from "../../images/searchIcon.png";
import cancel from "../../images/cancel-button.png";
import Menu from "./Menu";
function Navigation(){
   return (
      <div className={styles.navigation}>
         <div className={styles.container}>
            <img className={styles.logo} src={logo} alt="logo" />
            <div className={styles.search}>
               <input className={styles.searchInput} placeholder="Поиск"/>
               <img className={styles.searchIcon} src={searchIcon} alt="searchIcon" />
               <img className={styles.cancelIcon} src={cancel} alt="cancelIcon" />
            </div>
            <Menu />
         </div>
      </div>
   )
}

export default Navigation;
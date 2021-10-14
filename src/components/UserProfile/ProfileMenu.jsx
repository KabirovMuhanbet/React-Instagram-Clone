import styles from "../../styles/ProfileMenu.module.scss";
import {ReactComponent as Pub} from "../../images/publications.svg";
import {ReactComponent as IGTV} from "../../images/igtv.svg";
import {ReactComponent as Save} from "../../images/save_small.svg";
import {ReactComponent as Mark} from "../../images/mark.svg";
import cn from "classnames"
function ProfileMenu(){
   return (
      <div className={styles.profileMenu}>
         <div className={styles.profileMenu_list}>
            <button className={cn(styles.profileMenu_btn, styles.active)}>
               <Pub />
               <span>Публикации</span>
            </button>
            <button className={styles.profileMenu_btn}>
               <IGTV />
               <span>IGTV</span>
            </button>
            <button className={styles.profileMenu_btn}>
               <Save />
               <span>Сохраненное</span>
            </button>
            <button className={styles.profileMenu_btn}>
               <Mark/>
               <span>Отметки</span>
            </button>
         </div>
      </div>
   )
}

export default ProfileMenu;
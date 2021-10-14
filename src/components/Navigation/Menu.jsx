import styles from "../../styles/Menu.module.scss";
import { ReactComponent as Home } from "../../images/home.svg";
import { ReactComponent as Messages } from "../../images/messages.svg";
import { ReactComponent as Compas } from "../../images/compas.svg";
import { ReactComponent as Likes } from "../../images/likes.svg";
import image from "../../images/madara.jpg";
import ProfileIcon from "./ProfileIcon";
import { NavLink } from "react-router-dom";

function Menu(){
   return (
      <div className={styles.menu}>
         <NavLink to="/"><Home className={styles.menuIcon}/></NavLink>
         <NavLink to="/direct"><Messages className={styles.menuIcon}/></NavLink>
         <NavLink to="/explore"><Compas className={styles.menuIcon}/></NavLink>
         <Likes className={styles.menuIcon}/>
         <NavLink to="/profile"><ProfileIcon iconSize="small" image={image} storyBorder="true"/></NavLink>
      </div>
   )
}

export default Menu;
import styles from "../../styles/SidebarProfile.module.scss";
import Profile from './Profile';
import { NavLink } from 'react-router-dom';

function SidebarProfile(props) {
   const {
      username,
      iconSize,
      storyBorder,
      image,
   } = props;
   return (
      <div className={styles.sidebarProfile}>
         <NavLink to="/profile" className={styles.link}><Profile
            username={username}
            iconSize={iconSize}
            storyBorder={storyBorder}
            image={image} /></NavLink>
         <button className={styles.btn}>Переключиться</button>
      </div>

   )
}

export default SidebarProfile;
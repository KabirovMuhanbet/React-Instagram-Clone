import styles from "../../styles/UserProfile.module.scss";
import ProfileFooter from "./ProfileFooter";
import ProfileHeader from "./ProfileHeader";
import ProfileMenu from "./ProfileMenu";
import UserPosts from "./UserPosts";

function UserProfile(){
   return (
      <div className={styles.userProfile}>
         <ProfileHeader />
         <ProfileMenu />
         <UserPosts image="https://picsum.photos/300/300"/>
         <ProfileFooter />
      </div>
   )
}

export default UserProfile;
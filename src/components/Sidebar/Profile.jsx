import "../../styles/Profile.scss";
import ProfileIcon from "../Navigation/ProfileIcon";
import users from "../../data/users";

function Profile(props) {
   const {
      username,
      hideAccountName,
      storyBorder,
      iconSize,
      image,
      caption,
   } = props;

   let accountName = username ? username : users[Math.floor(Math.random() * users.length)].username

   return (
      <div className="profile">
         <ProfileIcon
            iconSize={iconSize}
            storyBorder={storyBorder}
            image={image}
         />
         {accountName && !hideAccountName && (
            <div className="textContainer">
               <span className="accountName">{accountName}</span>
               <span className="caption">{caption}</span>
            </div>
         )}
      </div>
   )
}
export default Profile;
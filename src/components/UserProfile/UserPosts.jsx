import styles from "../../styles/UserPosts.module.scss";

function UserPosts(props){
   const{image}=props;
   const arr = [1,2,3,4,5];
   return (
      <div className={styles.userPosts}>
         {
            arr.map(e=>{
               return(
                  <div className={styles.postsItem}>
                     <img src={image} alt="image" />
                  </div>
               )
            })
         }
      </div>
   )
}

export default UserPosts;
import styles from "../../styles/Explore.module.scss";

function Explore(props){
   const {image} = props;
   const arr = [1,2,3,4,5,6,7,8,9,10,11,12];
   return (
      <div className={styles.explore}>
         {
            arr.map(e=>{
               return(
                  <div className={styles.exploreItem}>
                     <img src={image} alt="image" />
                  </div>
               )
            })
         }
      </div>
   )
}

export default Explore;
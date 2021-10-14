import styles from "../../styles/Direct.module.scss";
import DirectMessage from "./DirectMessage";
import DirectUsers from "./DirectUsers";

function Direct(){
   return (
      <div className={styles.direct}>
         <DirectUsers />
         <DirectMessage />
      </div>
   )
}

export default Direct;
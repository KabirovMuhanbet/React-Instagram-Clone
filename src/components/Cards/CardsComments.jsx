import styles from "../../styles/CardsComments.module.scss";

function CardsComments(props){
   const { accountName, comments} = props;
   return (
      <div className={styles.cardsComments}>
         <div className={styles.accountName}>{accountName}</div>
         <div className={styles.comments}>{comments}</div>
      </div>
   )
}

export default CardsComments;
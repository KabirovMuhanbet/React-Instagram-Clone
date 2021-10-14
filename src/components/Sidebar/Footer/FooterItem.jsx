import styles from "../../../styles/FooterItem.module.scss";
function FooterItem(props) {
   return (
      <li className={styles.list_item}>
         <a href="/" className={styles.link}>{props.text}</a>
      </li>
   )
}
export default FooterItem;
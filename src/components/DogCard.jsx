import styles from "./DogCard.module.css";
import { format } from "timeago.js";

const DogCard = ({ dog }) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.card}>
        {/* <div className={styles.info}>
          <div className={styles.info1}> */}
        <h1 className={styles.h1}>Name:</h1>
        <p className={styles.p}> {dog.name}</p>
        <h1 className={styles.h1}>Breed:</h1>
        <p className={styles.p}>{dog.breed}</p>
        <h1 className={styles.h1}>Birthday:</h1>
        <p className={styles.p}>{dog.birthday}</p>
        <h1 className={styles.h1}>Age:</h1>
        <p className={styles.p}>{format(dog.birthday)}</p>
        {/* </div>
        </div> */}
      </div>
    </div>
  );
};
export default DogCard;

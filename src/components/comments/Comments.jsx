import Link from "next/link";
import styles from "./comments.module.css";
import Image from "next/image";
const Comments = () => {
  const status = "authenticated";
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Comments</h1>

      {status === "authenticated" ? (
        <div className={styles.write}>
          <textarea
            placeholder="Write a comment..."
            className={styles.input}
          ></textarea>
          <button className={styles.button}>Send</button>
        </div>
      ) : (
        <Link href="/login" className={styles.login}>
          Login to write a comment
        </Link>
      )}
      <div className={styles.comments}>
        <div className={styles.comment}>
          <div className={styles.user}>
            <Image
              src="/p1.jpeg"
              width={50}
              height={50}
              alt="avatar"
              className={styles.image}
            />
            <div className={styles.userInfo}>
              <span className={styles.userName}>Jhon Doe</span>
              <span className={styles.date}>25.11.24</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Comments;
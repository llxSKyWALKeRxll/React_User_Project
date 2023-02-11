import React from "react";
import styles from "./ErrorModal.module.css";

const ErrorModal = (props) => {

    const okayHandler = () => {
        console.log('clicked okay');
        props.onRemoveModal();
    };

  return (
    <div>
    <div className={styles.backdrop} onClick={okayHandler}/>
    <div className={styles.modal}>
      <header className={styles.header}>
        <h2>{props.title}</h2>
      </header>
      <div className={styles.content}>
        <p>{props.message}</p>
      </div>
      <footer className={styles.actions}>
        <button onClick={okayHandler} >Okay</button>
      </footer>
    </div>
    </div>
  );
};

export default ErrorModal;

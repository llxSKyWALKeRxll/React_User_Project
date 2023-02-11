import React from "react";
import styles from "./User.module.css";

const User = (props) => {

  const onDivClickHandler = () => {
    props.deleteUserById(props.userToAdd.id);
  };

  return (
    <div className={styles.user__class} onClick={onDivClickHandler}>
      <div className={styles.user__class_text_box}>
        {`${props.userToAdd.name} (${props.userToAdd.age} years old)`}
      </div>
    </div>
  );
};

export default User;

import React, { useState } from "react";
import ErrorModal from "./ErrorModal";
import styles from "./UserInputForm.module.css";

const UserInputForm = (props) => {
  const [username, setUsername] = useState("");
  const [userage, setUserage] = useState("");
  const [isError, setIsError] = useState(false);
  const [isAgeInvalid, setIsAgeInvalid] = useState(false);

  const nameChangeHandler = (event) => {
    setUsername(event.target.value);
    console.log(username);
  };

  const ageChangeHandler = (event) => {
    setUserage(event.target.value);
    console.log(userage);
  };

  const removeModalHandler = () => {
    setIsError(false);
    setIsAgeInvalid(false);
  };

  const formSubmitHandler = (event) => {
    event.preventDefault();
    if (username.trim().length === 0 || userage.trim().length === 0) {
      setIsError(true);
      return;
    }
    if (+userage < 1) {
      setIsAgeInvalid(true);
      return;
    }
    const newUser = {
      id: Math.random().toString(),
      name: username,
      age: userage,
    };
    props.formSubmitHandler(newUser);
    setUsername("");
    setUserage("");
  };

  let errorTitle = null;
  let errorMessage = null;
  let displayErrorModal = null;

  if (isError === true) {
    errorTitle = "Invalid input!";
    errorMessage = "Either name or age is missing from the input.";
    displayErrorModal = (
      <ErrorModal title={errorTitle} message={errorMessage} onRemoveModal={removeModalHandler} />
    );
  }

  if (isAgeInvalid === true) {
    errorTitle = "Invalid age!";
    errorMessage = "Entered age cannot be less than 1.";
    displayErrorModal = (
      <ErrorModal title={errorTitle} message={errorMessage} onRemoveModal={removeModalHandler} />
    );
  }

  console.log(displayErrorModal);

  return (
    <div>
      {displayErrorModal}
      <form className={styles.main__form} onSubmit={formSubmitHandler}>
        <label>Username</label>
        <input
          type="text"
          placeholder="Enter your username..."
          value={username}
          onChange={nameChangeHandler}
        ></input>
        <label>Age (Years)</label>
        <input
          type="text"
          placeholder="Enter your age..."
          value={userage}
          onChange={ageChangeHandler}
        ></input>
        <input type="submit" value="Add User"></input>
      </form>
    </div>
  );
};

export default UserInputForm;

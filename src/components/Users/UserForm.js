import { useState } from "react";

import Card from "../UI/Card";
import Button from "../UI/Button";
import classes from "./Userform.module.css";
import ErrorModal from "../UI/ErrorModal";

const UserForm = (props) => {
  const [enteredUsername, setEnteredUsername] = useState("");
  const [enteredAge, setEnteredAge] = useState("");
  const [error, setError] = useState();

  const submitHandler = (event) => {
    event.preventDefault();

    if (enteredUsername.trim().length === 0 || enteredAge.trim().length === 0) {
      setError({
        header: "Invalid input",
        message: "Please enter a valid name and age (non-empty values)",
      });
      return;
    }
    // '+' before enteredAge cast it to an int
    if (+enteredAge < 1) {
      setError({
        header: "Invalid Age",
        message: "Please enter a valid age (>0).",
      });
      return;
    }

    const newUser = {
      id: Math.random().toString(),
      username: enteredUsername,
      age: enteredAge,
    };

    props.onNewUser(newUser);

    setEnteredUsername("");
    setEnteredAge("");
  };

  const usernameChangeHandler = (event) => {
    setEnteredUsername(event.target.value);
  };

  const ageChangeHandler = (event) => {
    setEnteredAge(event.target.value);
  };

  const errorHandler = () => {
    setError(null);
  };

  return (
    <div>
      {error && (
        <ErrorModal
          header={error.header}
          message={error.message}
          onConfirm={errorHandler}
        />
      )}
      <Card className={classes.input}>
        <form onSubmit={submitHandler}>
          <label htmlFor="username">Username</label>
          <input
            id="username"
            type="text"
            value={enteredUsername}
            onChange={usernameChangeHandler}
          ></input>
          <label htmlFor="age">Age (Years)</label>
          <input
            id="age"
            type="number"
            value={enteredAge}
            onChange={ageChangeHandler}
          ></input>
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </div>
  );
};

export default UserForm;

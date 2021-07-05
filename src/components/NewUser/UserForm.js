import { useState } from "react";

import Card from "../UI/Card";
import Button from "../UI/Button";
import classes from "./Userform.module.css";

const UserForm = (props) => {
  const [enteredUsername, setEnteredUsername] = useState("");
  const [enteredAge, setEnteredAge] = useState("");

  const usernameChangeHandler = (event) => {
    setEnteredUsername(event.target.value);
  };

  const ageChangeHandler = (event) => {
    setEnteredAge(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();

    if (enteredUsername.trim().length === 0 || enteredAge.trim().length === 0) {
      return;
    }
    // '+' before enteredAge cast it to an int
    if (+enteredAge < 1) {
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
    console.log(enteredUsername, enteredAge);
  };

  return (
    <Card className={classes.input}>
      <form onSubmit={submitHandler}>
        <div>
          <div>
            <label htmlFor="username">Username</label>
            <input
              id="username"
              type="text"
              value={enteredUsername}
              onChange={usernameChangeHandler}
            ></input>
          </div>
          <div>
            <label htmlFor="age">Age (Years)</label>
            <input
              id="age"
              type="number"
              value={enteredAge}
              onChange={ageChangeHandler}
            ></input>
          </div>
          <div>
            <Button type="submit">Add User</Button>
          </div>
        </div>
      </form>
    </Card>
  );
};

export default UserForm;

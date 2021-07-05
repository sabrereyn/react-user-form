import { useState } from "react";

import Card from "../UI/Card";
import Button from "../UI/Button";
import classes from "./Userform.module.css";

const UserForm = () => {
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

    const newUser = {
      Username: enteredUsername,
      Age: enteredAge,
    };

    console.log(newUser);
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

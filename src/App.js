import { useState } from "react";
import UserForm from "./components/Users/UserForm";
import Users from "./components/Users/Users";

const DUMMY_USERS = [
  {
    id: 1,
    username: "Arya",
    age: 29,
  },
  {
    id: 2,
    username: "Jasper",
    age: 25,
  },
  {
    id: 3,
    username: "Kumbaya",
    age: 99,
  },
];

function App() {
  // Web application is initialized with dummy list above on starting up (placed into users)
  const [users, setUser] = useState(DUMMY_USERS);

  // Handles inputting new users from UserForm.js into users in useState above
  const addUserHandler = (user) => {
    setUser((prevUser) => {
      // Input previous users information after adding new user
      return [user, ...prevUser];
    });
  };

  return (
    <div>
      <UserForm onNewUser={addUserHandler} />
      <Users items={users} />
    </div>
  );
}

export default App;

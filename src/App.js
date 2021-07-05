import { useState } from "react";
import UserForm from "./components/Users/UserForm";
import Users from "./components/Users/Users";

let usersList = [
  {
    id: 1,
    username: "Sam",
    age: 29,
  },
  {
    id: 2,
    username: "Sabre",
    age: 25,
  },
  {
    id: 3,
    username: "Kumbaya",
    age: 99,
  },
];

function App() {
  const [users, setUser] = useState(usersList);

  const addUserHandler = (user) => {
    setUser((prevUser) => {
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

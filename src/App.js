import UserForm from "./components/NewUser/UserForm";
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
  return (
    <div>
      <UserForm />
      <Users items={usersList} />
    </div>
  );
}

export default App;

import UsersItems from "./UsersItems";

const UsersList = (props) => {
  if (props.items.length === 0) {
    return <h2>Found no users.</h2>;
  }

  return (
    <ul>
      {props.items.map((user) => (
        <UsersItems key={user.id} username={user.username} age={user.age} />
      ))}
    </ul>
  );
};

export default UsersList;

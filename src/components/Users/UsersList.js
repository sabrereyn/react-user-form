import UsersItems from "./UsersItems";

import Card from "../UI/Card";
import classes from "./UsersList.module.css";

const UsersList = (props) => {
  if (props.items.length === 0) {
    return <h2>Found no users.</h2>;
  }

  return (
    <Card className={classes.users}>
      <ul>
        {props.items.map((user) => (
          <UsersItems key={user.id} username={user.username} age={user.age} />
        ))}
      </ul>
    </Card>
  );
};

export default UsersList;

const UsersItems = (props) => {
  return (
    <li>
      <div>
        {props.username} ({props.age} years old)
      </div>
    </li>
  );
};

export default UsersItems;

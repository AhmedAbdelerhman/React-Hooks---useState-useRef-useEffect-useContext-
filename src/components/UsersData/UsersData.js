import style from "./UsersData.module.css";
import Card from "../UI/Card";

const UsersData = (props) => {
    if(props.users.length ===0)
    {
        return;
    }
  return (
    <Card>
      <ul className={style.list}> 
        {props.users.map((user) => {
         return <li key={user.id}>{ user.username} ({user.age} years old) </li>;
        })}
      </ul>
    </Card>
  );
};
export default UsersData;

import css from "./FriendEl.module.css";
import { friendsProps } from "../FriendsList/FriendsList";

const FriendEl = ({ avatar, name, isOnline }: friendsProps) => {
  return (
    <li className={css.item}>
      <span
        className={css.status}
        style={{ backgroundColor: isOnline ? "red" : "green" }}
      ></span>
      <img className="avatar" src={avatar} alt="User avatar" width="48" />
      <p className={css.name}>{name}</p>
    </li>
  );
};

export default FriendEl;

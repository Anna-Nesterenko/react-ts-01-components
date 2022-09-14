import css from "./FriendsList.module.css";
import FriendEl from "../FriendEl/FriendEl";

interface FriendsListProps {
  friends: any;
}

export interface friendsProps {
  id?: string;
  isOnline: boolean;
  name: string;
  avatar: string;
}

const FriendsList = ({ friends }: FriendsListProps) => {
  return (
    <ul className={css.friendList}>
      {friends.map(({ avatar, name, isOnline, id }: friendsProps) => (
        <FriendEl key={id} name={name} isOnline={isOnline} avatar={avatar} />
      ))}
    </ul>
  );
};

export default FriendsList;

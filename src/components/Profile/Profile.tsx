import css from "./Profile.module.css";
import getRandomHexColor from "../../util/getRandomHexColor";
import ProfileStats from "../ProfileStats/ProfileStats";

interface ProfileProps {
  avatar: string;
  tag: string;
  location: string;
  name: string;
  stats: any;
}

const Profile = ({ name, tag, location, avatar, stats }: ProfileProps) => {
  return (
    <div
      className={css.profile}
      style={{ backgroundColor: getRandomHexColor() }}
    >
      <div className={css.description}>
        <img
          className={css.avatar}
          src={avatar}
          alt="User avatar"
          width="180"
        />
        <p className={css.name}>{name}</p>
        <p className={css.tag}>@{tag}</p>
        <p className={css.location}>{location}</p>
      </div>
      <ProfileStats stats={stats} />
    </div>
  );
};

export default Profile;

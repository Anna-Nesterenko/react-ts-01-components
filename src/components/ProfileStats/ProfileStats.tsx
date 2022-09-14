import css from "./ProfileStats.module.css";

interface ProfilePropsStats {
  stats: {
    followers: number;
    views: number;
    likes: number;
  };
}

const ProfileStats = ({ stats }: ProfilePropsStats) => {
  return (
    <ul className={css.stats}>
      <li>
        <span className={css.label}>Followers</span>
        <span className={css.quantity}>{stats.followers}</span>
      </li>
      <li>
        <span className={css.label}>Views</span>
        <span className={css.quantity}>{stats.views}</span>
      </li>
      <li>
        <span className={css.label}>Likes</span>
        <span className={css.quantity}>{stats.likes}</span>
      </li>
    </ul>
  );
};

export default ProfileStats;

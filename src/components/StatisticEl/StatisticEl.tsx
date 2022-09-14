import css from "./StatisticEl.module.css";
import getRandomHexColor from "../../util/getRandomHexColor";
import { statsProps } from "../Statistic/Statistic";

const StatEl = ({ label, percentage }: statsProps) => {
  return (
    <li className={css.item} style={{ backgroundColor: getRandomHexColor() }}>
      <span className={css.label}>{label}</span>
      <span className={css.percentage}>{percentage}%</span>
    </li>
  );
};

export default StatEl;

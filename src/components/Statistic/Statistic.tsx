import css from "./Statistic.module.css";
import StatisticEl from "../StatisticEl/StatisticEl";

interface StatisticsProps {
  title?: string;
  stats: any;
}

export interface statsProps {
  id?: string;
  label: string;
  percentage: string;
}

const Statistics = ({ title, stats }: StatisticsProps) => {
  return (
    <section className={css.statistics}>
      {title && <h2 className={css.title}>{title}</h2>}

      <ul className={css.stats}>
        {stats.map(({ id, label, percentage }: statsProps) => (
          <StatisticEl key={id} label={label} percentage={percentage} />
        ))}
      </ul>
    </section>
  );
};
export default Statistics;

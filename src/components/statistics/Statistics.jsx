import css from './Statistics.module.css';
import { getRandomHexColor } from './getRandomColor';

export const Statistics = ({ title = false, stats }) => {
    return (
    <section className={css.statistics}>
    {title && <h2 className={css.title}>{title}</h2>}

    <ul className={css.statList}>
    {stats.map( stat => (
      <li
        key={stat.id}
        className={css.item}
        style={{ backgroundColor: getRandomHexColor() }}
      >
      <span className={css.label}>{stat.label}</span>
      <span className={css.percentage}>{stat.percentage}</span>
    </li>    
     ))
        }
  </ul>
</section>
    )
}
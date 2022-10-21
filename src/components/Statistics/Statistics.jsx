import css from './Statistics.module.css';
import { getRandomHexColor } from 'utils/getRandomColor';
//import PropTypes from 'prop-types';

export const Statistics = ({title, stats}) => {
    return (<section className={css.statistics}>
    {title ? (<h2 className={css.title}>{title}</h2>) : null}

    <ul className={css.statList}>
        {stats.map(({id, label, percentage}) => (
            <li key={id} className={css.item} style={{backgroundColor: `${getRandomHexColor()}`}}>
        <span className={css.label}>{label}%</span>
        <span className={css.percentage}>{percentage}%</span>
             </li>
        )        
        )}
    </ul>
  </section>)
}


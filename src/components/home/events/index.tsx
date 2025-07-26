import classNames from 'classnames';

import { eventList } from '../content';
import styles from './homeEvent.module.css';

export function HomeEventList() {
  return (
    <section className={styles.section}>
      <div className={classNames(styles.heading, 'heading3')}>
        We got stuff to do today
      </div>
      <ul className={styles.bareList}>
        {eventList.map((event, ind) => {
          return (
            <li key={ind} className={styles.listItem}>
              <div className={styles.row}>
                <div className={classNames(styles.project, 'heading4')}>
                  {event.project} :
                </div>
                <div className="heading5">{event.item}</div>
              </div>
              <div className={styles.timeRow}>
                <span className="bodyText1">{event.time}</span>
                {event.vendor ? (
                  <span className="bodyText1">: {event.vendor}</span>
                ) : null}
              </div>
            </li>
          );
        })}
      </ul>
    </section>
  );
}

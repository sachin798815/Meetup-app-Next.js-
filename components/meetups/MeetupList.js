import MeetupItem from './MeetupItem';
import classes from './MeetupList.module.css';

function MeetupList({ meetups = [] }) {
  return (
    <section className={classes.container} aria-labelledby="meetup-heading">
      <h2 id="meetup-heading" className={classes.heading}>Upcoming Meetups</h2>
      {meetups.length === 0 ? (
        <p className={classes.empty}>No meetups available. Stay tuned for updates!</p>
      ) : (
        <>
          <p className={classes.count}>Total Meetups: {meetups.length}</p>
          <ul className={classes.list}>
            {meetups.map(({ id, ...meetupProps }) => (
              <li key={id} className={classes.item}>
                <MeetupItem id={id} {...meetupProps} />
              </li>
            ))}
          </ul>
        </>
      )}
    </section>
  );
}

export default MeetupList;

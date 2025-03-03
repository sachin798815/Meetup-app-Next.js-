import MeetupItem from './MeetupItem';
import classes from './MeetupList.module.css';

function MeetupList({ meetups = [] }) {
  return (
    <section className={classes.container} aria-labelledby="meetup-heading">
      <h2 id="meetup-heading" className={classes.heading}>Upcoming Meetups</h2>
      {meetups.length === 0 ? (
        <p className={classes.empty}>No meetups available. Check back soon!</p>
      ) : (
        <ul className={classes.list}>
          {meetups.map(({ id, ...meetupProps }) => (
            <MeetupItem key={id} id={id} {...meetupProps} />
          ))}
        </ul>
      )}
    </section>
  );
}

export default MeetupList;

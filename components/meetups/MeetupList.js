import MeetupItem from './MeetupItem';
import classes from './MeetupList.module.css';

function MeetupList({ meetups = [] }) {
  return (
    <section className={classes.container} aria-labelledby="meetup-heading">
      <h2 id="meetup-heading" className={classes.heading}>Upcoming Meetups</h2>
      {meetups.length === 0 ? (
        <p className={classes.empty}>No meetups available. Please check back later!</p>
      ) : (
        <ul className={classes.list}>
          {meetups.map((meetup) => (
            <MeetupItem key={meetup.id} {...meetup} />
          ))}
        </ul>
      )}
    </section>
  );
}

export default MeetupList;

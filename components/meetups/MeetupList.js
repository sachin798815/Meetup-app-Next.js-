import { useMemo } from 'react';
import MeetupItem from './MeetupItem';
import classes from './MeetupList.module.css';

function EmptyState() {
  return (
    <div role="status" className={classes.emptyContainer}>
      <img src="/no-meetups.svg" alt="No meetups available" className={classes.emptyImage} />
      <p className={classes.empty}>No meetups available. Stay tuned for updates!</p>
    </div>
  );
}

function MeetupListContent({ meetups }) {
  const meetupItems = useMemo(() =>
    meetups.map(({ id, ...meetupProps }) => (
      <li key={id} className={classes.item} role="listitem">
        <MeetupItem id={id} {...meetupProps} />
      </li>
    )), [meetups]);

  return (
    <>
      <p className={classes.count}>Total Meetups: {meetups.length}</p>
      <ul className={classes.list} role="list">{meetupItems}</ul>
    </>
  );
}

function MeetupList({ meetups = [] }) {
  return (
    <section className={classes.container} aria-labelledby="meetup-heading">
      <h2 id="meetup-heading" className={classes.heading}>Upcoming Meetups</h2>
      {meetups.length === 0 ? <EmptyState /> : <MeetupListContent meetups={meetups} />}
    </section>
  );
}

export default MeetupList;

import MeetupItem from './MeetupItem';
import classes from './MeetupList.module.css';

function MeetupList({ meetups }) {
  if (!meetups || meetups.length === 0) {
    return <p className={classes.empty}>No meetups available. Please check back later!</p>;
  }

  return (
    <section className={classes.container}>
      <ul className={classes.list}>
        {meetups.map(({ id, image, title, address }) => (
          <MeetupItem
            key={id}
            id={id}
            image={image}
            title={title}
            address={address}
          />
        ))}
      </ul>
    </section>
  );
}

export default MeetupList;

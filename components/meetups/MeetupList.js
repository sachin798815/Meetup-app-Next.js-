import MeetupItem from './MeetupItem';
import classes from './MeetupList.module.css';

function MeetupList({ meetups }) {
  if (!meetups || meetups.length === 0) {
    return <p className={classes.empty}>No meetups available.</p>;
  }

  return (
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
  );
}

export default MeetupList;

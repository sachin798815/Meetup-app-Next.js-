function MeetupItem({ id, title, address }) {
  return (
    <li>
      <h3>{title}</h3>
      <p>{address}</p>
      <button>Show Details</button>
    </li>
  );
}

export default MeetupItem;

import { useRouter } from 'next/router';

function MeetupItem({ id, title, address }) {
  const router = useRouter();

  const showDetailsHandler = () => {
    router.push(`/${id}`);
  };

  return (
    <li>
      <h3>{title}</h3>
      <p>{address}</p>
      <button onClick={showDetailsHandler}>Show Details</button>
    </li>
  );
}

export default MeetupItem;

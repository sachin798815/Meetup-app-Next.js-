import { useRouter } from 'next/router';
import Image from 'next/image';
import Card from '../ui/Card';

function MeetupItem({ id, image, title, address }) {
  const router = useRouter();

  const showDetailsHandler = () => {
    router.push(`/${id}`);
  };

  return (
    <li>
      <Card>
        <Image src={image} alt={title} width={400} height={250} />
        <h3>{title}</h3>
        <p>{address}</p>
        <button onClick={showDetailsHandler}>Show Details</button>
      </Card>
    </li>
  );
}

export default MeetupItem;

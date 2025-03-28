import { useRouter } from 'next/router';
import { useCallback } from 'react';
import Image from 'next/image';
import Card from '../ui/Card';
import ShowDetailsButton from '../ui/ShowDetailsButton';
import classes from './MeetupItem.module.css';

function MeetupItem({ id, image, title, address }) {
  const router = useRouter();

  const showDetailsHandler = useCallback(() => {
    router.push(`/${id}`);
  }, [id, router]);

  return (
    <li className={classes.item}>
      <Card>
        <article className={classes.content}>
          <div className={classes.image}>
            <Image src={image} alt={title} width={400} height={250} layout="responsive" />
          </div>
          <div className={classes.details}>
            <h3>{title}</h3>
            <address>{address}</address>
          </div>
          <div className={classes.actions}>
            <ShowDetailsButton onClick={showDetailsHandler} title={title} />
          </div>
        </article>
      </Card>
    </li>
  );
}

export default MeetupItem;

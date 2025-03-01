import { useRouter } from 'next/router';
import { useCallback } from 'react';
import Image from 'next/image';
import Card from '../ui/Card';
import classes from './MeetupItem.module.css';

function MeetupItem({ id, image, title, address }) {
  const router = useRouter();

  const showDetailsHandler = useCallback(() => {
    router.push(`/${id}`);
  }, [id, router]);

  return (
    <li className={classes.item}>
      <Card>
        <article className={classes.article}>
          <div className={classes.image}>
            <Image src={image} alt={title} width={400} height={250} layout="responsive" />
          </div>
          <div className={classes.content}>
            <h3>{title}</h3>
            <address>{address}</address>
          </div>
          <div className={classes.actions}>
            <button onClick={showDetailsHandler} className={classes.button}>
              Show Details
            </button>
          </div>
        </article>
      </Card>
    </li>
  );
}

export default MeetupItem;

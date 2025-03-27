import Image from 'next/image';

function MeetupItem({ id, image, title, address }) {
  const router = useRouter();

  const showDetailsHandler = () => {
    router.push(`/${id}`);
  };

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
            <button onClick={showDetailsHandler} className={classes.button} aria-label={`View details of ${title}`}>
              Show Details
            </button>
          </div>
        </article>
      </Card>
    </li>
  );
}

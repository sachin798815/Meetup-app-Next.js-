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
            <img src={image} alt={title} />
          </div>
          <div className={classes.details}>
            <h3>{title}</h3>
            <address>{address}</address>
          </div>
          <div className={classes.actions}>
            <button onClick={showDetailsHandler}>Show Details</button>
          </div>
        </article>
      </Card>
    </li>
  );
}

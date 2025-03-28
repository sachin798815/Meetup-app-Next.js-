import { memo } from 'react';
import classes from './ShowDetailsButton.module.css';

const ShowDetailsButton = memo(({ onClick, title }) => {
  return (
    <button onClick={onClick} className={classes.button} aria-label={`View details of ${title}`}>
      Show Details
    </button>
  );
});

export default ShowDetailsButton;

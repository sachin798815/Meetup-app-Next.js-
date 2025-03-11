import { useState } from 'react';
import Card from '../ui/Card';
import classes from './NewMeetupForm.module.css';

const NewMeetupForm = ({ onAddMeetup }) => {
  const [title, setTitle] = useState('');
  const [image, setImage] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    onAddMeetup({ title, image});
    setTitle('');
    setImage('');
  };

  return (
    <Card>
      <form className={classes.form} onSubmit={handleSubmit}>
        <div className={classes.control}>
          <label htmlFor="title">Title</label>
          <input id="title" type="text" value={title} onChange={(e) => setTitle(e.target.value)} required />
        </div>

        <div className={classes.control}>
          <label htmlFor="image">Image URL</label>
          <input id="image" type="url" value={image} onChange={(e) => setImage(e.target.value)} required />
        </div>

        <div className={classes.actions}>
          <button type="submit">Add Meetup</button>
        </div>
      </form>
    </Card>
  );
};

export default NewMeetupForm;

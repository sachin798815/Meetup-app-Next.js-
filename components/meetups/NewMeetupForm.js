import { useState } from 'react';
import Card from '../ui/Card';
import classes from './NewMeetupForm.module.css';

function NewMeetupForm({ onAddMeetup }) {
  const [formData, setFormData] = useState({
    title: '',
    image: '',
    address: '',
    description: ''
  });

  function handleChange(event) {
  }

  function handleSubmit(event) {
  }

  return (
    <Card>
      <form className={classes.form} onSubmit={handleSubmit}>
        {['title', 'image', 'address', 'description'].map(field => (
          <div key={field} className={classes.control}>
            <label htmlFor={field}>{field.charAt(0).toUpperCase() + field.slice(1)}</label>
            {field === 'description' ? (
              <textarea id={field} name={field} required rows="5" value={formData[field]} onChange={handleChange} />
            ) : (
              <input type={field === 'image' ? 'url' : 'text'} id={field} name={field} required value={formData[field]} onChange={handleChange} />
            )}
          </div>
        ))}
        <div className={classes.actions}>
          <button type="submit">Add Meetup</button>
        </div>
      </form>
    </Card>
  );
}

export default NewMeetupForm;

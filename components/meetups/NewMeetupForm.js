import { useState, useRef } from 'react';
import Card from '../ui/Card';
import classes from './NewMeetupForm.module.css';

const NewMeetupForm = ({ onAddMeetup }) => {
  const titleRef = useRef(null);

  const [formData, setFormData] = useState({
    title: '',
    image: '',
    address: '',
    description: ''
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onAddMeetup(formData);
    setFormData({ title: '', image: '', address: '', description: '' });
    titleRef.current.focus(); // Move focus back to the title input
  };

  const isFormValid = Object.values(formData).every((value) => value.trim() !== '');

  return (
    <Card>
      <form className={classes.form} onSubmit={handleSubmit}>
        <h2>Create a New Meetup</h2>

        {['title', 'image', 'address', 'description'].map((field, index) => (
          <div key={field} className={classes.control}>
            <label htmlFor={field}>{field.charAt(0).toUpperCase() + field.slice(1)}</label>
            {field === 'description' ? (
              <textarea
                id={field}
                name={field}
                required
                rows="5"
                value={formData[field]}
                onChange={handleChange}
              />
            ) : (
              <input
                ref={index === 0 ? titleRef : null}
                type={field === 'image' ? 'url' : 'text'}
                id={field}
                name={field}
                required
                value={formData[field]}
                onChange={handleChange}
              />
            )}
          </div>
        ))}

        <div className={classes.actions}>
          <button type="submit" disabled={!isFormValid}>
            Add Meetup
          </button>
        </div>
      </form>
    </Card>
  );
};

export default NewMeetupForm;

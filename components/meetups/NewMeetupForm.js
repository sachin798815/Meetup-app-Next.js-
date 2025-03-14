import { useState, useRef } from 'react';
import Card from '../ui/Card';
import classes from './NewMeetupForm.module.css';

const NewMeetupForm = ({ onAddMeetup }) => {
  const titleInputRef = useRef(null); // Ref for focusing on title input after form submission

  // State to manage form inputs
  const [formData, setFormData] = useState({
    title: '',
    imageUrl: '',
    address: '',
    description: ''
  });

  // Handle input changes and update state
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value
    }));
  };

  // Handle form submission
  const handleFormSubmit = (event) => {
    event.preventDefault();
    onAddMeetup(formData);
    setFormData({ title: '', imageUrl: '', address: '', description: '' });
    titleInputRef.current.focus(); // Move focus back to title input
  };

  // Check if all fields are filled
  const isFormValid = Object.values(formData).every((value) => value.trim() !== '');

  return (
    <Card>
      <form className={classes.form} onSubmit={handleFormSubmit}>
        <h2>Create a New Meetup</h2>

        {['title', 'imageUrl', 'address', 'description'].map((field, index) => (
          <div key={field} className={classes.control}>
            <label htmlFor={field}>{field.charAt(0).toUpperCase() + field.slice(1)}</label>
            {field === 'description' ? (
              <textarea
                id={field}
                name={field}
                required
                rows="5"
                value={formData[field]}
                onChange={handleInputChange}
              />
            ) : (
              <input
                ref={index === 0 ? titleInputRef : null}
                type={field === 'imageUrl' ? 'url' : 'text'}
                id={field}
                name={field}
                required
                value={formData[field]}
                onChange={handleInputChange}
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

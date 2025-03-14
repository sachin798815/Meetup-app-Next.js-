import { useState, useRef } from 'react';
import Card from '../ui/Card';
import classes from './NewMeetupForm.module.css';

const InputField = ({ field, value, onChange, inputRef }) => (
  <div className={classes.control}>
    <label htmlFor={field}>{field.charAt(0).toUpperCase() + field.slice(1)}</label>
    {field === 'description' ? (
      <textarea
        id={field}
        name={field}
        required
        rows="5"
        value={value}
        onChange={onChange}
      />
    ) : (
      <input
        ref={inputRef}
        type={field === 'imageUrl' ? 'url' : 'text'}
        id={field}
        name={field}
        required
        value={value}
        onChange={onChange}
      />
    )}
  </div>
);

const NewMeetupForm = ({ onAddMeetup }) => {
  const titleInputRef = useRef(null);

  const [formData, setFormData] = useState({
    title: '',
    imageUrl: '',
    address: '',
    description: ''
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    onAddMeetup(formData);
    setFormData({ title: '', imageUrl: '', address: '', description: '' });
    titleInputRef.current.focus();
  };

  const isFormValid = Object.values(formData).every((value) => value.trim() !== '');

  return (
    <Card>
      <form className={classes.form} onSubmit={handleFormSubmit}>
        <h2>Create a New Meetup</h2>

        {Object.keys(formData).map((field, index) => (
          <InputField
            key={field}
            field={field}
            value={formData[field]}
            onChange={handleInputChange}
            inputRef={index === 0 ? titleInputRef : null}
          />
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

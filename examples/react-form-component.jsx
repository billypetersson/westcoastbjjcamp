// Example: Use React only for complex components
// Keep most of the site in vanilla HTML/JS, add React for specific features

// registration-form.jsx - Only the form as a React component
import React, { useState } from 'react';

const RegistrationForm = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    beltLevel: '',
    dietary: '',
    tshirtSize: '',
    comments: ''
  });
  
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      await submitRegistration(formData);
      // Success handling
    } catch (error) {
      // Error handling
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="registration-form">
      {/* Form fields with React state management */}
      <div className="form-group">
        <label htmlFor="fullName">Full Name *</label>
        <input
          type="text"
          id="fullName"
          value={formData.fullName}
          onChange={(e) => setFormData({...formData, fullName: e.target.value})}
          required
        />
        {errors.fullName && <span className="error-message">{errors.fullName}</span>}
      </div>
      
      {/* More form fields... */}
      
      <button 
        type="submit" 
        className="submit-btn"
        disabled={isSubmitting}
      >
        {isSubmitting ? 'Submitting...' : 'Submit Registration'}
      </button>
    </form>
  );
};

export default RegistrationForm;
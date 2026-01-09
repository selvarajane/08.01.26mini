import { useState } from 'react';
import './FormStyles.css';

function SubscriptionForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    agreedToTerms: false
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Subscription submitted:', formData);
    alert('Subscription successful!');
    // Reset form
    setFormData({ name: '', email: '', agreedToTerms: false });
  };

  return (
    <div className="form-container">
      <h2>Subscription Form</h2>
      <form onSubmit={handleSubmit} className="form">
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
        </div>

        <div className="form-group checkbox-group">
          <label htmlFor="terms" className="checkbox-label">
            <input
              type="checkbox"
              id="terms"
              name="agreedToTerms"
              checked={formData.agreedToTerms}
              onChange={handleChange}
            />
            <span>I agree to the terms and conditions</span>
          </label>
        </div>

        <button
          type="submit"
          className="submit-btn"
          disabled={!formData.agreedToTerms}
        >
          Subscribe
        </button>
      </form>
    </div>
  );
}

export default SubscriptionForm;

import React, { useState } from 'react';
import submitApplication from '../api/submitApplication';
import './ApplicationForm.css'

const initialState = {
  name: '',
  email: '',
  technicalExposure: '',
  frontendExperience: '',
  familiarity: {
    django: false,
    rest: false,
    aws: false,
    postgres: false,
  },
  clarity: '',
  problemSolving: '',
  practicalApproach: '',
};

const ApplicationForm = () => {
  const [form, setForm] = useState(initialState);
  const [submitting, setSubmitting] = useState(false);
  const [message, setMessage] = useState('');

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (["django", "rest", "aws", "postgres"].includes(name)) {
      setForm({ ...form, familiarity: { ...form.familiarity, [name]: checked } });
    } else {
      setForm({ ...form, [name]: value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    setMessage('');
    try {
      await submitApplication(form);
      setMessage('Application submitted successfully!');
      setForm(initialState);
    } catch (err) {
      setMessage('Submission failed. Please try again.');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <>
    <div class="container">
    <form onSubmit={handleSubmit} className="application-form">
      <h2>Form Application</h2>
      <label>
        Name:
        <input name="name" value={form.name} onChange={handleChange} required />
      </label>
        <br></br>
      <label>
        Email:
        <input name="email" type="email" value={form.email} onChange={handleChange} required />
      </label>
        <br></br>
      <label>
        Technical Exposure and Frontend Experience:
        <textarea
          name="technicalExposure"
          value={form.technicalExposure}
          onChange={handleChange}
          required
        />
      </label>
        <br></br>
      <div>
        <label>Familiarity with:</label>
        <label>
          <input
            type="checkbox"
            name="django"
            checked={form.familiarity.django}
            onChange={handleChange}
          /> Django
        </label>
        <label>
          <input
            type="checkbox"
            name="rest"
            checked={form.familiarity.rest}
            onChange={handleChange}
          /> REST APIs
        </label>
        <label>
          <input
            type="checkbox"
            name="aws"
            checked={form.familiarity.aws}
            onChange={handleChange}
          /> AWS
        </label>
        <label>
          <input
            type="checkbox"
            name="postgres"
            checked={form.familiarity.postgres}
            onChange={handleChange}
          /> PostgreSQL
        </label>
      </div>
      
      <label>
        Overall clarity (Describe your approach to backend challenges):
        <input type='text'
          name="clarity"
          value={form.clarity}
          onChange={handleChange}
          required
        />
      </label>
        <br></br>
      <label>
        Problem-solving ability (Example of a problem you solved):
        <input type='text'
          name="problemSolving"
          value={form.problemSolving}
          onChange={handleChange}
          required
        />
      </label>
        <br></br>
      <label>
        Practical approach (Describe your practical approach):
        <input type="text"
          name="practicalApproach"
          value={form.practicalApproach}
          onChange={handleChange}
          required
        />
      </label>
        <br></br>
      <button type="submit" disabled={submitting}>
        {submitting ? "Submitting..." : "Submit Application"}
      </button>
      {message && <p>{message}</p>}
    </form>
    </div>
    </>
  );
};

export default ApplicationForm;
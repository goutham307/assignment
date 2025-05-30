const submitApplication = async (formData) => {
   
   await fetch('/api/apply', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(formData),
  });
  return new Promise((resolve) => setTimeout(resolve, 1000));
};

export default submitApplication;
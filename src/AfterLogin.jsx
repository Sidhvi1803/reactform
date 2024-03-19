import React, { useState } from 'react';

const AfterLogin = () => {
  const [isLoginClicked, setIsLoginClicked] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    gender: '',
    age: '',
  });
  const [submittedData, setSubmittedData] = useState(null);

  const handleLoginClick = () => {
    setIsLoginClicked(true);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value }); 
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmittedData(formData);
    setFormData({ name: '', gender: '', age: '' }); 
    setIsLoginClicked(false); 
  };

  return (
    <div className="App">
      {!isLoginClicked && <button onClick={handleLoginClick}>Login</button>}
      {isLoginClicked && (
        <form onSubmit={handleSubmit}>
          <h2>Enter Details</h2>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <label htmlFor="gender">Gender:</label>
          <select id="gender" name="gender" value={formData.gender} onChange={handleChange} required>
            <option value="">Select Gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
          <label htmlFor="age">Age:</label>
          <input
            type="number"
            id="age"
            name="age"
            value={formData.age}
            onChange={handleChange}
            required
          />
          <button type="submit">Submit</button>
        </form>
      )}

      {submittedData && ( 
        <div>
          <h2>Submitted Details</h2>
          <p>Name: {submittedData.name}</p>
          <p>Gender: {submittedData.gender}</p>
          <p>Age: {submittedData.age}</p>
        </div>
      )}
    </div>
  );
};

export default AfterLogin;
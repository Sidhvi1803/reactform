import React, { useState } from 'react';

const AfterLogin = () => {
  const [isLoginClicked, setIsLoginClicked] = useState(false);
  const [formData, setFormData] = useState({
    title: '',
    gender: '',
    firstname:'',
    middlename:'',
    lastname:'',
    DOB:'',
    age: '',
    smokerstatus:'',
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
    setFormData({ title: '', gender: '',firstname:'',middlename:'',lastname:'',DOB:'',age: '',smokerstatus:'',  }); 
    setIsLoginClicked(false); 
  };

  return (
    <div className="App">
      {!isLoginClicked && <button onClick={handleLoginClick}>Login</button>}
      {isLoginClicked && (
        <form onSubmit={handleSubmit}>
          <h2>Enter Details</h2>
          <label htmlFor="name" class="form" >Title</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
          
          <label htmlFor="gender" class="form" style={{ backgroundColor: 'lightblue', padding: '10px' }}>Gender:</label>
          <select id="gender" name="gender" value={formData.gender} onChange={handleChange} required>
            <option value="">Select Gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
            <label htmlFor="firstname" class="form">First Name</label>
          <input
            type="text"
            id="firstname"
            name="firstname"
            value={formData.firstname}
            onChange={handleChange}
            required
          />
            <label htmlFor="middlename" class="form">Middle Name</label>
          <input
            type="text"
            id="middlename"
            name="middlename"
            value={formData.middlename}
            onChange={handleChange}
            required
          />
            <label htmlFor="lastname" class="form">Last Name</label>
          <input
            type="text"
            id="lastname"
            name="lastname"
            value={formData.lastname}
            onChange={handleChange}
            required
          />
          <label htmlFor="DOB" class="form">Date Of Birth:</label>
          <input
            type="date"
            id="DOB"
            name="DOB"
            value={formData.DOB}
            onChange={handleChange}
            required
          />
          <label htmlFor="age" class="form">Age:</label>
          <input
            type="number"
            id="age"
            name="age"
            value={formData.age}
            onChange={handleChange}
            required
          />
          <label htmlFor="smokerstatus" class="form">Smoker  Status</label>
          <select id="smokerstatus" name="smokerstatus" value={formData.smokerstatus} onChange={handleChange} required>
            <option value="">Select Option</option>
            <option value="yes">Yes</option>
            <option value="no">No</option>
          </select>

          
          <button type="submit">Submit</button>
        </form>
      )}

      {submittedData && ( 
        <div>
          <h2>Submitted Details</h2>
          <p>Title: {submittedData.name}</p>
          <p>Gender: {submittedData.gender}</p>
          <p>First Name: {submittedData.firstname}</p>
          <p>Middle Name: {submittedData.middlename}</p>
          <p>Last Name: {submittedData.lastname}</p>
          <p>Date of Birth: {submittedData.DOB}</p>
          <p>Age: {submittedData.age}</p>
          <p>Smoker Status: {submittedData.smokerstatus}</p>

        </div>
      )}
    </div>
  );
};

export default AfterLogin;
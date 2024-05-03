import React, { useState } from 'react';
import axios from 'axios';

export default function SubmitAbstractEdit() {
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [formData, setFormData] = useState({
    id: '',
    name_of_conference: '',
    name: '',
    email: '',
    mobile: '',
    country: '',
    state: '',
    city: '',
    address: '',
    newReviewerName: '',
  });
  const handleChange = async (e) => {
    const { name, value } = e.target;
    if (name === 'name' && value === 'new') {
      setFormData({ ...formData, name: value, newReviewerName: ''});
    } else if (name === 'name') {
      const selectedId = value;
      await fetchData(selectedId);
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };
  const fetchData = async (id) => {
    try {
      const response = await axios.get(`http://127.0.0.1:8000/api/reviewerList/${id}`);
      const data = response.data.reviewerlist;
      setFormData({
        id: data.id,
        name: data.name,
        name_of_conference: data.name_of_conference,
        email: data.email,
        mobile: data.mobile,
        country: data.country,
        state: data.state,
        city: data.city,
        address: data.address,
      });
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://127.0.0.1:8000/api/reviewerStore', formData);
      console.log('Response:', response.data);
      setSuccessMessage(response.data.message);
      setFormData({
        name_of_conference: '',
        name: '',
        email: '',
        mobile: '',
        country: '',
        state: '',
        city: '',
        address: '',
        newReviewerName: ''
      });
    } catch (error) {
      console.error('Error submitting form:', error);
      setErrorMessage('Invalid response format');
    }
  };
  return (
    <div className='container mt-5'>
      <div className='row'>
        <div className="col-md-10">
          {successMessage && (
            <div className="alert alert-success mt-3" role="alert">
              {successMessage}
              <button type="button" className="close" onClick={() => setSuccessMessage(null)} aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
          )}
          {errorMessage && (
            <div className="alert alert-danger mt-3" role="alert">
              {errorMessage}
              <button type="button" className="close" onClick={() => setErrorMessage(null)} aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
          )}
        </div>
        <div className='col-md-10'>
          <div className='card' style={{ borderColor: '#fff', borderRadius: '10px', boxShadow: '0 4px 6px rgba(0,0,0,0.1)', overflowX: 'auto' }}>
            <div className='card-header py-3' style={{ position: 'sticky', top: 0, zIndex: 1 }}>
              <div className='row'>
                <div className='col-md-6'>
                  <h6 className="m-0 font-weight-bold text-primary mb-2"><i className="fa fa-shield mr-3"></i>Add Reviewer</h6>
                </div>
              </div>
            </div>
            <div className='card-body' style={{ overflowY: 'auto' }}>
              {formData && (
                <form onSubmit={handleSubmit} encType="multipart/form-data">
                  <input type="hidden" value={formData.id} />
                  <label>Select Conference</label>
                  <select name="name_of_conference" id='name_of_conference' value={formData.name_of_conference} onChange={handleChange} className="form-control input-lg mb-3">
                    <option value="">Select Conference Name</option>
                    <option value="19">Seminar on Role of Chemistry & Biology Interface in Drug Research</option>
                    <option value="23">26th ISCB International Conference (ISCBC-2020)</option>
                    <option value="22">28th ISCB International Conference (ISCBC-2024)</option>
                  </select>
                  <div className='row'>
                    <div className='col-md-6'>
                      <label>Name</label>
                      <select
                        id="name"
                        className="form-control input-lg mb-3"
                        value={formData.id}
                        name="name"
                        onChange={handleChange}
                      >
                        <option value="">Select Name</option>
                        <option value="1">virat</option>
                        <option value="2">ranbir</option>
                        <option value="3">zakir</option>
                        <option value="4">bhola</option>
                        <option value="new">New Reviewer</option>
                      </select>
                      {formData.name === 'new' && (
                        <input
                          type="text"
                          className="form-control input-lg mb-3"
                          placeholder="Enter new reviewer's name"
                          name="newReviewerName"
                          value={formData.newReviewerName}
                          onChange={handleChange}
                        />
                      )}
                    </div>
                    <div className='col-md-6'>
                      <label>Email</label>
                      <input type="email" value={formData.email} className="form-control input-lg mb-3" onChange={handleChange} id="email" name="email" placeholder='Reviewer Email' />
                    </div>
                  </div>
                  <label>Mobile Number</label>
                  <input type='text' id='mobile' className='form-control input-lg mb-3' placeholder='Reviewer Mobile Number' name="mobile" onChange={handleChange} value={formData.mobile} />
                  <div className='row mb-3'>
                    <div className='col-md-4'>
                      <label>Country</label>
                      <select name="country" value={formData.country} id="country" className="form-control input-lg" onChange={handleChange}>
                        <option>Select Country</option>
                        <option value="Afghanistan">Afghanistan</option>
                        <option value="Albania">Albania</option>
                        <option value="Algeria">Algeria</option>
                        <option value="India">India</option>
                      </select>
                    </div>
                    <div className="col-md-4">
                      <label>State</label>
                      <select className="form-control input-lg" name="state" value={formData.state} onChange={handleChange}>
                        <option>Select State</option>
                        <option value="Bihar">Bihar</option>
                        <option value="Goa">Goa</option>
                        <option value="Uttar Pradesh">Uttar Pradesh</option>
                        <option value="Madhya Pradesh">Madhya Pradesh</option>
                      </select>
                    </div>
                    <div className='col-md-4'>
                      <label>City</label>
                      <input type="text" placeholder="City Name" name='city' onChange={handleChange} className='form-control input-lg' value={formData.city} />
                    </div>
                  </div>
                  <label>Address</label>
                  <textarea type='text' onChange={handleChange} id='address' value={formData.address} placeholder='Reviewer Address' className='form-control input-lg mb-3' name="address" />
                  <button type='submit' className='btn btn-primary' name="upload_file">Add Reviewer</button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

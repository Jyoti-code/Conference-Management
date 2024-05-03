import React, { useState} from 'react';
import axios from 'axios';
import { useNavigate} from "react-router-dom"

export default function RegistrationFee() {
  const navigate = useNavigate();
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
  });

const handleChange = async (e) => {
  if (e.target.name === 'name') {
    const selectedId = e.target.value; 
    await fetchData(selectedId);
  } else {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }
};

const fetchData = async (id) => {
  try {
    const response = await axios.get(`http://127.0.0.1:8000/api/reviewerList/${id}`);
    const data = response.data.reviewerlist;
    console.log("response data is->", data);

    // Update formData with fetched values
    setFormData({
      id: data.id,
      name: data.name,
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

console.log("form data is",formData)
  return (
    <div className='container mt-5'>
      <div className='row'>
        <div className='col-md-10'>
          <div className='card' style={{ borderColor: '#fff', borderRadius: '10px', boxShadow: '0 4px 6px rgba(0,0,0,0.1)', overflowX: 'auto' }}>
            <div className='card-header py-3' style={{ position: 'sticky', top: 0, zIndex: 1 }}>
              <div className='row'>
                <div className='col-md-6'>
                  <h6 className="m-0 font-weight-bold text-primary"><i className="fa fa-shield mr-3"></i>Add Reviewer</h6>
                </div>
                <div className='col-md-6 d-flex justify-content-end'>
                  <button className='btn btn-primary' style={{ height: 'auto' }} onClick={() => navigate(-1)}>Back</button>
                </div>
              </div>
            </div>
            <div className='card-body' style={{ overflowY: 'auto' }}>
              {formData && (
                <form encType="multipart/form-data">
                  <input type="hidden" value={formData.id} />
                  <label>Select Conference</label>
                  <select name="name_of_conference" id='name_of_conference' value={formData.name_of_conference} onChange={handleChange} className="form-control input-lg mb-3">
                    <option>--Select Conference--</option>
                    <option value="25th ISCB International Conference (ISCBC-2019)">25th ISCB International Conference (ISCBC-2019)</option>
                    <option value="26th ISCB International Conference (ISCBC-2020)">26th ISCB International Conference (ISCBC-2020)</option>
                    <option value="27th ISCB International Conference (ISCBC-2022)">27th ISCB International Conference (ISCBC-2022)</option>
                  </select>
                  <div className='row'>      
                      <label>Delegate Category & Fee</label>
                      <input type="email" value={formData.email} className="form-control input-lg mb-3" onChange={handleChange} id="email" name="email" placeholder='Reviewer Email' />                    
                  </div>
                  <label>Fee Amount</label>
                  <input type='text' id='mobile' className='form-control input-lg mb-3' placeholder='Reviewer Mobile Number' name="amount" onChange={handleChange} value={formData.mobile} />
                  <div className='row mb-3'>
                    <div className='col-md-4'>
                      <label>Country</label>
                      <select name="country" value={formData.country} id="country" className="form-control input-lg" onChange={handleChange}>
                        <option>Select Country</option>
                        <option value="Afghanistan">Afghanistan</option>
                        <option value="Albania">Albania</option>
                        <option value="Algeria">Algeria</option>
                      </select>
                    </div>
                    <div className="col-md-4">
                      <label>State</label>
                      <select className="form-control input-lg" name="state" value={formData.state} onChange={handleChange}>
                        <option>Select State</option>
                        <option>Bihar</option>
                        <option>Goa</option>
                        <option>Uttar Pradesh</option>
                        <option>Goa</option>
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

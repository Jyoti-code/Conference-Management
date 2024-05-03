import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Spinner from 'react-bootstrap/Spinner';

export default function UpdateDelegateForm() {
    const userId = localStorage.getItem('id');
    const navigate = useNavigate();
    const [loading, setLoading] = useState(true);
    const [formData, setFormData] = useState(null);
    const [imagePreview, setImagePreview] = useState(null);
    const [successMessage, setSuccessMessage] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    useEffect(() => {
        const fetchDelegateDetails = async () => {
            try {
                const response = await axios.get(`http://127.0.0.1:8000/api/delegateViewProfile/${userId}`);
                setFormData(response.data.delegatesview);

                if (response.data.delegatesview && response.data.delegatesview.profile_image) {
                    setImagePreview(`http://127.0.0.1:8000/uploads/${response.data.delegatesview.profile_image}`);
                }
            } catch (error) {
                console.error('Error fetching delegate details:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchDelegateDetails();
    }, [userId]);

    const handleChange = (e) => {
        if (e.target.name === 'profile_image') {
            const file = e.target.files[0];
            setFormData({ ...formData, profile_image: file });
            const reader = new FileReader();
            reader.onload = () => {
                setImagePreview(reader.result);
            };
            reader.readAsDataURL(file);
        } else {
            setFormData({ ...formData, [e.target.name]: e.target.value });
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const formDataToSend = new FormData();
            Object.entries(formData).forEach(([key, value]) => {
                if (key === 'profile_image' && value) {
                    formDataToSend.append(key, value);
                } else {
                    formDataToSend.append(key, value);
                }
            });

            await axios.post(`http://127.0.0.1:8000/api/delgateProfileUpdate/${userId}`, formDataToSend, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });
            setSuccessMessage('Delegate registered successfully!');
        } catch (error) {
            console.error('Error updating delegate:', error);
            setErrorMessage('Unexpected response format');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className='container'>
            <div className="col-10">
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
                <div className="card" style={{ borderColor: '#fff', borderRadius: '10px', boxShadow: '0 4px 6px rgba(0,0,0,0.1)', overflowX: 'auto' }}>
                    <div className='card-header py-3' style={{ position: 'sticky', top: 0, zIndex: 1 }}>
                        <div className='row'>
                            <div className='col-md-6'>
                                <h6 className="m-0 font-weight-bold text-primary"><i className="fa fa-shield mr-3"></i>Update Profile</h6>
                            </div>
                            <div className='col-md-6 d-flex justify-content-end'>
                                <button className='btn btn-primary' style={{ height: 'auto' }} onClick={() => navigate(-1)}>Back</button>
                            </div>
                        </div>
                    </div>
                    <div className='card-body' style={{ overflowY: 'auto' }}>
                        {loading ? (
                            <div className="d-flex justify-content-center align-items-center">
                                <Spinner animation="grow" size="sm" variant="primary" />
                                <Spinner animation="grow" size="sm" variant="primary" />
                                <Spinner animation="grow" size="sm" variant="primary" />
                            </div>
                        ) : (
                            formData && (
                                <form onSubmit={handleSubmit}>

                                    <label>Delegate Registration Number</label>
                                    <input type='text' className='form-control input-lg mb-3' name='del_reg_no' value={formData.del_reg_no} onChange={handleChange} readOnly />

                                    <label>Title</label>
                                    <input type='text' className='form-control input-lg mb-3' name='title' value={formData.title} onChange={handleChange} />

                                    <div className='row mb-3'>
                                        <div className='col-md-6'>
                                            <label>Delegate Name</label>
                                            <input type='text' className='form-control input-lg' name='name' value={formData.name} onChange={handleChange} />
                                        </div>
                                        <div className='col-md-6'>
                                            <label>Gender</label>
                                            <input type='text' className='form-control input-lg' name='gender' value={formData.gender} onChange={handleChange} />
                                        </div>
                                    </div>
                                    <div className='row mb-3'>
                                        <div className='col-md-6'>
                                            <label>Date of Birth</label>
                                            <input type='date' className='form-control input-lg' name='dob' value={formData.dob} onChange={handleChange} />
                                        </div>
                                        <div className='col-md-6'>
                                            <label>Email</label>
                                            <input type='text' className='form-control input-lg' name='email' value={formData.email} onChange={handleChange} readOnly />
                                        </div>
                                    </div>
                                    <div className='row mb-3'>
                                        <div className='col-md-6'>
                                            <label>Designation/Profession</label>
                                            <input type='text' className='form-control input-lg' name='designation' value={formData.designation} onChange={handleChange} />
                                        </div>
                                        <div className='col-md-6'>
                                            <label>Institution/ Affiliation</label>
                                            <input type='text' className='form-control input-lg' name='affiliation' value={formData.affiliation} onChange={handleChange} />
                                        </div>
                                    </div>
                                    <div className='row mb-3'>
                                        <div className='col-md-6'>
                                            <label>City</label>
                                            <input type='text' className='form-control input-lg' name='city' value={formData.city} onChange={handleChange} />
                                        </div>
                                        <div className='col-md-6'>
                                            <label>Country</label>
                                            <input type='text' className='form-control input-lg' name='country' value={formData.country} onChange={handleChange} />
                                        </div>
                                    </div>
                                    <label>Address for Correspondence</label>
                                    <textarea type='text' className='form-control input-lg mb-3' name='address_for_correspondence' value={formData.address_for_correspondence} onChange={handleChange}></textarea>

                                    <div className='row mb-3'>
                                        <div className='col-md-3'>
                                            <label>Country Code </label>
                                            <input type='text' className='form-control input-lg' name='office_telephone_country_code' value={formData.office_telephone_country_code} onChange={handleChange} />
                                        </div>
                                        <div className='col-md-9'>
                                            <label>Telephone (O)</label>
                                            <input type='text' className='form-control input-lg' name='office_telephone' value={formData.office_telephone} onChange={handleChange} />
                                        </div>
                                    </div>
                                    <div className='row mb-3'>
                                        <div className='col-md-3'>
                                            <label>Country Code</label>
                                            <input type='text' className='form-control input-lg' name='residence_telephone_country_code' value={formData.residence_telephone_country_code} onChange={handleChange} />
                                        </div>
                                        <div className='col-md-9'>
                                            <label> Telephone (R)</label>
                                            <input type='text' className='form-control input-lg' name='residence_telephone' value={formData.residence_telephone} onChange={handleChange} />
                                        </div>
                                    </div>
                                    <label>Website</label>
                                    <input type='text' className='form-control input-lg mb-3' name='website' value={formData.website} onChange={handleChange} />
                                    <label>Profile Image</label>
                                    <input type='file' className='form-control input-lg mb-3' name='profile_image' onChange={handleChange} />
                                    {imagePreview && (
                                        <img id='profile-image-preview' src={imagePreview} alt='Profile Preview' style={{ height: '100px', width: '100px' }} />
                                    )}

                                    <div className='row mt-3'>
                                        <div className='col-md-3'>
                                            <button type='submit' className='btn btn-primary '>Update</button>
                                        </div>
                                    </div>
                                </form>
                            )
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}

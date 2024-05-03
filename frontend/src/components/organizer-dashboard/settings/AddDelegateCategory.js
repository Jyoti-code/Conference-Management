import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios';

export default function AdddelegateCategory() {
    const navigate = useNavigate();
    const [successMessage, setSuccessMessage] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const [formData, setFormData] = useState({
        conf_id: '',
        category_name: '',
    });

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://127.0.0.1:8000/api/delegateCategoryStore', formData);
            setSuccessMessage(response.data.message);

            setFormData({
                conf_id: '',
                category_name: '',
            });
            // navigate(-1); 
        } catch (error) {
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
                        <div className="card-header">
                            <div className='row'>
                                <div className='col-md-6 d-flex justify-content-start'>
                                    <h6 className="m-0 font-weight-bold text-primary"><i className="fa fa-shield mr-3"></i>Submit Delegate Category</h6>
                                </div>
                                <div className='col-md-6 d-flex justify-content-end'>
                                    <button className='btn btn-primary' style={{ height: 'auto' }} onClick={() => navigate(-1)}>Back</button>
                                </div>

                            </div>
                        </div>
                        <div className='card-body'>
                            <form onSubmit={handleSubmit}>
                                <label>Select Conference</label>
                                <select className="form-control input-lg mb-3" name="conf_id"
                                    onChange={(e) => setFormData({ ...formData, conf_id: e.target.value })}
                                    value={formData.conf_id} >
                                    <option value="">Select Conference Name</option>
                                    <option value="19">Seminar on Role of Chemistry & Biology Interface in Drug Research</option>
                                    <option value="23">26th ISCB International Conference (ISCBC-2020)</option>
                                    <option value="22">28th ISCB International Conference (ISCBC-2024)</option>
                                </select>
                                <label>Category Name</label>
                                <input type='text' className='form-control input-lg mb-3' placeholder="Category Name" name="category_name" value={formData.category_name}
                                    onChange={(e) => setFormData({ ...formData, category_name: e.target.value })} />

                                <button type='submit' className='btn btn-primary'>Submit</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

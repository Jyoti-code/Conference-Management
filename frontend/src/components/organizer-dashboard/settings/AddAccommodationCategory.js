import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function AddAccommodationCategory() {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        name_of_conference: '',
        abstract_themes: [''],
    });
    return (
        <div className='container mt-5'>
            <div className='row'>
                <div className='col-md-10'>
                    <div className='card' style={{ borderColor: '#fff', borderRadius: '10px', boxShadow: '0 4px 6px rgba(0,0,0,0.1)', overflowX: 'auto' }}>
                        <div className='card-header py-3' style={{ position: 'sticky', top: 0, zIndex: 1 }}>
                            <div className='row'>
                                <div className='col-md-6'>
                                    <h6 className="m-0 font-weight-bold text-primary"><i className="fa fa-shield mr-3"></i>Accommodation Category</h6>
                                </div>
                                <div className='col-md-6 d-flex justify-content-end'>
                                    <button className='btn btn-primary' style={{ height: 'auto' }} onClick={() => navigate(-1)}>Back</button>
                                </div>
                            </div>
                        </div>
                        <div className='card-body'>
                            <form>
                                <label>Select Conference</label>
                                <select
                                    name="name_of_conference"
                                    value={formData.name_of_conference}
                                    onChange={(e) => setFormData({ ...formData, name_of_conference: e.target.value })}
                                    className="form-control input-lg mb-3"
                                >
                                    <option value="">Select Conference Name</option>
                                    <option value="19">Seminar on Role of Chemistry & Biology Interface in Drug Research</option>
                                    <option value="23">26th ISCB International Conference (ISCBC-2020)</option>
                                    <option value="22">28th ISCB International Conference (ISCBC-2024)</option>
                                </select>
                                <label>Accommodation Category</label>
                                <div className="mb-3 d-flex align-items-center">
                                    <input
                                        type='text'
                                        className='form-control input-lg mb-1 mr-2'
                                        placeholder="Abstract Session/Themes"
                                    />
                                </div>
                                <label>Number of Rooms Available (optional)</label>
                                <div className="mb-3 d-flex align-items-center">
                                    <input
                                        type='text'
                                        className='form-control input-lg mb-1 mr-2'
                                        placeholder="Number of Rooms Available (optional)"
                                    />
                                </div>
                                <button type='submit' className='btn btn-primary'>Submit</button>
                            </form>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
}

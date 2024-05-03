import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

export default function CreateAbstractSession() {
    const navigate = useNavigate();
    const userId = localStorage.getItem('id');
    const storedConference = localStorage.getItem('selectedConference')
    const [successMessage, setSuccessMessage] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const [formData, setFormData] = useState({
        name_of_conference: storedConference,
        abstract_themes: [''],
    });
    const handleChange = (e, index) => {
        const updatedThemes = [...formData.abstract_themes];
        updatedThemes[index] = e.target.value;
        setFormData({
            ...formData,
            abstract_themes: updatedThemes,
        });
    };
    const addInputField = () => {
        setFormData({
            ...formData,
            abstract_themes: [...formData.abstract_themes, ''],
        });
    };
    const removeInputField = (index) => {
        const updatedThemes = [...formData.abstract_themes];
        updatedThemes.splice(index, 1);
        setFormData({
            ...formData,
            abstract_themes: updatedThemes,
        });
    };
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const abstractThemesString = formData.abstract_themes.join(', ');
            const postData = {
                conf_id: formData.name_of_conference,
                organizer_id: userId,
                abstract_theme: abstractThemesString,
            };
            const response = await axios.post('http://127.0.0.1:8000/api/abstractThemeStore', postData);
            console.log(response.data.message);
            setSuccessMessage('Abstract Theme inserted successfully!');
            console.log(response.data.abstractsessionData);

            setFormData({
                name_of_conference: '',
                abstract_themes: [''],
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
                        <div className='card-header py-3' style={{ position: 'sticky', top: 0, zIndex: 1 }}>
                            <div className='row'>
                                <div className='col-md-6'>
                                    <h6 className="m-0 font-weight-bold text-primary"><i className="fa fa-shield mr-3"></i>Create Abstract Session/Themes</h6>
                                </div>
                                <div className='col-md-6 d-flex justify-content-end'>
                                    <button className='btn btn-primary' style={{ height: 'auto' }} onClick={() => navigate(-1)}>Back</button>
                                </div>
                            </div>
                        </div>
                        <div className='card-body'>
                            <form onSubmit={handleSubmit}>
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
                                <label>Abstract Session/Themes</label>
                                {formData.abstract_themes.map((theme, index) => (
                                    <div key={index} className="mb-3 d-flex align-items-center">
                                        <input
                                            type='text'
                                            value={theme}
                                            onChange={(e) => handleChange(e, index)}
                                            className='form-control input-lg mb-1 mr-2'
                                            placeholder="Abstract Session/Themes"
                                        />
                                        {formData.abstract_themes.length > 1 && (
                                            <button type="button" className="btn btn-outline-secondary btn-sm" onClick={() => removeInputField(index)}><i className="fa fa-close"></i></button>
                                        )}
                                    </div>
                                ))}
                                <div className="mb-3">
                                    <button type="button" className="btn btn-outline-secondary" data-mdb-ripple-init onClick={addInputField}><i className="fa fa-plus mr-2"></i>Add</button>
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

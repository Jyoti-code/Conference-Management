import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import Spinner from 'react-bootstrap/Spinner';

export default function AbstractSessionEdit() {
    const navigate = useNavigate();
    const { id } = useParams();
    const [loading, setLoading] = useState(true);
    const [successMessage, setSuccessMessage] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const [formData, setFormData] = useState({
        conf_id: '',
        theme: [],
    });
    const handleConfIdChange = (e) => {
        setFormData({ ...formData, conf_id: e.target.value });
    };
    useEffect(() => {
        const fetchSubmitAbstract = async () => {
            try {
                const response = await axios.get(`http://127.0.0.1:8000/api/abstractThemeEdit/${id}`);
                setFormData(response.data.getdata);
            } catch (error) {
                console.error('Error fetching organizer details:', error);
            } finally {
                setLoading(false);
            }
        };
        fetchSubmitAbstract();
    }, [id]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const abstractThemesString = formData.theme.join(', ');
            console.log('Abstract Themes String:', abstractThemesString);
            console.log(formData);

            const response = await axios.post('http://127.0.0.1:8000/api/abstractThemeUpdate', {
                ...formData,
                theme: abstractThemesString,
                conf_id: formData.conf_id 
            });
            setFormData({
                conf_id: '',
                theme: [''],
            });

            console.log('Response Data:', response.data);
            console.log('Updated:', response.data.updated);

            setSuccessMessage('Abstract Theme updated successfully!');
        } catch (error) {
            console.error('Error updating abstract:', error);
            setErrorMessage('Invalid response format');
        } finally {
            setLoading(false);
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
                                    <h6 className="m-0 font-weight-bold text-primary"><i className="fa fa-shield mr-3"></i>Update Abstract Session/Themes</h6>
                                </div>
                                <div className='col-md-6 d-flex justify-content-end'>
                                    <button className='btn btn-primary' style={{ height: 'auto' }} onClick={() => navigate(-1)}>Back</button>
                                </div>
                            </div>
                        </div>
                        <div className='card-body'>
                            {loading ? (
                                <div className="d-flex justify-content-center align-items-center">
                                    <Spinner animation="grow" size="sm" variant="primary" />
                                    <Spinner animation="grow" size="sm" variant="primary" />
                                    <Spinner animation="grow" size="sm" variant="primary" />
                                </div>
                            ) : (
                                <div>
                                    <form onSubmit={handleSubmit}>
                                        <input type='hidden' name="id" id="id" value={formData.id}/>
                                        <label>Select Conference</label>
                                        <select
                                            name="conf_id"
                                            value={formData.conf_id}
                                            onChange={handleConfIdChange}
                                            className="form-control input-lg mb-3"
                                        >
                                            <option value="">Select Conference Name</option>
                                            <option value="19">Seminar on Role of Chemistry & Biology Interface in Drug Research</option>
                                            <option value="23">26th ISCB International Conference (ISCBC-2020)</option>
                                            <option value="22">28th ISCB International Conference (ISCBC-2024)</option>
                                        </select>
                                        <label>Abstract Session/Themes</label>
                                        {formData.theme && formData.theme.map((theme, index) => (
                                            <input
                                                key={index}
                                                type='text'
                                                className='form-control input-lg mb-3'
                                                value={theme.trim()}
                                                onChange={(e) => {
                                                    const updatedThemes = [...formData.theme];
                                                    updatedThemes[index] = e.target.value;
                                                    setFormData({ ...formData, theme: updatedThemes });
                                                }}
                                                placeholder="Abstract Session/Themes"
                                                name="theme"
                                            />
                                        ))}
                                        <button type='submit' className='btn btn-primary'>Update</button>
                                    </form>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

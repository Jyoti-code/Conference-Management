import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from "react-router-dom"

export default function SubmitPaper() {
    const navigate = useNavigate();
    const resetPdf = () => {
        setFormData({ ...formData, upload_file: null });
        const fileInput = document.getElementById("upload_file");
        if (fileInput) {
            fileInput.value = "";
        }
    };
    const [successMessage, setSuccessMessage] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const [formData, setFormData] = useState({
        name_of_conference: '',
        proposal_type: '',
        author_name: '',
        presenting_author_name: '',
        keywords: '',
        description: '',
        upload_file: null,
    });
    const handleChange = (e) => {
        const { name, value, files } = e.target;
        if (name === 'upload_file' && files && files.length > 0) {
            setFormData({ ...formData, upload_file: files[0] });
        } else {
            setFormData({ ...formData, [name]: value });
        }
    };
    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const formDataToSend = new FormData();
            Object.keys(formData).forEach((key) => {
                formDataToSend.append(key, formData[key]);
            });
            const response = await axios.post('http://127.0.0.1:8000/api/paperSubmitDataStore', formDataToSend);
            console.log(response.data);
            if (response && response.data && response.data.message) {
                console.log(response.data);
                setSuccessMessage('Paper submitted successfully!');
                resetPdf()
                console.log('Paper data submitted successfully!');
                setFormData({
                    name_of_conference: '',
                    proposal_type: '',
                    author_name: '',
                    presenting_author_name: '',
                    keywords: '',
                    description: '',
                    upload_file: null,
                });

            } else {
                setErrorMessage('Unexpected response format');
            }
        } catch (error) {
            console.log('Error:', error);
            setErrorMessage('An error occurred while submitting.');
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
                                    <h6 className="m-0 font-weight-bold text-primary"><i className="fa fa-shield mr-3"></i>Submit Paper</h6>
                                </div>
                                <div className='col-md-6 d-flex justify-content-end'>
                                    <button className='btn btn-primary' style={{ height: 'auto' }} onClick={() => navigate(-1)}>Back</button>
                                </div>

                            </div>
                        </div>

                        <div className='card-body' style={{ overflowY: 'auto' }}>
                            <form onSubmit={handleSubmit} encType="multipart/form-data">
                                <label>Select Conference</label>
                                <select name="name_of_conference" id='name_of_conference' value={formData.name_of_conference} onChange={handleChange} className="form-control input-lg mb-3">
                                    <option>--Select Conference--</option>
                                    <option value="25th ISCB International Conference (ISCBC-2019)">25th ISCB International Conference (ISCBC-2019)</option>
                                    <option value="26th ISCB International Conference (ISCBC-2020)">26th ISCB International Conference (ISCBC-2020)</option>
                                    <option value="27th ISCB International Conference (ISCBC-2022)">27th ISCB International Conference (ISCBC-2022)</option>
                                </select>
                                <label>Proposal Type</label>
                                <select name="proposal_type" id='proposal_type' value={formData.proposal_type} onChange={handleChange} className="form-control input-lg mb-3">
                                    <option value="-1">Select</option>
                                    <option value="Paper">Paper</option>
                                    <option value="Oral Presentation">Oral Presentation</option>
                                    <option value="Poster">Poster</option>
                                    <option value="Workshop">Workshop</option>
                                    <option value="Discussion">Discussion</option>
                                    <option value="Seminar">Seminar</option>
                                    <option value="Exhibition">Exhibition</option>
                                    <option value="Activity Corner">Activity Corner</option>
                                </select>
                                <div className='row'>
                                    <div className='col-md-6'>
                                        <label>Author(s) Name</label>
                                        <input type='text' id='author_name' value={formData.author_name} onChange={handleChange} className='form-control input-lg mb-3' placeholder='Author(s) Name' name="author_name" />
                                    </div>
                                    <div className='col-md-6'>
                                        <label>Presenting Author's Name</label>
                                        <input type='text' id='presenting_author_name' value={formData.presenting_author_name} onChange={handleChange} className='form-control input-lg mb-3' placeholder='Presenting Author Name' name="presenting_author_name" />
                                    </div>
                                </div>
                                <label>Keywords</label>
                                <input type='text' value={formData.keywords} onChange={handleChange} placeholder='Keywords' className='form-control input-lg mb-3' id="keywords" name="keywords" />
                                <label>Description</label>
                                <textarea type='text' id='description' value={formData.description} onChange={handleChange} placeholder='Description' className='form-control input-lg mb-3' name="description" />

                                <label>Upload File</label>
                                <input type='file' className='form-control input-lg mb-3' name="upload_file" id="upload_file" onChange={handleChange} />
                                {formData.upload_file && (
                                    <p>{formData.upload_file.name}</p>
                                )}
                                <button type='submit' className='btn btn-primary' name="upload_file">Submit</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

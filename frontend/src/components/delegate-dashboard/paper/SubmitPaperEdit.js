import React, { useState,useEffect } from 'react';
import axios from 'axios';
import { useNavigate,useParams } from "react-router-dom"

export default function SubmitPaperEdit() {
    const navigate = useNavigate();
    const { id } = useParams();
    const [successMessage, setSuccessMessage] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const [pdfPreview, setPdfPreview] = useState(null);
    const [formData, setFormData] = useState({
        name_of_conference: '',
        proposal_type: '',
        author_name: '',
        presenting_author_name: '',
        keywords: '',
        description: '',
        upload_file: '',
        upload_file_hidden: '',
    });
    const handleChange = (e) => {
        if (e.target.name === 'upload_file') {
            const file = e.target.files[0];
            setFormData({ ...formData, upload_file: file });
            const fileURL = URL.createObjectURL(file);
            setPdfPreview(fileURL);
        } else {
            setFormData({ ...formData, [e.target.name]: e.target.value });
        }
    };

    useEffect(() => {
        const fetchSubmitAbstract = async () => {
            try {
                const response =
                    await axios.get(`http://127.0.0.1:8000/api/paperEdit/${id}`);
                setFormData(response.data.paperedit[0]);
                if (response.data.paperedit[0] && response.data.paperedit[0].upload_file) {
                    setPdfPreview(`http://127.0.0.1:8000/uploads/${response.data.paperedit[0].upload_file}`);
                }
            } catch (error) {
                console.error('Error fetching organizer details:', error);
            }
        };

        fetchSubmitAbstract();
    }, [id]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const formDataToSend = new FormData();
        formDataToSend.append('id', formData.id);
        formDataToSend.append('name_of_conference', formData.name_of_conference);
        formDataToSend.append('proposal_type', formData.proposal_type);
        formDataToSend.append('author_name', formData.author_name);
        formDataToSend.append('presenting_author_name', formData.presenting_author_name);
        formDataToSend.append('keywords', formData.keywords);
        formDataToSend.append('description', formData.description);
        if (formData.upload_file) {
            formDataToSend.append('upload_file', formData.upload_file);
        } else {
            formDataToSend.append('upload_file_hidden', formData.upload_file_hidden);
        }
        try {
            const response = await axios.post('http://127.0.0.1:8000/api/paperUpdate', formDataToSend);
            setSuccessMessage(response.data.message);
        } catch (error) {
            setErrorMessage('An error occurred while updating.');
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
                                <input type='hidden' value={formData.upload_file} id="update_file_hidden" name="update_file_hidden" />
                                <label>Upload File</label>
                                    <input type='file' className='form-control input-lg mb-3' name="upload_file" id="upload_file" onChange={handleChange} />
                                    {formData.upload_file && (
                                        <div>Uploaded File: {formData.upload_file.name}</div>
                                    )}
                                    {pdfPreview && (
                                        <embed src={pdfPreview} width="50%" height="200" title="Preview" />
                                    )}
                                    <br />

                                <button type='submit' className='btn btn-primary' name="upload_file">Submit</button>
                                
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

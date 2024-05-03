import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from "react-router-dom"

export default function PayRegistrationFee() {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        name_of_conference: '',
        payment_mode: '',
        transaction_number: '',
        transaction_date: '',
        bank_name: '',
        coupon_code: '',
        pay_amount: '',
        upload_file: null
    });
    const [successMessage, setSuccessMessage] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const handleChange = (e) => {
        const { name, value, files } = e.target;
        if (name === 'upload_file' && files && files.length > 0) {
            setFormData({ ...formData, upload_file: files[0] });
        } else {
            setFormData({ ...formData, [name]: value });
        }
    };
    const resetPdf = () => {
        setFormData({ ...formData, upload_file: null });
        const fileInput = document.getElementById("upload_file");
        if (fileInput) {
            fileInput.value = "";
        }
    };
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const formDataToSend = new FormData();
            Object.keys(formData).forEach(key => {
                formDataToSend.append(key, formData[key]);
            });
            const response = await axios.post('http://127.0.0.1:8000/api/payRegistrationFee', formDataToSend);
            setSuccessMessage(response.data.message);
            
            resetPdf()
            setFormData({
                name_of_conference: '',
                payment_mode: '',
                transaction_number: '',
                transaction_date: '',
                bank_name: '',
                coupon_code: '',
                pay_amount: '',
                upload_file: null
            });
        } catch (error) {
            console.error('Error:', error);
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
                    <div className='card'>
                        <div className='card-header py-3' style={{ position: 'sticky', top: 0, zIndex: 1 }}>
                            <div className='row'>
                                <div className='col-md-6'>
                                    <h6 className="m-0 font-weight-bold text-primary"><i className="fa fa-shield mr-3"></i>Pay Registration Fee</h6>
                                </div>
                                <div className='col-md-6 d-flex justify-content-end'>
                                    <button className='btn btn-primary' style={{ height: 'auto' }} onClick={() => navigate(-1)}>Back</button>
                                </div>
                            </div>
                        </div>
                        <div className='card-body' style={{ overflowY: 'auto' }}>
                            <form onSubmit={handleSubmit}>
                                <label>Select Conference</label>
                                <select name="name_of_conference" className="form-control input-lg mb-3" id='name_of_conference' value={formData.name_of_conference} onChange={handleChange}>
                                    <option value="">--Select Conference--</option>
                                    <option value="25th ISCB International Conference (ISCBC-2019)">25th ISCB International Conference (ISCBC-2019)</option>
                                    <option value="26th ISCB International Conference (ISCBC-2020)">26th ISCB International Conference (ISCBC-2020)</option>
                                    <option value="27th ISCB International Conference (ISCBC-2022)">27th ISCB International Conference (ISCBC-2022)</option>
                                </select>
                                <label>Payment Mode</label>
                                <select name="payment_mode" className="form-control input-lg mb-3" id="payment_mode" value={formData.payment_mode} onChange={handleChange}>
                                    <option value="">Select</option>
                                    <option value="UPI">UPI</option>
                                    <option value="PayTm">PayTm</option>
                                </select>
                                <div className='row'>
                                    <div className='col-md-6'>
                                        <label>Cheque/ Draft/ Transaction Number</label>
                                        <input type='text' id="transaction_number" name='transaction_number' className='form-control input-lg mb-3' placeholder='Cheque/ Draft/ Transaction Number' value={formData.transaction_number} onChange={handleChange} />
                                    </div>
                                    <div className='col-md-6'>
                                        <label>Cheque/ Draft/ Transaction Date</label>
                                        <input type='date' id="transaction_date" name='transaction_date' className='form-control input-lg mb-3' value={formData.transaction_date} onChange={handleChange} />
                                    </div>
                                </div>
                                <label>Bank Name</label>
                                <input type='text' name='bank_name' id="bank_name" placeholder='Bank Name' className='form-control input-lg mb-3' value={formData.bank_name} onChange={handleChange} />
                                <label>Amount : </label><br />
                                <label>Coupon Code (if any)</label>
                                <input type='text' name='coupon_code' className='form-control input-lg mb-3' id="coupon_code" value={formData.coupon_code} onChange={handleChange} />
                                <label>Pay Amount :</label>
                                <input type='text' className='form-control input-lg mb-3' name="pay_amount" id="pay_amount" value={formData.pay_amount} onChange={handleChange} />
                                <label>Upload File</label>
                                <input type='file' className='form-control input-lg mb-3' name="upload_file" id="upload_file" onChange={handleChange} />
                                {formData.upload_file && (
                                    <p>{formData.upload_file.name}</p>
                                )}
                                <label>Please upload scan/print copy of Cheque/ Draft/ Bank Transfer Receipt/ Cash Deposit Receipt</label><br />
                                <button type='submit' className='btn btn-primary'>Submit</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

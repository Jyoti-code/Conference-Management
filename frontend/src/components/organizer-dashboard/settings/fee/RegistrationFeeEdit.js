import { useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios'

export default function RegistrationFeeEdit() {
    const navigate = useNavigate();
    const { id } = useParams();
    const [successMessage, setSuccessMessage] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const [formData, setFormData] = useState({
        id: '',
        conf_id: '',
        delegate_category: '',
        amount: '',
        currency: '',
    });
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };
    useEffect(() => {
        const fetchOrganizerDetails = async () => {
            try {
                const response =
                    await axios.get(`http://127.0.0.1:8000/api/delegateCategoryFeeEdit/${id}`);
                console.log(response.data.delegatecategoryfeeedit)
                setFormData(response.data.delegatecategoryfeeedit);

            } catch (error) {
                console.error('Error fetching organizer details:', error);
            }
        };

        fetchOrganizerDetails();
    }, [id]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://127.0.0.1:8000/api/delegateCategoryFeeUpdate',formData);
            if (response && response.data && response.data.message) {
                setSuccessMessage(response.data.message);
                setFormData({
                    conf_id: '',
                    delegate_category: '',
                    amount: '',
                    currency: '',
                });
            } else {
                console.log('Not inserted');
            }
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
                                    <h6 className="m-0 font-weight-bold text-primary mb-2"><i className="fa fa-shield mr-3"></i>Delegate Category and Fee</h6>
                                </div>
                                <div className='col-md-6 d-flex justify-content-end'>
                                    <button className='btn btn-primary' style={{ height: '40px' }} onClick={() => navigate(-1)}>Back</button>
                                </div>
                            </div>
                        </div>
                        <div className='card-body' style={{ overflowY: 'auto' }}>
                            <form onSubmit={handleSubmit}>
                                <label>Select Conference</label>
                                <select name="conf_id" className="form-control input-lg mb-3" id="conf_id" onChange={handleChange} value={formData.conf_id}>
                                    <option value="">Select Conference Name</option>
                                    <option value="19">Seminar on Role of Chemistry Biology Interface in Drug Research</option>
                                    <option value="23">26th ISCB International Conference (ISCBC-2020)</option>
                                    <option value="22">28th ISCB International Conference (ISCBC-2024)</option>
                                </select>
                                <label>Delegate Category</label>
                                <input id="delegate_category" name="delegate_category" type="text" placeholder='Delegate Category' onChange={handleChange} value={formData.delegate_category} className="form-control input-lg mb-3" />
                                <label>Fee Amount</label>
                                <input id="amount" name="amount" type="text" placeholder='Fee Amount' className="form-control input-lg mb-3" onChange={handleChange} value={formData.amount} />
                                <label>Currency</label>
                                <select name="currency" id="currency" className="form-control input-lg mb-3" onChange={handleChange} value={formData.currency} >
                                    <option values="">--Select Currency--</option>
                                    <option value="U.S. dollar ($)">U.S. dollar ($)</option>
                                    <option value="Indian Rupee (INR)">Indian Rupee (INR)</option>
                                    <option value="Euro(€)">Euro(€)</option>
                                    <option value="GBP(£)">GBP(£)</option>
                                </select>
                                <button className='btn btn-primary'>Submit</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

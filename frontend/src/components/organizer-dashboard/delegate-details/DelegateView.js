import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams,useNavigate } from 'react-router-dom';

export default function DelegateView() {
    const navigate = useNavigate();
    const { id } = useParams();
    const [delegate, setDelegate] = useState([]);

    useEffect(() => {
        const fetchOrganizerDetails = async () => {
            try {
                const response =
                    await axios.get(`http://127.0.0.1:8000/api/delegateView/${id}`);
                setDelegate(response.data.delegatesview);
            } catch (error) {
                console.error('Error fetching delegate details:', error);
            }
        };

        fetchOrganizerDetails();
    }, [id]);

    return (
        <div className='container'>
            <div className='card' style={{borderColor:'#fff',overflowX:'auto',boxShadow:'0 4px 6px rgba(0,0,0,0.1),'}}>
                <div className="card-header">
                    <div className='row'>
                        <div className='col-md-6 d-flex justify-content-start'>
                            <h6 className="m-0 font-weight-bold text-primary">Delegates Details</h6>                            
                        </div>
                        <div className='col-md-6 d-flex justify-content-end'>
                            <button className='btn btn-primary' style={{height:'40px'}} onClick={() => navigate(-1)}>Back</button>
                        </div>                                        
                    </div>
                </div>
                <div className="card-body">
                    {delegate && (
                        <div>
                            <div className='row'>
                                <table className='table table-bordered table-striped-columns'>
                                <tr>
                                    <th>Registration Number : </th>
                                    <td>{delegate.del_reg_no}</td>
                                </tr>
                                <tr>
                                    <th>Profile Image : </th>
                                    <td>
                                        <img src={`http://127.0.0.1:8000/uploads/${delegate.profile_image}`} alt="Profile" style={{ height: "100px", display: "block" }}/>
                                    </td>
                                </tr>
                                <tr>
                                    <th>Name : </th>
                                    <td>{delegate.name}</td>
                                </tr>
                                <tr>
                                    <th>Email : </th>
                                    <td>{delegate.email}</td>
                                </tr>
                                <tr>
                                    <th>Delegate Category : </th>
                                    <td>{delegate.delegate_category}</td>
                                </tr>
                                <tr>
                                    <th>Title : </th>
                                    <td>{delegate.title}</td>
                                </tr>
                                <tr>
                                    <th>Mobile : </th>
                                    <td>{delegate.mobile}</td>
                                </tr>
                                <tr>
                                    <th>Gender : </th>
                                    <td>{delegate.gender}</td>
                                </tr>
                                 <tr>
                                    <th>Date of Birth : </th>
                                    <td>{delegate.dob}</td>
                                </tr>
                                 <tr>
                                    <th>Designation/Profession : </th>
                                    <td>{delegate.designation}</td>
                                </tr>
                                 <tr>
                                    <th>Institution/Affiliation : </th>
                                    <td>{delegate.affiliation}</td>
                                </tr>
                                 <tr>
                                    <th>City : </th>
                                    <td>{delegate.city}</td>
                                </tr>
                                <tr>
                                    <th>Country : </th>
                                    <td>{delegate.country}</td>
                                </tr>
                                <tr>
                                    <th>Address for Correspondence : </th>
                                    <td>{delegate.address_for_correspondence}</td>
                                </tr>
                                <tr>
                                    <th>Office Telephone : </th>
                                    <td>{delegate.office_telephone}</td>
                                </tr>
                                <tr>
                                    <th>Residence Telephone : </th>
                                    <td>{delegate.residence_telephone}</td>
                                </tr>
                                </table>                                
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}

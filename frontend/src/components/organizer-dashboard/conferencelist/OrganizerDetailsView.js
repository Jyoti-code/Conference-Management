import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';
import Spinner from 'react-bootstrap/Spinner';

export default function OrganizerDetailsView() {
    const navigate = useNavigate();
    const { id } = useParams();
    const [organizer, setOrganizer] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchOrganizerDetails = async () => {
            try {
                const response = await axios.get(`http://127.0.0.1:8000/api/organizerDetailsView/${id}`);
                setOrganizer(response.data.organizerlistdetails);
                setLoading(false);
            } catch (error) {
                console.error('Error fetching organizer details:', error);
                setLoading(false);
            }
        };
        fetchOrganizerDetails();
    }, [id]);

    return (
        <div className='container'>
            <div className='card' style={{ borderColor: '#fff', overflowX: 'auto', boxShadow: '0 4px 6px rgba(0,0,0,0.1)' }}>
                <div className="card-header">
                    <div className='row'>
                        <div className='col-md-6 d-flex justify-content-start'>
                            <h6 className="m-0 font-weight-bold text-primary">Organizer Details</h6>
                        </div>
                        <div className='col-md-6 d-flex justify-content-end'>
                            <button className='btn btn-primary' style={{ height: '40px' }} onClick={() => navigate(-1)}>Back</button>
                        </div>
                    </div>
                </div>
                <div className="card-body">
                    {loading ? (
                        <div className="d-flex justify-content-center align-items-center" style={{ minHeight: '300px' }}>
                            <Spinner animation="grow" size="sm" variant="primary" />
                            <Spinner animation="grow" size="sm" variant="primary" />
                            <Spinner animation="grow" size="sm" variant="primary" />
                        </div>
                    ) : (
                        <div>
                            <table className='table table-bordered table-striped-columns'>
                                <tr>
                                    <th>Conference Category : </th>
                                    <td>{organizer.conference_category}</td>
                                </tr>
                                <tr>
                                    <th>Name of Conference : </th>
                                    <td>{organizer.name_of_conference}</td>
                                </tr>
                                <tr>
                                    <th>Conference Theme : </th>
                                    <td>{organizer.conference_theme}</td>
                                </tr>
                                <tr>
                                    <th>From Date : </th>
                                    <td>{organizer.from_date}</td>
                                </tr>
                                <tr>
                                    <th>To Date : </th>
                                    <td>{organizer.to_date}</td>
                                </tr>
                                <tr>
                                    <th>Name of Venue : </th>
                                    <td>{organizer.name_of_venue}</td>
                                </tr>
                                <tr>
                                    <th>Address of Venue : </th>
                                    <td>{organizer.address_of_venue}</td>
                                </tr>
                                <tr>
                                    <th>City : </th>
                                    <td>{organizer.city}</td>
                                </tr>
                                <tr>
                                    <th>Country : </th>
                                    <td>{organizer.country}</td>
                                </tr>
                                <tr>
                                    <th>Name of Organizer/ Association/ Society : </th>
                                    <td>{organizer.name_of_organizer}</td>
                                </tr>
                                <tr>
                                    <th>Contact Person : </th>
                                    <td>{organizer.contact_person}</td>
                                </tr>
                                <tr>
                                    <th>Contact Number : </th>
                                    <td>{organizer.contact_number}</td>
                                </tr>
                                <tr>
                                    <th>Email : </th>
                                    <td>{organizer.email}</td>
                                </tr>
                                <tr>
                                    <th>Website : </th>
                                    <td>{organizer.website}</td>
                                </tr>
                                <tr>
                                    <th>Logo : </th>
                                    <td>
                                        <img src="https://smartconference.in/uploads/iscb-logo2.png" alt="logo" />
                                    </td>
                                </tr>
                                <tr>
                                    <th>Conference Banner : </th>
                                    <img src="https://smartconference.in/uploads/iscbc-2024.jpg" alt="logo" />
                                </tr>
                                <tr>
                                    <th>Description : </th>
                                    <td>{organizer.website}</td>
                                </tr>
                            </table>

                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}

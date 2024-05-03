import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

export default function ActiveOrganizerDetailsView() {
    const { id } = useParams();
    const [organizer, setOrganizer] = useState([]);

    useEffect(() => {
        const fetchOrganizerDetails = async () => {
            try {
                const response =
                    await axios.get(`http://127.0.0.1:8000/api/organizerDetailsView/${id}`);
                setOrganizer(response.data.organizerlistdetails);
            } catch (error) {
                console.error('Error fetching organizer details:', error);
            }
        };
        fetchOrganizerDetails();
    }, [id]);

    return (
        <div className='container'>
            <div className='card p-5 mt-5'>
                <div className="card-title">
                    <h3 className='h3 mb-0 text-gray-800 d-flex justify-content-center mb-4'>Organizer Details</h3>
                </div>
                <div className="card-body">
                    {organizer && (
                        <div>
                            <div className='row'>
                                <div className="col-md-4">
                                    <p><b className='text-danger'>Name: </b>{organizer.name}</p>
                                </div>
                                <div className="col-md-4">
                                    <p><b className='text-danger'>Email: </b>{organizer.email}</p>
                                </div>
                                <div className="col-md-4">
                                    <p><b className='text-danger'>Website: </b>{organizer.website}</p>
                                </div>
                            </div>
                            <div className='row'>
                                <div className='col-md-4'>
                                    <p><b className='text-danger'>Conference Category: </b>{organizer.conference_category}</p>
                                </div>
                                <div className='col-md-4'>
                                    <p><b className='text-danger'>Name of Conference: </b>{organizer.name_of_conference}</p>
                                </div>
                                <div className='col-md-4'>
                                    <p><b className='text-danger'>Conference Theme: </b>{organizer.conference_theme}</p>
                                </div>
                            </div>
                            <div className='row'>
                                <div className='col-md-4'>
                                    <p><b className='text-danger'>From Date: </b>{organizer.from_date}</p>
                                </div>
                                <div className='col-md-4'>
                                    <p><b className='text-danger'>To Date: </b>{organizer.to_date}</p>
                                </div>
                                <div className='col-md-4'>
                                    <p><b className='text-danger'>Name of Venue: </b>{organizer.name_of_venue}</p>
                                </div>
                            </div>
                            <div className='row'>
                                <div className='col-md-4'>
                                    <p><b className='text-danger'>Address of Venue: </b>{organizer.address_of_venue}</p>
                                </div>
                                <div className='col-md-4'>
                                    <p><b className='text-danger'>City: </b>{organizer.city}</p>
                                </div>
                                <div className='col-md-4'>
                                    <p><b className='text-danger'>Country: </b>{organizer.country}</p>
                                </div>
                            </div>
                            <div className='row'>
                                <div className='col-md-4'>
                                    <p><b className='text-danger'>Name of Organizer: </b> {organizer.name_of_organizer}</p>
                                </div>
                                <div className='col-md-4'>
                                    <p><b className='text-danger'>Contact Person: </b>{organizer.contact_person}</p>
                                </div>
                                <div className='col-md-4'>
                                    <p><b className='text-danger'>Contact Number: </b>{organizer.contact_number}</p>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}

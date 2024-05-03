import React, { useState, useEffect } from 'react';
import { MDBDataTable } from 'mdbreact';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Spinner from 'react-bootstrap/Spinner';

const UserReviewer = () => {
    const [abstractData, setAbstractData] = useState({ columns: [], rows: [] });
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        axios.get('http://127.0.0.1:8000/api/userReviewerList')
            .then(response => {
                const abstracts = response.data.userreviewerlist;
                const rows = abstracts.map((abstract, index) => ({
                    SN: index + 1,
                    'Reviewer Name': abstract.name,
                    'City': abstract.city,
                    'State': abstract.state,
                    'Country': abstract.country,
                    'Mobile': abstract.mobile,
                    'Address': abstract.address,
                    Action: 
                    (
                        <div>
                            <Link className="btn btn-light text-primary"><i className="fa fa-edit"></i></Link> 
                            <Link className="btn btn-light text-primary"><i className="fa fa-trash"></i></Link>
                            <Link className="btn btn-light text-primary"><i className="fa fa-eye"></i></Link> 
                        </div>
                    )
                    
                }));
                const columns = [
                    { label: 'SN', field: 'SN', sort: 'asc', width: 150 },
                    { label: 'Reviewer Name', field: 'Reviewer Name', sort: 'asc', width: 270 },
                    { label: 'City', field: 'City', sort: 'asc', width: 270 },
                    { label: 'State', field: 'State', sort: 'asc', width: 270 },
                    { label: 'Country', field: 'Country', sort: 'asc', width: 270 },
                    { label: 'Mobile', field: 'Mobile', sort: 'asc', width: 270 },
                    { label: 'Address', field: 'Address', sort: 'asc', width: 270 },
                    { label: 'Action', field: 'Action', sort: 'asc', width: 100 }
                ];
                setAbstractData({ columns, rows });
                setLoading(false);
            })
            .catch(error => {
                console.error('Error fetching abstracts:', error);
                setLoading(false);
            });
    }, []); 

    return (
        <div className='container'>
            <div className="card" style={{ borderColor: '#fff', borderRadius: '10px', boxShadow: '0 4px 6px rgba(0,0,0,0.1)', overflowX: 'auto' }}>
                <div className="card-header" style={{ position: 'sticky', top: 0, zIndex: 1 }}>
                    <div className='row'>
                        <div className='col-md-6 d-flex justify-content-start'>
                            <h6 className="m-0 font-weight-bold text-primary mb-2"><i className="fa fa-table mr-3"></i>Reviewer List</h6>
                        </div>
                    </div>
                </div>
                <div className="card-body" style={{ overflowY: 'auto' }}>
                    {loading ? (
                        <div className="d-flex justify-content-center align-items-center" style={{ minHeight: '300px' }}>
                            <Spinner animation="grow" size="sm" variant="primary" />
                            <Spinner animation="grow" size="sm" variant="primary" />
                            <Spinner animation="grow" size="sm" variant="primary" />
                        </div>
                    ) : (
                    <MDBDataTable
                        striped
                        bordered
                        hover
                        noBottomColumns={true}
                        data={abstractData}
                    />
                    )}
                </div>
            </div>
        </div>
    );
}

export default UserReviewer;

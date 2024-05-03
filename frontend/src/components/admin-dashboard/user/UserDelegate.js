import React, { useState, useEffect } from 'react';
import { MDBDataTable } from 'mdbreact';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Spinner from 'react-bootstrap/Spinner';

const UserDelegate = () => {
    const [loading, setLoading] = useState(true);
    const [abstractData, setAbstractData] = useState({ columns: [], rows: [] });

    useEffect(() => {
        axios.get('http://127.0.0.1:8000/api/userDelegateList')
            .then(response => {
                const abstracts = response.data.userdelegatelist;

                const rows = abstracts.map((abstract, index) => ({
                    SN: index + 1,
                    'Delegate Name': abstract.name,
                    'Delegate Category': abstract.delegate_category,
                    'Gender': abstract.gender,
                    'City': abstract.city,
                    'Mobile': abstract.mobile,
                    'Designation': abstract.designation,
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
                    { label: 'Delegate Name', field: 'Delegate Name', sort: 'asc', width: 270 },
                    { label: 'Delegate Category', field: 'Delegate Category', sort: 'asc', width: 270 },
                    { label: 'Gender', field: 'Gender', sort: 'asc', width: 270 },
                    { label: 'Mobile', field: 'Mobile', sort: 'asc', width: 270 },
                    { label: 'Designation', field: 'Designation', sort: 'asc', width: 270 },
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
                            <h6 className="m-0 font-weight-bold text-primary mb-2"><i className="fa fa-table mr-3"></i>Delegates List</h6>
                        </div>
                        {/* <div className='col-md-6 d-flex justify-content-end'>
                            <Link className='btn btn-primary' to="/submit-abstract" style={{height:'auto'}}><i className="fa fa-edit mr-2"></i>Submit Abstract</Link>
                        </div> */}
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

export default UserDelegate;

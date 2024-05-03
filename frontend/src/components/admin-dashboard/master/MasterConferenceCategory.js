import React, { useState, useEffect } from 'react';
import { MDBDataTable } from 'mdbreact';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Spinner from 'react-bootstrap/Spinner';

const MasterConferenceCategory = () => {
    const [abstractData, setAbstractData] = useState({ columns: [], rows: [] });
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        axios.get('http://127.0.0.1:8000/api/conferenceDetailsList')
            .then(response => {
                const abstracts = response.data.conferencedetailslist;
                const rows = abstracts.map((abstract, index) => ({
                    SN: index + 1,
                    'Conference Category': abstract.conference_category,
                    'Conference Name': abstract.name_of_conference,
                    'From Date': abstract.from_date,
                    'To Date': abstract.to_date,
                    Action: (
                        <div>
                            <Link className="btn btn-light text-primary"><i className="fa fa-edit"></i></Link> 
                            <Link className="btn btn-light text-primary"><i className="fa fa-trash"></i></Link> 
                        </div>
                    )
                }));
                const columns = [
                    { label: 'SN', field: 'SN', sort: 'asc', width: 150 },
                    { label: 'Conference Category', field: 'Conference Category', sort: 'asc', width: 270 },
                    { label: 'Conference Name', field: 'Conference Name', sort: 'asc', width: 270 },
                    { label: 'From Date', field: 'From Date', sort: 'asc', width: 270 },
                    { label: 'To Date', field: 'To Date', sort: 'asc', width: 270 },
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
                            <h6 className="m-0 font-weight-bold text-primary mb-2"><i className="fa fa-table mr-3"></i>Conference Category</h6>
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

export default MasterConferenceCategory;

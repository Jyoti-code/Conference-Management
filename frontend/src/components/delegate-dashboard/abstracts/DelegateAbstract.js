import React, { useState, useEffect } from 'react';
import { MDBDataTable } from 'mdbreact';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Spinner from 'react-bootstrap/Spinner'; 

const DelegateAbstract = () => {
    const [abstractData, setAbstractData] = useState({ columns: [], rows: [] });
    const [loading, setLoading] = useState(true); 
    
    useEffect(() => {
        axios.get('http://127.0.0.1:8000/api/abstractSubmitList')
            .then(response => {
                const abstracts = response.data.abstractsubmitlist;

                const rows = abstracts.map((abstract, index) => ({
                    SN: index + 1,
                    'Proposal Type': abstract.proposal_type,
                    'Paper Title': abstract.keywords,
                    Status: abstract.status,
                    Remarks: abstract.remarks,
                    Action:
                        <Link to={`/submit-abstract-edit/${abstract.id}`} className="btn btn-light text-primary"><i className="fa fa-edit"></i></Link>
                }));

                const columns = [
                    { label: 'SN', field: 'SN', sort: 'asc', width: 150 },
                    { label: 'Proposal Type', field: 'Proposal Type', sort: 'asc', width: 270 },
                    { label: 'Paper Title', field: 'Paper Title', sort: 'asc', width: 270 },
                    { label: 'Date of Submission', field: 'Date of Submission', sort: 'asc', width: 270 },
                    { label: 'Status', field: 'Status', sort: 'asc', width: 270 },
                    { label: 'Remarks', field: 'Remarks', sort: 'asc', width: 270 },
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
                            <h6 className="m-0 font-weight-bold text-primary mb-2"><i className="fa fa-table mr-3"></i>Abstract</h6>
                        </div>
                        <div className='col-md-6 d-flex justify-content-end'>
                            <Link className='btn btn-primary' to="/submit-abstract" style={{ height: 'auto' }}><i className="fa fa-edit mr-2"></i>Submit Abstract</Link>
                        </div>
                    </div>
                </div>
                <div className="card-body" style={{ overflowY: 'auto', position: 'relative' }}>
                    {loading ? (
                        <div className="d-flex justify-content-center align-items-center" >
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
export default DelegateAbstract;

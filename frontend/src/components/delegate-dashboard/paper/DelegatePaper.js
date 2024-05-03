import React, { useState, useEffect } from 'react';
import { MDBDataTable } from 'mdbreact';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Spinner from 'react-bootstrap/Spinner';

const DelegatePaper = () => {
    const [paperData, setPaperData] = useState({ columns: [], rows: [] });
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        axios.get('http://127.0.0.1:8000/api/paperSubmitList')
            .then(response => {
                const papers = response.data.papersubmitlist;

                const rows = papers.map((paper, index) => ({
                    SN: index + 1,
                    'Proposal Type': paper.proposal_type,
                    'Paper Title': paper.keywords,
                    'Date of Submission': paper.date_of_submission,
                    Status: paper.status,
                    Remarks: paper.remarks,
                    Action: <Link to={`/submit-paper-edit/${paper.id}`} className="btn btn-light text-primary"><i className="fa fa-edit"></i></Link>
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
                setPaperData({ columns, rows });
                setLoading(false); // Set loading to false after data is fetched
            })
            .catch(error => {
                console.error('Error fetching papers:', error);
                setLoading(false); 
            });
    }, []);

    return (
        <div className='container'>
            <div className="card" style={{ borderColor: '#fff', borderRadius: '10px', boxShadow: '0 4px 6px rgba(0,0,0,0.1)', overflowX: 'auto' }}>
                <div className="card-header" style={{ position: 'sticky', top: 0, zIndex: 1 }}>
                    <div className='row'>
                        <div className='col-md-6 d-flex justify-content-start'>
                            <h6 className="m-0 font-weight-bold text-primary mb-2"><i className="fa fa-table mr-3"></i>Paper</h6>
                        </div>
                        <div className='col-md-6 d-flex justify-content-end'>
                            <Link className='btn btn-primary' to="/paper-submit" style={{ height: 'auto' }}><i className="fa fa-edit mr-2"></i>Submit Paper</Link>
                        </div>
                    </div>
                </div>
                <div className="card-body" style={{ overflowY: 'auto', position: 'relative' }}>
                    {loading ? (
                        <div className="d-flex justify-content-center align-items-center">
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
                            data={paperData}
                        />
                    )}
                </div>
            </div>
        </div>
    );
}

export default DelegatePaper;

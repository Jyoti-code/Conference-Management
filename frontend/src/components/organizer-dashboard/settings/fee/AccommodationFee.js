import React, { useState, useEffect } from 'react';
import { MDBDataTable } from 'mdbreact';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Spinner from 'react-bootstrap/Spinner';

const AccommodationFee = () => {
    const [loading, setLoading] = useState(true);
    const [abstractData, setAbstractData] = useState({ columns: [], rows: [] });

    useEffect(() => {
        axios.get('http://127.0.0.1:8000/api/delegateCategoryFeeList')
            .then(response => {
                const delegate = response.data.delegatecategoryfeelist;
                const rows = delegate.map((abstract, index) => ({
                    SN: index + 1,
                    'Accommodation Category': abstract.delegate_category,
                    'Rate Per Day/ Per Person': `${abstract.currency} ${abstract.amount}`,
                    Action: (
                        <Link to={`/set-new-accommodation-fee-edit/${abstract.id}`} className="btn btn-light text-primary"><i className="fa fa-edit"></i></Link>
                    )
                }));
                const columns = [
                    { label: 'Accommodation Category', field: 'Accommodation Category', sort: 'asc', width: 150 },
                    { label: 'Rate Per Day/ Per Person', field: 'Rate Per Day/ Per Person', sort: 'asc', width: 150 },
                    { label: 'Action', field: 'Action', sort: 'asc', width: 100 }
                ];
                setAbstractData({ columns, rows });
            })
            .catch(error => {
                console.error('Error fetching abstracts:', error);
            })
            .finally(() => {
                setLoading(false);
            });
    },[]);

    return (
        <div className='container'>
            <div className="card" style={{ borderColor: '#fff', borderRadius: '10px', boxShadow: '0 4px 6px rgba(0,0,0,0.1)', overflowX: 'auto' }}>
                <div className="card-header" style={{ position: 'sticky', top: 0, zIndex: 1 }}>
                    <div className='row'>
                        <div className='col-md-6 d-flex justify-content-start'>
                            <h6 className="m-0 font-weight-bold text-primary mb-2"><i className="fa fa-table mr-3"></i>Accommodation Fee</h6>
                        </div>
                        <div className='col-md-6 d-flex justify-content-end'>
                            <Link className='btn btn-primary' to="/set-new-accommodation-fee" style={{ height: 'auto' }}><i className="fa fa-edit mr-2"></i>Set New Accommodation Fee</Link>
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
                        abstractData && abstractData.rows && abstractData.rows.length > 0 ? (
                            <MDBDataTable
                                striped
                                bordered
                                hover
                                noBottomColumns={true}
                                data={abstractData}
                            />
                        ) : (
                            <p>No data available</p>
                        )
                    )}
                </div>

            </div>
        </div>
    );
}

export default AccommodationFee;

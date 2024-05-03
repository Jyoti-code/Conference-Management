import React, { useState, useEffect } from 'react';
import { MDBDataTable } from 'mdbreact';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Spinner from 'react-bootstrap/Spinner';

const AbstractSessionList = () => {
    const [loading, setLoading] = useState(true);
    const [abstractData, setAbstractData] = useState({ columns: [], rows: [] });
    useEffect(() => {
        axios.get('http://127.0.0.1:8000/api/abstractThemeList')
            .then(response => {
                const abstracts = response.data.abstractthemelist;
                const rows = abstracts.map((abstract, index) => ({
                    SN: index + 1,
                    'Abstract Session/Themes': abstract.abstract_theme,
                    Action: (
                        <Link to={`/manage-abstract-session-edit/${abstract.id}`} className="btn btn-light text-primary"><i className="fa fa-edit"></i></Link>
                    )
                }));
                const columns = [
                    { label: 'Sr.No', field: 'SN', sort: 'asc', width: 150 },
                    { label: 'Abstract Session/Themes', field: 'Abstract Session/Themes', sort: 'asc', width: 150 },
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
    }, []);

    return (
        <div className='container'>
            <div className="card" style={{ borderColor: '#fff', borderRadius: '10px', boxShadow: '0 4px 6px rgba(0,0,0,0.1)', overflowX: 'auto' }}>
                <div className="card-header" style={{ position: 'sticky', top: 0, zIndex: 1 }}>
                    <div className='row'>
                        <div className='col-md-6 d-flex justify-content-start'>
                            <h6 className="m-0 font-weight-bold text-primary"><i className="fa fa-table mr-3"></i>Manage Abstract Session/Themes</h6>
                        </div>
                        <div className='col-md-6 d-flex justify-content-end'>
                            <Link to="/create-abstract-session" className='btn btn-primary' style={{ height: 'auto' }}><i className="fa fa-edit mr-2"></i>Create Abstract Session/Theme</Link>
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

export default AbstractSessionList;

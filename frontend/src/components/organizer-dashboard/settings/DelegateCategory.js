import React, { useState, useEffect } from 'react';
import { MDBDataTable } from 'mdbreact';
import { Link} from 'react-router-dom';
import axios from 'axios';
import Spinner from 'react-bootstrap/Spinner';

const DelegateCategory = () => {
    const [loading, setLoading] = useState(true);
    const [abstractData, setAbstractData] = useState({ columns: [], rows: [] });
    const [conferenceList, setConferenceList] = useState([]);
    const [successMessage, setSuccessMessage] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    console.log(conferenceList[0])

useEffect(() => {
    const fetchData = async () => {
        try {
            const response = await axios.get('http://127.0.0.1:8000/api/delegateCategoryConfId');
            const delegate = response.data.delegatecategoryconfid;

            const conferenceData = [
                { conf_id: 19, conference_name: 'Seminar on Role of Chemistry & Biology Interface in Drug Research' },
                { conf_id: 23, conference_name: '26th ISCB International Conference (ISCBC-2020)' },
                { conf_id: 22, conference_name: '28th ISCB International Conference (ISCBC-2024)' },
            ];
            setConferenceList(conferenceData);

            const getConferenceName = (confId) => {
                const conference = conferenceData.find(conf => conf?.conf_id === confId);
                return conference ? conference.conference_name : 'Unknown Conference';
            };

            const rows = delegate.map((abstract, index) => ({
                SN: index + 1,
                'Conference': getConferenceName(abstract.conf_id),
                'Category': (
                    <table>
                        <thead>
                            <tr>
                                <th>Delegate Category</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {abstract.categories.map((category, index) => (
                                <tr key={index}>
                                    <td>{category.name}</td>
                                    <td>
                                        <button className="btn btn-light text-primary" onClick={() => handleDelete(category.id)}>
                                            <i className="fa fa-trash"></i>
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                ),
            }));

            const columns = [
                { label: 'Sr.No', field: 'SN', sort: 'asc', width: 150 },
                { label: 'Conference', field: 'Conference', sort: 'asc', width: 150 },
                { label: 'Category', field: 'Category', sort: 'asc', width: 150 },
            ];
            setAbstractData({ columns, rows });
        } catch (error) {
            console.error('Error fetching data:', error);
        } finally {
            setLoading(false);
        }
    };
    fetchData();
}, []);


    const handleDelete = (id) => {
        console.log("id is", id);
            const isConfirmed = window.confirm("Are you sure you want to delete this delegate category?");
        if (isConfirmed) {
            axios.post(`http://127.0.0.1:8000/api/delegateCategoryDelete/${id}`)
            .then(response => {
                setSuccessMessage(response.data.message);
            })
            .catch(error => {
                setErrorMessage('Error deleting category');
            });
        }
    };

    return (
        <div className='container'>
            <div className="col-md-12">
                {successMessage && (
                    <div className="alert alert-success mt-3" role="alert">
                        {successMessage}
                        <button type="button" className="close" onClick={() => setSuccessMessage(null)} aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                )}
                {errorMessage && (
                    <div className="alert alert-danger mt-3" role="alert">
                        {errorMessage}
                        <button type="button" className="close" onClick={() => setErrorMessage(null)} aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                )}
            </div>
            <div className="card" style={{ borderColor: '#fff', borderRadius: '10px', boxShadow: '0 4px 6px rgba(0,0,0,0.1)', overflowX: 'auto' }}>
                <div className="card-header" style={{ position: 'sticky', top: 0, zIndex: 1 }}>
                    <div className='row'>
                        <div className='col-md-6 d-flex justify-content-start'>
                            <h6 className="m-0 font-weight-bold text-primary mb-2"><i className="fa fa-table mr-3"></i>Delegate Category</h6>
                        </div>
                        <div className='col-md-6 d-flex justify-content-end'>
                            <Link className='btn btn-primary' to="/adddelegatecategory" style={{ height: 'auto' }}><i className="fa fa-edit mr-2"></i>Add Delegate Category</Link>
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

export default DelegateCategory;

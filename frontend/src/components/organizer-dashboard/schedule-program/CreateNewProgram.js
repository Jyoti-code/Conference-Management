import React from 'react'
import { useNavigate } from 'react-router-dom';

export default function CreateNewProgram() {
    const navigate = useNavigate();

    return (
        <div className='container mt-5'>
            <div className='row'>
                <div className='col-md-10'>
                    <div className='card' style={{ borderColor: '#fff', borderRadius: '10px', boxShadow: '0 4px 6px rgba(0,0,0,0.1)', overflowX: 'auto' }}>
                        <div className='card-header py-3' style={{ position: 'sticky', top: 0, zIndex: 1 }}>
                            <div className='row'>
                                <div className='col-md-6'>
                                    <h6 className="m-0 font-weight-bold text-primary"><i className="fa fa-shield mr-3"></i>Check-In/Check-Out</h6>
                                </div>
                                <div className='col-md-6 d-flex justify-content-end'>
                                    <button className='btn btn-primary' style={{ height: '40px' }} onClick={() => navigate(-1)}>Back</button>
                                </div>
                            </div>
                        </div>
                        <div className='card-body' style={{ overflowY: 'auto' }}>
                            <label>Select Conference</label>
                            <select className="form-control input-lg mb-3">
                                <option>--Select Conference--</option>
                                <option>25th ISCB International Conference (ISCBC-2019)</option>
                                <option>26th ISCB International Conference (ISCBC-2020)</option>
                                <option>27th ISCB International Conference (ISCBC-2022)</option>
                            </select>

                            <label>Session name</label>
                            <select className="form-control input-lg mb-3">
                                <option>Session Name</option>
                            </select>
                            <label>Presentation(s):- </label>
                            <label className="ml-3 radio-inline">
                                <input id="abstract" name="radio" type="radio" /><span className="ml-1">Abstract</span></label>
                            <label className="ml-3 radio-inline"><input id="others" name="radio" value="others" type="radio" />
                                <span className="ml-1">Others</span></label><br/>
                            <label className="mt-3">Select show / hide</label>
                            <select className="form-control input-lg mb-3">
                                <option>Show</option>
                                <option>Hide</option>
                            </select>
                            <button className='btn btn-primary'>Submit</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

import React from 'react'
import { useNavigate } from 'react-router-dom';

export default function CreateNewSchedule() {
    const navigate = useNavigate();
    return (
        <div className='container mt-5'>
            <div className='row'>
                <div className='col-md-10'>
                    <div className='card' style={{ borderColor: '#fff', borderRadius: '10px', boxShadow: '0 4px 6px rgba(0,0,0,0.1)', overflowX: 'auto' }}>
                        <div className='card-header py-3' style={{ position: 'sticky', top: 0, zIndex: 1 }}>
                            <div className='row'>
                                <div className='col-md-6'>
                                    <h6 className="m-0 font-weight-bold text-primary"><i className="fa fa-shield mr-3"></i> Create New Schedule</h6>
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
                            <input className="form-control input-lg mb-3" type='text' placeholder='Session name' />

                            <div className='row'>
                                <div className='col-md-6'>
                                    <label>Date</label>
                                    <input className="form-control input-lg mb-3" type='date' />
                                </div>
                                <div className='col-md-6'>
                                    <label>Day</label>
                                    <select className="form-control input-lg mb-3">
                                        <option value="">--Select Day--</option>
                                        <option value="Sunday">Sunday</option>
                                        <option value="Monday">Monday</option>
                                        <option value="Tuesday">Tuesday</option>
                                        <option value="Wednesday">Wednesday</option>
                                        <option value="Thursday">Thursday</option>
                                        <option value="Friday">Friday</option>
                                        <option value="Saturday">Saturday</option>
                                    </select>
                                </div>
                            </div>

                            <div className='row'>
                                <div className='col-md-6'>
                                    <label>Session Start Time</label>
                                    <input className="form-control input-lg mb-3" type='time' />
                                </div>
                                <div className='col-md-6'>
                                    <label>Session End Time</label>
                                    <input className="form-control input-lg mb-3" type='time' />
                                </div>
                            </div>

                            <label>Name of Chair</label>
                            <input className="form-control input-lg mb-3" type='text' placeholder='Name of Chair' />
                            <label>Name of Co-chair</label>
                            <input className="form-control input-lg mb-3" type='text' placeholder='Name of Co-chair' />
                            <label>Name of Coordinator</label>
                            <input className="form-control input-lg mb-3" type='text' placeholder='Name of Coordinator' />
                            <label>Name of Panelists</label>
                            <input className="form-control input-lg mb-3" type='text' placeholder='Name of Panelists' />
                            <label>Session Venue</label>
                            <input className="form-control input-lg mb-3" type='text' placeholder='Session Venue' />
                            <label>Select show / hide</label>
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

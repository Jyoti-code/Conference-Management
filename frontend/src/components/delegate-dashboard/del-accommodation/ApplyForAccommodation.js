import React from 'react'

export default function ApplyForAccommodation() {

    return (
        <div className='container mt-5'>
            <div className='row'>
                <div className='col-md-10'>
                    <div className='card' style={{ borderColor: '#fff', borderRadius: '10px', boxShadow: '0 4px 6px rgba(0,0,0,0.1)', overflowX: 'auto' }}>
                        <div className='card-header py-3' style={{ position: 'sticky', top: 0, zIndex: 1 }}>
                            <h6 className="m-0 font-weight-bold text-primary"><i className="fa fa-shield mr-3"></i>Apply for Accommodation</h6>
                        </div>
                        <div className='card-body' style={{ overflowY: 'auto' }}>
                            <label>Select Conference</label>
                            <select className="form-control input-lg mb-3">
                                <option>--Select Conference--</option>
                                <option>25th ISCB International Conference (ISCBC-2019)</option>
                                <option>26th ISCB International Conference (ISCBC-2020)</option>
                                <option>27th ISCB International Conference (ISCBC-2022)</option>
                            </select>
                            <label>Select Category</label>
                            <select className="form-control input-lg mb-3">
                                <option value="-1">Select</option>
                            </select>
                            <div className='row'>
                                <div className='col-md-6'>
                                    <label>Check-In Date & Time: </label>
                                    <div className='row'>
                                        <div className='col-md-6'>
                                            <input type='date' className='form-control input-lg mb-3' />
                                        </div>
                                        <div className='col-md-6'>
                                            <input type='time' className='form-control input-lg mb-3' />
                                        </div>
                                    </div>
                                </div>

                                <div className='col-md-6'>
                                    <label>Check-Out Date & Time : </label>
                                    <div className='row'>
                                        <div className='col-md-6'>
                                            <input type='date' className='form-control input-lg mb-3' />
                                        </div>
                                        <div className='col-md-6'>
                                            <input type='time' className='form-control input-lg mb-3' />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <label>No. of persons</label>
                            <select className="form-control input-lg mb-3">
                                <option value="-1">Select</option>
                            </select>
                            <label>Total No. of Days 0</label><br />
                            <label>Per Day/Per Person Amount :</label><br />
                            <label>Total Pay Amount : 0</label><br />
                            <label>Payment Mode</label>
                            <select className="form-control input-lg mb-3">
                                <option value="-1">Select</option>
                            </select>
                            <div className='row'>
                                <div className='col-md-6'>
                                    <label>Cheque/ Draft/ Transaction Number</label>
                                    <input type='text' placeholder='Cheque/ Draft/ Transaction Number' className='form-control input-lg mb-3' />
                                </div>
                                <div className='col-md-6'>
                                    <label>Cheque/ Draft/ Transaction Date</label>
                                    <input type='date' placeholder='Cheque/ Draft/ Transaction Number' className='form-control input-lg mb-3' />
                                </div>
                            </div>
                            <label>Bank Name</label>
                            <input type='text' placeholder='Bank Name' className='form-control input-lg mb-3' />
                            <label>Upload Fee Payment Proof</label>
                            <input type='file' className='form-control input-lg mb-3' />
                            <label>Please upload scan/print copy of Cheque/ Draft/ Bank Transfer Receipt/ Cash Deposit Receipt</label><br />
                            <button type='submit' className='btn btn-primary'>Submit</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

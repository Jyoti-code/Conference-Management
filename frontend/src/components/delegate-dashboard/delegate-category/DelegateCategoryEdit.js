import React from 'react'

export default function DelegateCategoryEdit() {
    return (
        <div className='container mt-5'>
            <div className='row'>
                <div className='col-md-10'>
                    <div className='card' style={{ borderColor: '#fff', borderRadius: '10px', boxShadow: '0 4px 6px rgba(0,0,0,0.1)', overflowX: 'auto' }}>
                        <div className='card-header py-3' style={{ position: 'sticky', top: 0, zIndex: 1 }}>
                            <h6 className="m-0 font-weight-bold text-primary"><i className="fa fa-shield mr-3"></i>Delegate Category</h6>
                        </div>
                        <div className='card-body' style={{ overflowY: 'auto' }}>
                            <label>Conference</label>
                            <p>Conference</p>

                            <label>Delegate Category</label>
                            <select className="form-control input-lg mb-3">
                                <option value="">Select delegate category</option>
                                <option value="Student">Student</option>
                                <option value="Delegate">Delegate</option>
                            </select>
                            <button className='btn btn-primary'>Update</button>                         
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

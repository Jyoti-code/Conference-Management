import React from 'react'

export default function PrintScheduleProgram() {
    const handlePrint=()=>{
        window.print();
    }
  return (
    <div className='container mt-5'>
        <div className='row'>
            <div className='col-md-10'>
                <div className='card' style={{ borderColor: '#fff', borderRadius: '10px', boxShadow: '0 4px 6px rgba(0,0,0,0.1)', overflowX: 'auto' }}>
                    <div className='card-header py-3'>
                    <h6 className="m-0 font-weight-bold text-primary"><i className="fa fa-shield mr-3"></i>Print Conference Schedule</h6>
                </div>
                    <div className='card-body'>
                        <label>Select Conference</label>
                        <select className="form-control input-lg mb-3">
                            <option>--Select Conference--</option>
                            <option>25th ISCB International Conference (ISCBC-2019)</option>
                            <option>26th ISCB International Conference (ISCBC-2020)</option>
                            <option>27th ISCB International Conference (ISCBC-2022)</option>
                        </select>
                        <label>Select date for print</label>
                        <input type='date' className='form-control input-lg mb-3'/>

                        <button type='print' onClick={handlePrint} className='btn btn-primary'>Print</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

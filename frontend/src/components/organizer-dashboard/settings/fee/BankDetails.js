
export default function BankDetails() {

    return (   
        <div className='container mt-5'>
            <div className='row'>
                <div className='col-md-10'>
                    <div className='card' style={{ borderColor: '#fff', borderRadius: '10px', boxShadow: '0 4px 6px rgba(0,0,0,0.1)', overflowX: 'auto' }}>
                        <div className='card-header py-3' style={{ position: 'sticky', top: 0, zIndex: 1 }}>
                            <div className='row'>
                                <div className='col-md-6'>
                                    <h6 className="m-0 font-weight-bold text-primary mb-2"><i className="fa fa-shield mr-3"></i>QR Code</h6>
                                </div>
                            </div>
                        </div>
                        <div className='card-body' style={{ overflowY: 'auto' }}>
                            <form>
                                <label>Select Conference</label>
                                <select name="conf_id" className="form-control input-lg mb-3" id="conf_id">
                                    <option value="">Select Conference Name</option>
                                    <option value="19">Seminar on Role of Chemistry Biology Interface in Drug Research</option>
                                    <option value="23">26th ISCB International Conference (ISCBC-2020)</option>
                                    <option value="22">28th ISCB International Conference (ISCBC-2024)</option>
                                </select>
                                <label>Name of Account</label>
                                <input id="delegate_category" name="delegate_category" type="text" placeholder='Name of Account' className="form-control input-lg mb-3" />

                                <label>Name of the Bank</label>
                                <input id="amount" name="amount" type="text" placeholder='Name of the Bank' className="form-control input-lg mb-3"/>

                                <label>Bank Address</label>
                                <input id="amount" name="amount" type="text" placeholder='Bank Address' className="form-control input-lg mb-3"/>

                                <label>Type of Account</label>
                                <input id="amount" name="amount" type="text" placeholder='Type of Account' className="form-control input-lg mb-3"/>

                                <label>Account Number</label>
                                <input id="amount" name="amount" type="text" placeholder='Account Number' className="form-control input-lg mb-3"/>

                                <label>IFSC</label>
                                <input id="amount" name="amount" type="text" placeholder='IFSC Code' className="form-control input-lg mb-3"/>

                                <label>Swift code</label>
                                <input id="amount" name="amount" type="text" placeholder='Swift code' className="form-control input-lg mb-3"/>

                                <label>UPI I,d</label>
                                <input id="amount" name="amount" type="text" placeholder='UPI I,d' className="form-control input-lg mb-3"/>

                                <label>Upload QR File</label>
                                <input id="amount" name="amount" type="file"  className="form-control input-lg mb-3"/>

                                <button className='btn btn-primary'>Submit</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

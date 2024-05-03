import { useNavigate } from 'react-router-dom'

export default function AddReceiptSetting() {

    const navigate = useNavigate();
    return (
        <div className='container mt-5'>
            <div className='row'>
                <div className='col-md-10'>
                    <div className='card' style={{ borderColor: '#fff', borderRadius: '10px', boxShadow: '0 4px 6px rgba(0,0,0,0.1)', overflowX: 'auto' }}>
                        <div className="card-header">
                            <div className='row'>
                                <div className='col-md-6 d-flex justify-content-start'>
                                    <h6 className="m-0 font-weight-bold text-primary"><i className="fa fa-shield mr-3"></i>Receipt Setting</h6>
                                </div>
                                <div className='col-md-6 d-flex justify-content-end'>
                                    <button className='btn btn-primary' style={{ height: 'auto' }} onClick={() => navigate(-1)}>Back</button>
                                </div>
                            </div>
                        </div>
                        <div className='card-body'>
                            <form>
                                <label>Select Conference</label>
                                <select className="form-control input-lg mb-3" name="conf_id" >
                                    <option value="">Select Conference Name</option>
                                    <option value="19">Seminar on Role of Chemistry & Biology Interface in Drug Research</option>
                                    <option value="23">26th ISCB International Conference (ISCBC-2020)</option>
                                    <option value="22">28th ISCB International Conference (ISCBC-2024)</option>
                                </select>
                                <label>Upload Seal/Stamp</label>
                                <input type='file' className='form-control input-lg mb-3' placeholder="Category Name" name="category_name" />

                                <label>Upload Signature</label>
                                <input type='file' className='form-control input-lg mb-3' placeholder="Category Name" name="category_name" />

                                <label>Generation Receipt Date-Organizer</label>
                                <input type='date' className='form-control input-lg mb-3' placeholder="Category Name" name="category_name" />

                                <label>Generation Receipt Date-Delegate</label>
                                <input type='date' className='form-control input-lg mb-3' placeholder="Category Name" name="category_name" />

                                <button type='submit' className='btn btn-primary'>Submit</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

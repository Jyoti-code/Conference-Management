import React from 'react';
import { Link } from 'react-router-dom';
import { MDBDataTable } from 'mdbreact';

const RecieptSetting = () => {
    const data = {
        columns: [
            {
                label: 'Conference Name',
                field: 'name',
                sort: 'asc',
                width: 150
            },
            {
                label: 'Seal',
                field: 'position',
                sort: 'asc',
                width: 270
            },
            {
                label: 'Signature',
                field: 'office',
                sort: 'asc',
                width: 200
            },
            {
                label: 'Organizer Date',
                field: 'age',
                sort: 'asc',
                width: 100
            },
            {
                label: 'Deligate Date',
                field: 'date',
                sort: 'asc',
                width: 150
            },
            {
                label: 'Action',
                field: '',
                sort: 'asc',
                width: 100
            }
        ],
        rows: [
            {
                name: '28th ISCB International Conference (ISCBC-2024)',
                position: 'System Architect',
                office: 'Edinburgh',
                age: '2023-12-20',
                date: '2011/04/25',
                salary: '$320'
            },
        ]
    };

    return (
        <div className='container'>
            <div className="card" style={{ borderColor: '#fff', borderRadius: '10px', boxShadow: '0 4px 6px rgba(0,0,0,0.1)', overflowX: 'auto' }}>
                <div className="card-header" style={{ position: 'sticky', top: 0, zIndex: 1 }}>
                    <div className='row'>
                        <div className='col-md-6 d-flex justify-content-start'>
                            <h6 className="m-0 font-weight-bold text-primary"><i className="fa fa-table mr-3"></i>Receipt Setting List</h6>
                        </div>
                        <div className='col-md-6 d-flex justify-content-end'>
                            <Link to="/settings-reciept-add" className='btn btn-primary' style={{height:'auto'}}><i className="fa fa-edit mr-2"></i>Receipt Setting</Link>
                        </div>                   
                      
                    </div>
                </div>
                <div className="card-body" style={{ overflowY: 'auto' }}>
                    <MDBDataTable
                        striped
                        bordered
                        hover
                        noBottomColumns={true}
                        data={data}
                    />
                </div>
            </div>
        </div>
    );
}

export default RecieptSetting;
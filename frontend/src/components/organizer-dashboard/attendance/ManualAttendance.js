import React from 'react';
import { MDBDataTable } from 'mdbreact';

const ManualAttendance = () => {
    const data = {
        columns: [
            {
                label: 'Registration No',
                field: 'name',
                sort: 'asc',
                width: 150
            },
            {
                label: 'Delegate Category',
                field: 'position',
                sort: 'asc',
                width: 270
            },
            {
                label: 'Delegate Name',
                field: 'office',
                sort: 'asc',
                width: 200
            },
            {
                label: 'Gender',
                field: 'age',
                sort: 'asc',
                width: 100
            },
            {
                label: 'Attendance Status',
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
                name: '001',
                position: 'System Architect',
                office: 'Edinburgh',
                age: 'Female',
                date: 'Success',
                salary: '$320'
            },
            {
                name: '002',
                position: 'Accountant',
                office: 'Tokyo',
                age: 'Male',
                date: 'Pending',
                salary: '$170'
            },
            {
                name: '003',
                position: 'Junior Technical Author',
                office: 'San Francisco',
                age: 'Female',
                date: 'Success',
                salary: '$86'
            },
            {
                name: '004',
                position: 'Senior Javascript Developer',
                office: 'Edinburgh',
                age: 'Female',
                date: 'Pending',
                salary: '$433'
            },
            {
                name: '005',
                position: 'Accountant',
                office: 'Tokyo',
                age: 'Male',
                date: 'Success',
                salary: '$162'
            },
            {
                name: '006',
                position: 'Integration Specialist',
                office: 'New York',
                age: 'Male',
                date: 'Success',
                salary: '$372'
            },
            {
                name: '007',
                position: 'Sales Assistant',
                office: 'San Francisco',
                age: 'Female',
                date: 'Pending',
                salary: '$137'
            },
        ]
    };
    return (
        <div className='container'>
            <div className="card" style={{ borderColor: '#fff', borderRadius: '10px', boxShadow: '0 4px 6px rgba(0,0,0,0.1)', overflowX: 'auto' }}>
                <div className="card-header" style={{ position: 'sticky', top: 0, zIndex: 1 }}>
                    <div className='row'>
                        <div className='col-md-6 d-flex justify-content-start'>
                            <h6 className="m-0 font-weight-bold text-primary"><i className="fa fa-table mr-3"></i>Manual Attendance</h6>
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

export default ManualAttendance;
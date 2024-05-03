import React from 'react';
import { MDBDataTable } from 'mdbreact';
import { Link } from 'react-router-dom';

const ManageSchedule = () => {
    const data = {
        columns: [
            {
                label: 'Date & day',
                field: 'name',
                sort: 'asc',
                width: 150
            },
            {
                label: 'Session Name',
                field: 'position',
                sort: 'asc',
                width: 270
            },
            {
                label: 'Session Start Time',
                field: 'office',
                sort: 'asc',
                width: 200
            },
            {
                label: 'Session End Times',
                field: 'age',
                sort: 'asc',
                width: 100
            },
            {
                label: 'Name of Chair',
                field: 'date',
                sort: 'asc',
                width: 150
            },
            {
                label: 'Name of Co-chair',
                field: 'salary',
                sort: 'asc',
                width: 100
            },
            {
                label: 'Name of Coordinator',
                field: 'salary',
                sort: 'asc',
                width: 100
            },
            {
                label: 'Name of Panelists',
                field: 'salary',
                sort: 'asc',
                width: 100
            },
            {
                label: 'Session Venue',
                field: 'salary',
                sort: 'asc',
                width: 100
            },
            {
                label: 'Status',
                field: 'salary',
                sort: 'asc',
                width: 100
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
                name: 'Tiger Nixon',
                position: 'System Architect',
                office: 'Edinburgh',
                age: '61',
                date: '2011/04/25',
                salary: '$320'
            },
            {
                name: 'Garrett Winters',
                position: 'Accountant',
                office: 'Tokyo',
                age: '63',
                date: '2011/07/25',
                salary: '$170'
            },
            {
                name: 'Ashton Cox',
                position: 'Junior Technical Author',
                office: 'San Francisco',
                age: '66',
                date: '2009/01/12',
                salary: '$86'
            },
            {
                name: 'Cedric Kelly',
                position: 'Senior Javascript Developer',
                office: 'Edinburgh',
                age: '22',
                date: '2012/03/29',
                salary: '$433'
            },
            {
                name: 'Airi Satou',
                position: 'Accountant',
                office: 'Tokyo',
                age: '33',
                date: '2008/11/28',
                salary: '$162'
            },
            {
                name: 'Brielle Williamson',
                position: 'Integration Specialist',
                office: 'New York',
                age: '61',
                date: '2012/12/02',
                salary: '$372'
            },
            {
                name: 'Herrod Chandler',
                position: 'Sales Assistant',
                office: 'San Francisco',
                age: '59',
                date: '2012/08/06',
                salary: '$137'
            },
        ]
    };
    return (
        <div className='container'>
            <div className="card" style={{ borderColor: '#fff', borderRadius: '10px', boxShadow: '0 4px 6px rgba(0,0,0,0.1)', overflowX: 'auto' }}>
                <div className="card-header" style={{ position: 'sticky', top: 0, zIndex: 1 }}>
                    <div className='row'>
                        <div className='col-md-6 d-flex justify-content-start mb-3'>
                            <h6 className="m-0 font-weight-bold text-primary"><i className="fa fa-table mr-3"></i>Manage Schedule</h6>
                        </div>
                        <div className='col-md-6 d-flex justify-content-end'>
                            <Link to="/create-new-schedule" className='btn btn-primary' style={{height:'auto'}}><i className="fa fa-edit mr-2"></i>Create New Schedule</Link>
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

export default ManageSchedule;
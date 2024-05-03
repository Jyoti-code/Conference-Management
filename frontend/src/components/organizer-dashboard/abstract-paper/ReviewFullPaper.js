import React from 'react';
import { MDBDataTable } from 'mdbreact';

const ReviewFullPaper = () => {
    const data = {
        columns: [
      {
        label: 'Registration No',
        field: 'name',
        sort: 'asc',
        width: 150
      },
      {
        label: 'Delegate Name',
        field: 'position',
        sort: 'asc',
        width: 270
      },
      {
        label: 'Proposal Type',
        field: 'office',
        sort: 'asc',
        width: 200
      },
      {
        label: 'Paper Title',
        field: 'age',
        sort: 'asc',
        width: 100
      },
      {
        label: 'Date of Submission',
        field: 'date',
        sort: 'asc',
        width: 150
      },
      {
        label: 'Status',
        field: 'salary',
        sort: 'asc',
        width: 100
      },
      {
        label: 'Remarks',
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
                <div className='card-header py-3' style={{ position: 'sticky', top: 0, zIndex: 1 }}>
                    <h6 className="m-0 font-weight-bold text-primary"><i className="fa fa-table mr-3"></i>Review full Paper</h6>
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
export default ReviewFullPaper;
import React, { useState, useEffect } from 'react';
import { MDBDataTable } from 'mdbreact';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Spinner from 'react-bootstrap/Spinner';

const OrganizerList = () => {
  const navigate = useNavigate();
  const [data, setData] = useState({ columns: [], rows: [] });
  const [loading, setLoading] = useState(true); 
  const conId = localStorage.getItem('id');

useEffect(() => {
  const fetchData = async () => {
    try {
      const response = await axios.get(`http://127.0.0.1:8000/api/organizerDetailsListPost/${conId}`);

      const { ConfId, Name, From, To, Status, Count } = response.data.organizerlistdetails;

      const serializedData = {
        'ConfId': ConfId,
        'Name': Name,
        'From': From,
        'To': To,
        'Status': Status,
        'actions': (
          <div>
            <button className='btn btn-light text-primary' onClick={() => navigate(`/organizerdetailsedit/${ConfId}`)}><i className="fa fa-edit"></i></button>
            <button className='btn btn-light text-primary' onClick={() => navigate(`/organizerdetailsview/${ConfId}`)}><i className="fa fa-eye"></i></button>
            {/* <button className='btn btn-light text-primary' onClick={() => handleDelete(ConfId)}><i className="fa fa-trash"></i></button> */}
          </div>
        ),
        'StatusButton': (
          <div>
            {Status === 0 && (
              <span className='badge badge-warning text-white'>Pending</span>
            )}
            {Status === 1 && (
              <span className='badge badge-success text-white'>Success</span>
            )}
          </div>
        ),
        'registrations': Count[0].conf_id_count
      };

      setData({
        columns: [
          {
            label: 'Conference ID',
            field: 'ConfId',
            sort: 'asc',
            width: 150,
          },
          {
            label: 'Conference Name',
            field: 'Name',
            sort: 'asc',
            width: 270,
          },
          {
            label: 'From Date',
            field: 'From',
            sort: 'asc',
            width: 200,
          },
          {
            label: 'To Date',
            field: 'To',
            sort: 'asc',
            width: 200,
          },
          {
            label: 'Status',
            field: 'StatusButton',
            sort: 'asc',
            width: 200,
          },
          {
            label: 'Registrations',
            field: 'registrations',
            sort: 'asc',
            width: 200,
          },
          {
            label: 'Actions',
            field: 'actions',
            sort: 'asc',
            width: 200,
          }
        ],
        rows: [serializedData]
      });
    } catch (error) {
      console.error('Error fetching data:', error);
    } finally {
      setLoading(false);
    }
  }
    fetchData();
}, [conId, navigate]);

  // useEffect(() => {
  //   fetchData();
  // },[]);

  // const handleDelete = (id) => {
  //   const isConfirmed = window.confirm("Are you sure you want to delete this organizer details?");
  //   if (isConfirmed) {
  //     axios.delete(`http://127.0.0.1:8000/api/organizerDetailsDelete/${id}`)
  //       .then(() => {
  //         fetchData();
  //         console.log('Organizer deleted successfully');
  //       })
  //       .catch(error => {
  //         console.error('Error deleting organizer:', error);
  //       });
  //   }
  // };

  return (
    <div className='container'>
      <div className="card" style={{ borderColor: '#fff', borderRadius: '10px', boxShadow: '0 4px 6px rgba(0,0,0,0.1)', overflowX: 'auto' }}>
        <div className="card-header py-3" style={{ position: 'sticky', top: 0, zIndex: 1 }}>
          <h6 className="m-0 font-weight-bold text-primary"><i className="fa fa-table mr-3"></i>Past Conferences</h6>
        </div>
        <div className="card-body" style={{ maxHeight: '400px', overflowY: 'auto' }}>
          {loading ? (
            <div className="d-flex justify-content-center align-items-center">
              <Spinner animation="grow" size="sm" variant="primary" />
              <Spinner animation="grow" size="sm" variant="primary" />
              <Spinner animation="grow" size="sm" variant="primary" />
            </div>
          ) : (
            data && data.rows && data.rows.length > 0 ? (
              <MDBDataTable
                striped
                bordered
                noBottomColumns={true}
                data={{ columns: data.columns, rows: data.rows }}
              />
            ) : (
              <p>No data available</p>
            )
          )}
        </div>
      </div>

    </div>
  );
}

export default OrganizerList;

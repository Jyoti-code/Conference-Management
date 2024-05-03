import React, { useState, useEffect,useMemo } from 'react';
import { MDBDataTable } from 'mdbreact';
import axios from 'axios';
import Spinner from 'react-bootstrap/Spinner';

const DelPastConferences = () => {
  const [data, setData] = useState({ columns: [], rows: [] });
  const [loading, setLoading] = useState(true); // State for loading
  const userId = localStorage.getItem('id');

 const ColumnsArray = useMemo(() => [
    {
      label: 'Conference Id',
      field: 'conf_id',
      sort: 'asc',
      width: 150,
    },
    {
      label: 'Conference Name',
      field: 'name_of_conference',
      sort: 'asc',
      width: 150,
    },
    {
      label: 'From Date',
      field: 'from_date',
      sort: 'asc',
      width: 150,
    },
    {
      label: 'To Date',
      field: 'to_date',
      sort: 'asc',
      width: 150,
    },
  ], []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`http://127.0.0.1:8000/api/delegatesListPast/${userId}`);
        const conferenceDetails = response.data.delegatelistdetails;
        const rows = conferenceDetails.map(conference => ({
          conf_id: conference.conf_id,
          name_of_conference: conference.name_of_conference,
          from_date: conference.from_date,
          to_date: conference.to_date
        }));
        setData({ columns: ColumnsArray, rows: rows });
        setLoading(false);
      } catch (error) {
        console.error('Error fetching data:', error);
        setLoading(false); 
      }
    };

    fetchData();
  }, [userId, ColumnsArray]);

  return (
    <div className='container'>
      <div className="card" style={{ borderColor: '#fff', borderRadius: '10px', boxShadow: '0 4px 6px rgba(0,0,0,0.1)', overflowX: 'auto' }}>
        <div className='card-header py-3' style={{ position: 'sticky', top: '0', zIndex: '100' }}>
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
                data={{ columns: ColumnsArray, rows: data.rows }}
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

export default DelPastConferences;

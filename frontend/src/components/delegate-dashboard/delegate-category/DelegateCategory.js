import React, { useState, useEffect, useMemo } from 'react';
import { MDBDataTable } from 'mdbreact';
import axios from 'axios';
import Spinner from 'react-bootstrap/Spinner';
import {Link} from 'react-router-dom'

const DelegateCategory = () => {
  const [data, setData] = useState({ columns: [], rows: [] });
  const [loading, setLoading] = useState(true);
  const userId = localStorage.getItem('id');

  const ColumnsArray = useMemo(() => [
    {
      label: 'Conference Name',
      field: 'name_of_conference',
      sort: 'asc',
      width: 150,
    },
    {
      label: 'Category',
      field: 'delegate_category',
      sort: 'asc',
      width: 150,
    },
    {
      label: 'Action',
      field: 'actions',
      sort: 'asc',
      width: 150,
    },
  ], []);
  
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`http://127.0.0.1:8000/api/delegateCategoryList/${userId}`);
        const conferenceDetails = response.data.delegatelistdetails;
        const rows = conferenceDetails.map(conference => ({
          name_of_conference: conference.name_of_conference,
          delegate_category: conference.delegate_category,
          actions: (
            <div>
              <Link to="/delegate-category-edit-form" className='btn btn-light text-primary'><i className="fa fa-edit"></i></Link>
            </div>
          )
        }));
        setData({ columns: ColumnsArray, rows: rows });
        setLoading(false);
      } catch (error) {
        console.error('Error fetching data:', error);
        setLoading(false);
      }
    }
    fetchData();
  }, [userId, ColumnsArray]);

  // useEffect(() => {
  //   fetchData();
  // },[]);

  return (
    <div className='container'>
      <div className="card" style={{ borderColor: '#fff', borderRadius: '10px', boxShadow: '0 4px 6px rgba(0,0,0,0.1)', overflowX: 'auto' }}>
        <div className='card-header py-3' style={{ position: 'sticky', top: '0', zIndex: '100' }}>
          <h6 className="m-0 font-weight-bold text-primary"><i className="fa fa-table mr-3"></i>Delegate Category</h6>
        </div>
        <div className="card-body" style={{ maxHeight: '400px', overflowY: 'auto', position: 'relative' }}>
          {loading ? ( // Show spinner if loading is true
            <div className="d-flex justify-content-center align-items-center">
              <Spinner animation="grow" size="sm" variant="primary" />
              <Spinner animation="grow" size="sm" variant="primary" />
              <Spinner animation="grow" size="sm" variant="primary" />
            </div>
          ) : (
            <>
              {data && data.rows && data.rows.length > 0 ? (
                <MDBDataTable
                  striped
                  bordered
                  noBottomColumns={true}
                  data={{ columns: ColumnsArray, rows: data.rows }}
                />
              ) : (
                <p>No data available</p>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default DelegateCategory;

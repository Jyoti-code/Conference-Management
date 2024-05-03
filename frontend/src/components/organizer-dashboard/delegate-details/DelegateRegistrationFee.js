import React, { useState, useEffect,useMemo } from 'react';
import { MDBDataTable } from 'mdbreact';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Spinner from 'react-bootstrap/Spinner';

const DelegateRegistrationFee = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState({ columns: [], rows: [] });
  const selectedConference = localStorage.getItem('selectedConference');

  const ColumnsArray =useMemo(() => [
    {
      label: 'SR No',
      field: 'sr_no',
      sort: 'asc',
      width: 150,
    },
    {
      label: 'Registration No',
      field: 'del_reg_no',
      sort: 'asc',
      width: 270,
    },
    {
      label: 'Delegate Name',
      field: '',
      sort: 'asc',
      width: 200,
    },
    {
      label: 'Payment Mode',
      field: '',
      sort: 'asc',
      width: 200,
    },
    {
      label: 'Cheque/Draft/Transaction Number',
      field: '',
      sort: 'asc',
      width: 200,
    },
    {
      label: 'Bank Name',
      field: '',
      sort: 'asc',
      width: 200,
    },
    {
      label: 'Amount',
      field: '',
      sort: 'asc',
      width: 200,
    },
    {
      label: 'Coupon Code',
      field: '',
      sort: 'asc',
      width: 200,
    },
    {
      label: 'Fee Payment Date',
      field: '',
      sort: 'asc',
      width: 200,
    },
    {
      label: 'Status',
      field: '',
      sort: 'asc',
      width: 200,
    },
    {
      label: 'Actions',
      field: 'actions',
      sort: 'asc',
      width: 200,
    }
  ],[]);

useEffect(() => {
  const fetchData = async () => {
    try {
      const response = await axios.get(`http://127.0.0.1:8000/api/filterDelegateList/${selectedConference}`);
      const serializedData = response.data.filterdelegates.map((delegate, index) => ({
        ...delegate,
        sr_no: index + 1
      }));
      setData({
        columns: [],
        rows: serializedData.map(delegate => ({
          ...delegate,
          actions: (
            <div>
              <button className='btn btn-light text-primary' onClick={() => navigate(`/delegateview/${delegate.id}`)}><i className="fa fa-eye"></i></button>
            </div>
          )
        }))
      });
    } catch (error) {
      console.error('Error fetching data:', error);
    } finally {
      setLoading(false); 
    }
  };
  fetchData();
  }, [selectedConference, ColumnsArray,navigate]);

  // useEffect(() => {
  //   fetchData();
  // },[]);

  return (
    <div className='container'>
      <div className='card' style={{ borderColor: '#fff', borderRadius: '10px', boxShadow: '0 4px 6px rgba(0,0,0,0.1)', overflowX: 'auto' }}>
        <div className='card-header py-3' style={{ position: 'sticky', top: '0', zIndex: '100' }}>
          <h6 className="m-0 font-weight-bold text-primary"><i className="fa fa-table mr-3"></i>Registration Fee Payments</h6>
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
export default DelegateRegistrationFee;

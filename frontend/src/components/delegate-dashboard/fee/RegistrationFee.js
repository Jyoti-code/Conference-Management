import React, { useState, useEffect } from 'react';
import { MDBDataTable } from 'mdbreact';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { PDFDownloadLink, Document, Page, Text, View, StyleSheet } from '@react-pdf/renderer';
import Spinner from 'react-bootstrap/Spinner';

const styles = StyleSheet.create({
  page: {
    flexDirection: 'column',
    padding: 20,
  },
  section: {
    margin: 10,
    padding: 10,
    flexGrow: 1,
  },
});

const RegistrationFee = () => {
  const [abstractData, setAbstractData] = useState({ columns: [], rows: [] });
  const [loading, setLoading] = useState(true); 

  useEffect(() => {
    axios.get('http://127.0.0.1:8000/api/payRegistrationFeeList')
      .then(response => {
        const abstracts = response.data.payregistrationfee;
        const rows = abstracts.map((abstract, index) => ({
          SN: index + 1,
          'Payment Mode': abstract.payment_mode,
          'Cheque/ Draft/ Transaction Number': abstract.transaction_number,
          'Cheque/ Draft/ Transaction Date': abstract.transaction_date,
          'Bank Name': abstract.bank_name,
          'Amount': abstract.pay_amount,
          Status: abstract.status,
          Remarks: abstract.remarks,
          'Download Receipt': (
            <PDFDownloadLink document={<PDFDocument abstract={abstract} />} fileName={`receipt_${index}.pdf`}>
              {({ blob, url, loading, error }) =>
                loading ? 'Loading document...' : <button className="btn btn-light text-primary"><i className="fa fa-download"></i></button>
              }
            </PDFDownloadLink>
          ),
          Action: (
            <Link className="btn btn-light text-primary"><i className="fa fa-edit"></i></Link>
          )
        }));

        const columns = [
          { label: 'Payment Mode', field: 'Payment Mode', sort: 'asc', width: 150 },
          { label: 'Cheque/ Draft/ Transaction Number', field: 'Cheque/ Draft/ Transaction Number', sort: 'asc', width: 270 },
          { label: 'Cheque/ Draft/ Transaction Date', field: 'Cheque/ Draft/ Transaction Date', sort: 'asc', width: 270 },
          { label: 'Bank Name', field: 'Bank Name', sort: 'asc', width: 270 },
          { label: 'Amount', field: 'Amount', sort: 'asc', width: 270 },
          { label: 'Status', field: 'Status', sort: 'asc', width: 270 },
          { label: 'Download Receipt', field: 'Download Receipt', sort: 'asc', width: 150 },
          { label: 'Action', field: 'Action', sort: 'asc', width: 100 }
        ];
        setAbstractData({ columns, rows });
        setLoading(false); 
      })
      .catch(error => {
        console.error('Error fetching abstracts:', error);
        setLoading(false);
      });
  }, []);

  const PDFDocument = ({ abstract }) => (
    <Document>
      <Page size="A4" style={styles.page}>
        <View style={styles.section}>
          <Text>Name of Conference: {abstract.name_of_conference}</Text>
          <Text>Payment Mode: {abstract.payment_mode}</Text>
          <Text>Transaction Date: {abstract.transaction_date}</Text>
          <Text>Bank Name: {abstract.bank_name}</Text>
          <Text>Cheque/ Draft/ Transaction Number: {abstract.transaction_number}</Text>
          <Text>Amount: {abstract.pay_amount}</Text>
        </View>
      </Page>
    </Document>
  );
  return (
    <div className='container'>
      <div className="card" style={{ borderColor: '#fff', borderRadius: '10px', boxShadow: '0 4px 6px rgba(0,0,0,0.1)', overflowX: 'auto' }}>
        <div className="card-header" style={{ position: 'sticky', top: 0, zIndex: 1 }}>
          <div className='row'>
            <div className='col-md-6 d-flex justify-content-start'>
              <h6 className="m-0 font-weight-bold text-primary mb-2"><i className="fa fa-table mr-3"></i>Registration Fee</h6>
            </div>
            <div className='col-md-6 d-flex justify-content-end'>
              <Link className='btn btn-primary' to="/pay-registration-fee" style={{ height: 'auto' }}><i className="fa fa-edit mr-2"></i>Pay Registration Fee</Link>
            </div>
          </div>
        </div>
        <div className="card-body" style={{ overflowY: 'auto', position: 'relative' }}>
          {loading ? ( 
            <div className="d-flex justify-content-center align-items-center">
              <Spinner animation="grow" size="sm" variant="primary" />
              <Spinner animation="grow" size="sm" variant="primary" />
              <Spinner animation="grow" size="sm" variant="primary" />
            </div>
          ) : (
            <MDBDataTable
              striped
              bordered
              hover
              noBottomColumns={true}
              data={abstractData}
            />
          )}
        </div>
      </div>
    </div>
  );
}

export default RegistrationFee;

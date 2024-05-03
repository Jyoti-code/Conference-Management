import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { PDFDownloadLink, Document, Page, Text, View, StyleSheet } from '@react-pdf/renderer';

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

const DownloadRecipt = () => {
  const { id } = useParams();
  const [delegate, setDelegate] = useState(null);

  useEffect(() => {
    const fetchOrganizerDetails = async () => {
      try {
        const response = await axios.get(`http://127.0.0.1:8000/api/downloadRecipt/${id}`);
        setDelegate(response.data.payregistrationfee[0]); 
      } catch (error) {
        console.error('Error fetching delegate details:', error);
      }
    };
    fetchOrganizerDetails();
  }, [id]);

  const PDFDocument = () => (
    <Document>
      <Page size="A4" style={styles.page}>
        <View style={styles.section}>
          <Text>Name of Conference: {delegate.name_of_conference}</Text>
          <Text>Payment Mode: {delegate.payment_mode}</Text>
          <Text>Transaction Date: {delegate.transaction_date}</Text>
          <Text>Bank Name: {delegate.bank_name}</Text>
          <Text>Coupon Code: {delegate.coupon_code}</Text>
          <Text>Pay Amount: {delegate.pay_amount}</Text>
        </View>
      </Page>
    </Document>
  );
  return (
    <div className='container mt-5'>
      <div className='card col-md-10' style={{ borderColor: '#fff', overflowX: 'auto', boxShadow: '0 4px 6px rgba(0,0,0,0.1)' }}>
        <div className="card-body">
          {delegate && (
            <div>
              <div className='row'>
                <table className='table table-bordered table-striped-columns'>
                  <tbody>
                    <tr>
                      <th>Name of Conference :</th>
                      <td>{delegate.name_of_conference}</td>
                    </tr>
                    <tr>
                      <th>Payment Mode :</th>
                      <td>{delegate.payment_mode}</td>
                    </tr>
                    <tr>
                      <th>Transaction Date :</th>
                      <td>{delegate.transaction_date}</td>
                    </tr>
                    <tr>
                      <th>Bank Name :</th>
                      <td>{delegate.bank_name}</td>
                    </tr>
                    <tr>
                      <th>Coupon Code :</th>
                      <td>{delegate.coupon_code}</td>
                    </tr>
                    <tr>
                      <th>Pay Amount :</th>
                      <td>{delegate.pay_amount}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          )}
          {delegate && (
            <PDFDownloadLink document={<PDFDocument />} fileName="delegate_details.pdf">
              {({ blob, url, loading, error }) =>
                loading ? 'Loading document...' : 'Download PDF'
              }
            </PDFDownloadLink>
          )}
        </div>
      </div>
    </div>
  );
}

export default DownloadRecipt;

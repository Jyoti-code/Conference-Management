import React, { useState, useEffect } from 'react';
import { Container, Row, Card, Table } from 'react-bootstrap';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function ConferenceList() {
    const navigate = useNavigate();
    const [organizerList, setOrganizerList] = useState([]);    

    useEffect(() => {
        axios.get('http://127.0.0.1:8000/api/organizerList')
            .then(response => {
                setOrganizerList(response.data.organizerlist);
            })
            .catch(error => {
                console.error('Error fetching organizer list:', error);
            });
    }, []);

    return (
        <Container fluid>
            <Row>
                <Card>
                    <Card.Body>
                        <Card.Title className="mt-3 mb-3">
                            <span className='text-primary' style={{ fontWeight: 'bold' }}>Organizer List</span>
                        </Card.Title>
                        <Table responsive>
                            <thead>
                                <tr>
                                    <th>ID</th>
                                    <th>Name</th>
                                    <th>Email</th>
                                    <th>Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {organizerList.map(organizer => (
                                    <tr key={organizer.id}>
                                        <td>{organizer.id}</td>
                                        <td>{organizer.name}</td>
                                        <td>{organizer.email}</td>
                                        <td>
                                            <button className='btn btn-primary mr-2' onClick={() => navigate(`/conferenceedit/${organizer.id}`)}>Edit</button>
                                            <button className='btn btn-danger'>Delete</button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </Table>
                    </Card.Body>
                </Card>
            </Row>
        </Container>
    );
}

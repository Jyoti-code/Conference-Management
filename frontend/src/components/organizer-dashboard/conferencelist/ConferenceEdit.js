import React, { useEffect, useState } from 'react';
import { Container, Row, Card } from 'react-bootstrap';
import axios from 'axios';
import { useParams } from 'react-router-dom';

export default function ConferenceEdit() {
    const { id } = useParams();
    const [organizer, setOrganizer] = useState({
        name: '',
        email: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setOrganizer(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    useEffect(() => {
        axios.get(`http://127.0.0.1:8000/api/organizerEdit/${id}`)
            .then(res => {
                const organizerData = res.data.organizeredit;
                setOrganizer({
                    name: organizerData.name,
                    email: organizerData.email
                });
            })
            .catch(error => {
                console.error('Error fetching organizer data:', error);
            });
    }, [id]);

    const handleFormSubmit = (e) => {
        e.preventDefault();

        axios.post(`http://127.0.0.1:8000/api/organizerUpdate`, organizer)
            .then(res => {
                const updateData = organizer
                console.log(updateData)
            })
            .catch(error => {
                console.error('Error updating organizer:', error);
            });
    };

    return (
        <div>
            <Container fluid>
                <Row>
                    <Card style={{ borderColor: '#fff' }}>
                        <Card.Body>
                            <Card.Title className="mt-3 mb-3">
                                <span className='text-primary' style={{ fontWeight: 'bold' }}>Edit Conference</span>
                            </Card.Title>
                            <form className="user" onSubmit={handleFormSubmit}>
                                <div className="form-group">
                                    <input
                                        type="text"
                                        className="form-control form-control-user"
                                        id="exampleInputName"
                                        aria-describedby="emailHelp"
                                        placeholder="Enter Your Name.."
                                        name="name"
                                        value={organizer.name}
                                        onChange={handleChange}
                                    />
                                </div>
                                <div className="form-group">
                                    <input
                                        type="email"
                                        className="form-control form-control-user"
                                        id="exampleInputEmail"
                                        aria-describedby="emailHelp"
                                        placeholder="Enter Email Address.."
                                        name="email"
                                        value={organizer.email}
                                        onChange={handleChange}
                                    />
                                </div>
                                <button type="submit" className="btn btn-primary">Update</button>
                            </form>
                        </Card.Body>
                    </Card>
                </Row>
            </Container>
        </div>
    );
}

import React from 'react';
import { Container, Row, Card, Table } from 'react-bootstrap';

export default function ActiveConferences() {
    return (
        <Container fluid>
            <Row>
                <Card>
                    <Card.Body>
                        <Card.Title className="mt-3 mb-3">
                            <i className="fas fa-fw fa-list mr-2 text-primary"></i>
                            <span className='text-primary' style={{ fontWeight: 'bold' }}>My Active Conferences</span>
                        </Card.Title>
                        <Table responsive>
                            <thead>
                                <tr>
                                    <th>Conference ID</th>
                                    <th>Name</th>
                                    <th>From Date</th>
                                    <th>To Date</th>
                                    <th>Status</th>
                                    <th>Registrations</th>
                                    <th>Registrations Wait List</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>001</td>
                                    <td>Jack Willi</td>
                                    <td>12-02-2024</td>
                                    <td>14-02-2024</td>
                                    <td>Success</td>
                                    <td>3</td>
                                    <td>19</td>
                                </tr>

                                <tr>
                                    <td>002</td>
                                    <td>Jonathan</td>
                                    <td>15-02-2024</td>
                                    <td>18-02-2024</td>
                                    <td>Pending</td>
                                    <td>5</td>
                                    <td>16</td>
                                </tr>

                                <tr>
                                    <td>003</td>
                                    <td>Ana Shepherd</td>
                                    <td>19-02-2024</td>
                                    <td>21-02-2024</td>
                                    <td>Success</td>
                                    <td>11</td>
                                    <td>18</td>
                                </tr>

                                <tr>
                                    <td>004</td>
                                    <td>Meredith Grey</td>
                                    <td>22-02-2024</td>
                                    <td>24-02-2024</td>
                                    <td>Success</td>
                                    <td>10</td>
                                    <td>13</td>
                                </tr>

                                <tr>
                                    <td>005</td>
                                    <td>Derek Johnsan</td>
                                    <td>25-02-2024</td>
                                    <td>28-02-2024</td>
                                    <td>Pending</td>
                                    <td>4</td>
                                    <td>7</td>
                                </tr>
                            </tbody>
                        </Table>
                    </Card.Body>
                </Card>
            </Row>
        </Container>
    );
}

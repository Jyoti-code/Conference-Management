import React, { useState } from 'react';
import { Container, Row, Card } from 'react-bootstrap';
import axios from 'axios';

export default function AddConference() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [nameError, setNameError] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();
    setErrorMessage('');
    setSuccessMessage('');

    // Validation
    if (!name.trim()) {
      setNameError('Name is required');
      return;
    } else {
      setNameError('');
    }

    if (!email.trim()) {
      setEmailError('Email is required');
      return;
    } else {
      setEmailError('');
    }

    if (!password.trim()) {
      setPasswordError('Password is required atleast 6 digit');
      return;
    } else {
      setPasswordError('');
    }

    try {
      const response = await axios.post('http://127.0.0.1:8000/api/organizer', {
        name: name,
        email: email,
        password: password,
      });

      if (response && response.data) {
        setSuccessMessage('You are registered successfully!');
        console.log('Register successful', response.data);
      } else {
        setErrorMessage('Invalid response format');
      }
    } catch (error) {
      if (error.response && error.response.data && error.response.data.message) {
        setErrorMessage(error.response.data.message);
      } else {
        setErrorMessage('An error occurred while registering.');
      }
      console.error('Error logging in:', error.response ? error.response.data : error.message);
    }
  };

  return (
    <Container fluid>
      <Row>
        <div className="col-12">
          {successMessage && <div className="alert alert-success mt-3">{successMessage}</div>}
          {errorMessage && <div className="alert alert-danger mt-3">{errorMessage}</div>}
        </div>
      </Row>
      <Row>
        <Card style={{ borderColor: '#fff' }}>
          <Card.Body>
            <Card.Title className="mt-3 mb-3">
              <span className='text-primary' style={{ fontWeight: 'bold' }}>Add Conferences</span>
            </Card.Title>
            <form className="user" onSubmit={handleLogin} method='POST'>
              <div className="form-group">
                <input type="text" className="form-control form-control-user"
                  id="exampleInputName" aria-describedby="emailHelp"
                  placeholder="Enter Your Name.."
                  name="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
                {nameError && <small className="text-danger">{nameError}</small>}
              </div>

              <div className="form-group">
                <input type="email" className="form-control form-control-user"
                  id="exampleInputEmail" aria-describedby="emailHelp"
                  placeholder="Enter Email Address.."
                  name="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                {emailError && <small className="text-danger">{emailError}</small>}
              </div>
              <div className="form-group">
                <input type="password" className="form-control form-control-user"
                  id="exampleInputPassword" placeholder="Password"
                  name="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                {passwordError && <small className="text-danger">{passwordError}</small>}
              </div>

              <button type="submit" className="btn btn-primary">Register</button>
            </form>
          </Card.Body>
        </Card>
      </Row>
    </Container>
  );
}

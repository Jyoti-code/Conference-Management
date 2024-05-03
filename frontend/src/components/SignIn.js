import React, { useState } from 'react';
import axios from 'axios';
import Spinner from 'react-bootstrap/Spinner';

export default function SignIn() {
    const [email, setEmail] = useState('');
    const [loading, setLoading] = useState(false);
    const [password, setPassword] = useState('');
    const [loggedIn, setLoggedIn] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');

    const handleLogin = async (e) => {
        e.preventDefault();
        setLoading(true);

        try {
            const response = await axios.post('http://127.0.0.1:8000/api/login', {
                email: email,
                password: password,
            });

            if (response) {
                localStorage.setItem('token', response.token);
                localStorage.setItem('username', response.data.username);
                localStorage.setItem('id', response.data.user.id);
                localStorage.setItem('role', response.data.role);
                setLoggedIn(true);
            } else {
                console.error('Invalid response format');
                setErrorMessage('Invalid email or password');
            }
        } catch (error) {
            console.error('Error logging in:', error.response ? error.response : error.message);
            setErrorMessage('Error logging in. Please try again later.');
        } finally {
            setLoading(false);
        }
    };
    if (loggedIn || localStorage.getItem('token')) {
        if (localStorage.getItem('role') === '1') {
            window.location.href = "#/adminhome";
        } else if (localStorage.getItem('role') === '2') {
            window.location.href = "#/organizerhome";
        } else if (localStorage.getItem('role') === '3') {
            window.location.href = "#/delegate-home";
        } else if (localStorage.getItem('role') === '4') {
            window.location.href = "#/reviewer-home";
        }
    }
    return (
        <>
            <div className='bg-gradient-primary' style={{ height: '100vh' }}>
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-xl-10 col-lg-12 col-md-9">
                            <div className={`card o-hidden border-0 shadow-lg my-5 ${loading ? 'loading' : ''}`}>
                                <div className={`card-body p-0 ${loading ? 'opacity-75' : ''}`}>
                                    <div className="row">
                                        <div className="col-lg-6 d-none d-lg-block bg-login-image"></div>
                                        <div className="col-lg-6">
                                            <div className="p-5">
                                                {errorMessage && <div className="alert alert-danger" role="alert">{errorMessage}</div>}
                                                <div className="text-center">
                                                    <h1 className="h4 text-gray-900 mb-4">Login An Account!</h1>
                                                </div>
                                                <form className="user" method='POST'>
                                                    <div className="form-group">
                                                        <input type="email" className="form-control form-control-user"
                                                            id="exampleInputEmail" aria-describedby="emailHelp"
                                                            placeholder="Enter Email Address.."
                                                            name="email"
                                                            value={email}
                                                            onChange={(e) => setEmail(e.target.value)}
                                                        />
                                                    </div>
                                                    <div className="form-group">
                                                        <input type="password" className="form-control form-control-user"
                                                            id="exampleInputPassword" placeholder="Password"
                                                            name="password"
                                                            value={password}
                                                            onChange={(e) => setPassword(e.target.value)}
                                                        />
                                                    </div>
                                                    <div className="form-group">
                                                        <div className="custom-control custom-checkbox small">
                                                            <input type="checkbox" className="custom-control-input" id="customCheck" />
                                                            <label className="custom-control-label" htmlFor="customCheck">Remember
                                                                Me</label>
                                                        </div>
                                                    </div>
                                                    <button className="btn btn-primary btn-user btn-block" onClick={handleLogin}>
                                                        Login
                                                    </button>
                                                    <hr />
                                                    <a href="*" className="btn btn-google btn-user btn-block">
                                                        <i className="fab fa-google fa-fw"></i> Login with Google
                                                    </a>
                                                    <a href="*" className="btn btn-facebook btn-user btn-block">
                                                        <i className="fab fa-facebook-f fa-fw"></i> Login with Facebook
                                                    </a>
                                                </form>
                                                <hr />
                                                <div className="text-center">
                                                    <a className="small" href="/forget">Forgot Password?</a>
                                                </div>
                                                <div className="text-center">
                                                    <a className="small" href="/register">Create an Account!</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    {loading && (
                                        <div className="d-flex justify-content-center align-items-center" style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0 }}>
                                            <Spinner animation="border" variant="primary" />
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

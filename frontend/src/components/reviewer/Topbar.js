import React, { useState, useEffect } from 'react';
import { Dropdown } from 'react-bootstrap';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function Topbar({ toggleSidebar }) {
    const [username, setUsername] = useState('');
    const [isDropdownOpen, setDropdownOpen] = useState(false);
    const isLoggedIn = localStorage.getItem('token');
    const userId = localStorage.getItem('id');
    const navigate = useNavigate();
    const [conference, setConference] = useState([]);
    const [selectedConference, setSelectedConference] = useState('');

    useEffect(() => {
        const fetchOrganizerDetails = async () => {
            try {
                const response =
                    await axios.get(`http://127.0.0.1:8000/api/conferenceDropdown/${userId}`);
                setConference(response.data.conferencedropdown);
                // console.log(response.data.conferencedropdown)
            } catch (error) {
                console.error('Error fetching organizer details:', error);
            }
        };

        if (userId) {
            fetchOrganizerDetails();
        }
    }, [userId]);

    useEffect(() => {
        const storedUsername = localStorage.getItem('username');
        if (storedUsername) {
            setUsername(storedUsername);
        }
    }, []);

    const toggleDropdown = () => {
        setDropdownOpen(!isDropdownOpen);
    };

    const handleLogout = () => {
        localStorage.removeItem('token');
        localStorage.removeItem('username');
        localStorage.removeItem('id');
        navigate('/');
    };

    useEffect(() => {
        const storedConference = localStorage.getItem('selectedConference');
        if (storedConference) {
            setSelectedConference(storedConference);
        }
    }, []);

    const handleChange = (event) => {
        const selectedValue = event.target.value;
        setSelectedConference(selectedValue);
        localStorage.setItem('selectedConference', selectedValue);
        window.location.reload();
    };

    return (
        <nav className="navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow">
            <button id="sidebarToggle" className="btn btn-link d-md-none rounded-circle mr-3" onClick={toggleSidebar}>
                <i className="fa fa-bars"></i>
            </button>
            <div className='container'>
                <div className='col-md-12'>
                    <select
                        className="form-select"
                        aria-label="Default select example"
                        value={selectedConference}
                        onChange={handleChange}
                    >
                        {conference.map((conf) => (
                            <option key={conf.id} value={conf.id}>
                                {conf.name_of_conference}
                            </option>
                        ))}
                    </select>
                </div>
            </div>
            <ul className="navbar-nav ml-auto">
                {isLoggedIn ? (
                    <li className="nav-item">
                        <a className="nav-link" href="/adminhome">Admin</a>
                    </li>
                ) : (
                    <li className="nav-item">
                        <a className="nav-link" href="/">Login</a>
                    </li>
                )}
                <li className="nav-item dropdown no-arrow mt-3">
                    <Dropdown show={isDropdownOpen} onToggle={toggleDropdown}>
                        <Dropdown.Toggle variant="link" id="userDropdown" style={{ fontSize: '15px', textDecoration: 'none', boxShadow: 'none' }}>
                            <span className="mr-2 d-none d-lg-inline text-gray-600 small">Welcome, {username}</span>
                            <img className="img-profile rounded-circle" src="img/undraw_profile.svg" alt='' style={{ height: '30px', width: '30px' }} />
                        </Dropdown.Toggle>
                        <Dropdown.Menu>
                            <Dropdown.Item href="*">
                                <i className="fas fa-user fa-sm fa-fw mr-2 text-gray-400"></i>
                                Profile
                            </Dropdown.Item>
                            <Dropdown.Item href="*">
                                <i className="fas fa-cogs fa-sm fa-fw mr-2 text-gray-400"></i>
                                Settings
                            </Dropdown.Item>
                            <Dropdown.Item href="*">
                                <i className="fas fa-list fa-sm fa-fw mr-2 text-gray-400"></i>
                                Activity Log
                            </Dropdown.Item>
                            <Dropdown.Divider />
                            <Dropdown.Item href="" onClick={handleLogout}>
                                <i className="fas fa-sign-out-alt fa-sm fa-fw mr-2 text-gray-400"></i>
                                Logout
                            </Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                </li>
            </ul>
        </nav>
    );
}

import React, { useState } from 'react';
import { Dropdown } from 'react-bootstrap';

export default function Topbar({ toggleSidebar }) {
    const [isDropdownOpen, setDropdownOpen] = useState(false);
    const isLoggedIn = localStorage.getItem('token');
    
    const toggleDropdown = () => {
        setDropdownOpen(!isDropdownOpen);
    };

    const handleLogout = () => {
        localStorage.removeItem('token');
        localStorage.removeItem('username');
        localStorage.removeItem('id');
        window.location.href = '/';
    };

    return (
        <nav className="navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow">
            <button id="sidebarToggle" className="btn btn-link d-md-none rounded-circle mr-3" onClick={toggleSidebar}>
                <i className="fa fa-bars"></i>
            </button>
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

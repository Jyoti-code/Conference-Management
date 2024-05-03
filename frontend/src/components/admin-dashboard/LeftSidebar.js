import React from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
export default function LeftSidebar({ isSidebarOpen, toggleSidebar }) {
    const location = useLocation();
    return (
        <>
            <ul className={isSidebarOpen ? 'navbar-nav bg-gradient-primary sidebar sidebar-dark accordion toggled' : 'navbar-nav bg-gradient-primary sidebar sidebar-dark accordion'} id="accordionSidebar">
                <Link className="sidebar-brand d-flex align-items-center justify-content-center mt-3" to="/adminhome" >
                    <div className='row'>
                        <div className='col-md-10'>
                            <div className="sidebar-brand-text-img">
                                <img src='img/smart-conference-logo1.png' className="img-fluid" alt='Logo' />
                            </div>
                        </div>
                    </div>
                </Link>
                <hr className="sidebar-divider my-0" />
                <li className={`nav-item ${location.pathname === '/adminhome' ? 'active' : ''}`} >
                    <Link className="nav-link" to="/adminhome">
                        <i className="fas fa-fw fa-home"></i>
                        <span>Dashboard</span>
                    </Link>
                </li>
                <li className={`nav-item ${location.pathname.startsWith('/master-conference-category') ? 'active' : ''}`} style={{marginTop:'-10px'}}>
                    <a className="nav-link collapsed" href="*" data-toggle="collapse" data-target="#conferenceSubMenu"
                        aria-expanded="true" aria-controls="collapseThree">
                        <i className="fas fa-fw fa-list"></i>
                        <span>Master</span>
                    </a>
                    <div id="conferenceSubMenu" className={`collapse ${location.pathname.startsWith('/master-conference-category') ? 'show' : ''}`} aria-labelledby="headingThree">
                        <div className="bg-white py-2 collapse-inner rounded">
                            <NavLink className={`collapse-item ${location.pathname === '/master-conference-category' ? 'active' : ''}`} to="/master-conference-category">Conference Category</NavLink>
                        </div>
                    </div>
                </li>
                <li className={`nav-item ${location.pathname.startsWith('/user') ? 'active' : ''}`} style={{marginTop:'-10px'}}>
                    <a className="nav-link collapsed" href="*" data-toggle="collapse" data-target="#registrationSubMenu"
                        aria-expanded="true" aria-controls="collapseThree">
                        <i className="fas fa-fw fa-user"></i>
                        <span>User</span>
                    </a>
                    <div id="registrationSubMenu" className={`collapse ${location.pathname.startsWith('/user') ? 'show' : ''}`} aria-labelledby="headingThree">
                        <div className="bg-white py-2 collapse-inner rounded">
                            <NavLink className={`collapse-item ${location.pathname === '/user-organizers' ? 'active' : ''}`} to="/user-organizers">Organizers</NavLink>
                            <NavLink className={`collapse-item ${location.pathname === '/user-delegates' ? 'active' : ''}`} to="/user-delegates">Delegates</NavLink>
                            <NavLink className={`collapse-item ${location.pathname === '/user-reviewers' ? 'active' : ''}`} to="/user-reviewers">Reviewers</NavLink>
                        </div>
                    </div>
                </li>
                <li className={`nav-item ${location.pathname === '/settings' ? 'active' : ''}`} style={{marginTop:'-10px'}}>
                    <Link className="nav-link" >
                        <i className="fas fa-fw fa-wrench"></i>
                        <span>Settings</span>
                    </Link>
                </li>
                <hr className="sidebar-divider d-none d-md-block" />
                <div className="row">
                    <div className='col-md-12 d-flex justify-content-center '>
                        <div className="text-center d-none d-md-inline">
                            <button className="rounded-circle border-0" id="sidebarToggle" onClick={toggleSidebar}></button>
                        </div>
                    </div>
                </div>
            </ul>
        </>

    )
}

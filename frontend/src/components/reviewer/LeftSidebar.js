import React from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
export default function LeftSidebar({ isSidebarOpen, toggleSidebar }) {
    const location = useLocation();
   
    return (
        <>
            <ul className={isSidebarOpen ? 'navbar-nav bg-gradient-primary sidebar sidebar-dark accordion toggled' : 'navbar-nav bg-gradient-primary sidebar sidebar-dark accordion'}  id="accordionSidebar">
                <Link className="sidebar-brand d-flex align-items-center justify-content-center mt-3"to="/reviewer-home" >
                    <div className='row'>
                        <div className='col-md-10'>
                            <div className="sidebar-brand-text-img">
                                <img src='img/smart-conference-logo1.png' className="img-fluid" alt='Logo' />
                            </div>
                        </div>
                    </div>
                </Link>
                <hr className="sidebar-divider my-0" />

                <li className={`nav-item ${location.pathname === '/reviewer-home' ? 'active' : ''}`}>
                    <Link className="nav-link"to="/reviewer-home">
                        <i className="fas fa-fw fa-home"></i>
                        <span>Dashboard</span>
                    </Link>
                </li>
                {/* <hr className="sidebar-divider" /> */}

                <li className={`nav-item ${location.pathname.startsWith('/conferences') ? 'active' : ''}`} style={{marginTop:'-8px'}}>
                    <a className="nav-link collapsed" href="*" data-toggle="collapse" data-target="#conferenceSubMenu"
                        aria-expanded="true" aria-controls="collapseTwo">
                        <i className="fas fa-fw fa-list"></i>
                        <span>My Conferences</span>
                    </a>
                    <div id="conferenceSubMenu" className={`collapse ${location.pathname.startsWith('/conferences') ? 'show' : ''}`} aria-labelledby="headingTwo">
                        <div className="bg-white py-2 collapse-inner rounded">
                            <NavLink className={`collapse-item ${location.pathname === '/conferences-active' ? 'active' : ''}`}>Active Conferences</NavLink>
                            <NavLink className={`collapse-item ${location.pathname === '/conferences-past' ? 'active' : ''}`}>Past Conferences</NavLink>
                        </div>
                    </div>
                </li>

                <li className={`nav-item ${location.pathname === '/category-delegate' ? 'active' : ''}`} style={{marginTop:'-8px'}}>
                    <Link className="nav-link">
                        <i className="fas fa-fw fa-list"></i>
                        <span>Delegate Category</span>
                    </Link>
                </li>

                <li className={`nav-item ${location.pathname === '/abstract-delegate' ? 'active' : ''}`} style={{marginTop:'-8px'}}>
                    <Link className="nav-link">
                        <i className="fas fa-fw fa-envelope"></i>
                        <span>Abstract</span>
                    </Link>
                </li>

                <li className={`nav-item ${location.pathname === '/paper-delegate' ? 'active' : ''}`} style={{marginTop:'-8px'}}>
                    <Link className="nav-link">
                        <i className="fas fa-fw fa-envelope"></i>
                        <span>Paper</span>
                    </Link>
                </li>

                <li className={`nav-item ${location.pathname === '/accommodation-delegate' ? 'active' : ''}`} style={{marginTop:'-8px'}}>
                    <Link className="nav-link">
                        <i className="fas fa-fw fa-lock"></i>
                        <span>Accommodation</span>
                    </Link>
                </li>

                <li className={`nav-item ${location.pathname === '/fee-delegate' ? 'active' : ''}`} style={{marginTop:'-8px'}}>
                    <Link className="nav-link">
                        <i className="fas fa-fw fa-dollar"></i>
                        <span>Fee</span>
                    </Link>
                </li>

                 <li className={`nav-item ${location.pathname === '#' ? 'active' : ''}`} style={{marginTop:'-8px'}}>
                    <Link className="nav-link">
                        <i className="fas fa-fw fa-clock"></i>
                        <span>Programme</span>
                    </Link>
                </li>

                <li className={`nav-item ${location.pathname === '#' ? 'active' : ''}`} style={{marginTop:'-8px'}}>
                    <Link className="nav-link" >
                        <i className="fas fa-fw fa-print"></i>
                        <span>Print Ticket</span>
                    </Link>
                </li>

                <li className={`nav-item ${location.pathname === '/view-bank-details' ? 'active' : ''}`} style={{marginTop:'-8px'}}>
                    <Link className="nav-link">
                        <i className="fas fa-fw fa-eye"></i>
                        <span>View Bank Details</span>
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

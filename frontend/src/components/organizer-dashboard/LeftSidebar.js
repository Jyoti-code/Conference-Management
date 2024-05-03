import React from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
export default function LeftSidebar({ isSidebarOpen, toggleSidebar }) {
    const location = useLocation();
    return (
        <>
            <ul className={isSidebarOpen ? 'navbar-nav bg-gradient-primary sidebar sidebar-dark accordion toggled' : 'navbar-nav bg-gradient-primary sidebar sidebar-dark accordion'} id="accordionSidebar">
                <Link className="sidebar-brand d-flex align-items-center justify-content-center mt-3" to="/organizerhome" >
                    <div className='row'>
                        <div className='col-md-10'>
                            <div className="sidebar-brand-text-img">
                                <img src='img/smart-conference-logo1.png' className="img-fluid" alt='Logo' />
                            </div>
                        </div>
                    </div>
                </Link>
                <hr className="sidebar-divider my-0" />

                <li className={`nav-item ${location.pathname === '/organizerhome' ? 'active' : ''}`}>
                    <Link className="nav-link" to="/organizerhome">
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
                            <NavLink className={`collapse-item ${location.pathname === '/conferences-active-list' ? 'active' : ''}`} to="/conferences-active-list">Active Conferences</NavLink>
                            <NavLink className={`collapse-item ${location.pathname === '/conferences-past-list' ? 'active' : ''}`} to="/conferences-past-list">Past Conferences</NavLink>
                        </div>
                    </div>
                </li>

                <li className={`nav-item ${location.pathname.startsWith('/delegate') ? 'active' : ''}`} style={{marginTop:'-8px'}}>
                    <a className="nav-link collapsed" href="*" data-toggle="collapse" data-target="#registrationSubMenu"
                        aria-expanded="true" aria-controls="collapseThree">
                        <i className="fas fa-fw fa-list"></i>
                        <span>Registration</span>
                    </a>
                    <div id="registrationSubMenu" className={`collapse ${location.pathname.startsWith('/delegate') ? 'show' : ''}`} aria-labelledby="headingThree">
                        <div className="bg-white py-2 collapse-inner rounded">
                            <NavLink className={`collapse-item ${location.pathname === '/delegateregistrationlist' ? 'active' : ''}`} to="/delegateregistrationlist">Delegate Registrations</NavLink>
                            <NavLink className={`collapse-item ${location.pathname === '/delegateregistrationfee' ? 'active' : ''}`} to="/delegateregistrationfee">Registration Fee</NavLink>
                        </div>
                    </div>
                </li>

                <li className={`nav-item ${location.pathname.startsWith('/abstract') ? 'active' : ''}`} style={{marginTop:'-8px'}}>
                    <a className="nav-link collapsed" href="*" data-toggle="collapse" data-target="#collapseAbstract"
                        aria-expanded="true" aria-controls="collapsePaper">
                        <i className="fas fa-fw fa-envelope"></i>
                        <span>Abstract & Paper</span>
                    </a>
                    <div id="collapseAbstract" className={`collapse ${location.pathname.startsWith('/abstract') ? 'show' : ''}`} >
                        <div className="bg-white py-2 collapse-inner rounded">
                            <NavLink className={`collapse-item ${location.pathname === '/abstractsessionlist' ? 'active' : ''}`} to="/abstractsessionlist">Manage Session</NavLink>
                            <NavLink className={`collapse-item ${location.pathname === '/abstractreview' ? 'active' : ''}`} to="/abstractreview">Review Abstracts</NavLink>
                            <NavLink className={`collapse-item ${location.pathname === '/abstractreviewfullpaper' ? 'active' : ''}`} to="/abstractreviewfullpaper">Review Full Paper</NavLink>
                        </div>
                    </div>
                </li>

                <li className={`nav-item ${location.pathname.startsWith('/schedule') ? 'active' : ''}`} style={{marginTop:'-8px'}}>
                    <a className="nav-link collapsed" href="*" data-toggle="collapse" data-target="#collapseProgram"
                        aria-expanded="true" aria-controls="collapseProgram">
                        <i className="fas fa-fw fa-clock"></i>
                        <span>Schedule & Program</span>
                    </a>
                    <div id="collapseProgram" className={`collapse ${location.pathname.startsWith('/schedule') ? 'show' : ''}`}>
                        <div className="bg-white py-2 collapse-inner rounded">
                            <NavLink className={`collapse-item ${location.pathname === '/schedulemanage' ? 'active' : ''}`} to="/schedulemanage">Manage Schedule</NavLink>
                            <NavLink className={`collapse-item ${location.pathname === '/scheduleprint' ? 'active' : ''}`} to="/scheduleprint">Print Schedule</NavLink>
                            <NavLink className={`collapse-item ${location.pathname === '/schedulemanageprogram' ? 'active' : ''}`} to="/schedulemanageprogram">Manage Program</NavLink>
                            <NavLink className={`collapse-item ${location.pathname === '/scheduleprintprogram' ? 'active' : ''}`} to="/scheduleprintprogram">Print Program</NavLink>
                        </div>
                    </div>
                </li>

                <li className={`nav-item ${location.pathname.startsWith('/accommodation') ? 'active' : ''}`} style={{marginTop:'-8px'}}>
                    <a className="nav-link collapsed" href="*" data-toggle="collapse" data-target="#collapseAccommodation"
                        aria-expanded="true" aria-controls="collapseAccommodation">
                        <i className="fas fa-fw fa-lock"></i>
                        <span>Accommodation</span>
                    </a>
                    <div id="collapseAccommodation" className={`collapse ${location.pathname.startsWith('/accommodation') ? 'show' : ''}`}>
                        <div className="bg-white py-2 collapse-inner rounded">
                            <NavLink className={`collapse-item ${location.pathname === '/accommodationrequest' ? 'active' : ''}`} to="/accommodationrequest">Request</NavLink>
                        </div>
                    </div>
                </li>

                <li className={`nav-item ${location.pathname.startsWith('/settings') ? 'active' : ''}`} style={{marginTop:'-8px'}}>
                    <a className="nav-link collapsed" href="*" data-toggle="collapse" data-target="#collapseSetting"
                        aria-expanded="true" aria-controls="collapseSetting">
                        <i className="fas fa-fw fa-wrench"></i>
                        <span>Settings</span>
                    </a>
                    <div id="collapseSetting" className={`collapse ${location.pathname.startsWith('/settings') ? 'show' : ''}`}>
                        <div className="bg-white py-2 collapse-inner rounded">
                            <NavLink className={`collapse-item ${location.pathname === '/settingsdelegatecategory' ? 'active' : ''}`} to="/settingsdelegatecategory">Delegate Category</NavLink>
                            <NavLink className='collapse-item' to="/settings-accommodation-category">Accommodation Category</NavLink>
                            <NavLink className='collapse-item' to="/settings-deadline">Deadlines</NavLink>
                            <NavLink className='collapse-item' to="/settings-registration-fee">Registration Fee</NavLink>
                            <NavLink className='collapse-item' to="/settings-accommodation-fee">Accommodation Fee</NavLink>
                            <NavLink className='collapse-item' to="/settings-bank-details">Bank Details</NavLink>
                            <NavLink className='collapse-item' to="/settings-reciept">Receipt Setting</NavLink>

                            <NavLink className='collapse-item' to="/settings-coupon-codes">Coupons</NavLink>
                            <NavLink className='collapse-item' to="/settings-check-in-out">Set Check-In/Check-Out</NavLink>
                            <NavLink className='collapse-item' to="/settings-report">Reports</NavLink>
                        </div>
                    </div>
                </li>

                <li className={`nav-item ${location.pathname.startsWith('/attendance') ? 'active' : ''}`} style={{marginTop:'-8px'}}>
                    <a className="nav-link collapsed" href="*" data-toggle="collapse" data-target="#collapseAttendance"
                        aria-expanded="true" aria-controls="collapseAttendance">
                        <i className="fas fa-fw fa-table"></i>
                        <span>Attendance</span>
                    </a>
                    <div id="collapseAttendance" className={`collapse ${location.pathname.startsWith('/attendance') ? 'show' : ''}`}>
                        <div className="bg-white py-2 collapse-inner rounded">
                            <NavLink className={`collapse-item ${location.pathname === '/attendance-manual' ? 'active' : ''}`} to="/attendance-manual">Manual Attendance</NavLink>
                            <NavLink className={`collapse-item ${location.pathname === '/attendance-qr' ? 'active' : ''}`} to="/attendance-qr">QR Attendance</NavLink>
                        </div>
                    </div>
                </li>

                <li className={`nav-item ${location.pathname.startsWith('/reviewer') ? 'active' : ''}`} style={{marginTop:'-8px'}}>
                    <a className="nav-link collapsed" href="*" data-toggle="collapse" data-target="#collapseReviewer"
                        aria-expanded="true" aria-controls="collapseReviewer">
                        <i className="fas fa-fw fa-user"></i>
                        <span>Reviewer</span>
                    </a>
                    <div id="collapseReviewer" className={`collapse ${location.pathname.startsWith('/reviewer') ? 'show' : ''}`}>
                        <div className="bg-white py-2 collapse-inner rounded">
                            <NavLink className={`collapse-item ${location.pathname === '/reviewer-add' ? 'active' : ''}`} to="/reviewer-add">Add Reviewer</NavLink>

                        </div>
                    </div>
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

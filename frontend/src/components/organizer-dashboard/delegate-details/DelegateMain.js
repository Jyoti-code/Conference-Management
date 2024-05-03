import React from 'react'
import LeftSidebar from '../LeftSidebar'
import Topbar from '../Topbar'
import Footer from '../Footer'
import DelegateRegistrationList from './DelegateRegistrationList'

export default function DelegateMain() {
    return (
        <>
            <div id="page-top">
                <div id="wrapper">
                    <LeftSidebar />
                    <div id="content-wrapper" className="d-flex flex-column">
                        <div id="content">
                            <Topbar />
                            <div className="container-fluid">
                                <DelegateRegistrationList/>                             
                            </div>
                        </div>
                        <Footer/>
                    </div>
                </div>
            </div>
        </>
    )
}

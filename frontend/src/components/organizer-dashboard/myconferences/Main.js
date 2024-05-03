import React from 'react'
import LeftSidebar from '../LeftSidebar'
import Topbar from '../Topbar'
import AddConference from './AddConference'
import Footer from '../Footer'

export default function Main() {
    return (
        <>
            <div id="page-top">
                <div id="wrapper">
                    <LeftSidebar />
                    <div id="content-wrapper" className="d-flex flex-column">
                        <div id="content">
                            <Topbar />
                            <div className="container-fluid">
                                <AddConference />                                
                            </div>
                        </div>
                        <Footer/>
                    </div>
                </div>
            </div>
        </>
    )
}

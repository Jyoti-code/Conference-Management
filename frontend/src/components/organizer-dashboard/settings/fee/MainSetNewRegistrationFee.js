import { useState } from 'react';
import LeftSidebar from '../../LeftSidebar'
import Topbar from '../../Topbar'
import Footer from '../../Footer';
import SetNewRegistrationFee from './SetNewRegistrationFee';

export default function MainSetNewRegistrationFee() {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };
    return (
        <>
            <div id="page-top">
                <div id="wrapper">
                    <LeftSidebar isSidebarOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
                    <div id="content-wrapper" className="d-flex flex-column">
                        <div id="content">
                            <Topbar toggleSidebar={toggleSidebar} />
                            <div className="container-fluid">
                                <SetNewRegistrationFee/>
                            </div>
                        </div>
                        <Footer />
                    </div>
                </div>
            </div>
        </>
    )
}

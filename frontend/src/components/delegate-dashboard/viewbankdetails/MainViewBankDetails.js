import LeftSidebar from '../LeftSidebar';
import Topbar from '../Topbar';
import Footer from '../Footer';
import { useState } from 'react';
import ViewBankDetails from './ViewBankDetails';

export default function MainSubmitAbstract() {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };
    return (
        <div>
            <div id="page-top">
                <div id="wrapper">
                    <LeftSidebar isSidebarOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
                    <div id="content-wrapper" className="d-flex flex-column">
                        <div id="content">
                            <Topbar isSidebarOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
                            <div className="container-fluid">
                                <ViewBankDetails/>
                            </div>
                        </div>
                        <Footer />
                    </div>
                </div>
            </div>
            <a className="scroll-to-top rounded" href="#page-top">
                <i className="fas fa-angle-up"></i>
            </a>
        </div>
    );
}

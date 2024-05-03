import { useState } from 'react';
import LeftSidebar from './LeftSidebar';
import Topbar from './Topbar';
import Heading from './Heading';
import ContentFirst from './ContentFirst';
// import ContentChart from './ContentChart';
import ContentProjects from './ContentProjects';
import Footer from './Footer';

export default function Dashboard() {
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
                                <Heading />
                                <ContentFirst />
                                {/* <ContentChart /> */}
                                <ContentProjects />
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

import React from 'react'

export default function ContentFirst() {
    return (
        <div className="container-fluid">
            <div className="row">                
                <div className="col-xl-3 col-md-6 mb-4">
                    <div className="card border-left-primary shadow h-100 py-2">
                        <div className="card-body">
                            <div className="row no-gutters align-items-center">
                                <div className="col mr-2">
                                    <div className="text-xs font-weight-bold text-primary text-uppercase mb-1 ml-3">
                                        Total Conferences</div>
                                    <div className="h5 mb-0 font-weight-bold text-gray-800 ml-3">#5</div>
                                </div>
                                <div className="col-auto mr-3">
                                    <i className="fas fa-calendar fa-2x text-gray-300"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div className="col-xl-3 col-md-6 mb-4">
                    <div className="card border-left-success shadow h-100 py-2">
                        <div className="card-body">
                            <div className="row no-gutters align-items-center">
                                <div className="col">
                                    <div className="text-xs ml-2 font-weight-bold text-success text-uppercase mb-1 ml-3">
                                        Total Registrations</div>
                                    <div className="h5 ml-2 mb-0 font-weight-bold text-gray-800 ml-3">1886</div>
                                </div>
                                <div className="col-auto">
                                    <i className="fas fa-clipboard-list fa-2x text-gray-300 mr-3"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div className="col-xl-3 col-md-6 mb-4">
                    <div className="card border-left-info shadow h-100 py-2">
                        <div className="card-body">
                            <div className="row no-gutters align-items-center">
                                <div className="col">
                                    <div className="text-xs font-weight-bold text-info text-uppercase mb-1 ml-3">Credit Balance
                                    </div>
                                    <div className="h5 ml-2 mb-0 font-weight-bold text-gray-800 ml-3">110</div>
                                </div>
                                <div className="col-auto">
                                    <i className="fas fa-dollar-sign fa-2x text-gray-300 mr-3"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
               
                <div className="col-xl-3 col-md-6 mb-4">
                    <div className="card border-left-warning shadow h-100 py-2">
                        <div className="card-body">
                            <div className="row no-gutters align-items-center">
                                <div className="col mr-2">
                                    <div className="text-xs font-weight-bold text-warning text-uppercase mb-1 ml-3">
                                        PRO</div>
                                    <div className="h5 mb-0 font-weight-bold text-gray-800 ml-3">Purchase Point</div>
                                </div>
                                <div className="col-auto">
                                    <i className="fas fa-coins fa-2x text-gray-300 mr-3"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

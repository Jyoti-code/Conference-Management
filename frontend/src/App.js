import React from 'react';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import SignIn from './components/SignIn';
import Register from './components/Register'; 
import ForgetPassword from './components/ForgetPassword';
import Dashboard from './components/admin-dashboard/Dashboard';
import MainAdd from './components/organizer-dashboard/myconferences/Main';
import MainList from './components/organizer-dashboard/conferencelist/Main';
import ConferenceEdit from './components/organizer-dashboard/conferencelist/ConferenceEdit';
import OrganizerRegister from './components/OrganizerRegister';
import DelegateRegister from './components/DelegateRegister';
import MainOrganizerDetailsView from './components/organizer-dashboard/conferencelist/MainOrganizerDetailsView';
import MainOrganizerDetailsEdit from './components/organizer-dashboard/conferencelist/MainOrganizerDetailsEdit';
import ActiveMain from './components/organizer-dashboard/activeorganizer/ActiveMain';
import ActiveMainOrganizerDetailsEdit from './components/organizer-dashboard/activeorganizer/ActiveMainOrganizerDetailsEdit';
import DelegateMain from './components/organizer-dashboard/delegate-details/DelegateMain';
import DelegateViewMain from './components/organizer-dashboard/delegate-details/DelegateViewMain';
import MainDelegateRegistrationFee from './components/organizer-dashboard/delegate-details/MainDelegateRegistrationFee';
import MainAbstractSessionList from './components/organizer-dashboard/abstract-paper/MainAbstractSessionList'
import MainReviewAbstract from './components/organizer-dashboard/abstract-paper/MainReviewAbstract';
import MainReviewFullPaper from './components/organizer-dashboard/abstract-paper/MainReviewFullPaper';
import MainManageSchedule from './components/organizer-dashboard/schedule-program/MainManageSchedule';
import MainPrintSchedule from './components/organizer-dashboard/schedule-program/MainPrintSchedule';
import MainNewSchedule from './components/organizer-dashboard/schedule-program/MainNewSchedule';
import MainManageProgram from './components/organizer-dashboard/schedule-program/MainManageProgram';
import MainPrintScheduleProgram from './components/organizer-dashboard/schedule-program/MainPrintScheduleProgram';
import MainAccommodationRequest from './components/organizer-dashboard/accommodation/MainAccommodationRequest';
import Orghome from './components/organizer-dashboard/Orghome';
import  MainAdddelegateCategory from './components/organizer-dashboard/settings/MainAdddelegateCategory'
import  MainDelegateCategory from './components/organizer-dashboard/settings/MainDelegateCategory'
import DelegateHome from './components/delegate-dashboard/DelegateHome';
import MainDelActiveConference from './components/delegate-dashboard/delegate-conferences/MainDelActiveConference';
import MainDelPastConference from './components/delegate-dashboard/delegate-conferences/MainDelPastConference';
import MainDelUpdate from './components/delegate-dashboard/delegate-conferences/MainDelUpdate';
import CategoryDelegateMain from './components/delegate-dashboard/delegate-category/CategoryDelegateMain'
import MainDelegateCategoryEdit from './components/delegate-dashboard/delegate-category/MainDelegateCategoryEdit'
import MainDelegateAbstract from './components/delegate-dashboard/abstracts/MainDelegateAbstract';
import MainSubmitAbstract from './components/delegate-dashboard/abstracts/MainSubmitAbstract';
import MainDelegatePaper from './components/delegate-dashboard/paper/MainDelegatePaper';
import MainSubmitPaper from './components/delegate-dashboard/paper/MainSubmitPaper';
import MainDelegateAccommodation from './components/delegate-dashboard/del-accommodation/MainDelegateAccommodation';
import MainApplyForAccommodation from './components/delegate-dashboard/del-accommodation/MainApplyForAccommodation';
import MainRegistrationFee from './components/delegate-dashboard/fee/MainRegistrationFee';
import MainPayRegistrationFee from './components/delegate-dashboard/fee/MainPayRegistrationFee';
import MainViewBankDetails from './components/delegate-dashboard/viewbankdetails/MainViewBankDetails'
import ReviewerHome from './components/reviewer/ReviewerHome';
import MainManualAttendance from './components/organizer-dashboard/attendance/MainManualAttendance';
import MainQrAttendance from './components/organizer-dashboard/attendance/MainQrAttendance';
import MainSetCheckInOut from './components/organizer-dashboard/settings/MainSetCheckInOut';
import MainCheckInOutForm from './components/organizer-dashboard/settings/MainCheckInOutForm';
import MainCreateNewProgram from './components/organizer-dashboard/schedule-program/MainCreateNewProgram'
import MainSubmitAbstractEdit from './components/delegate-dashboard/abstracts/MainSubmitAbstractEdit'
import MainSubmitPaperEdit from './components/delegate-dashboard/paper/MainSubmitPaperEdit'
import MainMasterConferenceCategory from './components/admin-dashboard/master/MainMasterConferenceCategory ';
import MainUserOrganizer from './components/admin-dashboard/user/MainUserOrganizer'
import MainUserDelegate from './components/admin-dashboard/user/MainUserDelegate'
import MainUserReviewer from './components/admin-dashboard/user/MainUserReviewer'
import MainCreateAbstractSession from './components/organizer-dashboard/abstract-paper/MainCreateAbstractSession';
import MainAbstractSessionEdit from './components/organizer-dashboard/abstract-paper/MainAbstractSessionEdit';
import MainReviewAbstractPaper from './components/organizer-dashboard/abstract-paper/MainReviewAbstractPaper'
import MainAddReviewer  from './components/organizer-dashboard/reviewer/MainAddReviewer'
import MainReports from './components/organizer-dashboard/settings/MainReports'
import MainRegistrationFeeList from './components/organizer-dashboard/settings/fee/MainRegistrationFeeList'
import MainSetNewRegistrationFee from './components/organizer-dashboard/settings/fee/MainSetNewRegistrationFee'
import MainAccommodationCategory from './components/organizer-dashboard/settings/MainAccommodationCategory'
import MainAddAccommodationCategory from './components/organizer-dashboard/settings/MainAddAccommodationCategory'
import MainRegistrationFeeEdit from './components/organizer-dashboard/settings/fee/MainRegistrationFeeEdit'
import MainAccommodationFee from './components/organizer-dashboard/settings/fee/MainAccommodationFee'
import MainSetAccommodationFee from './components/organizer-dashboard/settings/fee/MainSetAccommodationFee'
import MainSetAccommodationFeeEdit from './components/organizer-dashboard/settings/fee/MainSetAccommodationFeeEdit'
import MainBankDetails from './components/organizer-dashboard/settings/fee/MainBankDetails'
import MainCouponCodes from './components/organizer-dashboard/settings/MainCouponCodes'
import MainDeadline from './components/organizer-dashboard/settings/MainDeadline'
import MainRecieptSetting from './components/organizer-dashboard/settings/MainRecieptSetting'
import MainAddReceiptSetting from './components/organizer-dashboard/settings/MainAddReceiptSetting'

export default function App() {
    return (
      <> 
        <Router>
            <Routes>
                <Route path="/" element={<SignIn/>}/>
                <Route path="/register" element={<Register/>}/>
                <Route path="/forget" element={<ForgetPassword/>}/>
                <Route path="/adminhome" element={<Dashboard/>}/>
                <Route path="/organizerhome" element={<Orghome/>}/>
                <Route path='/add-conferences' element={<MainAdd/>}/>
                <Route path='/conferences-past-list' element={<MainList/>}/>
                <Route path='/conferences-active-list' element={<ActiveMain/>}/>
                <Route path='/conferenceedit/:id' element={<ConferenceEdit/>}/>
                <Route path="/organizerdetailsview/:id" element={<MainOrganizerDetailsView/>} />
                <Route path="/organizerdetailsedit/:id" element={<MainOrganizerDetailsEdit/>} />
                <Route path="/activeorganizerdetailsedit/:id" element={<ActiveMainOrganizerDetailsEdit/>} />
                <Route path="/delegateregistrationlist" element={<DelegateMain/>} />    
                <Route path="/delegateview/:id" element={<DelegateViewMain/>} />
                <Route path="/delegateregistrationfee" element={<MainDelegateRegistrationFee/>} /> 
                <Route path="/abstractsessionlist" element={<MainAbstractSessionList/>} />                
                <Route path="/abstractreview" element={<MainReviewAbstract/>} />     
                <Route path="/abstractreviewfullpaper" element={<MainReviewFullPaper/>} />     
                <Route path="/schedulemanage" element={<MainManageSchedule/>} />     
                <Route path="/scheduleprint" element={<MainPrintSchedule/>} />     
                <Route path="/schedulemanageprogram" element={<MainManageProgram/>} />     
                <Route path="/scheduleprintprogram" element={<MainPrintScheduleProgram/>} />     
                <Route path="/accommodationrequest" element={<MainAccommodationRequest/>} />     
                <Route path="/organizer-register" element={<OrganizerRegister/>} />     
                <Route path="/delegate-register" element={<DelegateRegister/>} />     
                <Route path="/adddelegatecategory" element={< MainAdddelegateCategory/>} />     
                <Route path="/settingsdelegatecategory" element={<MainDelegateCategory/>} />
                <Route path="/delegate-home" element={<DelegateHome/>} />
                <Route path="/conferences-active" element={<MainDelActiveConference/>}/>
                <Route path="/conferences-past" element={<MainDelPastConference/>}/>
                <Route path="/delegate-update" element={<MainDelUpdate/>}/>
                <Route path="/category-delegate" element={<CategoryDelegateMain/>}/>
                <Route path="/abstract-delegate" element={<MainDelegateAbstract/>}/>
                <Route path="/submit-abstract" element={<MainSubmitAbstract/>}/>
                <Route path="/paper-delegate" element={<MainDelegatePaper/>}/>
                <Route path="/paper-submit" element={<MainSubmitPaper/>}/>
                <Route path="/accommodation-delegate" element={<MainDelegateAccommodation/>}/>
                <Route path="/apply-for-accommodation" element={<MainApplyForAccommodation/>}/>
                <Route path="/fee-delegate" element={<MainRegistrationFee/>}/>
                <Route path="/pay-registration-fee" element={<MainPayRegistrationFee/>}/>
                <Route path="/view-bank-details" element={<MainViewBankDetails/>}/>
                <Route path="/reviewer-home" element={<ReviewerHome/>}/>
                <Route path="/attendance-manual" element={<MainManualAttendance/>}/>
                <Route path="/attendance-qr" element={<MainQrAttendance/>}/>
                <Route path="/settings-check-in-out" element={<MainSetCheckInOut/>}/>
                <Route path="/check-in-check-out" element={<MainCheckInOutForm/>}/>
                <Route path="/create-new-program" element={<MainCreateNewProgram/>}/>
                <Route path="/submit-abstract-edit/:id" element={<MainSubmitAbstractEdit/>}/>
                <Route path="/submit-paper-edit/:id" element={<MainSubmitPaperEdit/>}/>
                <Route path="/master-conference-category" element={<MainMasterConferenceCategory/>}/>
                <Route path="/user-organizers" element={<MainUserOrganizer/>}/>
                <Route path="/user-delegates" element={<MainUserDelegate/>}/>
                <Route path="/user-reviewers" element={<MainUserReviewer/>}/>
                <Route path="/create-abstract-session" element={<MainCreateAbstractSession/>}/>
                <Route path="/manage-abstract-session-edit/:id" element={<MainAbstractSessionEdit/>}/>
                <Route path="/review-abstract-paper" element={<MainReviewAbstractPaper/>} />
                <Route path="/reviewer-add" element={<MainAddReviewer/>} />
                <Route path="/settings-report" element={<MainReports/>} />
                <Route path="/settings-registration-fee" element={<MainRegistrationFeeList/>} />
                <Route path="/set-new-registration-fee" element={<MainSetNewRegistrationFee/>} />
                <Route path="/settings-accommodation-category" element={<MainAccommodationCategory/>} />
                <Route path="/add-accommodation-category" element={<MainAddAccommodationCategory/>} />
                <Route path="/registration-fee-edit/:id" element={<MainRegistrationFeeEdit/>} />
                <Route path="/settings-coupon-codes" element={<MainCouponCodes/>} />
                <Route path="/settings-deadline" element={<MainDeadline/>} />
                <Route path="/settings-accommodation-fee" element={<MainAccommodationFee/>} />
                <Route path="/set-new-accommodation-fee" element={<MainSetAccommodationFee/>} />
                <Route path="/set-new-accommodation-fee" element={<MainSetAccommodationFee/>} />
                <Route path="/set-new-accommodation-fee-edit" element={<MainSetAccommodationFeeEdit/>} />
                <Route path="/settings-bank-details" element={<MainBankDetails/>} />
                <Route path="/settings-reciept" element={<MainRecieptSetting/>} />
                <Route path="/settings-reciept-add" element={<MainAddReceiptSetting/>} />
                <Route path="/create-new-schedule" element={<MainNewSchedule/>} />
                <Route path="/delegate-category-edit-form" element={<MainDelegateCategoryEdit/>} />
            </Routes>
      </Router>  
      </>

    );
}
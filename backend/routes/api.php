<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\API\AuthController;
use App\Http\Controllers\API\OrganizerController;
use App\Http\Controllers\API\DelegateController;
use App\Http\Controllers\API\AdminController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::controller(AuthController::class)->group(function () {
    Route::post('login', 'login');
    Route::post('register', 'register');
    Route::post('logout', 'logout');
    Route::post('refresh', 'refresh');
});

Route::controller(OrganizerController::class)->group(function (){
    Route::post('organizer','organizer');
    Route::post('abstractThemeStore','abstractThemeStore');    
    Route::post('delegateCategoryFeeUpdate','delegateCategoryFeeUpdate');    
    Route::post('delegateCategoryDelete/{id}','delegateCategoryDelete');    
    Route::post('delegateCategoryStore','delegateCategoryStore');    
    Route::post('delegateCategoryFeeStore','delegateCategoryFeeStore');    
    Route::get('organizerList','organizerList');
    Route::get('delegateCategoryFeeList','delegateCategoryFeeList');
    Route::get('abstractThemeList','abstractThemeList');
    Route::get('conferenceDetailsList','conferenceDetailsList');
    Route::get('organizerEdit/{id}','organizerEdit');
    Route::get('abstractThemeEdit/{id}','abstractThemeEdit');
    Route::get('delegateCategoryFeeEdit/{id}','delegateCategoryFeeEdit');
    Route::post('organizerUpdate','organizerUpdate');
    Route::post('abstractThemeUpdate','abstractThemeUpdate');
    Route::post('conferenceRegister','conferenceRegister');
    Route::post('conferenceDetails','conferenceDetails');
    Route::post('organizerStore','organizerStore');
    Route::get('organizerDetailsListPost/{id}','organizerDetailsListPost');
    Route::get('organizerDetailsListActive','organizerDetailsListActive');
    Route::get('delegateCategoryConfId','delegateCategoryConfId');
    Route::get('conferenceDropdown/{id}','conferenceDropdown');
    Route::get('organizerlistActive/{id}','organizerlistActive');
    Route::get('organizerDetailsView/{id}','organizerDetailsView');
    Route::get('organizerDetailsEdit/{id}','organizerDetailsEdit');
    Route::post('organizerDetailsUpdate','organizerDetailsUpdate');
    Route::post('organizerDetailsDelete','organizerDetailsDelete');
});
Route::controller(DelegateController::class)->group(function (){
    Route::post('delegateStore','delegateStore');
    Route::post('abstractSubmitDataStore','abstractSubmitDataStore');
    Route::post('payRegistrationFee','payRegistrationFee');
    Route::post('paperSubmitDataStore','paperSubmitDataStore');
    Route::post('abstractUpdate','abstractUpdate');
    Route::post('paperUpdate','paperUpdate');
    Route::get('delegateList','delegateList');
    Route::get('filterDelegateList/{id}','filterDelegateList');
    Route::get('delegateView/{id}','delegateView');
    Route::get('delegateViewProfile/{id}','delegateViewProfile');
    Route::post('delgateProfileUpdate/{id}','delgateProfileUpdate');
    Route::get('delegatesListPast/{id}','delegatesListPast');
    Route::get('delegatesListActive/{id}','delegatesListActive');
    Route::get('delegateCategoryList/{id}','delegateCategoryList');
    Route::get('abstractSubmitList','abstractSubmitList');
    Route::get('paperSubmitList','paperSubmitList');
    Route::get('payRegistrationFeeList','payRegistrationFeeList');
    Route::get('abstractEdit/{id}','abstractEdit');
    Route::get('paperEdit/{id}','paperEdit');
});

Route::controller(AdminController::class)->group(function (){
    Route::get('userOrganizerList','userOrganizerList');
    Route::get('userDelegateList','userDelegateList');
    Route::post('reviewerStore','reviewerStore');
    Route::get('userReviewerList','userReviewerList');
    Route::get('reviewerList/{id}','reviewerList');
    Route::get('getUserByName/{name}','getUserByName');
});
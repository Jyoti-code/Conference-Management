<?php

namespace App\Http\Controllers\API;

use Illuminate\Support\Facades\DB;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;

class DelegateController extends Controller
{
    public function delegateStore(Request $request)
    {
        $validatedData = $request->validate([
            'email' => 'required|string|email|max:255|unique:users',
        ]);
        $name = $request->input('delegate_name');
        $pass = '123456';
        try {
            $userData = [
                'name' => $name,
                'email' => $validatedData['email'],
                'password' => Hash::make($pass),
                'role' => 3,
                'user_type' => 'delegate',
            ];
            $user = DB::table('users')->insertGetId($userData);
            $filename="";
            if ($request->hasFile('profile_image')) {
                $request->validate([
                    'profile_image' => 'required|mimes:pdf,jpeg,png,jpg|max:2048',
                ]);
                $filename = time() . '.' . $request->profile_image->extension();
                $request->profile_image->move(public_path('uploads'), $filename);
            }
            $delegateData = [
                'user_id' => $user,
                'del_reg_no' => $request->input('del_reg_no'),
                'delegate_category' => $request->input('delegate_category'),
                'title' => $request->input('title'),
                'mobile_country_code' => $request->input('mobile_country_code'),
                'mobile' => $request->input('mobile'),
                'gender' => $request->input('gender'),
                'dob' => $request->input('dob'),
                'designation' => $request->input('designation'),
                'affiliation' => $request->input('affiliation'),
                'city' => $request->input('city'),
                'country' => $request->input('country'),
                'address_for_correspondence' => $request->input('address_for_correspondence'),
                'office_telephone_country_code' => $request->input('office_telephone_country_code'),
                'office_telephone' => $request->input('office_telephone'),
                'residence_telephone_country_code' => $request->input('residence_telephone_country_code'),
                'residence_telephone' => $request->input('residence_telephone'),
                'website' => $request->input('website'),
                'profile_image'=>$filename,
                'created_at' => $request->input('created_at'),
            ];

            DB::table('delegates')->insert($delegateData);

            return response()->json([
                'message' => 'Delegate registered successfully!',
                'delegateData'=>$delegateData
            ]);
        } catch (\Exception $e) {
            return response()->json([
                'error' => 'Delegate not registered!'
            ]);
        }
    }

    public function delegateList()
    {
        $delegatelist = DB::table('users')
            ->join('delegates', 'users.id', '=', 'delegates.user_id')
            ->select('users.*', 'delegates.*')
            ->where('users.role', '=', 3)
            ->where('delegates.status', '=', 0)
            ->orderBy('users.id', 'asc')
            ->get();
            
        return response()->json([
            'delegatelist' => $delegatelist
        ]);
    }

    public function delegateView($id){
        $delegatesview = DB::table('users')
            ->join('delegates', 'users.id', '=', 'delegates.user_id')
            ->select('users.*', 'delegates.*')
            ->where('users.role', '=', 3 )
            ->where('delegates.id',$id) 
            ->orderBy('users.id', 'asc')
            ->first();
            
        return response()->json([
            'delegatesview' => $delegatesview
        ]);
    }

    public function filterDelegateList($id)
    {
        $filterdelegates = DB::table('delegates')
            ->join('users', 'delegates.user_id', '=', 'users.id')
            ->select('delegates.*', 'users.name', 'users.email')
            ->where('delegates.conf_id', '=', $id)
            ->orderBy('delegates.id', 'asc')
            ->get();    
        return response()->json([
            'filterdelegates' => $filterdelegates
        ]);
    }

     public function delegateViewProfile($id){
        $delegatesview = DB::table('users')
            ->join('delegates', 'users.id', '=', 'delegates.user_id')
            ->select('users.*', 'delegates.*')
            ->where('users.role', '=', 3 )
            ->where('delegates.user_id',$id) 
            ->orderBy('users.id', 'asc')
            ->first();
            
        return response()->json([
            'delegatesview' => $delegatesview
        ]);
    }

    public function delgateProfileUpdate(Request $request, $id)
    {
        try {
            if ($request->hasFile('profile_image')) {
                $request->validate([
                    'profile_image' => 'required|mimes:jpeg,png,jpg|max:2048',
                ]);

                $filename = time() . '.' . $request->profile_image->extension();
                $request->profile_image->move(public_path('uploads'), $filename);

                $updated = DB::table('delegates')
                    ->where('user_id', $id)
                    ->update(['profile_image' => $filename]);
            } else {
                $updated = DB::table('delegates')
                    ->where('user_id', $id)
                    ->update([
                        'delegate_category' => $request->input('delegate_category'),
                        'title' => $request->input('title'),
                        'mobile_country_code' => $request->input('mobile_country_code'),
                        'mobile' => $request->input('mobile'),
                        'gender' => $request->input('gender'),
                        'dob' => $request->input('dob'),
                        'designation' => $request->input('designation'),
                        'affiliation' => $request->input('affiliation'),
                        'city' => $request->input('city'),
                        'country' => $request->input('country'),
                        'address_for_correspondence' => $request->input('address_for_correspondence'),
                        'office_telephone_country_code' => $request->input('office_telephone_country_code'),
                        'office_telephone' => $request->input('office_telephone'),
                        'residence_telephone_country_code' => $request->input('residence_telephone_country_code'),
                        'residence_telephone' => $request->input('residence_telephone'),
                        'website' => $request->input('website'),
                    ]);
            }
            return response()->json([
                'message' => 'Delegate updated successfully!',
                'updated' => $updated
            ], 200);
        } catch (\Exception $e) {
            return response()->json([
                'error' => 'Delegate not updated!'
            ], 500);
        }
    }

    public function delegatesListActive($id) 
    {
        $currentDate = date('Y-m-d');
        $delegatelistdetails = DB::table('conference_details')
            ->join('delegates', 'conference_details.id', '=', 'delegates.conf_id')
            ->select('conference_details.*', 'delegates.conf_id', 'delegates.user_id')
            ->where('conference_details.status', 0)
            ->where('conference_details.from_date', '>=', $currentDate)
            ->where('delegates.user_id', $id)
            ->orderBy('conference_details.id', 'asc')
            ->get();

        return response()->json([
            'delegatelistdetails' => $delegatelistdetails
        ]);
    }

    public function delegatesListPast($id) 
    {
        $currentDate = date('Y-m-d');
        $delegatelistdetails = DB::table('conference_details')
            ->join('delegates', 'conference_details.id', '=', 'delegates.conf_id')
            ->select('conference_details.*', 'delegates.conf_id', 'delegates.user_id')
            ->where('conference_details.status', 0)
            ->where('conference_details.from_date', '<', $currentDate)
            ->where('delegates.user_id', $id)
            ->orderBy('conference_details.id', 'asc')
            ->get();

        return response()->json([
            'delegatelistdetails' => $delegatelistdetails
        ]);
    }

    public function delegateCategoryList($id) 
    {
        $delegatelistdetails = DB::table('conference_details')
            ->join('delegates', 'conference_details.id', '=', 'delegates.conf_id')
            ->select('conference_details.name_of_conference', 'delegates.delegate_category')
            ->where('conference_details.status', 0)
            ->where('delegates.user_id', $id)
            ->orderBy('conference_details.id', 'asc')
            ->get();

        return response()->json([
            'delegatelistdetails' => $delegatelistdetails
        ]);
    }

    public function abstractSubmitDataStore(Request $request)
    {
        try {
            $filename = "";
            if ($request->hasFile('upload_file')) {
                $request->validate([
                    'upload_file' => 'required|mimes:pdf|max:5120',
                ]);
                $filename = time() . '.' . $request->upload_file->extension();
                $request->upload_file->move(public_path('uploads'), $filename);
            }
            $abstractData = [
                'del_id' => $request->input('del_id'),
                'name_of_conference' => $request->input('name_of_conference'),
                'proposal_type' => $request->input('proposal_type'),
                'author_name' => $request->input('author_name'),
                'presenting_author_name' => $request->input('presenting_author_name'),
                'keywords' => $request->input('keywords'),
                'description' => $request->input('description'),
                'upload_file' => $filename,
                'created_at' => now(),
            ];
            DB::table('abstract')->insert($abstractData);

            return response()->json([
                'message' => 'Abstract data submitted successfully!',
                'abstractData' => $abstractData
            ]);
        } catch (\Exception $e) {
            return response()->json([
                'error' => 'Abstract not submitted!'
            ]);
        }
    }

    public function paperSubmitDataStore(Request $request)
    {
        try {
            $filename = "";
            if ($request->hasFile('upload_file')) {
                $request->validate([
                    'upload_file' => 'required|mimes:pdf|max:5120',
                ]);
                $filename = time() . '.' . $request->upload_file->extension();
                $request->upload_file->move(public_path('uploads'), $filename);
            }
            $paperData = [
                'del_id' => $request->input('del_id'),
                'name_of_conference' => $request->input('name_of_conference'),
                'proposal_type' => $request->input('proposal_type'),
                'author_name' => $request->input('author_name'),
                'presenting_author_name' => $request->input('presenting_author_name'),
                'keywords' => $request->input('keywords'),
                'description' => $request->input('description'),
                'upload_file' => $filename,
                'created_at' => now(),
            ];
            DB::table('paper')->insert($paperData);

            return response()->json([
                'message' => 'Abstract data submitted successfully!',
                'paperData' => $paperData
            ]);
        } catch (\Exception $e) {
            return response()->json([
                'error' => 'Abstract not submitted!'
            ]);
        }
    }

    public function payRegistrationFee(Request $request)
    {
        try {
            $filename = "";
            if ($request->hasFile('upload_file')) {
                $request->validate([
                    'upload_file' => 'required|mimes:pdf|max:5120',
                ]);
                $filename = time() . '.' . $request->upload_file->extension();
                $request->upload_file->move(public_path('uploads'), $filename);
            }
            
            $payRegistrationFeeData = [
                'name_of_conference' => $request->input('name_of_conference'),
                'payment_mode' => $request->input('payment_mode'),
                'transaction_number' => $request->input('transaction_number'),
                'transaction_date' => $request->input('transaction_date'),
                'bank_name' => $request->input('bank_name'),
                'coupon_code' => $request->input('coupon_code'),
                'pay_amount' => $request->input('pay_amount'),
                'upload_file' => $filename,
                'created_at' => now(),
            ];

            DB::table('payregistrationfee')->insert($payRegistrationFeeData);

            return response()->json([
                'message' => 'Pay Registration Fee submitted successfully!',
                'payRegistrationFeeData' => $payRegistrationFeeData
            ]);
        } catch (\Exception $e) {
            return response()->json([
                'error' => 'Pay Registration Fee not submitted!'
            ], 500);
        }
    }

    public function abstractSubmitList(){
        $abstractsubmitlist = DB::table('abstract')
            ->select('abstract.*')
            ->get();
            
        return response()->json([
            'abstractsubmitlist' => $abstractsubmitlist
        ]);
    }

    public function paperSubmitList(){
        $papersubmitlist = DB::table('paper')
            ->select('paper.*')
            ->get();
            
        return response()->json([
            'papersubmitlist' => $papersubmitlist
        ]);
    }

    public function payRegistrationFeeList(){
        $payregistrationfee= DB::table('payregistrationfee')
            ->select('payregistrationfee.*')
            ->get();
            
        return response()->json([
            'payregistrationfee' => $payregistrationfee
        ]);
    }

    public function abstractEdit($id){
        $abstractedit= DB::table('abstract')
            ->select('abstract.*')
            ->where('abstract.id', $id)
            ->get();
            
        return response()->json([
            'abstractedit' => $abstractedit
        ]);
    }

    public function abstractUpdate(Request $request)
    {
        try {
            $id = $request->input('id');
            $upload_file_hidden = $request->input('upload_file_hidden');
            $filename = "";

            if ($request->hasFile('upload_file')) {
                $request->validate([
                    'upload_file' => 'required|mimes:pdf|max:2048',
                ]);

                $filename = time() . '.' . $request->file('upload_file')->getClientOriginalExtension();
                $request->file('upload_file')->move(public_path('uploads'), $filename);
            } else {
                $filename = $upload_file_hidden;
            }

            $updated = DB::table('abstract')
                ->where('id', $id)
                ->update([
                    'name_of_conference' => $request->input('name_of_conference'),
                    'proposal_type' => $request->input('proposal_type'),
                    'author_name' => $request->input('author_name'),
                    'presenting_author_name' => $request->input('presenting_author_name'),
                    'keywords' => $request->input('keywords'),
                    'description' => $request->input('description'),
                    'upload_file' => $filename, 
                    'updated_at' => now(),
                ]);

            return response()->json([
                'message' => 'Abstract updated successfully!',
                'updated' => $updated
            ], 200);
        } catch (\Exception $e) {
            return response()->json([
                'error' => 'Abstract not updated!'
            ], 500);
        }
    }

    public function paperEdit($id){
        $paperedit= DB::table('paper')
            ->select('paper.*')
            ->where('paper.id', $id)
            ->get();
            
        return response()->json([
            'paperedit' => $paperedit
        ]);
    }
    
    public function paperUpdate(Request $request)
    {
        try {
            $id = $request->input('id');
            $upload_file_hidden = $request->input('upload_file_hidden');
            $filename = "";

            if ($request->hasFile('upload_file')) {
                $request->validate([
                    'upload_file' => 'required|mimes:pdf|max:2048',
                ]);

                $filename = time() . '.' . $request->file('upload_file')->getClientOriginalExtension();
                $request->file('upload_file')->move(public_path('uploads'), $filename);
            } else {
                $filename = $upload_file_hidden;
            }

            $updated = DB::table('paper')
                ->where('id', $id)
                ->update([
                    'name_of_conference' => $request->input('name_of_conference'),
                    'proposal_type' => $request->input('proposal_type'),
                    'author_name' => $request->input('author_name'),
                    'presenting_author_name' => $request->input('presenting_author_name'),
                    'keywords' => $request->input('keywords'),
                    'description' => $request->input('description'),
                    'upload_file' => $filename, 
                    'updated_at' => now(),
                ]);

            return response()->json([
                'message' => 'Paper updated successfully!',
                'updated' => $updated
            ], 200);
        } catch (\Exception $e) {
            return response()->json([
                'error' => 'Paper not updated!'
            ], 500);
        }
    }
}

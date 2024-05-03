<?php

namespace App\Http\Controllers\API;

use Illuminate\Support\Facades\DB;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;

class AdminController extends Controller
{
    public function userOrganizerList(){
        $userorganizerlist = DB::table('users')
            ->join('organizers', 'users.id', '=', 'organizers.user_id')
            ->select('users.*', 'organizers.*')
            ->where('users.role', '=', 2 )
            ->orderBy('users.id', 'asc')
            ->get();
            
        return response()->json([
            'userorganizerlist' => $userorganizerlist
        ]);
    }

    public function userDelegateList(){
        $userdelegatelist = DB::table('users')
            ->join('delegates', 'users.id', '=', 'delegates.user_id')
            ->select('users.*', 'delegates.*')
            ->where('users.role', '=', 3 )
            ->orderBy('users.id', 'asc')
            ->get();
            
        return response()->json([
            'userdelegatelist' => $userdelegatelist
        ]);
    }

    public function reviewerStore(Request $request)
    {
        $validatedData = $request->validate([
            'email' => 'required|string|email|max:255|unique:users',
        ]);
        $name = $request->input('name');
        $pass = '123456';
        try {
            $userData = [
                'name' => $name,
                'email' => $validatedData['email'],
                'password' => Hash::make($pass),
                'role' => 4,
                'user_type' => 'reviewer',
            ];
            $user = DB::table('users')->insertGetId($userData);
            $reviewerData = [
                'user_id' => $user,
                'name_of_conference' => $request->input('name_of_conference'),
                'mobile' => $request->input('mobile'),
                'city' => $request->input('city'),
                'state' => $request->input('state'),
                'country' => $request->input('country'),
                'address' => $request->input('address'),
                'created_at' => now(),               
            ];
            DB::table('reviewer')->insert($reviewerData);
            return response()->json([
                'message' => 'New Reviewer registered successfully!',
                'reviewerData'=>$reviewerData,
                'user'=>$userData,
            ]);
        } catch (\Exception $e) {
            return response()->json([
                'error' => 'Reviewer not registered!'
            ]);
        }
    }

    // public function reviewerStore(Request $request)
    // {
    //     $email = $request->input('email');
    //     $name = $request->input('name');

    //     $existingUser = DB::table('users')
    //         ->join('reviewer', 'users.id', '=', 'reviewer.user_id')
    //         ->where(function ($query) use ($email, $name) {
    //             $query->where('email', $email)
    //                 ->orWhere('name', $name);
    //         })
    //         ->where('role', 4) 
    //         ->first();

    //     if ($existingUser) {
    //         return response()->json([
    //             'message' => 'Reviewer already registered!',
    //             'reviewerData' => $existingUser
    //         ]);
    //     } else {
    //         $validatedData = $request->validate([
    //             'email' => 'required|string|email|max:255|unique:users',
    //         ]);
    //         $pass = '123456';
    //         try {
    //             $userData = [
    //                 'name' => $name,
    //                 'email' => $validatedData['email'],
    //                 'password' => Hash::make($pass),
    //                 'role' => 4,
    //                 'user_type' => 'reviewer',
    //             ];
    //             $user = DB::table('users')->insertGetId($userData);
    //             $reviewerData = [
    //                 'user_id' => $user,
    //                 'name_of_conference' => $request->input('name_of_conference'),
    //                 'mobile' => $request->input('mobile'),
    //                 'city' => $request->input('city'),
    //                 'state' => $request->input('state'),
    //                 'country' => $request->input('country'),
    //                 'address' => $request->input('address'),
    //                 'created_at' => now(),
    //             ];
    //             DB::table('reviewer')->insert($reviewerData);
    //             return response()->json([
    //                 'message' => 'Reviewer registered successfully!',
    //                 'reviewerData' => $reviewerData
    //             ]);
    //         } catch (\Exception $e) {
    //             return response()->json([
    //                 'error' => 'Reviewer not registered!'
    //             ]);
    //         }
    //     }
    // }

    public function userReviewerList(){
        $userreviewerlist = DB::table('users')
            ->join('reviewer', 'users.id', '=', 'reviewer.user_id')
            ->select('users.*', 'reviewer.*')
            ->where('users.role', '=', 4 )
            ->orderBy('users.id', 'asc')
            ->get();
            
        return response()->json([
            'userreviewerlist' => $userreviewerlist
        ]);
    }

    public function reviewerList($id){
        $reviewerlist= DB::table('users')
            ->join('reviewer', 'users.id', '=', 'reviewer.user_id')
            ->select('users.*', 'reviewer.*')
            ->where('reviewer.id', $id)
            ->where('users.role', '=', 4 )
            ->orderBy('users.id', 'asc')
            ->first();
            
        return response()->json([
            'reviewerlist' => $reviewerlist
        ]);
    }
}

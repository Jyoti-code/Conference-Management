<?php

namespace App\Http\Controllers\API;

use App\Models\Organizer;
use App\Models\User;
use Illuminate\Support\Facades\DB;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;

class OrganizerController extends Controller
{
    public function organizerStore(Request $request){
        $validatedData = $request->validate([
            'email' => 'required|string|email|max:255|unique:users',
        ]);
        $name=$request->input('name_of_organizer');
        $pass = '123456';
     try{
        $userData = [
            'name' => $name,
            'email' => $validatedData['email'],
            'password' => Hash::make($pass),
            'role' => 2,
            'user_type' => 'organizer',
        ];
        $user = DB::table('users')->insertGetId($userData);
    
        $organizerData = [
            'user_id' => $user,
            'city' => $request->input('city'),
            'state' => $request->input('state'),
            'country' => $request->input('country'),
            'name_of_organization' => $request->input('name_of_organization'),
            'contact_person' => $request->input('contact_person'),
            'contact_number' =>$request->input('contact_number'),
            'address' =>$request->input('address'),
            'gst' =>$request->input('gst'),
        ];
        DB::table('organizers')->insert($organizerData);

        $organizerDetails = [
            'user_id' => $user,
            'conference_category' => $request->input('conference_category'),
            'name_of_conference' => $request->input('name_of_conference'),
            'conference_theme' => $request->input('conference_theme'),
            'from_date' => $request->input('from_date'),
            'to_date' => $request->input('to_date'),
            'name_of_venue' =>$request->input('name_of_venue'),
            'address_of_venue' => $request->input('address_of_venue'),
            'city' =>$request->input('ccity'),
            'country' =>$request->input('ccountry'),
            'name_of_organizer' =>$request->input('name_of_organizer'),
            'contact_person' =>$request->input('ccontact_person'),
            'contact_number' =>$request->input('ccontact_number'),
            'website' =>$request->input('website'),
            'email' => $request->input('cemail'),
        ];
        DB::table('conference_details')->insert($organizerDetails);
            return response()->json([
            'message' => 'Conference registered successfully!'
        ]);
        } catch (\Exception $e) {
            return response()->json([
                'error' => 'Conference not registered!'
            ]);
        }
    }

    public function organizerDetailsListPost($id)
    {
        $currentDate = date('Y-m-d');
        $datas = DB::table('conference_details')
            ->where('user_id', $id)
            ->where('status', '=', 0)
            ->where('conference_details.from_date', '<', $currentDate)
            ->orderBy('user_id', 'asc')
            ->get();
            $arr=array();
            foreach($datas as $key=>$data)
            {
                $arr['ConfId']=$data->id;
                $arr['Name']=$data->name_of_conference;
                $arr['From']=$data->from_date;
                $arr['To']=$data->to_date;
                $arr['Status']=$data->status;
                $confIdCount = DB::table('delegates')
                ->select(DB::raw('count(conf_id) as conf_id_count'))
                ->where('conf_id', $data->id)
                ->get();
                $arr['Count']=$confIdCount;
            }           
            return response()->json([
                'organizerlistdetails' => $arr,
                'id'=>$id
            ]);
    }

    public function organizerlistActive($id)
    {
        $currentDate = date('Y-m-d');
        $datas = DB::table('conference_details')
            ->where('user_id', $id)
            ->where('status', '=', 0)
            ->where('conference_details.from_date', '>=', $currentDate)
            ->orderBy('user_id', 'asc')
            ->get();
            $arr=array();
            foreach($datas as $key=>$data)
            {
                $arr['ConfId']=$data->id;
                $arr['Name']=$data->name_of_conference;
                $arr['From']=$data->from_date;
                $arr['To']=$data->to_date;
                $arr['Status']=$data->status;
                $confIdCount = DB::table('delegates')
                ->select(DB::raw('count(conf_id) as conf_id_count'))
                ->where('conf_id', $data->id)
                ->get();
                $arr['Count']=$confIdCount;
            }           
            return response()->json([
                'organizerlistdetails' => $arr,
                'id'=>$id
            ]);
    }

    public function conferenceDropdown($id)
    {
        $conferencedropdown = DB::table('conference_details') ->where('user_id', '=', $id)
            ->where('status', '=', 0)
            ->orderBy('id', 'asc')
            ->get();
            
        return response()->json([
            'conferencedropdown' => $conferencedropdown
        ]);
    }

    public function organizerDetailsView($id)
    {
        $organizerlistdetailsview = DB::table('users')
            ->join('conference_details', 'users.id', '=', 'conference_details.user_id')
            ->select('users.*', 'conference_details.*')
            ->where('users.role', '=', 2 )
            ->where('conference_details.id',$id) 
            ->orderBy('users.id', 'asc')
            ->first();
            
        return response()->json([
            'organizerlistdetails' => $organizerlistdetailsview
        ]);
    }

    public function organizerDetailsEdit($id)
    {
        $organizerlistdetailsedit = DB::table('users')
            ->join('conference_details', 'users.id', '=', 'conference_details.user_id')
            ->select('users.*', 'conference_details.*')
            ->where('users.role', '=', 2 )
            ->where('conference_details.id',$id) 
            ->orderBy('users.id', 'asc')
            ->first();
            
        return response()->json([
            'organizerlistdetailsedit' => $organizerlistdetailsedit
        ]);
    }

    public function organizerDetailsUpdate(Request $request)
    {
        $user_id = $request->input('user_id');
        
        try {
            DB::table('conference_details')->where('user_id', $user_id)->update([
                'conference_category' => $request->input('conference_category'),
                'name_of_conference' => $request->input('name_of_conference'),
                'conference_theme' => $request->input('conference_theme'),
                'from_date' => $request->input('from_date'),
                'to_date' => $request->input('to_date'),
                'name_of_venue' => $request->input('name_of_venue'),
                'address_of_venue' => $request->input('address_of_venue'),
                'city' => $request->input('city'),
                'country' => $request->input('country'),
                'name_of_organizer' => $request->input('name_of_organizer'),
                'contact_person' => $request->input('contact_person'),
                'contact_number' => $request->input('contact_number'),
                'website' => $request->input('website'),
                'email' => $request->input('email'),      
            ]);

            return response()->json([
                'message' => 'Organizer updated successfully!'
            ], 200);
        } catch (\Exception $e) {
            return response()->json([
                'error' => 'Organizer not updated!',
                'message' => $e->getMessage() 
            ], 500);
        }
    }

    public function organizerDetailsDelete(Request $request)
    {
        $id = $request->input('id');
        try {
            DB::table('conference_details')->where('id', $id)->update([
                'status' => 4, 
            ]);
            return response()->json([
                'message' => 'Organizer deleted successfully!'
            ], 204);
        } catch (\Exception $e) {
            return response()->json([
                'error' => 'An error occurred while deleting the organizer.'
            ], 500); 
        }
    }

    public function conferenceDetailsList(){
        $conferencedetailslist = DB::table('conference_details')
            ->select('conference_details.*')
            ->get();
            
        return response()->json([
            'conferencedetailslist' => $conferencedetailslist
        ]);
    }

    public function abstractThemeStore(Request $request)
    {
        try {
            $abstractsessionData = [
                'conf_id' => $request->input('conf_id'),
                'organizer_id' => $request->input('organizer_id'),
                'abstract_theme' => $request->input('abstract_theme'),
                'status' => 0,
                'created_at' => now(),               
            ];

            DB::table('managesession')->insert($abstractsessionData);

            return response()->json([
                'message' => 'Abstract theme inserted successfully!',
                'abstractsessionData'=>$abstractsessionData
            ]);
        } catch (\Exception $e) {
            return response()->json([
                'error' => 'Abstract theme not inserted registered!'
            ]);
        }
    }

    public function abstractThemeList(){
        $abstractthemelist = DB::table('managesession')
            ->select('managesession.*')
            ->get();
            
        return response()->json([
            'abstractthemelist' => $abstractthemelist
        ]);
    }

    public function abstractThemeEdit($id)
    {
        $arr=array();
        $abstractthemeedit = DB::table('managesession')
            ->select('managesession.*')
            ->where('managesession.id',$id) 
            ->first();
             $arr['id']=$abstractthemeedit->id;
            $arr['conf_id']=$abstractthemeedit->conf_id;
            $arr['theme']=explode(",", $abstractthemeedit->abstract_theme);
            
        return response()->json([
            'getdata' => $arr
        ]);
    }

    public function abstractThemeUpdate(Request $request)
    {
        try {
            $id = $request->input('id'); 
            $updated = DB::table('managesession')
                ->where('id', $id)
                ->update([
                    'conf_id' => $request->input('conf_id'),
                    'abstract_theme' => $request->input('theme'),
                    'updated_at' => now(),
                ]);
            return response()->json([
                'message' => 'Abstract theme updated successfully!',
                'updated' => $updated
            ], 200);
        } catch (\Exception $e) {
            return response()->json([
                'error' => 'Abstract theme not updated!'
            ], 500);
        }
    }

    public function delegateCategoryStore(Request $request){
        try {
            $delegatecategoryData = [
                'conf_id' => $request->conf_id,
                'category_name' => $request->category_name,
                'status'=> 0,
                'created_at' => now(),               
            ];

            DB::table('delegatecategory')->insert($delegatecategoryData);

            return response()->json([
                'message' => 'Delegate Category inserted successfully!',
                'delegatecategoryData'=>$delegatecategoryData
            ]);
        } catch (\Exception $e) {
            return response()->json([
                'error' => 'Delegate category not inserted!'
            ]);
        }
    }

    public function delegateCategoryConfId()
    {
        $delegatecategoryconfid = DB::table('delegatecategory')
            ->select('id', 'conf_id', 'category_name') 
            ->where('status', '=', 0 )
            ->groupBy('id', 'conf_id', 'category_name') 
            ->get();

        $transformedData = [];
        foreach ($delegatecategoryconfid as $item) {
            if (!isset($transformedData[$item->conf_id])) {
                $transformedData[$item->conf_id] = [
                    'conf_id' => $item->conf_id,
                    'categories' => [
                        [
                            'id' => $item->id,
                            'name' => $item->category_name
                        ]
                    ]
                ];
            } else {
                $transformedData[$item->conf_id]['categories'][] = [
                    'id' => $item->id,
                    'name' => $item->category_name
                ];
            }
        }
        $result = array_values($transformedData);

        return response()->json([
            'delegatecategoryconfid' => $result
        ]);
    }

    public function delegateCategoryFeeStore(Request $request){
        try {
            $delegatecategoryfeeData = [
                'conf_id' => $request->input('conf_id'),
                'delegate_category' => $request->input('delegate_category'),
                'amount' => $request->input('amount'),
                'currency' => $request->input('currency'),
                'created_at' => now(),               
            ];
            DB::table('delegate_category_fee')->insert($delegatecategoryfeeData);
            return response()->json([
                'message' => 'Delegate category fee inserted successfully!',
                'delegatecategoryfeeData'=>$delegatecategoryfeeData
            ]);
        } catch (\Exception $e) {
            return response()->json([
                'error' => 'Delegate category fee not inserted!'
            ]);
        }
    }

    public function delegateCategoryFeeList(){
        $delegatecategoryfeelist = DB::table('delegate_category_fee')
            ->select('delegate_category_fee.*')
            ->get();
            
        return response()->json([
            'delegatecategoryfeelist' => $delegatecategoryfeelist
        ]);
    }

    public function delegateCategoryFeeEdit($id)
    {
        $delegatecategoryfeeedit = DB::table('delegate_category_fee')
            ->select('delegate_category_fee.*')
            ->where('delegate_category_fee.id',$id) 
            ->first();
        return response()->json([
            'delegatecategoryfeeedit' => $delegatecategoryfeeedit
        ]);
    }

    public function delegateCategoryFeeUpdate(Request $request)
    {
        try {
            $id = $request->input('id'); 
            $updated = DB::table('delegate_category_fee')
                ->where('id', $id)
                ->update([
                    'conf_id' => $request->input('conf_id'),
                    'delegate_category' => $request->input('delegate_category'),
                    'amount' => $request->input('amount'),
                    'currency' => $request->input('currency'),
                    'updated_at' => now(), 
                ]);
            return response()->json([
                'message' => 'Delegate category fee updated successfully!',
                'updated' => $updated
            ], 200);
        } catch (\Exception $e) {
            return response()->json([
                'error' => 'Delegate category fee not updated!'
            ], 500);
        }
    }

   public function delegateCategoryDelete(Request $request, $id)
    {
        try {
            DB::table('delegatecategory')->where('id', $id)->update([
                'status' => 4, 
            ]);
            return response()->json([
                'message' => 'Delegate category deleted successfully!'
            ], 204);
        } catch (\Exception $e) {
            error_log($e->getMessage()); 
            return response()->json([
                'error' => 'An error occurred while deleting the delegate category.'
            ], 500); 
        }
    }

}





    
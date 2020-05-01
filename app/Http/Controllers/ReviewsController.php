<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class ReviewsController extends Controller
{
    
    public function show()
    {
        /*$columns = ['description', 'avatar', 'name'];
        $profile = User::find($id, $columns);
        $profile->avatar = Storage::url($profile->avatar);*/

        return view('show');
    }

    public function store(Request $request)
    {   
        
        $this->validate($request, [
            'email' => 'required',
            'name' => 'required',
            'comment' => 'required',
        ]);
        return 1;
    }
}

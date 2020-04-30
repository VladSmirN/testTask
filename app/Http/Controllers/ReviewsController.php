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
}

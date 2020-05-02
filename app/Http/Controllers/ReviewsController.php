<?php

namespace App\Http\Controllers;
use App\Review;
use Illuminate\Http\Request;

class ReviewsController extends Controller
{
    
    public function show()
    {
        return view('show');
    }

    public function store(Request $request)
    {   
        
        $this->validate($request, [
            'email' => 'required|email',
            'name' => 'required',
            'comment' => 'required',
        ]);

            
        $review = new Review;
         
        $review->COMMENT = $request->input('comment');
        $review->EMAIL = $request->input('email');
        $review->NAME =  $request->input('name');
    
        $review->save();         

        return 1;
    }

    public function getReviews(Request $request)
    {   
        return  Review::all();
    }

}

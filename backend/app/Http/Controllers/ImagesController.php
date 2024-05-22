<?php

namespace App\Http\Controllers;

use App\Models\Images;
use Illuminate\Http\Request;

class ImagesController extends Controller
{
    public function index()
    {
        return response()->json(Images::all());
    }

    public function store(Request $request)
    {
        $post = Images::create([
            'image_url' => $request->image_url,
        ]);

        return response()->json($post, 201);
    }
}

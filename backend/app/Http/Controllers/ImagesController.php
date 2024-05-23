<?php

namespace App\Http\Controllers;

use App\Models\Images;
use Illuminate\Http\Request;

class ImagesController extends Controller
{
    public function index()
    {
        $images = Images::all();
        $images->map(function($image) {
            $image->image_url = 'http://127.0.0.1:9000/lgtm-generator/' . $image->image_url;
        });

        return response()->json($images);
    }

    public function store(Request $request)
    {
        $post = Images::create([
            'image_url' => $request->image_url,
        ]);

        return response()->json($post, 201);
    }
}

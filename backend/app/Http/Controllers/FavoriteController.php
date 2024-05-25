<?php

namespace App\Http\Controllers;
use App\Models\User;
use App\Models\Favorite;
use Illuminate\Support\Facades\Log;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class FavoriteController extends Controller
{
    public function store(Request $request)
    {
        $request_user_id = $request->user_id;
        $request_image_id = $request->image_id;

        // ユーザーIDを受け取ってユーザーTABLEに保存
        $post = User::create([
            'user_id' => $request->user_id,
        ]);

        $db_user_id = DB::table('user')->where('user_id', '=', $request_user_id)->value('id');

        // ユーザーTABLEから割り振られたIDと画像IDを受け取ってお気に入りTABLEに保存
        $post = Favorite::create([
            'user_id' => $db_user_id,
            'image_id' => $request_image_id,
        ]);

        return response()->json($post, 201);
    }
}

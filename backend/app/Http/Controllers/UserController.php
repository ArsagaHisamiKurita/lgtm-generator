<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Log;

class UserController extends Controller
{
    public function store(Request $request)
    {
        // 既に登録されているユーザーIDの場合は何もしない
        $db_user = DB::table('user')->where('user_id', '=', $request->user_id)->value('id');

        if ($db_user) {
            return response()->json([
                'message' => 'User already exists',
            ], 200);
        }
        else {
            $post = User::create([
                'user_id' => $request->user_id,
            ]);
            return response()->json($post, 201);
        }
    }
}

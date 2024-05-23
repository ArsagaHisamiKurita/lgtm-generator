<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;

class FileController extends Controller
{
    public function upload(Request $request)
    {
        // // リクエストからファイルを取得
        // $base64 = $request->file('image');

        // // BASE64データをデコードしてファイル形式に変換
        // $formatData = base64_decode($base64);
        // error_log($formatData);

        $localImagePath = storage_path('app/public/test.jpg');
        $file = new \Illuminate\Http\File($localImagePath);

        // ファイルをS3に保存
        $path = Storage::disk('s3')->putFile('/', $file, 'public');

        return response()->json($path);
    }
}

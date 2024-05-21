<?php

namespace App\Http\Controllers;

class ExampleListController extends Controller
{
    public function index()
    {
        return response()->json(
            [
                'content' => [
                    [
                        'id' => 1,
                        'name' => 'Example 1'
                    ],
                    [
                        'id' => 2,
                        'name' => 'Example 2'
                    ],

                ],
            ],
            200,
            [],
            JSON_UNESCAPED_UNICODE
        );
    }
}

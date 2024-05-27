<?php

namespace App\Repositories;

use App\Models\Images;
use Illuminate\Support\Collection;

class ImagesRepository
{
    public static function findAllImage(): ?Collection
    {
        $images = Images::orderBy('id', 'desc')->get();

        return $images;
    }

    public static function findImageById($image_id)
    {
        $image = Images::whereIn('id', $image_id)
                    ->orderByRaw("FIELD(id, " . implode(',', $image_id->toArray()) . ")") // creaated_atを保持したままにするための処理
                    ->get();

        return $image;
    }
}

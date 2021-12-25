<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Tag_Movie extends Model
{
    use HasFactory;

    protected $fillable = ['tag_id', 'movie_id'];

    protected $table = 'tags_movies';
}

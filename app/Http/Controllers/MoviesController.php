<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Movie;
use App\Models\Tag_Movie;
use App\Models\Tag;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Facades\Storage;

class MoviesController extends Controller
{
    public function __construct()
    {
        $this->middleware('auth:api');
    }

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        return Movie::with(['tagsmovies', 'tagsmovies.tag'])->orderBy('name', $request->order)->get();
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $validator = $this->validar($request->all());
        if ($validator->fails()) {
            return response()->json($validator->errors()->toJson(), 400);
        }

        $movie = Movie::create($request->all());

        Storage::disk('movies')->put($movie->id . $request->file, $request->movie);

        // Tags existentes das enviadas
        $tags = Tag::whereIn('name', $request->tags)->get();

        foreach ($request->tags as $tag) {
            // Verificar se tag existe
            $tagExist = $tags->first(function ($value, $key) use ($tag) {
                return $value == $tag;
            });
            if ($tagExist == null) {
                // Adicionar nova tag
                $tagExist = new Tag;
                $tagExist->name = $tag;
                $tagExist->save();
            }
            // Adicionar relação tag com movies
            $tag_movie = new Tag_Movie;
            $tag_movie->movie_id = $movie->id;
            $tag_movie->tag_id = $tagExist->id;
            $tag_movie->save();
        }
        return $movie->load(['tagsmovies', 'tagsmovies.tag']);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Movie $movie)
    {
        $validator = $this->validar($request->all());
        if ($validator->fails()) {
            return response()->json($validator->errors()->toJson(), 400);
        }
        $movie->update($request->all());
        return $movie->load(['tagsmovies', 'tagsmovies.tag']);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy(Movie $movie)
    {
        Storage::disk('movies')->delete($movie->id . $movie->file);
        Tag_Movie::where('movie_id', '=', $movie->id)->delete();
        $movie->delete();
    }

    public function validar($request)
    {
        return Validator::make($request, [
            'name' => 'required|string',
            'file' => 'required|string',
            'size' => 'required|alpha_num'
        ]);
    }
}

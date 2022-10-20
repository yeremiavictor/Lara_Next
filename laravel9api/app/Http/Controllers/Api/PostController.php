<?php

namespace App\Http\Controllers\Api;

use App\Models\Post;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Http\Resources\PostResource;
use Illuminate\Support\Facades\Validator;

class PostController extends Controller
{
    //
    /**
     * index
     * 
     * @return void
     */

     public function index(){
        //get posts
        $posts = Post::latest()->paginate(5);

        //return collection of posts as a resource
        return new PostResource(true, 'List Data Postss', $posts);
     }

     /**
      * store
      * @param mixed $request
      * @return void
     */

      public function store(Request $request)
      {
         //define validation rules
         $validator = Validator::make($request->all(), [
            'image' => 'required|image|mimes:jpeg,png,jpg,gif,svg|max:2048',
            'title' => 'required',
            'content' => 'required',
         ]);

         //check if validation fails
         if($validator->fails()) {
            return response()->json($validator->errors(), 422);
         }

         //upload image
         $image = $request->file('image');
         $image->storeAs('public/posts', $image->hashName());

         //create post
         $post = Post::create([
            'image' => $image->hashname(),
            'title' => $request->title,
            'content' => $request->content,
         ]);

         //return response
         return new PostResource(true, 'Data Post Berhasil Ditambahkan', $post);

      }
      /**
       * 
       * @param mixed $post
       * return void
       */
      public function show(Post $post)
      {
         //return single post as a resource
         return new PostResource(true, 'Data Post Ditemukan', $post);
      }
}
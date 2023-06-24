<?php

namespace App\Http\Controllers;

use App\Models\Post;
use App\Models\User;
use App\Models\Comentario;
use Illuminate\Http\Request;

class ComentarioController extends Controller
{
    public function store(Request $request, User $user, Post $post)
    {
        $this->validate($request, [
            'comentario' => 'required|max:255'
        ]);

        $comentario = new Comentario;
        $comentario->comentario = $request->comentario;
        $comentario->post_id = $post->id;
        $comentario->user_id = auth()->user()->id;
        $comentario->save();

        return back()->with('mensaje', 'Comentario agregado exitosamente');
    }
}
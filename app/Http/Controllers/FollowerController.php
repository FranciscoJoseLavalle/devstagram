<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;

class FollowerController extends Controller
{
    public function store(User $user, Request $request)
    {
        $user->followers()->attach(auth()->user()->id);

        return back();
    }
    public function destroy(User $user, Request $request)
    {
        $user->followers()->detach(auth()->user()->id);

        return back();
    }
}
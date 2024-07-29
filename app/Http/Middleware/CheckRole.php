<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;

class CheckRole
{
    /**
     * Handle an incoming request.
     *
     * @param  \Closure(\Illuminate\Http\Request): (\Symfony\Component\HttpFoundation\Response)  $next
     */
    public function handle(Request $request, Closure $next , $role )   {
        //$user = $request->user();
        $user = $request->user()->load('roles');

        if (! $user->roles->contains('name', $role)) {
            abort(403);
        }

        return $next($request);
    }
}

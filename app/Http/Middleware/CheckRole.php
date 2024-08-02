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
    public function handle(Request $request, Closure $next , ...$roles )   {
        //$user = $request->user();
        $user = $request->user()->load('roles');
        $userRoles = $user->roles->pluck('name')->toArray();
        if (!array_intersect($roles, $userRoles)) {
            abort(403);
        }

        return $next($request);
    }
}

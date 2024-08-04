<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Illuminate\Support\Str;
use Symfony\Component\HttpFoundation\Response;

class CheckRole
{
    /**
     * Handle an incoming request.
     *
     * @param  \Closure(\Illuminate\Http\Request): (\Symfony\Component\HttpFoundation\Response)  $next
     */
    public function handle(Request $request, Closure $next , ...$roles )   {

        $user = $request->user()->load('roles');

        $userRoles = $user->roles->pluck('name')->toArray();

        if (!array_intersect($roles, $userRoles)) {
            abort(403);
        }

        foreach ($userRoles as $userRole){
            if($userRole != 'admin') {
                $request->user()->load(Str::plural($userRole));
            }
        }

        return $next($request);
    }
}

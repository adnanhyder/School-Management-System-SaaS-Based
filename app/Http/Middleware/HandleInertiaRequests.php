<?php

namespace App\Http\Middleware;

use Illuminate\Http\Request;
use Inertia\Middleware;

class HandleInertiaRequests extends Middleware
{
    /**
     * The root template that is loaded on the first page visit.
     *
     * @var string
     */
    protected $rootView = 'app';

    /**
     * Determine the current asset version.
     */
    public function version(Request $request): string|null
    {
        return parent::version($request);
    }

    /**
     * Define the props that are shared by default.
     *
     * @return array<string, mixed>
     */
    public function share(Request $request): array
    {
        $default = [
        ];
        $key = 0;
        if($request->user()){
            $default = $request->user()->getDefault();
            if($default != null) {
                $key = $default->id;
            }
        }
        return [
            ...parent::share($request),
            'auth' => [
                'user' => $request->user(),
                'default' => $default,
                'key' =>  urlencode(base64_encode(100 + $key)),
            ],
        ];
    }
}

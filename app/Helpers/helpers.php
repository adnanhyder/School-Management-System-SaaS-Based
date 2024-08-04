<?php

use Illuminate\Support\Facades\Config;

if (! function_exists('school_prefix')) {
    function school_prefix()
    {
        return Config::get('constants.db.school');
    }
}

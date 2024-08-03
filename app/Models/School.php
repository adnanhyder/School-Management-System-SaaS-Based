<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class School extends Model
{
    use HasFactory;

    protected $fillable = [ 'name' ,'address' , 'phone' , 'created_by' ];


    public function users()
    {
        return $this->belongsToMany(User::class, 'school_user');
    }



}

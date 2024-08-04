<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\Config;

class School extends Model
{
    use HasFactory;

    protected $fillable = [ 'name' ,'address' , 'phone' , 'created_by' ];
    protected $table;

    public function __construct(array $attributes = [])
    {
        parent::__construct($attributes);
        $this->table = school_prefix().'schools';
    }
    public function users()
    {
        return $this->belongsToMany(User::class, school_prefix().'school_user');
    }




}

<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Tattendance extends Model
{
    use HasFactory;
    protected $fillable = ['teacher_id', 'session_id', 'date', 'school_id','status'];


    public function teacher()
    {
        return $this->belongsTo(Teacher::class, 'teacher_id');
    }


    public function sessions()
    {
        return $this->belongsTo(Sessions::class, 'session_id');
    }

}

<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Attendance extends Model
{
    use HasFactory;
    protected $fillable = ['student_id', 'class_id', 'session_id', 'date', 'school_id','status'];


    public function student()
    {
        return $this->belongsTo(Student::class, 'student_id');
    }

    public function classes()
    {
        return $this->belongsTo(Classes::class, 'class_id');
    }

    public function sessions()
    {
        return $this->belongsTo(Sessions::class, 'session_id');
    }

}

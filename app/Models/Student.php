<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\Config;
use Illuminate\Support\Str;
class Student extends Model
{
    use HasFactory;
    public function __construct(array $attributes = [])
    {
        parent::__construct($attributes);
        $this->table = school_prefix().'students';
    }


    protected $fillable = [
        'student_id',
        'school_id',
        'session_id',
        'name',
        'email',
        'phone',
        'gender',
        'blood_group',
        'city',
        'address',
        'dob',
        'roll_number',
        'parent_name',
        'parent_phone',
        'parent_email',
        'admission_date',
        'allergies',
        'medical_conditions',
        'emergency_contact_name',
        'emergency_contact_phone',
        'previous_school',
        'previous_grade',
        'sports',
        'profile_picture',
        'status',
        'class_id',
        'notes'
    ];

    protected static function boot()
    {
        parent::boot();

        static::creating(function ($student) {
            $student->student_id = 'S' . Str::uuid(); // Custom student ID generation
        });
    }

}

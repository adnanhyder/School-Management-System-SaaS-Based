<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Str;
class Student extends Model
{
    use HasFactory;
    protected $fillable = [
        'student_id',
        'school_id',
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

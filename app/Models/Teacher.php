<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Teacher extends Model
{
    use HasFactory;

    public function __construct(array $attributes = [])
    {
        parent::__construct($attributes);
        $this->table = school_prefix() . 'teachers';
    }

    protected $fillable = [
        'name',
        'email',
        'phone',
        'gender',
        'dob', // Date of Birth
        'city',
        'address',
        'employee_id', // Unique ID for the teacher
        'department', // Department or subject area
        'designation', // Job title (e.g., "Professor", "Lecturer")
        'qualification', // Educational qualifications (e.g., "M.Sc., Ph.D.")
        'experience', // Years of teaching experience
        'subjects_taught', // List of subjects the teacher teaches
        'joining_date', // Date of joining the institution
        'emergency_name',
        'emergency_phone',
        'allergies',
        'medical_conditions',
        'notes', // Any additional notes or comments
        'image',
        'school_id'
    ];

}

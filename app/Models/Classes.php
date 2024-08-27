<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Classes extends Model
{
    use HasFactory;

    protected $fillable = ['name', 'section', 'school_id'];
    protected $table;

    public function __construct(array $attributes = [])
    {
        parent::__construct($attributes);
        $this->table = school_prefix().'classes';
    }

    public function fee()
    {
        return $this->hasMany(Fees::class, 'class_id');
    }
    public function attendances()
    {
        return $this->hasMany(Attendance::class, 'class_id');
    }
}

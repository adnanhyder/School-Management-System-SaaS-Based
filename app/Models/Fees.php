<?php

namespace App\Models;

use Carbon\Carbon;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Fees extends Model
{
    use HasFactory;
    public function __construct(array $attributes = [])
    {
        parent::__construct($attributes);
        $this->table = school_prefix().'fees';
    }

    protected $fillable = [
        'student_id', 'school_id', 'class_id', 'session_id', 'amount', 'due_date', 'status'
    ];

    public function markAsPaid()
    {
        $this->update(['status' => 'paid']);
    }

    public function markAsOverdue()
    {
        if ($this->due_date < Carbon::now()) {
            $this->update(['status' => 'overdue']);
        }
    }
}

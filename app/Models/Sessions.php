<?php

namespace App\Models;

use App\Http\Controllers\FeesController;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Sessions extends Model
{
    use HasFactory;
    protected $fillable = [
        'school_id',
        'name',
        'start_date',
        'end_date',
        ];
    protected $table;

    public function __construct(array $attributes = [])
    {
        parent::__construct($attributes);
        $this->table = school_prefix().'sessions';
    }
    public function fees()
    {
        return $this->hasMany(FeesController::class);
    }
}

<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create(school_prefix().'fees', function (Blueprint $table) {
            $table->id();
            $table->integer('student_id'); // Foreign key to students table
            $table->integer('session_id'); // Foreign key to sessions table
            $table->decimal('amount', 10, 2); // Fee amount
            $table->boolean('paid')->default(false); // Payment status
            $table->foreignId('school_id')->constrained(school_prefix().'schools')->onDelete('cascade');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists(school_prefix().'fees');
    }
};

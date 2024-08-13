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
        Schema::create(school_prefix().'teachers', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->foreignId('school_id')->constrained(school_prefix().'schools')->onDelete('cascade');
            $table->string('email')->unique();
            $table->string('phone')->nullable();
            $table->string('gender')->nullable();
            $table->date('dob')->nullable(); // Date of Birth
            $table->string('city')->nullable();
            $table->string('address')->nullable();

            $table->string('employee_id')->unique();
            $table->string('department')->nullable();
            $table->string('designation')->nullable();
            $table->string('qualification')->nullable();
            $table->text('experience')->nullable(); // Years of teaching experience
            $table->text('subjects_taught')->nullable(); // List of subjects (can be stored as JSON or a long string)
            $table->date('joining_date')->nullable();

            $table->string('emergency_name')->nullable();
            $table->string('emergency_phone')->nullable();
            $table->text('medical_conditions')->nullable();
            $table->text('notes')->nullable(); // Any additional notes or comments
            $table->string('image')->nullable();

            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists(school_prefix().'teachers');
    }
};

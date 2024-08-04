<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Config;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{

    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create(school_prefix().'students', function (Blueprint $table) {
            $table->id();
            $table->string('student_id')->unique(); // Unique student ID
            $table->integer('roll_number')->nullable();
            $table->foreignId('school_id')->constrained(school_prefix().'schools')->onDelete('cascade');
            $table->string('name');
            $table->string('email')->unique();
            $table->string('phone')->nullable();
            $table->string('gender')->nullable();
            $table->string('blood_group')->nullable();
            $table->string('city')->nullable();
            $table->string('address')->nullable();
            $table->date('dob')->nullable();
            $table->string('parent_name')->nullable();
            $table->string('parent_phone')->nullable();
            $table->string('parent_email')->nullable();
            $table->date('admission_date')->nullable();
            $table->string('allergies')->nullable();
            $table->string('medical_conditions')->nullable();
            $table->string('emergency_contact_name')->nullable();
            $table->string('emergency_contact_phone')->nullable();
            $table->string('previous_school')->nullable();
            $table->string('previous_grade')->nullable();
            $table->string('sports')->nullable();
            $table->string('profile_picture')->nullable();
            $table->string('status')->default('active'); // Default to active
            $table->text('notes')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('students');
    }
};

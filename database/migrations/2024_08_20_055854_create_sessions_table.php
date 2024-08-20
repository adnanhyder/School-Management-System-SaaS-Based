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
        Schema::create(school_prefix().'sessions', function (Blueprint $table) {
            $table->id();
            $table->string('name'); // e.g., '2024-2025 Academic Year'
            $table->date('start_date');
            $table->date('end_date');
            $table->foreignId('school_id')->constrained(school_prefix().'schools')->onDelete('cascade');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists(school_prefix().'sessions');
    }
};

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
            $table->unsignedBigInteger('student_id');
            $table->unsignedBigInteger('school_id');
            $table->unsignedBigInteger('class_id');
            $table->unsignedBigInteger('session_id');
            $table->decimal('amount', 10, 2);
            $table->integer('month');
            $table->string('status')->default('pending');
            $table->string('received_by')->default('')->nullable();
            $table->unsignedBigInteger('tid')->default(0);
            $table->timestamps();
            $table->json('additional');
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

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
        Schema::table(school_prefix().'students', function (Blueprint $table) {
            $table->integer('class_id')->nullable();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table(school_prefix().'school_user', function (Blueprint $table) {
            $table->dropColumn('class_id');
        });
    }
};

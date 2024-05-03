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
        Schema::create('conference_details', function (Blueprint $table) {
            $table->id();
            $table->integer('user_id');
            $table->string('conference_category');
            $table->string('name_of_conference');
            $table->string('conference_theme');
            $table->string('from_date');
            $table->string('to_date');
            $table->string('name_of_venue');
            $table->string('address_of_venue');
            $table->string('city');
            $table->string('country');
            $table->string('name_of_organizer');
            $table->string('contact_person');
            $table->string('contact_number');
            $table->string('website');
            $table->string('email');
            $table->integer('status')->default(0);  
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('conference_details');
    }
};

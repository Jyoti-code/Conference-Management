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
        Schema::create('delegates', function (Blueprint $table) {
            $table->id();
            $table->integer('user_id');
            $table->integer('conf_id');
            $table->string('del_reg_no');
            $table->string('delegate_category');
            $table->string('title');
            $table->string('mobile_country_code');
            $table->string('mobile', 55);
            $table->string('gender');
            $table->string('dob');
            $table->string('designation');
            $table->string('affiliation');
            $table->string('city');
            $table->string('country');
            $table->string('address_for_correspondence');
            $table->string('office_telephone_country_code');
            $table->string('office_telephone',55);
            $table->string('residence_telephone_country_code');
            $table->string('residence_telephone',55);
            $table->string('website');
            $table->string('profile_image');
            $table->integer('status')->default(0);          
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('delegates');
    }
};

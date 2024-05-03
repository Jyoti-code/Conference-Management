<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Organizer extends Model
{
    use HasFactory;

        protected $fillable = [
        'user_id',
        'city',
        'state',
        'country',
        'name_of_organization',
        'contact_person',
        'contact_number',
        'address',
        'gst'
    ];
}

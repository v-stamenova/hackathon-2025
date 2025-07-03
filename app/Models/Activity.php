<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Activity extends Model
{
    protected $fillable = ['profession_id', 'user_id', 'is_liked', 'time_spent', 'seen_at'];

    public function profession() {
        return $this->belongsTo(Profession::class);
    }

    public function user() {
        return $this->belongsTo(User::class);
    }
}

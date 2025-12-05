<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class RoomType extends Model
{
    use HasFactory;

    protected $fillable = [
        'name',
        'slug',
        'description',
        'base_price',
        'max_occupancy',
        'amenities',
    ];

    protected $casts = [
        'base_price' => 'decimal:2',
        'max_occupancy' => 'integer',
        'amenities' => 'array',
    ];

    public function rooms()
    {
        return $this->hasMany(Room::class);
    }

    public function images()
    {
        return $this->hasMany(RoomImage::class);
    }
}

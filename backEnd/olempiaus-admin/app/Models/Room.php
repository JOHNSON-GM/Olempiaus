<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Room extends Model
{
    use HasFactory;

    protected $fillable = [
        'room_type_id',
        'room_number',
        'floor',
        'status',
        'price_per_night',
        'description',
        'image',
        'amenities',
    ];

    protected $casts = [
        'price_per_night' => 'decimal:2',
        'floor' => 'integer',
        'amenities' => 'array',
    ];

    public function roomType()
    {
        return $this->belongsTo(RoomType::class);
    }

    public function bookingItems()
    {
        return $this->hasMany(BookingItem::class);
    }
}

<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class BookingItem extends Model
{
    use HasFactory;

    protected $fillable = [
        'booking_id',
        'room_id',
        'quantity',
        'price_per_night',
        'nights',
        'subtotal',
    ];

    protected $casts = [
        'quantity' => 'integer',
        'nights' => 'integer',
        'price_per_night' => 'decimal:2',
        'subtotal' => 'decimal:2',
    ];

    public function booking()
    {
        return $this->belongsTo(Booking::class);
    }

    public function room()
    {
        return $this->belongsTo(Room::class);
    }
}

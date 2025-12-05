<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Booking extends Model
{
    use HasFactory;

    protected $fillable = [
        'user_id',
        'check_in_date',
        'check_out_date',
        'total_amount',
        'status',
        'special_requests',
    ];

    protected $casts = [
        'check_in_date' => 'date',
        'check_out_date' => 'date',
        'total_amount' => 'decimal:2',
    ];

    public function user()
    {
        return $this->belongsTo(User::class);
    }

    public function bookingItems()
    {
        return $this->hasMany(BookingItem::class);
    }

    public function payment()
    {
        return $this->hasOne(Payment::class);
    }
}

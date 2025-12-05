<?php

namespace App\Filament\Resources\BookingItems\Pages;

use App\Filament\Resources\BookingItems\BookingItemResource;
use Filament\Resources\Pages\CreateRecord;

class CreateBookingItem extends CreateRecord
{
    protected static string $resource = BookingItemResource::class;
}

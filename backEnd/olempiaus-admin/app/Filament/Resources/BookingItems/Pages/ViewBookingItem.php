<?php

namespace App\Filament\Resources\BookingItems\Pages;

use App\Filament\Resources\BookingItems\BookingItemResource;
use Filament\Actions\EditAction;
use Filament\Resources\Pages\ViewRecord;

class ViewBookingItem extends ViewRecord
{
    protected static string $resource = BookingItemResource::class;

    protected function getHeaderActions(): array
    {
        return [
            EditAction::make(),
        ];
    }
}

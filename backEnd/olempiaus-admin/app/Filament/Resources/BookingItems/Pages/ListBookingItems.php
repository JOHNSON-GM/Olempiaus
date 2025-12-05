<?php

namespace App\Filament\Resources\BookingItems\Pages;

use App\Filament\Resources\BookingItems\BookingItemResource;
use Filament\Actions\CreateAction;
use Filament\Resources\Pages\ListRecords;

class ListBookingItems extends ListRecords
{
    protected static string $resource = BookingItemResource::class;

    protected function getHeaderActions(): array
    {
        return [
            CreateAction::make(),
        ];
    }
}

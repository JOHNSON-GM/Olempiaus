<?php

namespace App\Filament\Resources\BookingItems\Pages;

use App\Filament\Resources\BookingItems\BookingItemResource;
use Filament\Actions\DeleteAction;
use Filament\Actions\ViewAction;
use Filament\Resources\Pages\EditRecord;

class EditBookingItem extends EditRecord
{
    protected static string $resource = BookingItemResource::class;

    protected function getHeaderActions(): array
    {
        return [
            ViewAction::make(),
            DeleteAction::make(),
        ];
    }
}

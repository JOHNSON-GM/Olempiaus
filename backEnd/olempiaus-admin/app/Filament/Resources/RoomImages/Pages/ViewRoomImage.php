<?php

namespace App\Filament\Resources\RoomImages\Pages;

use App\Filament\Resources\RoomImages\RoomImageResource;
use Filament\Actions\EditAction;
use Filament\Resources\Pages\ViewRecord;

class ViewRoomImage extends ViewRecord
{
    protected static string $resource = RoomImageResource::class;

    protected function getHeaderActions(): array
    {
        return [
            EditAction::make(),
        ];
    }
}

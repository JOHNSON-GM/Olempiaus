<?php

namespace App\Filament\Resources\RoomImages\Pages;

use App\Filament\Resources\RoomImages\RoomImageResource;
use Filament\Actions\CreateAction;
use Filament\Resources\Pages\ListRecords;

class ListRoomImages extends ListRecords
{
    protected static string $resource = RoomImageResource::class;

    protected function getHeaderActions(): array
    {
        return [
            CreateAction::make(),
        ];
    }
}

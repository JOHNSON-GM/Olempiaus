<?php

namespace App\Filament\Resources\Rooms\Schemas;

use Filament\Forms\Components\Select;
use Filament\Forms\Components\TextInput;
use Filament\Forms\Components\Textarea;
use Filament\Schemas\Schema;

class RoomForm
{
    public static function configure(Schema $schema): Schema
    {
        return $schema
            ->components([
                TextInput::make('room_number')
                    ->required(),
                TextInput::make('type_id')
                    ->required()
                    ->numeric(),
                TextInput::make('price_per_night')
                    ->required()
                    ->numeric(),
                Select::make('status')
                    ->options(['available' => 'Available', 'unavailable' => 'Unavailable', 'maintenance' => 'Maintenance'])
                    ->default('available')
                    ->required(),
                Textarea::make('description')
                    ->columnSpanFull(),
            ]);
    }
}

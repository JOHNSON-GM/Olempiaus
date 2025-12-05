<?php

namespace App\Filament\Resources\BookingItems\Schemas;

use Filament\Forms\Components\TextInput;
use Filament\Schemas\Schema;

class BookingItemForm
{
    public static function configure(Schema $schema): Schema
    {
        return $schema
            ->components([
                TextInput::make('booking_id')
                    ->required()
                    ->numeric(),
                TextInput::make('room_id')
                    ->required()
                    ->numeric(),
                TextInput::make('price_per_night')
                    ->required()
                    ->numeric(),
                TextInput::make('nights')
                    ->required()
                    ->numeric(),
                TextInput::make('subtotal')
                    ->required()
                    ->numeric(),
            ]);
    }
}

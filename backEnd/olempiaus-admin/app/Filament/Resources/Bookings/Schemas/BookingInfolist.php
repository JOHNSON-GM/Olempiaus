<?php

namespace App\Filament\Resources\Bookings\Schemas;

use Filament\Infolists\Components\TextEntry;
use Filament\Schemas\Schema;

class BookingInfolist
{
    public static function configure(Schema $schema): Schema
    {
        return $schema
            ->components([
                TextEntry::make('guest_name'),
                TextEntry::make('guest_email'),
                TextEntry::make('guest_phone'),
                TextEntry::make('check_in_date')
                    ->date(),
                TextEntry::make('check_out_date')
                    ->date(),
                TextEntry::make('status')
                    ->badge()
                    ->placeholder('-'),
                TextEntry::make('total_amount')
                    ->numeric(),
                TextEntry::make('created_at')
                    ->dateTime()
                    ->placeholder('-'),
                TextEntry::make('updated_at')
                    ->dateTime()
                    ->placeholder('-'),
            ]);
    }
}

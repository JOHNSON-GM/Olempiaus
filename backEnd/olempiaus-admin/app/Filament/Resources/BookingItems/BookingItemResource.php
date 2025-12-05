<?php

namespace App\Filament\Resources\BookingItems;

use App\Filament\Resources\BookingItems\Pages\CreateBookingItem;
use App\Filament\Resources\BookingItems\Pages\EditBookingItem;
use App\Filament\Resources\BookingItems\Pages\ListBookingItems;
use App\Filament\Resources\BookingItems\Pages\ViewBookingItem;
use App\Filament\Resources\BookingItems\Schemas\BookingItemForm;
use App\Filament\Resources\BookingItems\Schemas\BookingItemInfolist;
use App\Filament\Resources\BookingItems\Tables\BookingItemsTable;
use App\Models\BookingItem;
use BackedEnum;
use Filament\Resources\Resource;
use Filament\Schemas\Schema;
use Filament\Support\Icons\Heroicon;
use Filament\Tables\Table;

class BookingItemResource extends Resource
{
    protected static ?string $model = BookingItem::class;

    protected static string|BackedEnum|null $navigationIcon = Heroicon::OutlinedRectangleStack;

    public static function form(Schema $schema): Schema
    {
        return BookingItemForm::configure($schema);
    }

    public static function infolist(Schema $schema): Schema
    {
        return BookingItemInfolist::configure($schema);
    }

    public static function table(Table $table): Table
    {
        return BookingItemsTable::configure($table);
    }

    public static function getRelations(): array
    {
        return [
            //
        ];
    }

    public static function getPages(): array
    {
        return [
            'index' => ListBookingItems::route('/'),
            'create' => CreateBookingItem::route('/create'),
            'view' => ViewBookingItem::route('/{record}'),
            'edit' => EditBookingItem::route('/{record}/edit'),
        ];
    }
}

<?php

namespace App\Filament\Resources\RoomImages;

use App\Filament\Resources\RoomImages\Pages\CreateRoomImage;
use App\Filament\Resources\RoomImages\Pages\EditRoomImage;
use App\Filament\Resources\RoomImages\Pages\ListRoomImages;
use App\Filament\Resources\RoomImages\Pages\ViewRoomImage;
use App\Filament\Resources\RoomImages\Schemas\RoomImageForm;
use App\Filament\Resources\RoomImages\Schemas\RoomImageInfolist;
use App\Filament\Resources\RoomImages\Tables\RoomImagesTable;
use App\Models\RoomImage;
use App\Enums\NavigationGroup;
use BackedEnum;
use Filament\Resources\Resource;
use Filament\Schemas\Schema;
use Filament\Support\Icons\Heroicon;
use Filament\Tables\Table;

class RoomImageResource extends Resource
{
    protected static ?string $model = RoomImage::class;

    protected static string | \UnitEnum | null $navigationGroup = NavigationGroup::SiteManagement;

    public static function form(Schema $schema): Schema
    {
        return RoomImageForm::configure($schema);
    }

    public static function infolist(Schema $schema): Schema
    {
        return RoomImageInfolist::configure($schema);
    }

    public static function table(Table $table): Table
    {
        return RoomImagesTable::configure($table);
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
            'index' => ListRoomImages::route('/'),
            'create' => CreateRoomImage::route('/create'),
            'view' => ViewRoomImage::route('/{record}'),
            'edit' => EditRoomImage::route('/{record}/edit'),
        ];
    }
}

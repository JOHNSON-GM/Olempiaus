<?php

namespace App\Filament\Resources\Banners\Schemas;

use Filament\Forms\Components\FileUpload;
use Filament\Forms\Components\Select;
use Filament\Forms\Components\TextInput;
use Filament\Forms\Components\Textarea;
use Filament\Schemas\Schema;

class BannerForm
{
    public static function configure(Schema $schema): Schema
    {
        return $schema
            ->components([
                TextInput::make('title'),
                Textarea::make('description')
                    ->columnSpanFull(),
                FileUpload::make('image_path')
                    ->image()
                    ->required(),
                TextInput::make('link_url')
                    ->url(),
                TextInput::make('position')
                    ->numeric()
                    ->default(0),
                Select::make('status')
                    ->options(['visible' => 'Visible', 'hidden' => 'Hidden'])
                    ->default('visible'),
            ]);
    }
}

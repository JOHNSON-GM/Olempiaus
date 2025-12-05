<?php
namespace App\Enums;

use Filament\Support\Contracts\HasLabel;
use Filament\Support\Contracts\HasIcon;

enum NavigationGroup: string implements HasLabel, HasIcon
{
    case SiteManagement = 'site_management';
    case UserManagement = 'user_management';

    public function getLabel(): ?string
    {
        return match ($this) {
            self::SiteManagement => 'Site Management',
            self::UserManagement => 'User & Roles',
        };
    }

    public function getIcon(): ?string
    {
        return match ($this) {
            self::SiteManagement => 'heroicon-o-globe-alt',
            self::UserManagement => 'heroicon-o-users',
        };
    }
}
?>

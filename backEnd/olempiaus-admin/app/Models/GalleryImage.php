<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class GalleryImage extends Model
{
    use HasFactory;

    protected $fillable = [
        'category_id',
        'title',
        'description',
        'image_url',
        'order',
        'is_featured',
    ];

    protected $casts = [
        'order' => 'integer',
        'is_featured' => 'boolean',
    ];

    public function category()
    {
        return $this->belongsTo(GalleryCategory::class, 'category_id');
    }
}

<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class TaskFile extends Model
{
    use HasFactory;
    protected $table = 'tbl_task_files';
    protected $fillable = [
        'task_id','file','user_id'
    ];
    public $timestamps = true;

}

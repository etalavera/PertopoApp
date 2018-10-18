<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Roles extends Model
{
    //
    public function users()
    {
        return $this->belongsToMany('App\Users', 'roles_users', 'users_id', 'roles_id');
    }
}

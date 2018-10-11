<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Staff extends Model
{
    //
    public function roles()
    {
        return $this->belongsToMany('App\Roles', 'roles_staff', 'staff_id', 'roles_id');
    }
}

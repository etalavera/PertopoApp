<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Roles extends Model
{
    //
    public function staff()
    {
        return $this->belongsToMany('App\Staff', 'roles_staff', 'staff_id', 'roles_id');
    }
}

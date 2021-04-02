<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Corcel\Model\Meta\UserMeta as Corcel;

class CorcelUserMeta extends Corcel
{
	protected $table = "usermeta";
	public $timestamps = false;
}
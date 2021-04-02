<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Corcel\Model\Meta\PostMeta as Corcel;

class CorcelPostMeta extends Corcel
{
	protected $table = "postmeta";
	public $timestamps = false;
}
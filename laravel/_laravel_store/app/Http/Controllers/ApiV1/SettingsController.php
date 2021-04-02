<?php

namespace App\Http\Controllers\ApiV1;

use App\LojaSettings;
use App\Http\Controllers\Controller;

class SettingsController extends Controller
{

	function obterLojaSettings() {
		$data = LojaSettings::where('ativo', '=', '1')->get();
		return response()->json($data);
	}
	
}

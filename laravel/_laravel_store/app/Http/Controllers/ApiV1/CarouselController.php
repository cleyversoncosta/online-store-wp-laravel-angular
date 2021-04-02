<?php

namespace App\Http\Controllers\ApiV1;

use App\HeaderCarousel;
use App\Http\Controllers\Controller;

class CarouselController extends Controller
{

	function carouselMobile() {
		$data = HeaderCarousel::where('tipo', '=', 'mobile')->where('ativo', '=', '1')->get();
		
		return response()->json($data);
	}
	
	function carouselDesktop() {
		$data = HeaderCarousel::where('tipo', '=', 'desktop')->where('ativo', '=', '1')->get();
		
		return response()->json($data);
	}
}

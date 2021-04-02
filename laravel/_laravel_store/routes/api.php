<?php

Route::group(['prefix' => 'v1'], function () use ($router) {

	Route::get('loja/settings', 'ApiV1\SettingsController@obterLojaSettings');

	Route::group(['prefix' => 'carousel'], function () {
		Route::get('mobile', 'ApiV1\CarouselController@carouselMobile');
		Route::get('desktop', 'ApiV1\CarouselController@carouselDesktop');
	});

	Route::get('top-bar/show', 'ApiV1\Controller@obterShowTopBar');

	Route::resource('produtos', 'ApiV1\ProductController');

	Route::resource('clientes', 'ApiV1\ClientController');

	Route::group(['prefix' => 'finalizar-compra'], function () {
		Route::get('esvalizar-lista-produtos', 'ApiV1\Controller@emptyLineItems');
		Route::post('capturar-pagamento', 'ApiV1\Controller@capturePayment');
		Route::put('confirmar/{id}', 'ApiV1\Controller@setAsPaid');

		Route::resource('/', 'ApiV1\CheckoutController');
	});

	Route::post('newsletter/mautic', 'ApiV1\Controller@addMauticLead');
	Route::resource('newsletter', 'ApiV1\NewsletterController');


	
/*
	function cepDadosCorreio(Request $request) {
		$cep = $request->input('cep');
		return \Correios::cep($cep);
	}
	
	function emptyLineItems($orderID) {
		$data = Woocommerce::get('orders/'.$orderID);
		
		foreach ($data['line_items'] as $key => $item) {
			$data['line_items'][$key]['quantity'] = 0;
		}
		
		Woocommerce::post('orders/'.$orderID, $data);	
	}
	

	

	/*
	
	Route::get('frete-gratis-min-limit', 'ApiV1\Controller@obterFreteGratisMinLimit');
	Route::get('tipo-frete-disponivel', 'ApiV1\Controller@obterTipoFreteDisponivel');
	Route::get('parcelamento-disponivel', 'ApiV1\Controller@obterParcelamentoDisponiel');
	Route::get('cupom-habilitado', 'ApiV1\Controller@obterCupomHabilitado');
	Route::get('cupom-valido-codigo', 'ApiV1\Controller@obterCupomValidoCodigo');
	Route::get('cupom-valido-desconto', 'ApiV1\Controller@obterCupomValidoDesconto');


	Route::get('correios/cep-dados', 'ApiV1\Controller@cepDadosCorreio');
	*/
});

/*
Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});
*/
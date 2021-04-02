<?php

namespace App\Http\Controllers\ApiV1;

use Woocommerce;
use App\Http\Controllers\Controller;

class CheckoutController extends Controller
{


    
	function show($orderID) {
		
		$res = Woocommerce::get('orders/'.$orderID);		
		
		return response()->json($res);

	}		

    /*
	function update(Request $request, $orderID) {
		$param = $request->input('data');
		
		$data = [
			'payment_method' => 'credit_card',
			'payment_method_title' => 'Cartão de Crédito',
			'set_paid' => true,
		];
		
		$res = Woocommerce::post('orders/'.$orderID, $data);		
		
		return response()->json($res['id']);

	}	
    */


	function create(Request $request) {

		$param = $request->input('data');

		$billing = $param['billingShipping']['billing'];
		$shipping = $param['billingShipping']['shipping'];
				
		$lineItems = [];
		foreach ($param['lineItems'] as $key => $li) {
			$lineItems[$key]['product_id'] = $li['id'];
			$lineItems[$key]['quantity'] = 1;
		}
			
		$data = [
			'customer_id' => $param['customerID'],
			'set_paid' => false,
			'billing' => [
				'first_name' => $billing['billing_first_name'],
				'last_name' => '',
				'company' => '',
				'address_1' => $billing['billing_address_1'],
				'address_2' => $billing['billing_address_2'],
				'city' => $billing['billing_city'],
				'state' => $billing['billing_state'],
				'postcode' => $billing['billing_postcode'],
				'country' => 'BR',
				'email' => $billing['billing_email'],
				
				'phone' => $billing['billing_phone'],
			],
			'shipping' => [
				'first_name' => $shipping['shipping_first_name'],
				'last_name' => '',
				'company' => '',
				'address_1' => $shipping['shipping_address_1'].', '.$shipping['shipping_number'],
				'address_2' => $shipping['shipping_address_2'].', '.$shipping['shipping_neighborhood'],
				'city' => $shipping['shipping_city'],
				'state' => $shipping['shipping_state'],
				'postcode' => $shipping['shipping_postcode'],
				'country' => 'BR',
			],
			'line_items' => $lineItems
		];
		
		if (strlen($param['cuponCode']) > 0) {
			$data['coupon_lines'] = [
				["code" => $param['cuponCode']]
			];
		}
		
		$res = Woocommerce::post('orders', $data);	
		

		$userMeta = [
			'_billing_cpf' => $billing['billing_cpf'],
			'_billing_number' => $billing['billing_number'],
			'_billing_cellphone' => $billing['billing_phone'],
			'_billing_birthdate' => $billing['billing_birthdate'],
			'_billing_neighborhood' => $billing['billing_neighborhood'],
			'_billing_persontype' => '',
			'_billing_sex' => '',
			'_billing_rg' => '',
			'_shipping_number' => '',
			'_shipping_neighborhood' => '',
		];
		
		foreach ($userMeta as $key => $value) {
			$pm = new CorcelPostMeta;
			$pm->post_id = $res['id'];
			$pm->meta_key = $key;
			$pm->meta_value = $value;
			$pm->save();
		}		
		return response()->json($res['id']);
	}

    
	function setAsPaid(Request $request, $orderID) {
		
		$data = [
			'payment_method' => 'credit_card',
			'payment_method_title' => 'Cartão de Crédito',
			'set_paid' => true,
		];
		
		$res = Woocommerce::post('orders/'.$orderID, $data);		
		
		return response()->json($res);

	}		

    
	
	function capturePayment(Request $request) {
		
		$api_string = LojaSettings::where('tipo', '=', 'pagarme-encryption-key')->where('ativo', '=', 1)->get()->first()->valor;
		
		$api_key = 'ak_live_eyXrVJmwSxylpJDQ8L8clMAqZs4haz';
		
		if (Str::contains($api_string, 'ek_test')) {
			$api_key = 'ak_test_cbeyAAupakjoOLhfa3MlA3ydrKnXlN';
		}
		
		$pagarme = new \PagarMe\Client($api_key);
		$capturedTransaction = $pagarme->transactions()->capture([
			'id' => $request->input('token'),
			'amount' => $request->input('valor')
		]);	
		
		$res['status'] = 'success';
		return response()->json($res); 

	}
	
}

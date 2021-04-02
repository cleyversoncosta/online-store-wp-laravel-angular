<?php

namespace App\Http\Controllers\ApiV1;

use Woocommerce;
use App\Http\Controllers\Controller;

class ClientController extends Controller
{


    function show($id)
    {

        $res = Woocommerce::get('customers/' . $id);

        return response()->json($res);
    }



    function create(Request $request)
    {

        $param = $request->input('data');

        $billing = $param['billingShipping']['billing'];
        $shipping = $param['billingShipping']['shipping'];

        $cliente = CorcelUser::where('user_email', '=', $billing['billing_email'])->get();

        if ($cliente->count() > 0) {

            $res['status'] = 'success';
            $res['info'] = 'exist';
            $res['data'] = Woocommerce::get('customers/' . $cliente->first()->ID);

            return response()->json($res);
        } else {
            $data = [
                'email' => $billing['billing_email'],
                'first_name' => $billing['billing_first_name'],
                'last_name' => '',
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
                    'address_1' => $shipping['shipping_address_1'] . ', ' . $shipping['shipping_number'],
                    'address_2' => $shipping['shipping_address_2'] . ', ' . $shipping['shipping_neighborhood'],
                    'city' => $shipping['shipping_city'],
                    'state' => $shipping['shipping_state'],
                    'postcode' => $shipping['shipping_postcode'],
                    'country' => 'BR',
                ]
            ];

            $nCliente = Woocommerce::post('customers', $data);

            $userMeta = [
                'billing_cpf' => $billing['billing_cpf'],
                'billing_number' => $billing['billing_number'],
                'billing_cellphone' => $billing['billing_phone'],
                'billing_birthdate' => $billing['billing_birthdate'],
                'billing_neighborhood' => $billing['billing_neighborhood'],
                'billing_persontype' => '',
                'billing_sex' => ''
            ];

            foreach ($userMeta as $key => $value) {
                $um = new CorcelUserMeta;
                $um->user_id = $nCliente['id'];
                $um->meta_key = $key;
                $um->meta_value = $value;
                $um->save();
            }

            $res['status'] = 'success';
            $res['info'] = 'new';
            $res['data'] = Woocommerce::get('customers/' . $nCliente['id']);

            return response()->json($res);
        }
    }
}

<?php

namespace App\Http\Controllers\ApiV1;

use Woocommerce;
use App\Http\Controllers\Controller;

class ProductController extends Controller
{

	
	public function index()
	{
		$produtos = Woocommerce::get('products', ['status' => 'publish']);

		foreach ($produtos as $key => $produto) {

			$produtos[$key]['new_collection'] = 0;
			$produtos[$key]['subtitle'] = "";

			foreach ($produto['attributes'] as $attributes) {
				if ($attributes['name'] === 'new-collection') {
					$produtos[$key]['new_collection'] = (int) $attributes['options'][0];
				}
			}

			foreach ($produto['meta_data'] as $meta_data) {
				if ($meta_data['key'] === 'wc_ps_subtitle') {
					$produtos[$key]['subtitle'] = $meta_data['value'];
				}
			}
		}

		return response()->json($produtos);
	}

	public function show($id)
	{
		$produto = Woocommerce::get('products/' . $id, ['status' => 'publish']);

		$produto['new_collection'] = 0;
		$produto['subtitle'] = "";

		foreach ($produto['attributes'] as $attributes) {
			if ($attributes['name'] === 'new-collection') {
				$produto['new_collection'] = (int) $attributes['options'][0];
			}
		}

		foreach ($produto['meta_data'] as $meta_data) {
			if ($meta_data['key'] === 'wc_ps_subtitle') {
				$produto['subtitle'] = $meta_data['value'];
			}
		}

		return response()->json($produto);
	}

	public function create(Request $request)
	{
	}

	public function update(Request $request, $id)
	{
	}

	public function destroy($id)
	{
	}
}

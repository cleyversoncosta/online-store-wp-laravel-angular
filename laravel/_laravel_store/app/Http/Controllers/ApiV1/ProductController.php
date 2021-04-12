<?php

namespace App\Http\Controllers\ApiV1;

use Woocommerce;
use App\Http\Controllers\Controller;

class ProductController extends Controller
{

    private $only_product = array('id', 'name', 'slug', 'description', 'price', 'regular_price', 'sale_price', 'images', 'categories');
    private $only_product_image = array('id', 'name', 'src');

    public function index()
    {

        $produtos_arr = [];

        foreach (Woocommerce::get('products', ['status' => 'publish']) as $keyA => $produto) {

            $produtos_arr[$keyA] = \Arr::except(\Arr::only($produto, $this->only_product), ['description']);

            $images = [];

            foreach ($produto['images'] as $keyB => $image) {

                if (count($produto['images']) == 1) {
                    $images[] = \Arr::only($image, $this->only_product_image);
                }

                $images[] = \Arr::only($image, $this->only_product_image);
            }

            $produtos_arr[$keyA]['images'] = $images;

        }

        return response()->json($produtos_arr);
    }

    public function show($id)
    {

        $produto = Woocommerce::get('products/' . $id, ['status' => 'publish']);

        $images = [];
        foreach ($produto['images'] as $keyB => $image) {

            if (count($produto['images']) == 1) {
                $images[] = \Arr::only($image, $this->only_product_image);
            }

            $images[] = \Arr::only($image, $this->only_product_image);
        }

        $produto['images'] = $images;

		return response()->json(\Arr::only($produto, $this->only_product));
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

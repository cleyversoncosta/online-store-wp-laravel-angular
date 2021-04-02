<?php

namespace App\Http\Controllers\ApiV1;

use Woocommerce;
use App\Http\Controllers\Controller;

class NewsletterController extends Controller
{

	function create(Request $request)
	{
		$data = new Newsletter();
		$data->firstname = $request->input('firstname');
		$data->email = $request->input('email');
		$data->save();

		return $this->addMauticLead($request);
	}


	function addMauticLead(Request $request)
	{

		$userName = 'userName';
		$password = 'password';

		$settings = array(
			'userName'   => $userName,             // Create a new user       
			'password'   => $password              // Make it a secure password
		);

		// Initiate the auth object specifying to use BasicAuth
		$initAuth = new ApiAuth();
		$auth = $initAuth->newAuth($settings, 'BasicAuth');


		// Add contact
		$contactApi = \Mautic\MauticApi::getContext(
			"contacts",
			$auth,
			'https://dominio.com.br/mautic/api/'
		);

		$contact = $contactApi->create(array(
			'ipAddress' => $_SERVER['REMOTE_ADDR'],
			'firstname' => $request->input('firstname'),
			//'lastname'  => $request->input('lastname'),
			'email'     => $request->input('email'),
		));

		// Add contact to segment

		$segmentId = $request->input('segment');
		$contactId = $contact['contact']['id'];

		$segmentApi = \Mautic\MauticApi::getContext(
			"segments",
			$auth,
			'https://dominio.com.br/mautic/api/'
		);

		$response = $segmentApi->addContact($segmentId, $contactId);

		$res['status'] = 'success';
		if (!isset($response['success'])) {
			$res['status'] = 'error';
		}

		return response()->json($res);
	}
}

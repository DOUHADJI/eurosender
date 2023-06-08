<?php

namespace App\Http\Controllers;

use App\Models\Country;
use Illuminate\Http\Request;

class CountryController extends Controller
{
    public function store(Request $request)
    {

    }

    public function get_country_list()
    {
        $countries_brut = Country::all()/* ->pluck("name")->get() */;
        $countries =[];

        foreach ($countries_brut as $country) {
            array_push($countries, [
                "value" => $country->name,
                "label" => $country->name

            ]);
        }

        return response()->json([
            "status" =>"success",
            "data" => [
                "countries" => $countries
            ]
        ]);
    }
}

<?php
namespace App\Apis;

use GuzzleHttp\Client;
use GuzzleHttp\Exception\RequestException;

//api.openweathermap.org/data/2.5/forecast/daily?q={city name}&cnt={cnt}&appid={API key}

class WeatherApi
{
    protected $client;
    protected $key;
    public function __construct()
    {
        $this->key = config('services.weatherapi.key');
        $this->client = new Client([
          'base_uri' => 'http://api.weatherapi.com/v1/',
        ]);
    }


    public function getByCity(String $city, Int $days = 3)
    {
        try {
            $response = $this->client->get("forecast.json?q=$city&days=$days&key=$this->key");
            return  \GuzzleHttp\json_decode($response->getBody()->getContents(), true);
        } catch (RequestException $e) {
            throw $e;
        }
    }
}

<?php

namespace App\GraphQL\Queries;

use App\Apis\WeatherApi;
use Illuminate\Support\Facades\Cache;

class Forecast
{
    private $api;

    public function __construct(WeatherApi $api)
    {
        $this->api = $api;
    }

    /**
     * @param  null  $_
     * @param  array<string, mixed>  $args
     */
    public function __invoke($_, array $args)
    {
        $city = $args['city'];

        $data = Cache::remember($city, 60 * 60 * 24, function () use ($city) {
            return $this->api->getByCity($city);
        });

        return $data;
    }
}

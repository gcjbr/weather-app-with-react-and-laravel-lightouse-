import { gql } from "@apollo/client";

export const FORECAST_BY_CITY = gql`
    query Forecast($city: String!) {
        forecast(city: $city) {
            location {
                name
                country
                lon
                lat
            }
            current {
                last_updated
                temp_c
                temp_f
                wind_kph
                humidity
                condition {
                    text
                    icon
                }
            }
            forecast {
                forecastday {
                    date
                    day {
                        maxtemp_f
                        maxtemp_c
                        mintemp_c
                        mintemp_f
                        avgtemp_c
                        avgtemp_f
                        daily_will_it_rain
                        daily_chance_of_rain
                        daily_will_it_snow
                        daily_chance_of_snow
                        avghumidity
                        maxwind_kph
                        condition {
                            text
                            icon
                        }
                    }
                    hour {
                        time
                        temp_c
                        temp_f
                        is_day
                        condition {
                            text
                            icon
                        }
                    }
                }
            }
        }
    }
`;

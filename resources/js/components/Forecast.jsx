import React, { useContext, useState, useEffect } from "react";
import styled from "styled-components";
import { appContext } from "../context/index.js";
import ForecastDay from "./ForecastDay.jsx";
import Hour from "./Hour.jsx";

const ForecastWrapper = styled.section`
    margin-top: 3rem;
`;

const ForecastInsideWrapper = styled.div`
    display: grid;
    grid-gap: 30px;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
`;

const ForecastTitle = styled.h2`
    font-size: 1.8rem;
    font-weight: 200;
    margin-bottom: 2rem;

    strong {
        font-weight: 800;
    }
`;
export default function Forecast() {
    const { state } = useContext(appContext);
    const [selected, setSelected] = useState("");
    const forecast = state.forecast;
    let currentHours = null;

    useEffect(() => {
        if (forecast && selected === "") {
            setSelected(forecast.forecast.forecastday[0].date);
        }
    }, [forecast]);

    if (forecast && selected) {
        currentHours = forecast.forecast.forecastday.find(
            (days) => days.date === selected
        );
    }

    return (
        <ForecastWrapper>
            {forecast && (
                <>
                    <ForecastTitle>
                        Forecast for <strong>{forecast.location.name}</strong>
                    </ForecastTitle>
                    <ForecastInsideWrapper>
                        <div>
                            {forecast.forecast.forecastday.map(
                                (forecastday, key) => (
                                    <ForecastDay
                                        key={forecastday.date}
                                        forecastday={forecastday}
                                        temp={state.temp}
                                        selected={selected === forecastday.date}
                                        setSelected={setSelected}
                                    />
                                )
                            )}
                        </div>
                        <div>
                            {currentHours &&
                                currentHours.hour.map((hour) => (
                                    <Hour
                                        key={hour.time}
                                        hour={hour}
                                        temp={state.temp}
                                    />
                                ))}
                        </div>
                    </ForecastInsideWrapper>
                </>
            )}
        </ForecastWrapper>
    );
}

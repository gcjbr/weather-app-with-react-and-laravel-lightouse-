import React from "react";
import styled from "styled-components";

const DayWrapper = styled.div`
    display: grid;
    margin-bottom: 2rem;
    grid-gap: 20px;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    padding: 10px;
    border-radius: 20px;
    border: ${(props) =>
        props.selected
            ? `solid 1px ${props.theme.bg.accent}`
            : "solid 1px #eee;"};
    cursor: pointer;
`;

const CurrentHeader = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
`;

const CurrentBody = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    margin-top: 1rem;
    justify-items: center;
`;

const DayTitle = styled.h4`
    font-size: 1.2rem;
    font-weight: 400;
`;
const DayDescription = styled.p`
    font-size: 1rem;
    font-weight: 200;
`;
const Icon = styled.img`
    width: 40px;
    height: 40px;
    align-self: start;
    justify-self: end;
`;

const Temperature = styled.p`
    font-size: 1.2rem;

    strong {
        font-weight: 800;
    }
`;

export default function ForecastDay({
    forecastday,
    temp,
    selected,
    setSelected,
}) {
    const weekday = new Array(7);
    weekday[0] = "Sunday";
    weekday[1] = "Monday";
    weekday[2] = "Tuesday";
    weekday[3] = "Wednesday";
    weekday[4] = "Thursday";
    weekday[5] = "Friday";
    weekday[6] = "Saturday";

    const date = new Date();
    const dateString = new Date(
        date.getTime() - date.getTimezoneOffset() * 60000
    )
        .toISOString()
        .split("T")[0];

    const title =
        forecastday.date === dateString
            ? "Today"
            : weekday[new Date(forecastday.date).getDay()];

    const tempMaxKey = temp.symbol === "C°" ? "maxtemp_c" : "maxtemp_f";
    const tempMinKey = temp.symbol === "C°" ? "mintemp_c" : "mintemp_f";
    const tempAvgKey = temp.symbol === "C°" ? "avgtemp_c" : "avgtemp_f";
    return (
        <DayWrapper
            selected={selected}
            onClick={() => setSelected(forecastday.date)}
        >
            <CurrentHeader>
                <div>
                    <DayTitle>{title}</DayTitle>
                    <DayDescription>
                        {forecastday.day.condition.text}
                    </DayDescription>
                </div>
                <Icon src={forecastday.day.condition.icon}></Icon>
            </CurrentHeader>
            <CurrentBody>
                <Temperature>
                    min{" "}
                    <strong>
                        {forecastday.day[tempMinKey]} {temp.symbol}
                    </strong>
                </Temperature>
                <Temperature>
                    max{" "}
                    <strong>
                        {forecastday.day[tempMaxKey]} {temp.symbol}
                    </strong>
                </Temperature>
            </CurrentBody>
        </DayWrapper>
    );
}

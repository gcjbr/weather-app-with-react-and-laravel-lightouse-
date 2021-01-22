import React from "react";
import styled from "styled-components";

const HourWrapper = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(2, 1fr);
    padding: 10px;
    border: solid 1px #eee;
    border-radius: 20px;
    margin-bottom: 20px;
    grid-gap: 10px;
`;

const HourTime = styled.div`
    grid-row-end: span 2;
    color: #aaa;
`;
const HourTemp = styled.div`
    grid-row-end: span 2;
    justify-self: center;
    align-self: center;
    font-weight: 800;
    font-size: 1rem;
`;

const Icon = styled.img`
    width: 40px;
    height: 40px;
    align-self: end;
    justify-self: end;
`;

const HourDescription = styled.p`
    font-size: 0.8rem;
    text-align: right;
`;

export default function Hour({ hour, temp }) {
    return (
        <HourWrapper>
            <HourTime>{hour.time.substr(-5)}</HourTime>
            <HourTemp>
                {hour[temp.key]} {temp.symbol}
            </HourTemp>
            <Icon src={hour.condition.icon} alt={hour.condition.text} />
            <HourDescription>{hour.condition.text}</HourDescription>
        </HourWrapper>
    );
}

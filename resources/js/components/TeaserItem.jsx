import React, { useContext } from "react";
import styled from "styled-components";
import { useQuery } from "@apollo/client";
import { FORECAST_BY_CITY } from "../graphql/queries.js";
import { appContext } from "../context/index.js";

const ItemWrapper = styled.div`
    position: relative;
    display: grid;
    background-image: url(${({ imageName }) => imageName});
    height: 250px;
    padding: 20px;
    grid-template-columns: 2fr 1fr;

    @media (max-width: 500px) {
        height: 160px;
    }

    &::before {
        content: "";
        position: absolute;
        top: 0px;
        right: 0px;
        bottom: 0px;
        left: 0px;
        background-color: rgba(255, 255, 255, 0.85);
    }
`;

const ItemName = styled.h3`
    position: relative;
    text-transform: uppercase;
    color: #000;
    font-size: 1.2rem;
    font-weight: 800;
`;
const ItemCountry = styled.p`
    position: relative;
    color: #000;
    font-size: 1rem;
    font-weight: 400;
    justify-self: end;
`;

const ItemTemp = styled.h2`
    position: relative;
    color: #000;
    font-size: 2.4rem;
    font-weight: 400;
    align-self: start;
`;

export default function TeaserItem({ city }) {
    const imageName = city.toLowerCase().replace(" ", "_");
    const { state } = useContext(appContext);

    const { loading, error, data } = useQuery(FORECAST_BY_CITY, {
        variables: {
            city,
        },
    });

    if (loading) {
        return <></>;
    }

    return (
        <ItemWrapper imageName={`img/cities/${imageName}.jpg`}>
            <ItemName>{city}</ItemName>
            <>
                <ItemCountry>{data.forecast.location.country}</ItemCountry>
                <ItemTemp>
                    {data.forecast.current[state.temp.key]} {state.temp.symbol}
                </ItemTemp>
            </>
        </ItemWrapper>
    );
}

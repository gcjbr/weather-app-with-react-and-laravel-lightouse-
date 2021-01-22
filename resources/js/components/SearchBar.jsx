import React, { useState, useEffect, useContext } from "react";
import { useLazyQuery } from "@apollo/client";
import styled from "styled-components";
import { FORECAST_BY_CITY } from "../graphql/queries.js";
import { appContext } from "../context/index.js";

const SearchBox = styled.input`
    border: 0;
    font-size: 1.4rem;
    padding: 14px;
    background-color: #f0f0f0;
    box-shadow: 0 1px 3px rgba(26, 27, 27, 0.12),
        0 1px 2px rgba(32, 33, 34, 0.05);
    border-radius: 30px;
`;
const SearchWrapper = styled.section`
    display: grid;
    grid-gap: 20px;
    justify-content: center;
`;

const ErrorBox = styled.div`
    display: ${(props) => (!props.error ? "none" : "block")};
    margin: 10x 0;
    padding: 20px;
    background-color: #ffe3e5;
    strong {
        font-weight: 800;
    }
`;
export default function SearchBar() {
    const { dispatch } = useContext(appContext);
    const [city, setCity] = useState("");
    const [isError, setError] = useState(false);
    const [getCity, { loading, error, data }] = useLazyQuery(FORECAST_BY_CITY);

    const handleKeydown = (e) => {
        setError(false);
        if (e.key === "Enter" && city !== "") {
            getCity({
                variables: {
                    city,
                },
            });
        }
    };

    useEffect(() => {
        if (error) {
            setError(true);
        }
        if (data) {
            setCity("");
            dispatch({ type: "SET_FORECAST", payload: data.forecast });
        }
    }, [data, error]);

    return (
        <SearchWrapper>
            <SearchBox
                type="text"
                placeholder="Search for a city"
                onKeyDown={handleKeydown}
                onChange={(e) => setCity(e.target.value)}
                value={city}
                disabled={loading}
            />
            <ErrorBox error={isError}>
                <strong>Error:</strong> no data for <strong>{city}</strong>{" "}
                could be found{" "}
            </ErrorBox>
        </SearchWrapper>
    );
}

import React, { useContext } from "react";
import styled from "styled-components";
import SearchBar from "./SearchBar";
import { appContext } from "../context/index.js";

const HeaderWrapper = styled.header`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    grid-gap: 14px;
    margin-bottom: 2rem;
`;

const Title = styled.h1`
    color: ${(props) => props.theme.text.accent};
    font-size: 2rem;
    font-weight: 400;
    strong {
        font-weight: 800;
    }
`;

const TempWrapper = styled.div`
    justify-self: end;
`;
const TempButton = styled.button`
    padding: 6px;
    border-radius: 50%;
    margin-left: 10px;
    cursor: pointer;
    color: ${(props) => props.theme.text.primary};
    background-color: ${(props) => props.theme.bg.default};
    border: 1px solid #aaa;

    &:disabled {
        border: none;
        color: ${(props) => props.theme.text.reversed};
        background-color: ${(props) => props.theme.bg.accent};
        cursor: auto;
    }
`;

export default function Header() {
    const { state, dispatch } = useContext(appContext);
    return (
        <HeaderWrapper>
            <Title>
                <strong>Weather</strong> app
            </Title>
            <SearchBar />
            <TempWrapper>
                <TempButton
                    disabled={state.temp.symbol === "C°"}
                    onClick={() => dispatch({ type: "TOGGLE_TEMP" })}
                >
                    C°
                </TempButton>
                <TempButton
                    disabled={state.temp.symbol === "F°"}
                    onClick={() => dispatch({ type: "TOGGLE_TEMP" })}
                >
                    F°
                </TempButton>
            </TempWrapper>
        </HeaderWrapper>
    );
}

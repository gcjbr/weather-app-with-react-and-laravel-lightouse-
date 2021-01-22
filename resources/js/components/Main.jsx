import React from "react";
import styled from "styled-components";
import Forecast from "./Forecast";
import Header from "./Header";
import Teasers from "./Teasers";

const Wrapper = styled.div`
    min-height: 100vh;
    min-width: 480px;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const Content = styled.main`
    width: 80%;
    background-color: ${(props) => props.theme.bg.default};
    padding: 15px;
    border-radius: 10px;
    box-shadow: 0 1px 3px rgba(26, 27, 27, 0.12),
        0 1px 2px rgba(32, 33, 34, 0.05);
`;

export default function Main() {
    return (
        <Wrapper>
            <Content>
                <Header />
                <Teasers />
                <Forecast />
            </Content>
        </Wrapper>
    );
}

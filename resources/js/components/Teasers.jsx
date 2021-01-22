import React from "react";
import styled from "styled-components";
import TeaserItem from "./TeaserItem";

const TeaserWrapper = styled.section`
    margin-top: 2rem;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
`;

export default function Teasers() {
    return (
        <TeaserWrapper>
            <TeaserItem city="New York" />
            <TeaserItem city="Cape Town" />
            <TeaserItem city="Buenos Aires" />
        </TeaserWrapper>
    );
}

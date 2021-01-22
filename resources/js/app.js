import React, { createContext } from "react";
import ReactDOM from "react-dom";
import { ApolloProvider, ApolloClient, InMemoryCache } from "@apollo/client";
import { ThemeProvider } from "styled-components";
import Main from "./components/Main";
import theme from "./theme";
import { StateProvider } from "./context/index";

const client = new ApolloClient({
    uri: process.env.MIX_GRAPHQL_ENDPOINT,
    cache: new InMemoryCache(),
});

ReactDOM.render(
    <StateProvider>
        <ApolloProvider client={client}>
            <ThemeProvider theme={theme}>
                <Main />
            </ThemeProvider>
        </ApolloProvider>
    </StateProvider>,
    document.getElementById("app")
);

import React, { createContext, useReducer } from "react";

const defaultTemp = window.localStorage.getItem("defaultTemp");

const initialState = {
    temp: {
        symbol: defaultTemp ? defaultTemp : "C°",
        key: "temp_c",
    },
    forecast: null,
};

const appContext = createContext(initialState);
const { Provider } = appContext;

const StateProvider = ({ children }) => {
    const [state, dispatch] = useReducer((state, action) => {
        switch (action.type) {
            case "TOGGLE_TEMP":
                if (state.temp.symbol === "C°") {
                    window.localStorage.setItem("defaultTemp", "F°");
                    return {
                        ...state,
                        temp: {
                            symbol: "F°",
                            key: "temp_f",
                        },
                    };
                } else {
                    window.localStorage.setItem("defaultTemp", "C°");
                    return {
                        ...state,
                        temp: {
                            symbol: "C°",
                            key: "temp_c",
                        },
                    };
                }
            case "SET_FORECAST":
                return { ...state, forecast: action.payload };
            default:
                return state;
        }
    }, initialState);

    return <Provider value={{ state, dispatch }}>{children}</Provider>;
};

export { appContext, StateProvider };

import React, { createContext, useContext, useReducer } from "react";

export const stateContext = createContext();

export const stateProvider = ({ reducer, initialState, children}) => (
    <stateContext.Provider value={usereducer( reducer)}
)
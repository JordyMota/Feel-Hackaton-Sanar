import * as React from "react";
import { StatusBar } from "react-native";
import { DefaultTheme, Provider as PaperProvider } from "react-native-paper";

import MainRoute from "../navigation";


const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: "#2ed573",
    accent: "yellow",
  },
};

export default function App(props) {
  return (
    // <Provider {...Store}>
      <PaperProvider theme={theme}>
        <StatusBar barStyle="light-content" />
        <MainRoute />
      </PaperProvider>
    // </Provider>
  );
}

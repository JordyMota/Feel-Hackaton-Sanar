import React from "react";
import { createBottomTabNavigator, createAppContainer } from "react-navigation";
import createAnimatedSwitchNavigator from "react-navigation-animated-switch";
import { Transition } from "react-native-reanimated";

import Home from "../screens/Home";
import Profile from "../screens/Profile";
import Phill from "../screens/Phill";
import Wellcome from "../screens/Wellcome";
import Login from "../screens/Login";

const MainAppFlow = createBottomTabNavigator(
  {
    Home,
    Phill,
    Profile,
  },
  {
    initialRouteName: "Home",
  },
);

const AuthOrApp = createAnimatedSwitchNavigator(
  {
    Login,
    Wellcome,
  },
  {
    initialRouteName: "Login",
    transition: (
      <Transition.Together>
        <Transition.Out type="slide-left" durationMs={200} interpolation="easeIn" />
        <Transition.In type="fade" durationMs={300} />
      </Transition.Together>
    ),
  },
);

export default createAppContainer(
  createAnimatedSwitchNavigator(
    {
      App: MainAppFlow,
      Auth: AuthOrApp,
    },
    {
      initialRouteName: "Auth",
      transition: (
        <Transition.Together>
          <Transition.Out type="slide-left" durationMs={200} interpolation="easeIn" />
          <Transition.In type="fade" durationMs={300} />
        </Transition.Together>
      ),
    },
  ),
); 

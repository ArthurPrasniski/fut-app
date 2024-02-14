import React from "react";
import { DefaultTheme, NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { SortTeam, Results, Home, OldGames } from './src/screens'

const Stack = createNativeStackNavigator();

const MyTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: "#282a36",
  },
};

export default function App() {
  return (
    <NavigationContainer theme={MyTheme}>
        <Stack.Navigator>
          <Stack.Screen
            name="home"
            component={Home}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="SortTeam"
            component={SortTeam}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="results"
            component={Results}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="OldGames"
            component={OldGames}
            options={{ headerShown: false }}
          />
        </Stack.Navigator>
    </NavigationContainer>
  );
}
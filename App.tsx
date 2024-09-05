import React from "react";
import { DefaultTheme, NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { CalendarDays, CalendarPlus, HomeIcon } from 'lucide-react-native';
import { SortTeam, Results, Home, OldGames, NewGame } from './src/screens'
import { GamePayments } from "./src/screens/game-payments";
import { PlayerPage } from "./src/screens/payer-page";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const MyTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: "#282a36",
  },
};

const TabStyle = {
  borderTopWidth: 0,
  backgroundColor: '#25272e',
}

const TabsIcons: any = {
  'Home': HomeIcon,
  'CreateGame': CalendarPlus,
  'OldGames': CalendarDays,
}

function HomeStackScreen() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="HomeScreen" component={Home} />
      <Stack.Screen name="GamePayments" component={GamePayments} />
      <Stack.Screen name="SortTeam" component={SortTeam} />
      <Stack.Screen name="Results" component={Results} />
    </Stack.Navigator>
  );
}

function NewGameStackScreen() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="NewGameScreen" component={NewGame} />
      <Stack.Screen name="SortTeam" component={SortTeam} />
      <Stack.Screen name="Results" component={Results} />
    </Stack.Navigator>
  );
}

function OldGamesStackScreen() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="OldGamesScreen" component={OldGames} />
      <Stack.Screen name="GamePayments" component={GamePayments} />
      <Stack.Screen name="SortTeam" component={SortTeam} />
      <Stack.Screen name="Results" component={Results} />
      <Stack.Screen name="PlayerPage" component={PlayerPage} />
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer theme={MyTheme}>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          headerShown: false,
          tabBarShowLabel: false,
          tabBarStyle: TabStyle,
          tabBarActiveTintColor: '#22c55e',
          tabBarInactiveTintColor: '#b3b3b3',
          tabBarIcon: ({ focused, color, size }) => {
            const Icon = TabsIcons[route.name];
            return <Icon size={size} color={color} />;
          },
        })}
      >
        <Tab.Screen name="Home" component={HomeStackScreen} />
        <Tab.Screen name="CreateGame" component={NewGameStackScreen} />
        <Tab.Screen name="OldGames" component={OldGamesStackScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

{/* <Stack.Navigator>
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
        <Stack.Screen
          name="GamePayments"
          component={GamePayments}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="NewGame"
          component={NewGame}
          options={{ headerShown: false }}
        />
      </Stack.Navigator> */}
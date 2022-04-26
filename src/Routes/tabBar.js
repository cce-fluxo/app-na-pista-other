import React from 'react';
import Home from '../Pages/Home'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {colors, screenHeight, screenWidth} from '../Constants/constants';
import { Entypo, MaterialIcons } from "@expo/vector-icons";


const Tab = createBottomTabNavigator();

export default function AppTab() {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      tabBarOptions={{
        style: {
          position: 'absolute',
          // height: screenHeight * 0.1,
          minHeight: 60,
        },
        showLabel: true,
        labelStyle: { fontSize: 12 },
      }}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarLabel: 'Início',
          tabBarIcon: ({ focused }) => (
            <Entypo
              name="home"
              size={30}
              color={focused ? colors.background : colors.inputTitle}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Atividades"
        component={Home}
        options={{
          tabBarLabel: 'Atividades',
          tabBarIcon: ({ focused }) => (
            <MaterialIcons
              name="list-alt"
              size={30}
              color={focused ? colors.background : colors.inputTitle}
            />
          ),
        }}
      />
        <Tab.Screen
            name="Resultados"
            component={Home}
            options={{
            tabBarLabel: 'Resultados',
            tabBarIcon: ({ focused }) => (
                <MaterialIcons
                name="bar-chart"
                size={30}
                color={focused ? colors.background : colors.inputTitle}
                />
            ),
            }}
        />

    </Tab.Navigator>
  );
}

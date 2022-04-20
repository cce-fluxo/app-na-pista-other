// import React from "react";
// import { createStackNavigator } from "@react-navigation/stack";
// import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
// import { Entypo, MaterialIcons } from "react-native-vector-icons";
// import Activities from "../Pages/Activities";
// import Results from "../Pages/Results";
// import { colors } from "../Constants/constants";
// import {Text} from './styles'

// const Stack = createStackNavigator();
// const StackNavigator = () => {
//   return (
//     <Stack.Navigator initialRouteName={"Início"} headerMode="none">
//       <Stack.Screen name="Home" component={Home} />
//     </Stack.Navigator>
//   );
// };

// const Tab = createBottomTabNavigator();

// const BottomTabNavigator = () => {
//   return (
//     <Tab.Navigator
//       tabBarOptions={{
//         style: {
//           height: 65,
//         },
//       }}
//       initialRouteName="Home"
//       screenOptions={({ route }) => ({
//         tabBarIcon: ({ focused }) => {
//           const icons = {
//             Inicio: "home",
//             Atividades: "list-alt",
//             Resultados: "bar-chart",
//           };
//           return (
//             <Entypo
//               name={icons[route.name]}
//               color={focues ? colors.background : colors.inputTitle}
//               style={{
//                   fontSize:20,
//                   opacity: focused? 1: 0.5,

//               }}
//             />
//           );
//         },
//         tabBarLabel:({focused}) => {
//             const labels = {
//                 Inicio: "Início",
//                 Atividades: "Atividades",
//                 Resultados: "Resultados",
//             };
//             return (
//                 <Text>{labels[route.name]}</Text>
//             )
//         }
//       })}
//     >
//       <Tab.Screen name="Início" component={Home} />
//       <Tab.Screen name="Atividades" component={Activities} />
//       <Tab.Screen name="Resultados" component={Results} />
//     </Tab.Navigator>
//   );
// };

// export default BottomTabNavigator;

import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"; // cria a navbar (tipo a parte debaixo do insta)
import { createNativeStackNavigator } from "@react-navigation/native-stack"; // faz aparecer sobre a tela a aba que selecionarmos
import { NavigationContainer } from "@react-navigation/native"; // controlador das navegações

// Aqui fazemos a importação das telas 
import HomeScreen from "../screens/HomeScreen";
import PlantListScreen from "../screens/PlantListScreen";
import CategoriesScreen from "../screens/CategoriesScreen";
import AddPlantScreen from "../screens/AddPlantScreen";

// Definimos as variaveis que vão recerber os atributos do Import
const Tab = createBottomTabNavigator()
const Stack = createNativeStackNavigator()

function TabRoutes() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Plantas" component={PlantListScreen} />
      <Tab.Screen name="Categorias" component={CategoriesScreen} />
    </Tab.Navigator>
  );
}

export default function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Tabs"
          component={TabRoutes}
          options={{ headerShown: false }}
        />
        <Stack.Screen name="Cadastro" component={AddPlantScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

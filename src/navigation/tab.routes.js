import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { Feather } from "@expo/vector-icons" //biblioteca de incones
import { Ionicons } from "@expo/vector-icons"; //biblioteca de incones

//importação das telas
import HomeScreen from "../screens/HomeScreen";
import PlantListScreen from "../screens/PlantListScreen";
import CategoriesScreen from "../screens/CategoriesScreen";

const Tab = createBottomTabNavigator()

export default function TabRoutes() {
    return (
        <Tab.Navigator>
            <Tab.Screen 
                name="Home" 
                component={HomeScreen} 
                options={{
                    tabBarIcon: ({color, size}) => <Feather name="home" color={color} size={size} />
                }}    
            />

            <Tab.Screen 
                name="Plantas" 
                component={PlantListScreen} 
                options={{
                    tabBarIcon: ({color, size}) => <Ionicons name="leaf" color={color} size={size} />
                }} 
            />

            <Tab.Screen 
                name="Categorias" 
                component={CategoriesScreen} 
                options={{
                    tabBarIcon: ({color, size}) => <Feather name="align-justify" color={color} size={size} />
                }} 
            />
        </Tab.Navigator>
    )
}
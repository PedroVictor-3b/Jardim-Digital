import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

//importação das telas
import HomeScreen from "../screens/HomeScreen";
import PlantListScreen from "../screens/PlantListScreen";
import CategoriesScreen from "../screens/CategoriesScreen";

const Tab = createBottomTabNavigator()

export default function TabRoutes(){
    return(
        <Tab.Navigator>
            <Tab.Screen name = "Home" component={HomeScreen}/>
            <Tab.Screen name = "Plantas" component={PlantListScreen}/>
            <Tab.Screen name = "Categorias" component={CategoriesScreen}/>
        </Tab.Navigator>
    )
}
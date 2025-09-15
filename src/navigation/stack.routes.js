import { createNativeStackNavigator } from "@react-navigation/native-stack";

import AddPlantScreen from "../screens/addPlant/AddPlantScreen";
import TabRoutes from "./tab.routes";

const Stack = createNativeStackNavigator()

export default function StackRoutes(){
    return(
        <Stack.Navigator>
            <Stack.Screen 
                name = "Tabs"
                component={TabRoutes}
                options={{ headerShown: false }} 
            />
                
            <Stack.Screen 
                name="AddPlant"
                component={AddPlantScreen}
            />   
        </Stack.Navigator>
    )
}




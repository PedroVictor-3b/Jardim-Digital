import { React } from "react";
import { View, Text } from "react-native";


export default function HomeScreen(){
//Declaração de variaveis estaticas, apenas para visualização de UI, depois faremos ela de forma dinâmica
const TotalPlantas = 12
const PlantasFloridas = 5

    return(
        
        <View> 
            <View>
                <Text>Minhas Plantas</Text>
            </View>

            <View>
                <Text>Total de Plantas: {TotalPlantas}</Text>
            </View>

            <View>
                <Text>Floridas: {PlantasFloridas}</Text>
            </View>

        </View>
    )
}
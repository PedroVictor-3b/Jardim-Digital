import { View, Text } from "react-native";
import { styles } from "./estiloHome";

export default function HomeScreen(){
//Declaração de variaveis estaticas, apenas para visualização de UI, depois faremos ela de forma dinâmica
const TotalPlantas = 12
const PlantasFloridas = 5

    return(
        
        <View style={styles.container}> 
            <View>
                <Text style={styles.titlle}>Minhas Plantas</Text>
                <Text style={styles.text}>Bem Vindo(a) ao Dashboard do seu Jardim!</Text>
            </View>

            <View style={styles.squareContainer}>
                <View style={styles.square}>
                    <Text style={styles.numberSquare}>{TotalPlantas}</Text>
                    <Text style={styles.textSquare}>Plantas Cadastradas</Text>
                </View>

                <View style={styles.square}>
                    <Text style={styles.numberSquare}>{PlantasFloridas}</Text>
                    <Text style={styles.textSquare}>Floridas</Text>
                </View>

            </View>

        </View>
    )
}

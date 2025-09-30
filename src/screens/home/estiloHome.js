import {StyleSheet} from 'react-native'

export const styles = StyleSheet.create({

    container:{
        flex:1,
        marginLeft:20,
        marginRight:20,
        marginTop:50,
    },

    titlle:{
        fontSize:30,
        fontWeight:'bold',
    },

    text:{
        fontSize:16,
        fontWeight:'500',
    },

    squareContainer:{
        flexDirection:'row',
        justifyContent:'space-between',
        marginTop:50,
        flexWrap: 'wrap',
        gap: 20, // Espaço entre os quadrados MAIS INTERESSANTE
    },

    square:{
        backgroundColor:'red',
        width: 150,      
        height: 150,     
        borderRadius:15,
        alignItems:'center',
        justifyContent:'center',
        elevation: 5, // Adiciona sombra para Android
        marginHorizontal: 5,
    },

    textSquare:{
        textAlign:'center',
        fontSize:20,
        fontWeight:'bold',
    },

    numberSquare:{
        fontSize:40,
    }


})
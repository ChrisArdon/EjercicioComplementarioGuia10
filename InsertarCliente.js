import React,{Component} from "react";
import {View, Text, StyleSheet} from 'react-native';
import {TextInput} from 'react-native-gesture-handler'; 

export default class InsertarCliente extends Component{
    render(){
        return(
            <View style={styles.ViewStyle}>
                <TextInput
                style={styles.txtStyle}
                placeholder={"Nombre y Apellido"}
                placeholderTextColor={"#64ee6f"}>                    
                </TextInput>

                <TextInput
                style={styles.txtStyle}
                placeholder={"Direccion Postal"}
                placeholderTextColor={"#64ee6f"}>                    
                </TextInput>

                <TextInput
                style={styles.txtStyle}
                placeholder={"Direccion del Trabajo"}
                placeholderTextColor={"#64ee6f"}>                    
                </TextInput>

                <TextInput
                style={styles.txtStyle}
                placeholder={"Telefono"}
                placeholderTextColor={"#64ee6f"}>                    
                </TextInput>

                <TextInput
                style={styles.txtStyle}
                placeholder={"Correo"}
                placeholderTextColor={"#64ee6f"}>                    
                </TextInput>

                <TextInput
                style={styles.txtStyle}
                placeholder={"Nivel Economico"}
                placeholderTextColor={"#64ee6f"}>                    
                </TextInput>

                <TextInput
                style={styles.txtStyle}
                placeholder={"Posibilidades de Compra"}
                placeholderTextColor={"#64ee6f"}>                    
                </TextInput>

                <TextInput
                style={styles.txtStyle}
                placeholder={"Intereses"}
                placeholderTextColor={"#64ee6f"}>                    
                </TextInput>
            </View>
        );
    }
}

const styles=StyleSheet.create({
    ViewStyle:{
        flex:1,
        padding:20,
        marginTop:10,
    },
});
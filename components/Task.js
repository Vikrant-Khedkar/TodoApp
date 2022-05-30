import react from "react";
import { StyleSheet, Text, View } from "react-native";
import { TouchableOpacity } from "react-native";
import { clickProps } from "react-native-web/dist/cjs/modules/forwardedProps";

const Task = (props) => {
    return (
        <View style={styles.item}>
            <View style={styles.itemLeft}>
               <View style={styles.square}>

               </View>
                <Text style={styles.itemText}>{props.text} </Text>

            </View>
            <View style={styles.circular}></View>


        </View>

    )

}
const styles = StyleSheet.create({
    item: {
        backgroundColor:'#FFF',
        padding:15,
        borderRadius:10,
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between',
        marginBottom:20,

    },
    itemLeft: {
        alignItems:'center',
        flexDirection:"row",
        flexWrap:'wrap',
    },
    square: {
        width:24,
        height:24,
        backgroundColor:'#A760FF',
        opacity:0.4,
        borderRadius:5,
        marginRight:15,
    },
    itemText: {
        maxWidth:'80%',
    },
    circular: {
        width:12,
        height:12,
        borderColor:'#FFCC8F4',
        borderWidth:1.5,
        borderRadius:5,
    },

});

export default Task;
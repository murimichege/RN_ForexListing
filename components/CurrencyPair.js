import React from 'react'
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

const CurrencyPair = ({instruments}) => {
    
    return(
        <TouchableOpacity style={styles.container} activeOpacity={0.7}>
            <Text style={styles.instrument}>
                {instruments.instrument}{''}
                <Text style={styles.candles}>{instruments.candles}</Text>
            </Text>
        </TouchableOpacity>
    );
} 
const styles = StyleSheet.create({
    container: {
        flex:1,
        alignItems: "center"
    },
    instrument: {

    },
     candles: {
         
     }

})

export default CurrencyPair
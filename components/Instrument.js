import React from 'react'
import {FlatList, View, Text, StyleSheet} from 'react-native'
import PropTypes from 'prop-types'


const Instrument = () => {

    keyExtractor = item => item.instrument
    renderItem = ({item}) => {
        const {instrument,closeoutAsk, closeoutBid} = item;
    
    return(
        <View>
            <View style={styles.cardCointaner}>
                <View style={{paddingRight:5}}>
                    <Text style={styles.cardText}>
                        {instrument}{"\n"}
                        </Text>
                        <Text style={styles.closeoutBid}>
                        {closeoutAsk}
                        </Text>
                        <Text style={styles.closeoutBid}>
                        {closeoutBid}
                        </Text>
                    </View>
                </View>
            </View>
        
        
    )
    }
    

Instrument.propTypes={
    currency :PropTypes.array
};
const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "#093339"
    },
    cardText: {
        textAlign: 'right',
        color: white
    }, 
    closeoutBid: {

    }

})
}

export default Instrument
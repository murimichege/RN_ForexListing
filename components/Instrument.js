import * as React from 'react'
import {StyleSheet } from 'react-native'

const Instrument = ({currency})=> {
    //const {name, type, displayName} = props;
   
    return(
            <TouchableOpacity style={styles.container} activeOpacity={0.7}>
            <Text style={styles.cardText}>
                {currency.instrument}
                </Text>
                <Text style={styles.closeoutAsk}>
                    {JSON.stringify(currency.candles.mid)}
                </Text>
                <Text>
                    {JSON.stringify(currency.candles.volume)}
                </Text>
                </TouchableOpacity>
        
    );
    }
    

    /*Instrument.propTypes = {
        instruments: PropTypes.arrayOf(PropTypes.shape({
        name: PropTypes.string.isRequired,
        type: PropTypes.string.isRequired,
        displayName: PropTypes.string.isRequired
            
        }))
    };

        Instrument.defaultProps = {
            instruments : []

        }
*/
const styles = StyleSheet.create({
    container: {
        flex:1


    },
    cardText: {
        color: "white",
        textAlign: 'right'
    },
    closeoutBid: {

    }, 
    container: {
      alignItems: "center",
      backgroundColor: "#093339",
      flex: 1,
      justifyContent: "center"
    }

})


export default Instrument
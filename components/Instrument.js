/* eslint-disable react-native/no-color-literals */
/* eslint-disable react-native/no-unused-styles */
// eslint-disable-next-line no-unused-vars
import React from 'react'
import {StyleSheet } from 'react-native'
import PropTypes from 'prop-types'

const Instrument = ({currency}) => {
   
  
    
    return(
            <TouchableOpacity>
                <Text>
            <Text style={styles.cardText}>
                {currency.name}
                </Text>
                <Text style={styles.closeoutAsk}>
                    {currency.type}
                </Text>
                <Text>
                    {currency.displayName}
                </Text>
                </Text>
                </TouchableOpacity>
        
    );
    }
    

    Instrument.propTypes = {
        instruments: PropTypes.arrayOf(PropTypes.shape({
            name: PropTypes.string.isRequired,
        type: PropTypes.string.isRequired,
        displayName: PropTypes.string.isRequired
            
        }))
    };

        Instrument.defaultProps = {
            instrument : []

        }

const styles = StyleSheet.create({
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
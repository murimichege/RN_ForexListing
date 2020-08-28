import   React, {useEffect} from 'react'
    import { FlatList, ActivityIndicator, View, Text, SafeAreaView} from 'react-native'
    import styles from './styles'
    import CurrencyPair from '../../../components/CurrencyPair'
    import {useSelector, useDispatch} from 'react-redux'
    import fetchCurrency from '../../Redux/Actions/currencyActions'
     function HomeScreen () { 
      
    const dispatch = useDispatch()

      useEffect(() => {
       fetchCurrency(dispatch)
      }, []);
      const {Pairs, loading, error} = useSelector(state => ({
        error: state.currencyReducer.error,
        Pairs: state.currencyReducer.Pairs,
        loading: state.currencyReducer.loading

      }))

      
      if (error){ 
      return (
      <Text>{error}</Text>
      )
    }
    else if (loading){
      return (<ActivityIndicator size='large' />)}
    else 
      return (
          <SafeAreaView
          style={styles.container}
        >
           <FlatList
              data={Pairs}
              numColumns={1}
              contentContainerStyle = {styles.list}
              keyExtractor  = {(item,index) => item.toLocaleString()}
              renderItem = {({item}) => (
                <CurrencyPair instruments = {item.instruments}   />
              )}
               

    />
    </SafeAreaView>
        );
      }
    
    export default HomeScreen

      


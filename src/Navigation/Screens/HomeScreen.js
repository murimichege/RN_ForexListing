import   React, {useEffect} from 'react'
    import { FlatList, ActivityIndicator, View, Text, SafeAreaView} from 'react-native'
    import Instrument from '../../../components/Instrument'
    import styles from './styles'
    import {useSelector, useDispatch} from 'react-redux'
    import fetchCurrency from '../../Redux/Actions/currencyActions'
    
     function HomeScreen () { 
      const dispatch = useDispatch()
    
      useEffect(() => {
       dispatch(fetchCurrency())
      }, []);
      const { instruments, loading, error} = useSelector(state => state.currenciesreducer
      );
      if (error) 
      return (<View><Text>{Error}</Text></View>)
    else if (loading)
      return (<ActivityIndicator size='large' />)
    else 
      return (
          <SafeAreaView
         
          style={styles.container}
        >
           <FlatList
              data={instruments}
              numColumns={1}
              contentContainerStyle = {styles.list}
              keyExtractor  = {({item}) => item.toString() }
              renderItem = {(item, index) => (
                <Instrument currency={item}  />
              )}
    />
    </SafeAreaView>
        );
      }
    
    export default HomeScreen
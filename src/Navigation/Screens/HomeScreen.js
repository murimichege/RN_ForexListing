// eslint-disable-next-line no-unused-vars
import  React, {useEffect} from 'react'
// eslint-disable-next-line no-unused-vars
import { FlatList, SafeAreaView, View, Text} from 'react-native'
// eslint-disable-next-line no-unused-vars
import Instrument from '../../../components/Instrument'
import styles from './styles'
import {useSelector, useDispatch} from 'react-redux'
import  fetchCurrency  from '../../Redux/Actions/currencyActions'


 const HomeScreen = () => { 
  const dispatch = useDispatch()

  useEffect(() => {
    fetchCurrency(dispatch)
  }, [])

  const {instruments, error, loading} = useSelector(state => state.forex)

{error &&
  <View><Text>Error</Text></View>
}
{loading && <ActivityIndicator size='large' />}


    return(
<FlatList
data={instruments}
numColumns={1}
contentContainerStyle={styles.list}
renderItem = {({item}) => (
    <Instrument  currency={item}/>
)}
// eslint-disable-next-line no-unused-vars
keyExtractor ={(index, item) => index.toString}
/>
  
    );
  }
export default HomeScreen
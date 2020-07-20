import React,  {useEffect} from 'react'
import {Text, View, Stylesheet, ScrollView, FlatList, RefreshControl, Show} from 'react-native'
import fetchCurrency from '../../Redux/Actions/currencyActions'
import { showMessage  } from 'react-native-flash-message'
import {useSelector } from 'react-redux'
import Instrument from '../../../components/Instrument'
import styles from './styles'
export default function HomeScreen(){
const dispatch = useDispatch();
useEffect(() => {
    fetchCurrency(dispatch)
}, [])
const {instruments, loading, error} = useSelector(state => state.instrument)

if(error){
  showMessage({
    message: "Error",
    description: error,
    type: danger,
    duration: 5000
  })
}
    return(
        <ScrollView
        refreshControl={
            <RefreshControl
              refreshing={refreshing}
              onRefresh={() => fetchCurrency(dispatch)}
            />
          }
          style={styles.container}
        >
          {loading && <ActivityIndicator size="large" color={colors.blue} />}

            <FlatList
            data={instruments}
            numColumns={1}
            contentContainerStyle={style.list}
            renderItem = {({item}) => (
                <Instrument  currency={item}/>
            )}
            keyExtractor ={(i, t) => t.toString}

            
            />
        </ScrollView>

        
    );
}


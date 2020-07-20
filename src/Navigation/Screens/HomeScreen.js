import React,  {useEffect} from 'react'
import {Text, View, Stylesheet, ScrollView, FlatList} from 'react-native'
import {fetchCurrency} from '../../Redux/Actions/currencyActions'
import {useSelector } from 'react-redux'
import Instrument from '../../../components/Instrument'

export default function HomeScreen(){
const dispatch = useDispatch();
useEffect(() => {
    fetchCurrency(dispatch)
}, [])
const {instruments, loading, error} = useSelector(state => state.instrument)


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
          <Text style={styles.sectionText}>Cryptocurrencies</Text>
          {loading && <ActivityIndicator size="large" color={colors.blue} />}

            <FlatList
            data={instruments}
            numColumns={1}
            contentContainerStyle={style.list}
            renderItem = {({item}) => (
                <Instrument  currency={item}/>
            )}
            keyExtractor ={() => t.toString}

            
            />
        </ScrollView>

        
    );
}

export default connect ()
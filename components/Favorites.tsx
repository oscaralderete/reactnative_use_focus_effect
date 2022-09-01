import { FlatList, View } from 'react-native'

import { FavoriteCard, Text, Vr, styles } from '../theme/Styles'

import { Product } from '../type/data'

export default function Favorites({favorites, removeItem}: {favorites: Product[], removeItem: any}) {

  return (
    <View>
      <Text style={{textAlign: 'center'}}>Favorites</Text>
      <FlatList
        horizontal={true}
        data={favorites}
        keyExtractor={item => `fav-${item.id}`}
        ItemSeparatorComponent={Vr}
        renderItem={({item}) => <FavoriteCard item={item} removeItem={removeItem}/>}
        style={styles.mgBtm}
      />
    </View>
  )
}
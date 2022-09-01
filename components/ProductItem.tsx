import { Image, TouchableOpacity, Button } from 'react-native'

import { Text, ProductItemView, CallToActionView } from '../theme/Styles'

import { Product } from '../type/data'

import { styles, defs } from '../theme/Styles'

type ProductTypeProps = {
  item: Product,
  onPress: (item: Product) => void
}

export default function ProductItem({item, onPress}: ProductTypeProps) {
  return (
    <ProductItemView>
      <TouchableOpacity onPress={() => onPress(item)}>
        <Image
          source={{uri: item.image}}
          style={styles.listItemImage}
        />
      </TouchableOpacity>
      <Text style={styles.itemTitle}>{item.title}</Text>
      <CallToActionView>
        <Text style={styles.price}>$ {item.price}</Text>
        <TouchableOpacity style={styles.btnDetails} onPress={() => onPress(item)}>
          <Text style={{color: defs.btnColor, fontSize: defs.fontSmall}}>Details</Text>
        </TouchableOpacity>
      </CallToActionView>
    </ProductItemView>
  )
}

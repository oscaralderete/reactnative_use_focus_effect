import {useContext} from 'react'

import { Image, ScrollView, TouchableOpacity } from 'react-native'

import { SvgXml } from 'react-native-svg';

import AppContext from '../context/AppContext';

import { Text, CenteredView, ProductCard, ProductCardDetails, styles, defs } from '../theme/Styles'

import { Product } from '../type/data'

import { saveFav } from '../storage';

export default function ProductScreen({navigation, route}: any) {

  const data: any = useContext(AppContext);

  // get item for params
  const item: Product = route.params;

  // rating
  function getRating(rate: number): number {
    return rate * defs.svgRatio + (Math.floor(rate) * 30);
  }

  // add to favorites
  function addToFavorites(item: Product): void {
    saveFav(item)
      .then(() => {
        // check if it'll navigate to STORE after choose favorite
        if(data.navigateToStore){
          navigation.navigate('Store');
        }
      })
    
  }

  return (
    <ScrollView>
      <CenteredView>
        <ProductCard>
          <Image source={
            {uri: item.image}}
            style={styles.cardImage}
          />
          <ProductCardDetails>
            <Text style={[styles.centeredWhite, styles.fontBig, styles.mgBtm]}>{item.title}</Text>

            <Text style={[styles.price, styles.fontSuperBig, styles.mgBtm]}>$ {item.price}</Text>

            <Text style={[styles.centeredWhite, styles.mgBtm]}>Category: {item.category}</Text>
            
            <Text style={[styles.centeredWhite, styles.mgBtm]}>{item.description}</Text>

            <Text style={[styles.centeredWhite, styles.mgTop]}>Rating:</Text>
            <SvgXml
              xml={'<svg viewBox="0 0 830 172" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve" x="0" y="0" width="830" height="172"><rect x="0" y="0" width="830" height="172" fill="#fff"/><rect x="15" y="0" width="' + getRating(item.rating.rate) + '" height="172" fill="' + defs.priceColor + '"/><path d="M 747 22 L 768.0132 64.135 L 815 70.8917 L 781 103.6892 L 789.0263 150 L 747 128.135 L 704.9737 150 L 713 103.6892 L 679 70.8917 L 725.9868 64.135 L 747 22 ZM 581 22 L 602.0132 64.135 L 649 70.8917 L 615 103.6892 L 623.0263 150 L 581 128.135 L 538.9737 150 L 547 103.6892 L 513 70.8917 L 559.9868 64.135 L 581 22 ZM 415 22 L 436.0132 64.135 L 483 70.8917 L 449 103.6892 L 457.0263 150 L 415 128.135 L 372.9737 150 L 381 103.6892 L 347 70.8917 L 393.9868 64.135 L 415 22 ZM 249 22 L 270.0132 64.135 L 317 70.8917 L 283 103.6892 L 291.0263 150 L 249 128.135 L 206.9737 150 L 215 103.6892 L 181 70.8917 L 227.9868 64.135 L 249 22 ZM 83 22 L 104.0132 64.135 L 151 70.8917 L 117 103.6892 L 125.0263 150 L 83 128.135 L 40.9737 150 L 49 103.6892 L 15 70.8917 L 61.9868 64.135 L 83 22 ZM 0 0 L 0 172 L 830 172 L 830 0 L 0 0 Z" fill="' + defs.colorBlue + '"/></svg>'}
              width={defs.svgWidth}
              height={defs.svgHeight}
            />
            <Text style={[styles.centeredWhite, styles.mgBtm]}>{item.rating.rate} ({item.rating.count} votes)</Text>

            <TouchableOpacity style={[styles.btnDetails, styles.mgTop]} onPress={() => addToFavorites(item)}>
              <Text style={{color: defs.btnColor, fontSize: defs.fontSmall}}>Add to favorites</Text>
            </TouchableOpacity>
          </ProductCardDetails>
        </ProductCard>
      </CenteredView>
    </ScrollView>

  )
}

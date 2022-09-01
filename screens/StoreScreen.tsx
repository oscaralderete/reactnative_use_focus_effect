import { useState, useEffect, useCallback } from 'react'

import { FlatList, Text } from 'react-native'

import { useFocusEffect } from '@react-navigation/native';

import { Product } from '../type/data';

import ProductItem from '../components/ProductItem';

import { Hr, FullView } from '../theme/Styles';

import Favorites from '../components/Favorites';

import { getFavs, removeFav } from '../storage';

export default function HomeScreen({navigation}: any) {

  const [products, setProducts] = useState<Product[]>([])

  const [favorites, setFavorites] = useState<Product[]>([])

  function onPress(item: Product) {
    navigation.navigate('Details', item);
  }

  const removeItem = async (item: Product) => {
    removeFav(favorites, item)
      .then(res =>
        setFavorites(res)
      );
  }

  // update favorites
  useFocusEffect(
    useCallback(() => {
      let active = true;

      const updateFavs = async () => {
        try {
          const favs = await getFavs()
          if(active){
            setFavorites(favs)
          }
        }
        catch(err) {
          console.error('updateFavs error', err)
        }
      }

      updateFavs()
      
      return () => {
        active = false
      }
    }, [])
  )

  // fetch remote data
  useEffect(() => {
    fetch('https://fakestoreapi.com/products?limit=25')
      .then(res => res.json())
      .then(data => setProducts(data));

    // get favorites
    getFavs()
      .then(res => setFavorites(res));
  }, [])

  return (
    <FullView>
      {favorites.length > 0 && <Favorites favorites={favorites} removeItem={removeItem} />}
      <FlatList
        data={products}
        keyExtractor={(item) => `key-${item.id}`}
        ItemSeparatorComponent={Hr}
        renderItem={({item}: {item: Product}) => <ProductItem item={item} onPress={onPress} />}
      />
    </FullView>
  )
}

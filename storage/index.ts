import { ToastAndroid } from 'react-native'

import AsyncStorage from '@react-native-async-storage/async-storage'

import { Product } from "../type/data"

const MyKey = 'favorite-products'

export const setFav = async (favorites: Product[], item: Product) => {
  try {
    favorites.unshift(item)
    await AsyncStorage.setItem(MyKey, JSON.stringify(favorites));
  }
  catch (err) {
    console.error('setFav error', err);
  }
}

export const getFavs = async () => {
  try {
    const favs = await AsyncStorage.getItem(MyKey);
    if(favs !== null){
      return JSON.parse(favs)
    }
    // empty is array if favs is empty
    return [];
  }
  catch (err) {
    console.error('getFavs error', err);
  }
}

export const saveFav = async (item: Product) => {
  try {
    const favs = await getFavs();
    if(favs.length > 0){
      // we need to check if current item is already in favs
      const registered = favs.filter((i: Product) => i.id === item.id);
      if(registered.length > 0){
        // already registered
        const msg = 'This item is already one of your favorites!'
        // in Android it will show a toast
        ToastAndroid.show(msg, ToastAndroid.LONG);
      }
      else{
        await setFav(favs, item);
      }
    }
    else {
      // favorites is empty
      await setFav(favs, item);
    }
  }
  catch (err) {
    console.error('saveFav error', err);
  }
}

export const removeFav = async (favorites: Product[], item: Product): Promise<Product[]> => {
  try {
    let favs: Product[] = [];
    favs = favorites.filter(i => i.id !== item.id);
    const foo = await AsyncStorage.setItem(MyKey, JSON.stringify(favs));
    return favs;
  }
  catch (err) {
    console.error('removeFav error', err);
  }
  return [];
}


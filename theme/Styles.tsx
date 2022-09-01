import { StyleSheet, Text as DefaultText, TextProps, View as DefaultView, ViewProps, ImageBackground, TouchableOpacity } from 'react-native'

import Constants from 'expo-constants'

import { Product } from '../type/data'

export function Text(props: TextProps) {
  return (
    <DefaultText
      {...props}
      style={[styles.text, props.style]}
    >{props.children}</DefaultText>
  )
}

export function Bold(props: TextProps) {
  return (
    <DefaultText
      {...props}
      style={[styles.boldText, props.style]}
    >{props.children}</DefaultText>
  )
}

export function CenteredView(props: ViewProps) {
  return (
    <DefaultView
      {...props}
      style={[styles.centeredView, props.style]}
    >{props.children}</DefaultView>
  )
}

export function FullView(props: ViewProps) {
  return (
    <DefaultView
      {...props}
      style={[styles.fullView, props.style]}
    >{props.children}</DefaultView>
  )
}

export function ProductItemView(props: ViewProps) {
  return (
    <DefaultView
      {...props}
      style={[styles.productItem, props.style]}
    >{props.children}</DefaultView>
  )
}

export function CallToActionView(props: ViewProps) {
  return (
    <DefaultView
      {...props}
      style={styles.callToAction}
    >{props.children}</DefaultView>
  )
}

export function Hr() {
  return (
    <DefaultView
      style={styles.hr}
    ></DefaultView>
  )
}

export function ProductCard(props: ViewProps) {
  return (
    <DefaultView
      {...props}
      style={styles.productCard}
    >{props.children}</DefaultView>
  )
}

export function ProductCardDetails(props: ViewProps) {
  return (
    <DefaultView
      {...props}
      style={styles.productCardDetails}
    >{props.children}</DefaultView>
  )
}

export function FavoriteCard({item, removeItem}: {item: Product, removeItem: any}) {
  return (
    <DefaultView style={styles.favoriteCardView}>
      <ImageBackground
        source={{uri: item.image}}
        resizeMode='cover'
        style={styles.favoriteCard}
      >
        <Text style={styles.favoriteCardText}>{item.title}</Text>
        <TouchableOpacity onPress={() => removeItem(item)} style={styles.btnRemove}>
          <Text style={{color: defs.colorWhite}}>Remove item</Text>
        </TouchableOpacity>
      </ImageBackground>
    </DefaultView>
  )
}

export function Vr(props: ViewProps) {
  return (<DefaultView style={styles.vr} />)
}

export const defs = {
  padding: 10,
  imgWidth: 100,
  imgHeight: 120,
  fontSize: 17,
  fontSmall: 15,
  fontBig: 19,
  bgColor: '#f2f2f2',
  btnColor: '#fff',
  btnBgColor: '#3BB090',
  btnHeight: 28,
  priceColor: '#FFBD55',
  colorBlue: '#4475B0',
  colorOrange: '#FF9255',
  colorWhite: '#fff',
  svgWidth: 150,
  svgHeight: 30,
  svgRatio: 136,
  productCardWidth: 320,
  productBorderRadius: 20,
}

export const styles = StyleSheet.create({
  text: {
    fontSize: defs.fontSize,
  },
  boldText: {
    fontWeight: 'bold',
  },
  navHeader: {
    marginTop: Constants.statusBarHeight,
    textAlign: 'center',
    paddingTop: defs.padding,
    backgroundColor: '#fff'
  },
  centeredView: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1
  },
  fullView: {
    flex: 1,
    flexDirection: 'column',
  },
  listItemImage: {
    width: defs.imgWidth,
    height: defs.imgHeight,
  },
  productItem: {
    flexDirection: 'row',
    padding: defs.padding,
    width: '100%',
    position: 'relative',
  },
  itemTitle: {
    flexDirection: 'row',
    flexWrap: 'nowrap',
    flexShrink: 1,
    justifyContent: "space-evenly",
    paddingLeft: defs.padding,
  },
  callToAction: {
    position: 'absolute',
    right: defs.padding,
    bottom: defs.padding,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  hr: {
    borderTopColor: '#ccc',
    borderTopWidth: 1,
  },
  btnDetails: {
    marginLeft: defs.padding,
    backgroundColor: defs.btnBgColor,
    height: defs.btnHeight,
    paddingHorizontal: defs.padding,
    borderRadius: defs.btnHeight / 2,
    elevation: 3,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
  },
  price: {
    color: defs.priceColor,
    fontWeight: 'bold'
  },
  productCard: {
    width: defs.productCardWidth,
    borderRadius: defs.productBorderRadius,
    backgroundColor: defs.colorBlue,
    
    marginVertical: defs.productBorderRadius,
  },
  cardImage: {
    width: defs.productCardWidth,
    height: 360,
    borderTopLeftRadius: defs.productBorderRadius,
    borderTopRightRadius: defs.productBorderRadius,

  },
  xmlRating: {
    width: defs.svgWidth,
    height: defs.svgHeight + 1,
  },
  productCardDetails: {
    alignItems: 'center',
    padding: 20
  },
  centeredWhite: {
    textAlign: 'center',
    color: defs.colorWhite,
  },
  fontBig: {
    fontSize: defs.fontBig
  },
  fontSuperBig: {
    fontSize: defs.fontBig + 12
  },
  mgBtm: {
    marginBottom: defs.padding,
  },
  mgTop: {
    marginTop: defs.padding,
  },
  favoriteCardView: {
    width: 200,
    height: 260,
    flexDirection: 'column',
    position: 'relative',
  },
  favoriteCard: {
    width: '100%',
    height: '100%',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  favoriteCardText: {
    backgroundColor: 'rgba(0, 0, 0, .5)',
    color: defs.colorWhite,
    textAlign: 'center',
  },
  btnRemove: {
    backgroundColor: defs.colorOrange,
    position: 'absolute',
    bottom: defs.padding / 2,
    paddingVertical: defs.padding / 2,
    paddingHorizontal: defs.padding,
    borderRadius: 100,
  },
  vr: {
    width: defs.padding
  }
})
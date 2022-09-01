# ReactNative useFocusEffect
This is a basic app to understand React Navigation useFocusEffect.

Recently I developed a React Native app for an IPTV business, the app makes a lot of calls to an API and displays tons of live TV channels, movies, series, so to add a 'Favorites list' widget on every category was a real need for a better UX.

That's the classic scenario to make a useFocusEffect() call. I was dealing with a problem to update my 'Favs list' because the fav item is picked in another screen and the only way to update my main screen list was useFocusEffect().

Clone and run the code to understand better this situation. It uses a free test API (https://fakestoreapi.com/) to load the required data so you don't need to configure local resources or start a development API, nothing, nope, 'nada', my sample is 100% functional out of the box.

ReactNative is really fun to develop, I was surprised for its potential to develop projects in a fast and easy way, RN has a lot of components, documentation and an enthusiastic community. I really recommend RN, in my personal case, before develop the required app with RN I started to code it with Ionic and Flutter too, but the project fitted better to ReactNative.
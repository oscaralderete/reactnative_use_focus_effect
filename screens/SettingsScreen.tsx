import { useContext } from 'react';

import { Switch, TouchableOpacity } from 'react-native'

import AppContext from '../context/AppContext';

import { Text, Bold, CenteredView, styles, defs } from '../theme/Styles'

export default function SettingsScreen() {

  const data: any = useContext(AppContext);

  return (
    <CenteredView>
      <Text>Navigate to STORE after choose favorite item:</Text>
      <Switch
        trackColor={{ false: "#767577", true: "#ccc" }}
        thumbColor={data.navigateToStore ? defs.btnBgColor : "#ccc"}
        ios_backgroundColor="#3e3e3e"
        onValueChange={data.setNavigateToStore}
        value={data.navigateToStore}
      />
      <Text> </Text>
      <Text>
        <Bold>API data provided by:</Bold>
      </Text>
      <Text style={styles.mgBtm}>https://fakestoreapi.com/</Text>
      <Text style={styles.mgTop}>
        <Bold>Developed by:</Bold>
      </Text>
      <Text>Oscar Alderete</Text>
      <Text>https://github.com/oscaralderete</Text>
    </CenteredView>
  )
}

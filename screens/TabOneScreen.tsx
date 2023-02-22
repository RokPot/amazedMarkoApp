import { FlatList, StyleSheet, TouchableOpacity } from 'react-native';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import { RootTabScreenProps } from '../types';

export default function TabOneScreen({
  navigation,
}: RootTabScreenProps<'TabOne'>) {
  const data = [
    (Math.random() * 1000).toString(),
    (Math.random() * 1000).toString(),
    (Math.random() * 1000).toString(),
    (Math.random() * 1000).toString(),
    (Math.random() * 1000).toString(),
    (Math.random() * 1000).toString(),
    (Math.random() * 1000).toString(),
    (Math.random() * 1000).toString(),
    (Math.random() * 1000).toString(),
    (Math.random() * 1000).toString(),
    (Math.random() * 1000).toString(),
    (Math.random() * 1000).toString(),
    (Math.random() * 1000).toString(),
    (Math.random() * 1000).toString(),
    (Math.random() * 1000).toString(),
    (Math.random() * 1000).toString(),
    (Math.random() * 1000).toString(),
    (Math.random() * 1000).toString(),
    (Math.random() * 1000).toString(),
    (Math.random() * 1000).toString(),
  ];
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tab One</Text>
      <View
        style={styles.separator}
        lightColor="#eee"
        darkColor="rgba(255,255,255,0.1)"
      />
      <EditScreenInfo path="/screens/TabOneScreen.tsx" />
      <FlatList
        data={data}
        renderItem={({ item }) => (
          <View
            style={{
              ...styles.row,
              backgroundColor: Math.random() * 10 < 5 ? '#169d9d' : '#760476',
            }}
          >
            <TouchableOpacity onPress={() => {}}>item</TouchableOpacity>
          </View>
        )}
      ></FlatList>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
  row: {
    height: '100px',
    width: '500px',
  },
});

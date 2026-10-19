import { StatusBar } from 'expo-status-bar';
import { ScrollView, StyleSheet, Text, View, Image,SafeAreaView } from 'react-native';


export default function App() {
  return (
    <View style={styles.container}>
      <ScrollView
              showsVerticalScrollIndicator = {false}
              contentContainerStyle={styles.content}
      >
        <SafeAreaView style={{flex:1}}>
          <Image source={require('./src/images/rachoco.jpg')}
          />

        </SafeAreaView>
      </ScrollView>
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    fontWeight:'bold',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop:100,
  },
});

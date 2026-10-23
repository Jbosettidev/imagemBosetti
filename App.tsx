import YoutubeIframe from 'react-native-youtube-iframe';
import { } from 'react-native-webview'
import React, { useState } from 'react';
import { ScrollView, StyleSheet, Text, View, Image, SafeAreaView } from 'react-native';

export default function App() {
  //* usar hook useState
  const video_height=300
  const[videoReady,setvideoReady] = useState(false) //? [estadoInicial,comoModifica]

  return (
    <View style={styles.container}>
      <ScrollView
              showsVerticalScrollIndicator = {false}
              contentContainerStyle={styles.content}>

        <SafeAreaView style={{flex:1}}> //?img 1
          <Image style={styles.img} source={require('./src/images/rachoco.jpg')}/>
        </SafeAreaView>

        <SafeAreaView style={{flex:1}}> //?img 2
          <Image style={styles.img} source={require('./src/images/aura.jpg')}/>
        </SafeAreaView>

        <SafeAreaView style={{flex:1}}> //?img 3
          <Image style={styles.img} source={require('./src/images/pexe.jpg')}/>
        </SafeAreaView>

        <SafeAreaView style={{flex:1}}> //?img 3
          <Image style={styles.img} source={{uri:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQe7ZnVQWWVSblAe_TXDDOK5zKYin-fTJC5w73jbEvCqHdvZY5M6YlpnPMn&s=10'}}/>
        </SafeAreaView>

        <SafeAreaView style={{flex:1}}> //?img 3
          <Image style={styles.img} source={{uri:'https://i.pinimg.com/1200x/81/be/85/81be85555e535dd0d069a39cee238921.jpg'}}/>
        </SafeAreaView>
        
        <View>
          <Text style={{color:'white',fontSize:15}}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Expedita, eligendi. Quos vero qui ducimus tenetur ipsam dolores quasi voluptatibus atque eveniet quibusdam, sequi dolor dolore, ex corrupti ratione illum nihil.</Text>
        </View>

        //* inserir o video
        <View style={styles.player}>
          <YoutubeIframe videoID="7uGjAMhI8G4" height={video_height} 
          onReady = {() => setvideoReady(true)}
          />
        </View>
        
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
  content:{
    padding:32,
  },
  img:{
    margin:15,
    height:400,
    width:400,
    borderRadius:20,
  },
  player:{
    width:'100%',
    justifyContent:'center',
    marginTop:40,
  },
});

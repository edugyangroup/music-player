import React, { useRef, useEffect,useState } from 'react';
import { SafeAreaView, View, FlatList, StyleSheet, Text, StatusBar,TouchableOpacity,Image,ImageBackground,Animated } from 'react-native';
import LinearGradient from 'react-native-linear-gradient'

const App = () => {
const [show,setShow]=useState(true)
const BottomSheet=()=>{
if (show==true) {
  setShow(false)
}
else{
  setShow(true)
}
}
 setTimeout(function(){BottomSheet()}, 1000);

  return (
        <View style={{flex:1,backgroundColor:"#17191f"}}>
    <StatusBar
        animated={true}
        backgroundColor={"#17191f"}
        />
    <SafeAreaView style={styles.container}>
    <LinearGradient
          colors={['#17191f', '#000' ]}
          style={styles.linearGradient}
        >{show==true?
        <View style={{flexDirection:"row",justifyContent: 'center',
    alignItems: 'center',marginTop:40}}>
        <Image source={require("./assets/red.png")} style={{width:15,height:15}}/>
        <View style={{width:15,height:15}}></View>
        <Text style={{color:"#fff",marginLeft:6}}>RECORDING</Text>
        </View>:null}
      </LinearGradient>
    </SafeAreaView>
    </View>

  );
}
export default App;
const styles = StyleSheet.create({
  container: {
     flex: 1,
     
  },
    linearGradient: {
    height: "100%",
    width: "100%",
    borderTopLeftRadius:20,
    borderTopRightRadius:20,
  },
});


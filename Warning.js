import React, { useRef, useEffect,useState } from 'react';
import { SafeAreaView, View, FlatList, StyleSheet, Text, StatusBar,TouchableOpacity,Image,ImageBackground,Animated } from 'react-native';
import LinearGradient from 'react-native-linear-gradient'

const App = () => {
const [show,setShow]=useState(false)
const BottomSheet=()=>{
if (show!=true) {
  setShow(false)
}
else{
  setShow(true)
}
}
 setTimeout(function(){BottomSheet()}, 3000);

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
        >
        <Animated.View style={{position:"absolute",backgroundColor:"#1f2028",marginTop:10,width:"95%",borderRadius:12,height:70,flexDirection:"row",alignItems:"center",justifyContent:"center"}}>
       <View style={{
       marginLeft:19}}>
        </View>
      <Image source={require("./assets/Path_883.png")} style={{width:20,height:20,marginTop:4}}/>
        <Text style={{color:"#fff",fontSize:16}}> Please change this taxt acc to ui I can't this toast due to internet issue!</Text>
      </Animated.View>
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
    borderTopRightRadius:20
    ,alignItems:"center",
  },
});


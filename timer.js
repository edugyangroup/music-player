import React, { Component } from 'react';
 
import { SafeAreaView, View, FlatList, StyleSheet, Text, StatusBar,TouchableOpacity,Image,ImageBackground,Animated } from 'react-native';
import LinearGradient from 'react-native-linear-gradient'
export default class StopWatch extends Component {
 
  constructor(props) {
    super(props);
 
    this.state = {
      timer: null,
      minutes_Counter: '00',
      seconds_Counter: '00',
      startDisable: false,
      show:true,
    }
  }
 
  componentWillUnmount() {
    clearInterval(this.state.timer);
  }
 
  onButtonStart = () => {
 
    let timer = setInterval(() => {
      this.BottomSheet();
      var num = (Number(this.state.seconds_Counter) + 1).toString(),
        count = this.state.minutes_Counter;
 
      if (Number(this.state.seconds_Counter) == 59) {
        count = (Number(this.state.minutes_Counter) + 1).toString();
        num = '00';
      }
 
      this.setState({
        minutes_Counter: count.length == 1 ? '0' + count : count,
        seconds_Counter: num.length == 1 ? '0' + num : num
      });
    }, 1000);
    this.setState({ timer });
 
    this.setState({startDisable : true})
  }
 
 
  onButtonStop = () => {
    clearInterval(this.state.timer);
    this.setState({startDisable : false})
  }
 
 
  onButtonClear = () => {
    this.setState({
      timer: null,
      minutes_Counter: '00',
      seconds_Counter: '00',
    });
  }
 BottomSheet=()=>{
if (this.state.show==true) {
  this.setState({show:false})
}
else{
  this.setState({show:true})
}
}
 // this.setTimeout(function(){BottomSheet()}, 1000);
  render() {

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
        {this.state.show==true?
        <View style={{flexDirection:"row",justifyContent: 'center',
    alignItems: 'center',marginTop:40}}>
        <Image source={require("./assets/red.png")} style={{width:15,height:15}}/>
        <View style={{width:15,height:15}}></View>
        <Text style={{color:"#fff",marginLeft:6}}>RECORDING</Text>
        </View>:<View style={{flexDirection:"row",justifyContent: 'center',
    alignItems: 'center',marginTop:40}}>
        <Image source={{uri:""}} style={{width:15,height:15}}/>
        <View style={{width:15,height:15}}></View>
        <Text style={{color:"#fff",marginLeft:6}}></Text>
        </View>}
        <Text style={{color:"#fff",textAlign:"center",marginTop:7}}>{this.state.minutes_Counter} : {this.state.seconds_Counter}</Text>
        <TouchableOpacity
        style={{justifyContent:"center",alignItems:"center",marginTop:500}}
          onPress={this.onButtonStart}
          activeOpacity={0.6}
          disabled={this.state.startDisable} >
           <Image source={require("./assets/stop.png")} style={{width:80,height:80,borderRadius:150}}/>
          <Text style={styles.buttonText}>START</Text>

        </TouchableOpacity>
        </LinearGradient>
      </SafeAreaView>
    </View>
 
    );
  }
}
 
 
 
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

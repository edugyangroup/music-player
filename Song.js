import React, { useRef, useEffect,useState } from 'react';
import { SafeAreaView, View, FlatList, StyleSheet, Text, StatusBar,TouchableOpacity,Image,ImageBackground,Animated } from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import LinearGradient from 'react-native-linear-gradient'
import Slider from "@react-native-community/slider";
import {BlurView} from '@react-native-community/blur';
import Rec from "./Rec.js"
import Ionicons from 'react-native-vector-icons/Ionicons';
const DATA = [
  {
      id: "1",
      userimg: {
        uri: "https://images.pexels.com/photos/1987301/pexels-photo-1987301.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      },
      username: "Indra",
      Date: "8 Nov",
      celeb: false,
      img: {
        uri: "https://st.depositphotos.com/1428083/2946/i/600/depositphotos_29460297-stock-photo-bird-cage.jpg",
      },
      title: "What I did with my first paycheck!",
      likes: "2942",
      timestamp: "2021-07-01T13:58:58.931Z",
      comments: "23",
      type:"out",
      chapterNo:9,
      chapterName:"Poco x2"
    },{
      id: "2",
      userimg: {
        uri: "https://images.pexels.com/photos/1987301/pexels-photo-1987301.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      },
      username: "Indra",
      Date: "8 Nov",
      celeb: false,
      img: {
        uri: "https://st.depositphotos.com/1428083/2946/i/600/depositphotos_29460297-stock-photo-bird-cage.jpg",
      },
      title: "What I did with my first paycheck!",
      likes: "2942",
      timestamp: "2021-07-01T20:58:58.931Z",
      comments: "23",
      type:"out",
      chapterNo:10,
      chapterName:"jaipur"
    },{
      id: "3",
      userimg: {
        uri: "https://images.pexels.com/photos/1987301/pexels-photo-1987301.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      },
      username: "Indra",
      Date: "8 Nov",
      celeb: false,
      img: {
        uri: "https://st.depositphotos.com/1428083/2946/i/600/depositphotos_29460297-stock-photo-bird-cage.jpg",
      },
      title: "What I did with my first paycheck!",
      likes: "2942",
      timestamp: "2021-07-01T15:58:58.931Z",
      comments: "23",
      type:"out",
      chapterNo:8,
      chapterName:"Parish"    }, {
      id: "1",
      userimg: {
        uri: "https://images.pexels.com/photos/1987301/pexels-photo-1987301.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      },
      username: "Indra",
      Date: "8 Nov",
      celeb: false,
      img: {
        uri: "https://st.depositphotos.com/1428083/2946/i/600/depositphotos_29460297-stock-photo-bird-cage.jpg",
      },
      title: "What I did with my first paycheck!",
      likes: "2942",
      timestamp: "2021-07-01T13:58:58.931Z",
      comments: "23",
      type:"out",
      chapterNo:9,
      chapterName:"Poco x2"
    }
];
const UploadTime=(x)=>{
  var srx=x.slice(11, 16)
  var h=parseInt(x.slice(11,13));
  var m=x.slice(13,16);
  var section="am"
  if (h>12) {
    h=String(h-12);
    section="pm"
  }
  return h+""+m+" "+section;
}
const Item = ({ title }) => (
  <View>

      {title.type=="out"?<View
        style={{
          backgroundColor: "#17191f",
          height: 190,
          width: "100%",
          borderRadius:16,
          marginTop:5
        }}
      >
        <View
          style={{
            width: "100%",
            paddingLeft: 10,
            flexDirection:"row"
          }}
        >
          <Image
            style={{ height: 40, width: 40, borderRadius: 40,marginTop:10,marginLeft:5 }}
            source={{
              uri: title.userimg.uri,
            }}
          />
          <View style={{marginLeft:10,marginTop:12}}>
          <Text style={{ color: "white", fontSize: 14 }}>
            John Doe 
          </Text>

          <Text
            style={{
              color: "grey",
              fontSize: 10,
              top: 2,
            }}
          >
            {UploadTime(title.timestamp)}
          </Text>
        </View>
        </View>
        <Image source={require("./assets/menu.png")} style={{width:20,height:20,alignSelf:"flex-end",right:0,marginTop:-35}}/>
        <View style={{width:"100%",height:0.1,backgroundColor:"#232324",marginTop:20,marginBottom:20}}></View>
        <View
          style={{
            flexDirection: "row",
            width: "95%",
            height: 100,
            alignItems: "center",
            borderRadius: 10,
          }}
        >
          <View style={{ justifyContent: "center", paddingLeft: 20 }}>
            <Image
              source={{
                uri: title.userimg.uri,
              }}
              style={{ height: 90, width: 65, borderRadius: 10,marginTop:-20 }}
            />
          </View>

          <View style={{ width: "67%", paddingLeft: 15 }}>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                paddingLeft: 10,
                width: "100%",
              }}
            >
              <View style={{ paddingRight: 23,}}>
                <Text style={{ fontSize: 12, color: "white" }}>
                  {title.title}
                </Text>

                <Text
                  style={{ fontSize: 11, color: "white" }}
                  numberOfLines={1}
                >
                  Chapter {title.chapterNo}: {title.chapterName}
                </Text>
              </View>

              <View
                style={{
                  backgroundColor: "#23272F",
                  height: 20,
                  width: 60,
                  alignItems: "center",
                  justifyContent: "center",
                  flexDirection: "row",
                  borderRadius: 10,
                  marginRight:5
                }}
              >
                <FontAwesome5 name="headphones" size={12} color="white" />
                <Text style={{ color: "white", fontSize: 10 }}>{"  "}2942</Text>
              </View>
            </View>

            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
                paddingTop: 5,
              }}
            >
              <Entypo name="controller-play" size={24} color="white" />

              <Slider
                style={{
                  width: "100%",
                  alignItems: "center",
                  justifyContent: "center",
                }}
                minimumValue={0}
                maximumValue={1}
                minimumTrackTintColor="#FFFFFF"
                maximumTrackTintColor="white"
                thumbTintColor="white"
              />
            </View>

            <View style={{ alignItems: "flex-end" }}>
              <Text
                style={{
                  color: "grey",
                  fontSize: 10,
                  marginTop:-8
                }}
              >
                15 min
              </Text>
            </View>
            <View style={{ flexDirection:"row",justifyContent:"flex-end",marginTop:10}}>
              <Image source={require("./assets/message.png")} style={{width:20,height:20,margin:5}}/>
              <Text
                style={{
                  color: "grey",
                  fontSize: 16,margin:2
                }}
              >
                {title.comments}
              </Text>
              <Image source={require("./assets/sent.png")} style={{width:20,height:20,marginLeft:10,marginTop:4}}/>
            </View>
          </View>
        </View>
        </View>
        :null}
        </View>
      
      
);

const App = ({navigation}) => {
  const renderItem = ({ item }) => (
    <Item title={item} />
  );
const fadeAnim = useRef(new Animated.Value(-200)).current  // Initial value for opacity: 0
const [show,setShow]=useState(false)
const [search,setSearch]=useState(false)
const [color1,setColor1]=useState("#fff")
const [color,setColor]=useState("#4593ff")
const [color2,setColor2]=useState("#fff")
const Next=()=>{
  if (color=="#4593ff" && color1=="#fff") {
    setSearch(true)
    setColor("#fff")
    setColor1("#4593ff")
  }else{
    setSearch(false)
        setColor1("#fff")
    setColor("#4593ff")
  }
}
const BottomSheet=()=>{
if (show==true) {
  setShow(false)
  setColor2("#fff")
  Animated.timing(
           fadeAnim,
           {
             toValue: -200,
             duration: 1000,
           }
         ).start();
}
else{
   setShow(true)
   setColor2("#4593ff")
  Animated.timing(
           fadeAnim,
           {
             toValue: 90,
             duration: 1000,
           }
         ).start();
}

}
  return (
    <View style={{flex:1,backgroundColor:"#17191f"}}>
    <StatusBar
        animated={true}
        backgroundColor={"#17191f"}
        />
{search==false?
    <SafeAreaView style={styles.container}>
    <LinearGradient
          colors={['#2d2f33', '#17191f' ]}
          style={{width:"100%",height:70,flexDirection:"row",position:"absolute",zIndex:2,borderBottomLeftRadius:35}}
        >
      <View style={{width:"50%",marginTop:20}}>
      <Text style={{color:"#fff",fontSize:24,marginLeft:20}}>TIO</Text>
      </View>

      <View style={{flexDirection:"row",width:"50%",justifyContent:"flex-end",marginTop:20,marginLeft:-20}}>
      <Ionicons name="notifications-outline" size={26} color="#ffffff" style={{padding:10}}/>
      <View>
      <Entypo name="mail" size={26} color="#4585ff" style={{padding:10}}/>
      <Text style={{color:"#fff",backgroundColor:"red",textAlign:"center",width:15,height:15,borderRadius:20,fontSize:10,position:"absolute",marginLeft:27,marginTop:10}}>2</Text>
      </View>
      <Image source={{uri:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9I_MQt-XaARCioxfmkE94ipJHJpGEhdUQ7-wWot1sT3keKbUCI4IMiqmjdZg29Dfh-iM&usqp=CAU"}}  style={{width:35, height:35,borderRadius:30,marginTop:5,marginLeft:10}} />
      </View>
      </LinearGradient>
    <LinearGradient
          colors={['#333438', '#646569' ]}
          style={{marginTop:80}}
        >
      <View style={{alignItems:"center"}}>
      <FlatList
      style={{marginBottom:70}}
        data={DATA}
        renderItem={renderItem}
      />
      {false?<Animated.View style={{position:"absolute",backgroundColor:"#1f2028",marginTop:10,width:"95%",borderRadius:12,height:70,flexDirection:"row",alignItems:"center",}}>
       <View style={{
       marginLeft:19}}>
        </View>
      <Image source={require("./assets/Group_2048.png")} style={{width:18.56,height:18.56,marginTop:4}}/>
        <Text style={{color:"#fff",fontSize:16}}> Story post uploaded successfully!</Text>
      </Animated.View>:null}
        </View>
      </LinearGradient>
    </SafeAreaView>:<Rec/>
    }
       {show==true?<BlurView
      style={{width:"100%",height:200,position:"absolute",borderTopLeftRadius:20,
    borderTopRightRadius:20,bottom:30}}
            blurRadius={10}
            blurType={'dark'}
            blurAmount={10}
            // Additional available on Android
            // blurRadius={20}
            // downsampleFactor={10}
            // overlayColor={'rgba(0, 0, 255, .6)'}
          />:null}     
 
          <Animated.View style={{borderTopLeftRadius:20,
          borderTopRightRadius:20,width:"100%",bottom:fadeAnim,position:"absolute"}}>
          <View style={{flexDirection:"row",width:"100%",alignItems:"center",justifyContent:"center"}}>
          <TouchableOpacity onPress={()=>{navigation.navigate("Rec")}}>
          <View style={{alignItems:"center",padding:12}}>
          <Image source={require("./assets/voice.png")} style={{width:62,height:62}}/>
          <Text style={{fontSize:14,fontWeight:"bold",color:"#fff"}}>Voice</Text>
          </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={()=>{navigation.navigate("Chapter")}}>
          <View style={{alignItems:"center",padding:12}}>
          <Image source={require("./assets/story.png")} style={{width:62,height:62}}/>
          <Text style={{fontSize:14,fontWeight:"bold",color:"#fff"}}>Story</Text>
          </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={()=>{navigation.navigate("Warning")}}>
          <View style={{alignItems:"center",padding:12}}>
          <Image source={require("./assets/stream.png")} style={{width:62,height:62}}/>
          <Text style={{fontSize:14,fontWeight:"bold",color:"#fff"}}>Stream</Text>
          </View>
          </TouchableOpacity>
          </View>
        </Animated.View>
 
    <View style={{width:"100%",height:60,position:"absolute",backgroundColor:"#17191f",
      borderTopLeftRadius:30,borderTopRightRadius:30,bottom:0,shadowColor: '#fff',
  shadowOpacity: 20,
  shadowOffset: { width: -100, height: .5},
  shadowRadius: 50,
  elevation: 10,flexDirection:"row",justifyContent:"center",}}>
  <TouchableOpacity onPress={Next}>
  <Entypo name="home" size={22} color={color} style={{marginRight:"15%",marginTop:10}}/>
  </TouchableOpacity>
  <View style={{width:60,height:60,backgroundColor:"#17191f",borderRadius:100,shadowColor: '#34363b',
  shadowOpacity: 0.5,
  shadowOffset: { width: 0, height: -30},
  shadowRadius: 5,
  elevation: 10,marginTop:-20,position:"absolute",borderColor: '#22252e',borderWidth: .1,justifyContent:"center",alignContent:"center",alignItems:"center"
    }}>
     <TouchableOpacity onPress={BottomSheet}>
        <View style={styles.buttonParent}>
          <LinearGradient
          start={{x: 0.0, y: 0.25}} end={{x: 0.5, y: 1.0}}
            locations={[0,0,0.9]}
           colors={['#1e2026', '#292a2b', '#1e2026']}
            style={styles.buttonGrad}/>
        </View>
      </TouchableOpacity>
    <FontAwesome5 name="plus" size={14} color={color2} style={{position:"absolute"}}/>
    </View>
    <View style={{width:100,height:2,backgroundColor:"#a2a9b8",alignSelf:"center",shadowColor: '#ffffff',
  shadowOpacity: 109,
  shadowOffset: { width: 0, height: 1},
  shadowRadius: 25,
  elevation: 1,borderRadius:20,marginTop:36}}></View>
  <TouchableOpacity style={{marginLeft:"15%",marginTop:15,}} onPress={Next}>
  <FontAwesome5 name="search" size={18} color={color1}/>
  </TouchableOpacity>
      </View>
    </View>

  );
}

const styles = StyleSheet.create({
  container: {
     flex: 1,
     backgroundColor:"#333438"
     
  },
  list: {
    width: "100%",
    flexDirection: "row",
    backgroundColor: "#23272e",
    height: 60,
    justifyContent: "center",
    alignItems: "center",
    borderBottomWidth: 0.2,
    borderBottomColor: "grey",
  },
   buttonGrad: {
    height: 70,
    width: 70,
    borderRadius: 70,
    position: 'absolute',
    bottom: 1,
    right:1
  },
  buttonParent: {
    height: 70,
    width: 70,
    borderRadius: 70,
    backgroundColor: '#313333',
  },
});

export default App;
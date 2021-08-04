import React, { Component } from "react";
import { Animated, Text, View, StyleSheet, Button, SafeAreaView,TouchableOpacity,Dimensions,FlatList,Image,ScrollView } from "react-native";
import LinearGradient from 'react-native-linear-gradient'
import Icon from 'react-native-vector-icons/FontAwesome';
import { Input } from 'react-native-elements';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Entypo from 'react-native-vector-icons/Entypo';

function Item({ item }) {
  return (
    <View style={styles.listItem}>
      <Image source={{uri:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9I_MQt-XaARCioxfmkE94ipJHJpGEhdUQ7-wWot1sT3keKbUCI4IMiqmjdZg29Dfh-iM&usqp=CAU"}}  style={{width:35, height:35,borderRadius:30}} />
      <View style={{flex:1,justifyContent:"center",marginLeft:20}}>
        <Text style={{fontWeight:"600",color:"#fff",fontSize:18,}}>{item.name}</Text>
      </View>
      <TouchableOpacity style={{height:30,width:80, justifyContent:"center",alignItems:"center",backgroundColor:"#4e5363",borderRadius:10}}>
        <Text style={{color:"#fff",textAlign:"center"}}>+ Invite</Text>
      </TouchableOpacity>
    </View>
  );
}
class App extends Component {
  // fadeAnim will be used as the value for opacity. Initial Value: 0
  state = {
    fadeAnim: new Animated.Value(0),
    color1:"#fff",
    color2:"gray",
    data:[
        {
            "name": "Miyah Myles",
            "email": "miyah.myles@gmail.com",
            "position": "Data Entry Clerk",
            "photo": "https:\/\/images.unsplash.com\/photo-1494790108377-be9c29b29330?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max&s=707b9c33066bf8808c934c8ab394dff6"
        },
        {
            "name": "June Cha",
            "email": "june.cha@gmail.com",
            "position": "Sales Manager",
            "photo": "https:\/\/randomuser.me\/api\/portraits\/women\/44.jpg"
        },
        {
            "name": "Iida Niskanen",
            "email": "iida.niskanen@gmail.com",
            "position": "Sales Manager",
            "photo": "https:\/\/randomuser.me\/api\/portraits\/women\/68.jpg"
        },
        {
            "name": "Renee Sims",
            "email": "renee.sims@gmail.com",
            "position": "Medical Assistant",
            "photo": "https:\/\/randomuser.me\/api\/portraits\/women\/65.jpg"
        },
        {
            "name": "Jonathan Nu\u00f1ez",
            "email": "jonathan.nu\u00f1ez@gmail.com",
            "position": "Clerical",
            "photo": "https:\/\/randomuser.me\/api\/portraits\/men\/43.jpg"
        },
        {
            "name": "Sasha Ho",
            "email": "sasha.ho@gmail.com",
            "position": "Administrative Assistant",
            "photo": "https:\/\/images.pexels.com\/photos\/415829\/pexels-photo-415829.jpeg?h=350&auto=compress&cs=tinysrgb"
        },
        {
            "name": "Abdullah Hadley",
            "email": "abdullah.hadley@gmail.com",
            "position": "Marketing",
            "photo": "https:\/\/images.unsplash.com\/photo-1507003211169-0a1dd7228f2d?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max&s=a72ca28288878f8404a795f39642a46f"
        },
        {
            "name": "Thomas Stock",
            "email": "thomas.stock@gmail.com",
            "position": "Product Designer",
            "photo": "https:\/\/tinyfac.es\/data\/avatars\/B0298C36-9751-48EF-BE15-80FB9CD11143-500w.jpeg"
        },
        {
            "name": "Veeti Seppanen",
            "email": "veeti.seppanen@gmail.com",
            "position": "Product Designer",
            "photo": "https:\/\/randomuser.me\/api\/portraits\/men\/97.jpg"
        },
        {
            "name": "Bonnie Riley",
            "email": "bonnie.riley@gmail.com",
            "position": "Marketing",
            "photo": "https:\/\/randomuser.me\/api\/portraits\/women\/26.jpg"
        },
        {
            "name": "Renee Sims",
            "email": "renee.sims@gmail.com",
            "position": "Medical Assistant",
            "photo": "https:\/\/randomuser.me\/api\/portraits\/women\/65.jpg"
        },
        {
            "name": "Jonathan Nu\u00f1ez",
            "email": "jonathan.nu\u00f1ez@gmail.com",
            "position": "Clerical",
            "photo": "https:\/\/randomuser.me\/api\/portraits\/men\/43.jpg"
        },
        {
            "name": "Sasha Ho",
            "email": "sasha.ho@gmail.com",
            "position": "Administrative Assistant",
            "photo": "https:\/\/images.pexels.com\/photos\/415829\/pexels-photo-415829.jpeg?h=350&auto=compress&cs=tinysrgb"
        },
        {
            "name": "Abdullah Hadley",
            "email": "abdullah.hadley@gmail.com",
            "position": "Marketing",
            "photo": "https:\/\/images.unsplash.com\/photo-1507003211169-0a1dd7228f2d?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max&s=a72ca28288878f8404a795f39642a46f"
        },
        {
            "name": "Thomas Stock",
            "email": "thomas.stock@gmail.com",
            "position": "Product Designer",
            "photo": "https:\/\/tinyfac.es\/data\/avatars\/B0298C36-9751-48EF-BE15-80FB9CD11143-500w.jpeg"
        },
        {
            "name": "Veeti Seppanen",
            "email": "veeti.seppanen@gmail.com",
            "position": "Product Designer",
            "photo": "https:\/\/randomuser.me\/api\/portraits\/men\/97.jpg"
        },
        {
            "name": "Bonnie Riley",
            "email": "bonnie.riley@gmail.com",
            "position": "Marketing",
            "photo": "https:\/\/randomuser.me\/api\/portraits\/women\/26.jpg"
        }
    ]
  };

  fadeIn = () => {
        this.setState({color1:"gray",color2:"#fff"})
    Animated.timing(this.state.fadeAnim, {
      toValue: Dimensions.get('window').width/2,
      duration: 500
    }).start();
  };

  fadeOut = () => {
    this.setState({color2:"gray",color1:"#fff"})
    Animated.timing(this.state.fadeAnim, {
      toValue: 0,
      duration: 500
    }).start();
  };

  render() {
    return (
      <SafeAreaView>
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
          colors={['#2d2f33', '#17191f' ]}
          style={{width:"100%",height:100,flexDirection:"row",position:"relative",zIndex:1,marginTop:20}}
        >
        <TouchableOpacity style={{width:"50%",marginTop:65}} onPress={this.fadeOut}>
        <Text style={{color:this.state.color1,textAlign:"center",}}>Messages (1)</Text>
         </TouchableOpacity>
         <TouchableOpacity style={{width:"50%",textAlign:"center",marginTop:65}} onPress={this.fadeIn}>
        <Text style={{color:this.state.color2,textAlign:"center",}}>Invites (4)</Text>
         </TouchableOpacity>
      </LinearGradient>
      <Animated.View style={{width:"50%",backgroundColor:"#fff",height:2,marginTop:-2,left:this.state.fadeAnim,zIndex:1}}></Animated.View>
      <View style={styles.container}>
     <ScrollView>
      <LinearGradient
          colors={['#2f3136', '#2c2e33' ]}
        >
        <View style={{justifyContent:"center",alignItems:"center",height:50,marginTop:25}}>
        <Input
        inputContainerStyle={{borderBottomWidth:0}}
        inputStyle={{backgroundColor:"#17191f",width:"60%",borderTopRightRadius:30,borderBottomRightRadius:30,height:45}}
        style={{width:"80%"}}
  placeholder='Search for contacts to invite'
          leftIconContainerStyle={{backgroundColor:"#17191f",height:45,marginLeft:8,width:50,borderTopLeftRadius:30,borderBottomLeftRadius:30}}

  leftIcon={
    <Icon
      name='search'
      size={20}
      color='#fff'
    />
  }
/>
</View>
        <FlatList
          style={{flex:1}}
          data={this.state.data}
          renderItem={({ item }) => <Item item={item}/>}
          keyExtractor={item => item.email}
        />
        </LinearGradient>
        </ScrollView>
      </View>
      </SafeAreaView>
    );
  }
}

export default App;
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F7F7F7',
    width:'100%',
  },
  listItem:{
    margin:8,
    padding:6,
    width:"90%",
    flex:1,
    alignSelf:"center",
    flexDirection:"row",
    borderRadius:5
   ,borderBottomColor:"#4e5363",borderBottomWidth:1
  }
});
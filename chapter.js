// Example of GridView using FlatList in React Native
// https://aboutreact.com/example-of-gridview-using-flatlist-in-react-native/

// import React in our code
import React, { useState } from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
// import all the components we are going to use
import { SafeAreaView, StyleSheet, View, FlatList, Image,Text,StatusBar,TouchableOpacity } from 'react-native';
import LinearGradient from 'react-native-linear-gradient'

const App = ({navigation}) => {
  const [dataSource, setDataSource] = useState([{url:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6UjfKFKsL1xOguMVhMx8fwz3KS1x90ErKtA&usqp=CAU",title:"My trip to Paris!",Chaptors:"7 Chaptors"},{url:"https://cdn-media.williampenn.net/media/wysiwyg/corporate_gifting/Gifts-under-1K.jpg",title:"My trip to Paris!",Chaptors:"7 Chaptors"},{url:"https://www.backyardgardenlover.com/wp-content/uploads/2019/03/fresh-dahlia.jpg",title:"My trip to Paris!",Chaptors:"7 Chaptors"},{url:"https://images.adsttc.com/media/images/55e6/11f2/2347/5d6f/2600/0003/newsletter/view03-2.jpg?1441141226",title:"My trip to Paris!",Chaptors:"7 Chaptors"},{url:"https://artelista.s3.amazonaws.com/obras/big/9/8/4/1602576268823831.jpg",title:"My trip to Paris!",Chaptors:"7 Chaptors"},{url:"",title:"",Chaptors:""}]);

  return (
  <View style={{flex:1,backgroundColor:"#1a1c24"}}>

    <StatusBar
        animated={true}
        backgroundColor={"#1a1c24"}
        />
    <SafeAreaView style={styles.container}>
    <LinearGradient
          colors={['#393d4a', '#292b33', '#1a1c24' ]}
          style={styles.linearGradient}
        >
    <View style={{flexDirection:"row",margin:10}}>
    <Icon
    style={{width:50,marginTop:4,marginLeft:10}}
  name='arrow-left'
  type='font-awesome'
  color='#fff'
  size={16}
  onPress={() => navigation.goBack()} />
  <View style={{justifyContent:"center",textAlign:"center",width:200}}>
  <Text style={{fontSize:16,fontWeight:'bold',color:'#fff',justifyContent:"center",textAlign:"center",width:200}}>My trip to Paris!</Text>
  <Text style={{fontSize:10,color:"gray",justifyContent:"center",textAlign:"center",width:200}}>{"Chaptors 7"}</Text>
    </View>
    </View>
    <View style={{margin:19}}>
    <Image style={{width:96,height:96,borderBottomRightRadius:30,borderRadius:8}} source={require('./add.png')} />
            <Text style={{fontSize:12,color:"#fff",fontWeight:"bold",paddingTop:5}}>{"New Chapter"}</Text>
    </View>
      <FlatList
      style={{padding:0}}
        data={dataSource}
        renderItem={({ item }) => (
          <View style={{ flex: 1, flexDirection: 'column', margin: 10 }}>
          <TouchableOpacity onPress={()=>{navigation.navigate("StoryScreen")}}>
            <Image style={styles.imageThumbnail} source={{ uri: item.url }} />
            </TouchableOpacity>
            <Text style={{fontSize:12,color:"#fff"}}>{item.title}</Text>
            <Text style={{fontSize:10,color:"gray"}}>{item.Chaptors}</Text>
          </View>
        )}
        //Setting the number of column
        numColumns={3}
        keyExtractor={(item, index) => index}
      />
      </LinearGradient>
    </SafeAreaView>
    </View>
  );
};
export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#353845',
    borderTopLeftRadius:20,
    borderTopRightRadius:20,
    marginTop:15,
  },
  imageThumbnail: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 96,
    width:"100%",
    borderBottomRightRadius:30,
    borderRadius:8
  },
  linearGradient: {
    height: "100%",
    width: "100%",
    borderTopLeftRadius:20,
    borderTopRightRadius:20,
  },
});

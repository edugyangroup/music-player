import React from 'react';
import { SafeAreaView, View, FlatList, StyleSheet, Text, StatusBar,TouchableOpacity,Image } from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import LinearGradient from 'react-native-linear-gradient'

import Slider from "@react-native-community/slider";

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
      timestamp: "2021-07-01T15:58:58.931Z",
      comments: "23",
      type:"comment"
    },{
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
      title: "Paani Paani",
      likes: "2942",
      timestamp: "2021-07-01T13:58:58.931Z",
      comments: "23",
      type:"hear",
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
      type:"listen",
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
      title: "Parish Collation",
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
      type:"request",
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
const getTime=(x)=>{
return x;
}
const Item = ({ title }) => (
  <View>
  {title.type=="request" ?
  <View style={styles.list}>
        <View
          style={{
            width: "15%",
            paddingLeft: 20,
          }}
        >
          <Image
            style={{ height: 40, width: 40, borderRadius: 40 }}
            source={{
              uri: title.userimg.uri,
            }}
          />
        </View>
        <View style={{ width: "50%", paddingLeft: 10 }}>
          <Text style={{ color: "white", fontSize: 14 }}>
            {title.username} requested
          </Text>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Text style={{ color: "white", fontSize: 14 }}>to follow you</Text>
            <Text
              style={{
                color: "grey",
                fontSize: 10,
                paddingLeft: 5,
                top: 2,
              }}
            >
              {UploadTime(title.timestamp)}
            </Text>
          </View>
        </View>

        <View
          style={{
            width: "40%",
            flexDirection: "row",
            justifyContent: "flex-end",
            paddingRight: 5,
          }}
        >
          <View
            style={{
              height: 30,
              width: 80,
              backgroundColor: "#393D4A",
              borderRadius: 30,
              justifyContent: "center",
              elevation: 7,
            }}
          >
            <TouchableOpacity>
              <Text style={{ color: "white", paddingLeft: 20, fontSize: 12 }}>
                Accept
              </Text>
            </TouchableOpacity>
          </View>
          <View
            style={{
              height: 30,
              width: 80,
              backgroundColor: "#262931",
              borderRadius: 30,
              justifyContent: "center",
              marginLeft: 6,
              elevation: 7,
              marginRight: 10,
            }}
          >
            <TouchableOpacity>
              <Text style={{ color: "white", paddingLeft: 20, fontSize: 12 }}>
                Ignore
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>:null}
  {title.type=="hear"?<View style={styles.list}>
        <View
          style={{
            width: "15%",
            paddingLeft: 20,
          }}
        >
          <Image
            style={{ height: 40, width: 40, borderRadius: 40 }}
            source={{
              uri: title.userimg.uri
            }}
          />
        </View>
        <View style={{ width: "50%", paddingLeft: 10 }}>
          <Text style={{ color: "white", fontSize: 14 }}>
            {title.username} just uploaded their
          </Text>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Text style={{ color: "white", fontSize: 14 }}>{title.title}</Text>
            <Text
              style={{
                color: "grey",
                fontSize: 10,
                paddingLeft: 5,
                top: 2,
              }}
            >
              {UploadTime(title.timestamp)}
            </Text>
          </View>
        </View>
        <View
          style={{
            width: "40%",
            flexDirection: "row",
            justifyContent: "flex-end",
            paddingRight: 5,
          }}
        >
          <View
            style={{
              height: 32,
              width: 130,
              backgroundColor: "#393D4A",
              borderRadius: 30,
              justifyContent: "center",
              elevation: 7,
              alignItems: "center",
              justifyContent: "center",
              marginRight: 10,
            }}
          >
            <TouchableOpacity>
              <Text style={{ color: "white", fontSize: 12 }}>Listen Now</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>:null}
        {title.type=="comment"?<View style={styles.list}>
        <View
          style={{
            width: "15%",
            paddingLeft: 10,
          }}
        >
          <Image
            style={{ height: 40, width: 40, borderRadius: 40 }}
            source={{
              uri: title.userimg.uri,
            }}
          />
        </View>
        <View style={{ width: "85%" }}>
          <Text style={{ color: "white", fontSize: 14 }}>
            {title.username} commented on your post
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
      </View>:null}
      {title.type=="folloback"?<View style={styles.list}>
        <View
          style={{
            width: "15%",
            paddingLeft: 20,
          }}
        >
          <Image
            style={{ height: 40, width: 40, borderRadius: 40 }}
            source={{
              uri: title.userimg.uri,
            }}
          />
        </View>
        <View style={{ width: "50%", paddingLeft: 10 }}>
          <Text style={{ color: "white", fontSize: 14 }}>
            {title.username} started following
          </Text>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Text style={{ color: "white", fontSize: 14 }}>you</Text>
            <Text
              style={{
                color: "grey",
                fontSize: 10,
                paddingLeft: 5,
                top: 2,
              }}
            >
              {UploadTime(title.timestamp)}
            </Text>
          </View>
        </View>
        <View
          style={{
            width: "40%",
            flexDirection: "row",
            justifyContent: "flex-end",
            paddingRight: 5,
          }}
        >
          <View
            style={{
              height: 32,
              width: 130,
              backgroundColor: "#393D4A",
              borderRadius: 30,
              justifyContent: "center",
              elevation: 7,
              alignItems: "center",
              justifyContent: "center",
              marginRight: 10,
            }}
          >
            <TouchableOpacity>
              <Text style={{ color: "white", fontSize: 12 }}>Follow Back</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>:null}
      {title.type=="out"?<View
        style={{
          alignItems: "center",
          backgroundColor: "#23272F",
          height: 180,
          borderBottomWidth: 0.3,
          borderBottomColor: "grey",
          width: "100%",
        }}
      >
        <View
          style={{
            flexDirection: "row",
            width: "100%",
            marginBottom: 13,
            paddingLeft: 10,
            alignItems: "center",
            paddingTop: 10,
          }}
        >
          <Image
            source={{
              uri: title.userimg.uri,
            }}
             style={{ height: 40, width: 40, borderRadius: 40 }}
          />

          <Text style={{ color: "white", paddingLeft: 7, fontSize: 14 }}>
            Chapter {title.chapterNo} of ''{title.title}' by {title.username} is {"\n"} out,
            listen now!
            <Text style={{ color: "grey", fontSize: 10, paddingLeft: 5 }}>
              {" "}
              {UploadTime(title.timestamp)}
            </Text>
          </Text>
        </View>
        <View
          style={{
            flexDirection: "row",
            width: "95%",
            backgroundColor: "#393D4A",
            height: 100,
            borderBottomWidth: 0.2,
            borderBottomColor: "#696969",
            alignItems: "center",
            borderRadius: 10,
          }}
        >
          <View style={{ justifyContent: "center", paddingLeft: 20 }}>
            <Image
              source={{
                uri: title.img.uri,
              }}
              style={{ height: 60, width: 55, borderRadius: 10 }}
            />
          </View>

          <View style={{ width: "67%", paddingLeft: 15 }}>
            <View
              style={{
                paddingTop: 35,
                flexDirection: "row",
                alignItems: "center",
                paddingLeft: 10,
                width: "100%",
              }}
            >
              <View style={{ paddingRight: 33, paddingTop: 5 }}>
                <Text style={{ fontSize: 14, color: "white" }}>
                  {title.title}
                </Text>

                <Text
                  style={{ fontSize: 12, color: "white" }}
                  numberOfLines={1}
                >
                  Chapter {title.chapterNo}: {title.chapterName}
                </Text>
              </View>

              <View
                style={{
                  backgroundColor: "#23272F",
                  height: 20,
                  width: 55,
                  alignItems: "center",
                  justifyContent: "center",
                  flexDirection: "row",
                  borderRadius: 20,
                  marginLeft: 0,
                }}
              >
                <FontAwesome5 name="headphones" size={14} color="white" />
                <Text style={{ color: "white", fontSize: 12 }}>{"  "}2942</Text>
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
              <Entypo name="controller-play" size={28} color="white" />

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
                  paddingBottom: 20,
                  bottom: 10,
                  left: 10,
                  fontSize: 10,
                }}
              >
                15 min
              </Text>
            </View>
          </View>
        </View>
        </View>
        :null}
        {title.type=="listen"? <View style={styles.list}>
        <View
          style={{
            width: "15%",
            paddingLeft: 10,
          }}
        >
          <Image
            style={{ height: 40, width: 40, borderRadius: 40 }}
            source={{
              uri: "https://iconarchive.com/download/i86044/graphicloads/100-flat-2/contacts.ico",
            }}
          />
        </View>
        <View style={{ width: "85%" }}>
          <Text style={{ color: "white", fontSize: 14 }}>
            10 people heard your podacast '{title.title}'
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
      </View>:null}
        </View>
      
      
);

const App = () => {
  const renderItem = ({ item }) => (
    <Item title={item} />
  );

  return (
    <View style={{flex:1,backgroundColor:"#1a1c24"}}>

    <StatusBar
        animated={true}
        backgroundColor={"#1a1c24"}
        />
    <SafeAreaView style={styles.container}>
    <LinearGradient
          colors={['#1a1c24','#393d4a' ]}
          style={styles.linearGradient}
        >
      <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
    </LinearGradient>
    </SafeAreaView>
    </View>  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#353845',
    borderTopLeftRadius:20,
    borderTopRightRadius:20,
    marginTop:15,
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
  linearGradient: {
    height: "100%",
    width: "100%",
    borderTopLeftRadius:20,
    borderTopRightRadius:20,
  },
});

export default App;
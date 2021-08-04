import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import React, { useRef, useState } from "react";
// import Profile from "./Profile";
// import Home from "./Home";
// import Add from "./Add";
import Rec from "./Rec";
// import Posts from "../TopTab/Posts";
// import Drafts from "../TopTab/Drafts";
import { View, Text, TouchableOpacity, Image } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "react-native-vector-icons/Ionicons";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import AntDesign from "react-native-vector-icons/AntDesign";
import SimpleLineIcons from "react-native-vector-icons/SimpleLineIcons";

import BottomSheet from 'reanimated-bottom-sheet';
import Animated from 'react-native-reanimated';
import RBSheet from "react-native-raw-bottom-sheet";
// import Notifications from "../Screens/Notifications";
// import Messages from "./Message";
import LinearGradient from 'react-native-linear-gradient';

import BottomAdd from "./BottomAdd";

const Stack = createStackNavigator();

const AppNavigator = () => {
  return (
    <>
      <NavigationContainer independent={true} >
        <Stack.Navigator>
          <Stack.Screen
            name="BottomTab"
            component={Rec}
            options={{
              headerShown: false,
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
};

const Tab = createBottomTabNavigator();

function BottomTab(props) {
  const [selected, setSelected] = useState("");
  const refRBSheet = useRef();
  const bs = React.createRef();
  const fall = new Animated.Value(1);
  // React.useEffect(() => {
  //   bs.current.snapTo(0);
  // }, [])
  return (
    <>
      <Tab.Navigator
        tabBarOptions={{
          showLabel: false,
          tabStyle:{
            backgroundColor: "#23272f",
            shadowOffset: {
              width: 0,
              height: -3,
            },
            shadowColor: '#000000',
            shadowOpacity: 1,
            shadowRadius: 7,
          },
          activeTintColor: "#4585FF",
          // Floating Tab Bar...
          style: {
            backgroundColor: "#23272f",
            zIndex: 20,
            position:"absolute",
            shadowOffset: {
              width: 0,
              height: -3,
            },
            shadowColor: '#000000',
            shadowOpacity: 1,
            shadowRadius: 7,
            marginTop:5,
            // Max Height...
            height: 70,
            borderTopLeftRadius: 30,
            borderTopRightRadius: 30,
            borderColor:"#23272f",
            // Shadow...
            paddingHorizontal: 20,
          },
        }}
      >
        <Tab.Screen
          name="Home"
          component={Rec}
          options={{
            tabBarIcon: ({ color }) => (
              <SimpleLineIcons
                name="home"
                size={24}
                color={selected === "home" ? "#4585FF" : "#A2A9B8"}
                onPress={() => {
                  props.navigation.navigate("Home");
                  setSelected("home");
                }}
              />
            ),
          }}
        />

        <Tab.Screen
          name="Add"
          component={Rec}
          options={{
            tabBarIcon: ({ focused, color }) => {
              return (
                <>
                  <TouchableOpacity
                    activeOpacity={1}
                    onPress={() => {
                      setSelected("add");
                      //bs.current.snapTo(0);
                      refRBSheet.current.open();
                    }}
                  >
                    <View
                      style={{
                        width: 80,
                        height: 80,
                        backgroundColor: "#23272f",
                        borderRadius: 60,
                        bottom: 20,
                        elevation: 5,
                        shadowColor: "#ffffff",
                        shadowOffset: { width: 1, height: 5 },
                        shadowOpacity: 0.7,
                        shadowRadius: 15,
                        justifyContent: "center",
                        alignItems: "center",
                      }}>
                      <AntDesign
                        name="plus"
                        size={24}
                        color={selected === "add" ? "#4585FF" : "#A2A9B8"}/>
                    </View>   
                    <RBSheet
                      ref={refRBSheet}
                      height={180}
                      closeOnDragDown={true}
                      closeOnPressMask={true}
                      customStyles={{
                        wrapper: {
                          backgroundColor: "transparent",
                        },
                        container: {
                          borderTopLeftRadius: 30,
                          borderTopRightRadius: 30,
                          backgroundColor: "transparent",
                          alignItems: "center",
                          width: "100%",
                          height:350
                        },
                        draggableIcon: {
                          backgroundColor: "grey",
                        },
                      }}
                    >
                    <BottomAdd />  
                    </RBSheet>
                    {/* <BottomSheet  ref={bs} snapPoints={[200, 0]} enabledContentTapInteraction={false} renderContent={()=>(
                      <View style={{width:"100%",alignItems:'center',height: 0}}>
                      <BottomAdd />
                    </View>
                    )} renderHeader={()=>(
                      <View style={{ flex:1,width:"100%",borderColor:"#23272F",elevation:0,backgroundColor: '#23272F',shadowColor: '#333333',shadowOffset: {width: -1, height: -3},shadowRadius: 2,shadowOpacity: 0.4,paddingTop: 20,borderTopLeftRadius: 20,borderTopRightRadius: 20}}></View>
                    )} initialSnap={1} callbackNode={fall}  enabledHeaderGestureInteraction={true} enabledGestureInteraction={true} enabledContentGestureInteraction={false} enabledContentTapInteraction={false} /> */}
                  </TouchableOpacity>
                </>
              );
            },
          }}
        ></Tab.Screen>

        <Tab.Screen
          name="Search"
          component={Rec}
          options={{
            tabBarIcon: ({ color }) => (
              <AntDesign
                name="search1"
                size={24}
                color={selected === "search" ? "#4585FF" : "#A2A9B8"}
                onPress={() => {
                  props.navigation.navigate("Search");
                  setSelected("search");
                }}
              />
            ),
          }}
        />
      </Tab.Navigator>
      <View
        style={{
          width: "100%",
          height: 200,
          backgroundColor: "#2a2a2c",
          position: "absolute",
          zIndex: -20,
        }}
      ></View>
    </>
  );
}

const TopTab = createMaterialTopTabNavigator();

export function TopTabNav() {
  return (
    <TopTab.Navigator
      tabBarOptions={{
        style: { backgroundColor: "#23272F" },
        activeTintColor: "white",
        labelStyle: { fontWeight: "bold" },
      }}
    >
      <TopTab.Screen name="Posts" component={Rec} />
      <TopTab.Screen name="Drafts" component={Rec} />
    </TopTab.Navigator>
  );
}

const HomeStack = createStackNavigator();

function HomeStackNav() {
  return (
    <>
      <HomeStack.Navigator>
        <HomeStack.Screen
          name="Home"
          component={MsgNotificationStack}
          options={{
            headerShown: false,
          }}
        />
        <HomeStack.Screen
          name="Profile"
          component={Rec}
          options={{
            headerShown: false,
          }}
        />
      </HomeStack.Navigator>
    </>
  );
}

function MsgNotificationStack(props) {
  const [selected, setSelected] = useState("");
  const [numMessage, setNumMessage] = useState("2");
  return (
    <>
      <View
        style={{
          width: "100%",
          height: 80,
          position: "absolute",
          backgroundColor: "#2a2a2c",
          borderBottomRightRadius: 30,
          borderBottomLeftRadius: 30,
          top: 50,
        }}
      ></View>
      <LinearGradient
        style={{
          width: "100%",
          height: 80,
          flexDirection: "row",
          borderBottomRightRadius: 30,
          borderBottomLeftRadius: 30,
          justifyContent: "space-evenly",
          alignItems: "flex-end",
          paddingBottom: 20,
        }}
        colors={["#1D1F25", "#1D1F25"]}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
      >
        <Text
          style={{
            fontSize: 24,
            color: "white",
            fontWeight: "bold",
            width: "60%",
            textAlign: "left",
            paddingLeft: 20,
            fontFamily:'Montserrat-SemiBold'
          }}
        >
          TIO
        </Text>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            width: "40%",
            justifyContent: "space-evenly",
          }}
        >
          <TouchableOpacity
            style={{
              height: 40,
              width: 40,
              justifyContent: "center",
              alignItems: "center",
            }}
            onPress={() => props.navigation.navigate("Rec")}
          >
            <FontAwesome
              name="bell-o"
              size={26}
              color={selected === "bell" ? "#4585FF" : "#A2A9B8"}
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              height: 40,
              width: 40,
              justifyContent: "center",
              alignItems: "center",
            }}
            onPress={() => {
              setSelected("mail");
              props.navigation.navigate("Messages");
            }}
          >
            <Ionicons
              name="mail-open-outline"
              size={32}
              color={selected === "mail" ? "#4585FF" : "#A2A9B8"}
            />
            <View
              style={{
                backgroundColor: "#ED4747",
                height: 17,
                width: 17,
                borderRadius: 17,
                position: "absolute",
                left: 23,
                justifyContent: "center",
                alignItems: "center",
                bottom: 18,
              }}
            >
              <Text
                style={{
                  color: "white",
                  textAlign: "center",
                  fontSize: 9,
                  fontWeight: "normal",
                }}
              >
                {numMessage}
              </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              height: 40,
              width: 40,
              justifyContent: "center",
              alignItems: "center",
            }}
            onPress={() => props.navigation.navigate("Profile")}
          >
            <Image
              style={{ height: 32, width: 32, borderRadius: 32 }}
              source={{
                uri: "https://546458-1766807-raikfcquaxqncofqfm.stackpathdns.com/pub/media/wordpress/d5f1425700d7460bb2aa1e1e8e1b7e49.jpg",
              }}
            />
          </TouchableOpacity>
        </View>
      </LinearGradient>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={Home}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Notifications"
          component={Notifications}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Messages"
          component={Rec}
          options={{
            headerShown: false,
          }}
        />
      </Stack.Navigator>
    </>
  );
}

export default AppNavigator;
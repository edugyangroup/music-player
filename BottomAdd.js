import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import LinearGradient from 'react-native-linear-gradient';
import FontAwesome from "react-native-vector-icons/FontAwesome";
import Feather from "react-native-vector-icons/Feather";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";

const BottomAdd = () => {
  return (
    <View style={styles.container}>
      <View style={{ height: 100, width: 100, alignItems: "center" }}>
        <LinearGradient style={styles.gradient} colors={["#FFBAD1", "#ABABAB"]}>
          <LinearGradient
            style={styles.innerGradient}
            colors={["#D98BA5", "#808080"]}
          >
            {/* Icon */}
            <Feather name="mic" size={24} color="white" />
          </LinearGradient>
        </LinearGradient>
        <Text
          style={{
            color: "white",
            fontSize: 14,
            fontWeight: "bold",
            marginTop: 5,
          }}
        >
          Voice
        </Text>
      </View>
      <View
        style={{
          height: 100,
          width: 100,
          alignItems: "center",
          marginHorizontal: 5,
        }}
      >
        <LinearGradient style={styles.gradient} colors={["#E97BFF", "#ABABAB"]}>
          <LinearGradient
            style={styles.innerGradient}
            colors={["#C462D8", "#808080"]}
          >
            {/* Icon */}
            <FontAwesome5 name="book" size={24} color="white" />
          </LinearGradient>
        </LinearGradient>
        <Text
          style={{
            color: "white",
            fontSize: 14,
            fontWeight: "bold",
            marginTop: 5,
          }}
        >
          Story
        </Text>
      </View>
      <View style={{ height: 100, width: 100, alignItems: "center" }}>
        <LinearGradient style={styles.gradient} colors={["#B96CFF", "#ABABAB"]}>
          <LinearGradient
            style={styles.innerGradient}
            colors={["#9B4EE2", "#808080"]}
          >
            {/* Icon */}
            <FontAwesome name="circle-thin" size={30} color="white" />
            <FontAwesome
              name="circle-thin"
              size={15}
              color="white"
              style={{ position: "absolute" }}
            />
          </LinearGradient>
        </LinearGradient>
        <Text
          style={{
            color: "white",
            fontSize: 14,
            fontWeight: "bold",
            marginTop: 5,
          }}
        >
          Live
        </Text>
      </View>
    </View>
  );
};

export default BottomAdd;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "center",
    flex: 1,
    height: "100%",
    alignItems: "center",
  },
  gradient: {
    height: 80,
    width: 80,
    borderRadius: 100,
    justifyContent: "center",
    alignItems: "center",
  },
  innerGradient: {
    height: 75,
    width: 75,
    borderRadius: 100,
    justifyContent: "center",
    alignItems: "center",
    opacity: 1,
  },
});
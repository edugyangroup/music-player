import React, { Component } from 'react'
import { Text, View, TouchableOpacity,TextInput,Image,ImageBackground } from 'react-native'
import BottomSheet from 'reanimated-bottom-sheet';
import Animated from 'react-native-reanimated';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Feather from 'react-native-vector-icons/Feather';
import Entypo from 'react-native-vector-icons/Entypo';
import Fontisto from 'react-native-vector-icons/Fontisto';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';

import LinearGradient from 'react-native-linear-gradient';
import { Switch } from 'react-native-paper';
// import defaultImage from '../assets/defaultProfile.png';
import ImagePicker from 'react-native-image-crop-picker';
import RadioForm from "react-native-simple-radio-button";
import { Formik } from "formik";
import * as Yup from "yup";
export default class Settings extends Component {
    constructor(props){
        super(props);
        this.state={
            isSwitchOn:false,
            isSwitchOn1:false,
            isSwitchOn2:false,
            isSwitchOn3:false,
            isSwitchOn4:false,
            isSwitchOn5:false,
            obscure:true,
            obscure1:true,
            obscure2:true,
            value: 0,
            value1: 0,
            page:"Contact",
            permission:true,
            image:"Image.resolveAssetSource(defaultImage).uri"
            // query:'',
            // differentSetting:[Profile,]
        }
    }
    obscureText = () => {
      if(!this.state.obscure){
          this.setState({ obscure:true })
      }else{
          this.setState({ obscure:false })
      }
  }
    obscureText1 = () => {
      if(!this.state.obscure1){
          this.setState({ obscure1:true })
      }else{
          this.setState({ obscure1:false })
      }
  }
  
    obscureText2 = () => {
      if(!this.state.obscure2){
          this.setState({ obscure2:true })
      }else{
          this.setState({ obscure2:false })
      }
  }
    bs = React.createRef();
    fall = new Animated.Value(1);
    choosePhotoFromLibrary = () => {
      ImagePicker.openPicker({
        width: 300,
        height: 300,
        cropping: true,
        compressImageQuality: 0.7
      }).then(image => {
        console.log(image);
        this.setState({image:image.path});
      });
    }
    renderHeader = () => (
        <View style={{ borderColor:"#363A47",elevation:0,backgroundColor: '#363A47',shadowColor: '#333333',shadowOffset: {width: -1, height: -3},shadowRadius: 2,shadowOpacity: 0.4,paddingTop: 20,borderTopLeftRadius: 20,borderTopRightRadius: 20}}>
          <View style={{alignItems: 'center',height: 8}}>
          </View>
        </View>
      ); 
    render() {
      var radio_props = [
        { label: "Automatic (Recommended)", value1: 0 },
        { label: "Low", value1: 1 },
        { label: "Medium ", value1: 2 },
        { label: "High", value1: 3 },
        { label: "Very High ", value1: 4},
      ];
      var radio_props1 = [
        { label: "Automatic (Recommended)", value1: 0 },
        { label: "Low", value1: 1 },
        { label: "Medium ", value1: 2 },
        { label: "High", value1: 3 },
        { label: "Very High ", value1: 4},
      ];  
        return (
            <View style={{ flex:1,backgroundColor: '#17191F' }}>
                <BottomSheet ref={this.bs} snapPoints={[(this.state.permission)?"95%":"41%", 0]} enabledContentTapInteraction={false} renderContent={()=>(
                <LinearGradient colors={['#363A47', '#1D1F25']} style={{ paddingBottom: "20%",alignItems:'flex-start' }} >
                <View style={{ marginBottom:15,flexDirection: 'row',alignItems:'flex-start',width:"90%"}}>
                <TouchableOpacity style={{ marginLeft:15 }} onPress={() => {this.props.navigation.navigate("Home")}}>
                  <Ionicons name="arrow-back" size={22} color="white" />
                </TouchableOpacity>
                <Text style={{ marginLeft:"33%",textAlign:"center",color:"white",fontSize:17,fontFamily:'Montserrat-SemiBold' }} >Settings</Text>
                </View>  
                <View style={{ marginLeft:-25,flexDirection: 'row',justifyContent: 'center',alignSelf: 'center',alignItems:"center",borderRadius:25,width:"90%",height:45,backgroundColor:"#23272F"}}>
                <MaterialCommunityIcons style={{ marginLeft:35 }} name="magnify" size={24} color="#ffffff" />
                <TextInput
                autoCapitalize="none"
                selectionColor="#A2A9B8"
                // onChangeText={(e) => searchFilter(e)}
                // value={this.state.query}
                secureTextEntry={this.state.obscure}
                textColor="#A2A9B8" placeholderTextColor="#A2A9B8" 
                style={{ marginLeft:11,color:"#A2A9B8",backgroundColor:"#23272F",borderRadius:30,borderStyle:"solid",borderWidth:2,borderColor:"#23272F",width:"95%",height:45 }}  placeholder="Search" name="search" type="text" /> 
                </View>  
                <TouchableOpacity onPress={()=>{this.setState({page:"Profile"})}} style={{marginBottom:"5%", marginLeft:15,marginTop:20,flexDirection: 'row',justifyContent: 'flex-start',alignItems:'center',width:"90%"}}>
                <Feather name="user" size={20} color="#ffffff" />
                <Text style={{ fontFamily:'Montserrat-Medium',marginLeft:10,marginRight:"63.5%",fontSize:15,color:"white" }} >My Profile</Text>
                <Entypo name="chevron-thin-right" size={18} color="#ffffff" />
                </TouchableOpacity>
                <TouchableOpacity onPress={()=>{this.setState({page:"Audio"})}} style={{marginBottom:"5%",marginLeft:15,flexDirection: 'row',justifyContent: 'flex-start',alignItems:'center',width:"90%"}}>
                <Fontisto name="volume-down" size={16} color="white" />
                <Text style={{ fontFamily:'Montserrat-Medium',marginLeft:10,marginRight:"55%",fontSize:15,color:"white" }} >Audio Quality</Text>
                <Entypo name="chevron-thin-right" size={18} color="#ffffff" />
                </TouchableOpacity>
                <TouchableOpacity onPress={()=>{this.setState({page:"Privacy"})}} style={{marginBottom:"5%",marginLeft:15,flexDirection: 'row',justifyContent: 'flex-start',alignItems:'center',width:"90%"}}>
                <SimpleLineIcons name="lock" size={18} color="#ffffff" />
                <Text style={{ fontFamily:'Montserrat-Medium',marginLeft:10,marginRight:"70.5%",fontSize:15,color:"white" }} >Privacy</Text>
                <Entypo name="chevron-thin-right" size={18} color="#ffffff" />
                </TouchableOpacity>
                <TouchableOpacity onPress={()=>{this.setState({ isSwitchOn:!(this.state.isSwitchOn) })}} style={{marginBottom:"5%",marginLeft:15,flexDirection: 'row',justifyContent: 'flex-start',alignItems:'center',width:"90%"}}>
                <Ionicons name="notifications-outline" size={18} color="#ffffff" />
                <Text style={{ fontFamily:'Montserrat-Medium',marginLeft:10,marginRight:"48%",fontSize:15,color:"white" }} >Notifications</Text>
                <Switch color="#ffffff" value={this.state.isSwitchOn} onValueChange={()=>{this.setState({ isSwitchOn:!(this.state.isSwitchOn) })}} />
                </TouchableOpacity>
                <TouchableOpacity onPress={()=>{this.setState({page:"Logout"})}} style={{marginBottom:"5%",marginLeft:15,flexDirection: 'row',justifyContent: 'flex-start',alignItems:'center',width:"90%"}}>
                <SimpleLineIcons name="power" size={18} color="#ffffff" />
                <Text style={{ marginLeft:10,fontSize:15,color:"white" }} >Log Out</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{marginLeft:15,marginTop:"10%",marginBottom:"6%",justifyContent: 'center',alignItems:'flex-start',width:"90%"}}>
                  <Text style={{ fontSize:14,color:"#4585FF",fontFamily:'Montserrat-Bold' }}>What's New?</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{marginLeft:15,marginBottom:"6%",justifyContent: 'center',alignItems:'flex-start',width:"90%"}}>
                  <Text style={{ fontSize:14,color:"#4585FF",fontFamily:'Montserrat-Bold' }}>FAQs / Contact Us</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{marginLeft:15,marginBottom:"6%",justifyContent: 'center',alignItems:'flex-start',width:"90%"}}>
                  <Text style={{ fontSize:14,color:"#4585FF",fontFamily:'Montserrat-Bold' }}>Community Guidelines</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{marginLeft:15,marginBottom:"6%",justifyContent: 'center',alignItems:'flex-start',width:"90%"}}>
                  <Text style={{ fontSize:14,color:"#4585FF",fontFamily:'Montserrat-Bold' }}>Terms of Service</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{marginLeft:15,marginBottom:"6%",justifyContent: 'center',alignItems:'flex-start',width:"90%"}}>
                  <Text style={{ fontSize:14,color:"#4585FF",fontFamily:'Montserrat-Bold' }}>Privacy Policy</Text>
                </TouchableOpacity>  
                </LinearGradient>
                )} renderHeader={this.renderHeader} initialSnap={0} callbackNode={this.fall}  enabledHeaderGestureInteraction={false} enabledGestureInteraction={false} enabledContentGestureInteraction={false} enabledContentTapInteraction={false} />
            </View>
        )
    }
}
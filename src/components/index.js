import React from "react";
import { StyleSheet, View, TextInput, TouchableOpacity, Image, Text } from 'react-native';
import { Header } from 'native-base';
import { SimpleLineIcons, MaterialIcons, Entypo} from 'react-native-vector-icons';
import { navigate } from '../redux/services/navigator';
import { COLOR, LAYOUT } from "../constants";
import { DEV } from '../constants';

export const AppointmentItem = ({item, type=true}) => {
  return (
    <View style={styles.AppointmentItem}>
      <View style={styles.AppointmentAvatarBox}>
        {
          type?
            <View>
              <Image source={LAYOUT.AppointmentAvatar} style={styles.AAvatar}/>
              <View style={styles.AppointmentBadg}></View>
            </View>:
          <View>
            <Image source={LAYOUT.AppointmentAvatar} style={styles.AAvatarBook}/>
          </View>
        }
        {type&&<View style={{marginBottom:2}}>
          <Text style={[styles.APDText2, {fontSize:LAYOUT.fontSize3}]}>{item.status}</Text>
          <Text style={[styles.APDText1,{fontSize:LAYOUT.fontSize1}]}>{item.date}</Text>
        </View>}
      </View>
      <View style={styles.AppointmentDetailBox}>
        <View style={styles.AppointmentDetails}>
          <View>
            <Text style={styles.APDText1}>{item.name}</Text>
            <Text style={styles.APDText2}>{item.type}</Text>
            <Text style={styles.APDText2}>{item.address}</Text>
            <Text style={[styles.APDText1,{fontSize:LAYOUT.fontSize1}]}>{item.amount}</Text>
          </View>
          <View style={{alignItems:'flex-end'}}>
            <View style={{flexDirection:'row', alignItems:'center'}}>
              <Text style={styles.APDText1}>{item.point}&nbsp;&nbsp;</Text>
              <Entypo name="star" size={LAYOUT.window.width*0.05} color={COLOR.blueColor} />
            </View>
            <Text style={styles.APDText2}>{item.review}</Text>
          </View>
        </View>
        {type&&
          <View style={styles.AppointmentButtons}>
            <TouchableOpacity style={styles.GThemeButton}>
              <MaterialIcons name="local-phone" size={LAYOUT.window.width*0.05} color={COLOR.blueColor} />
              <Text style={[styles.buttonText,{color:COLOR.blueColor}]}>&nbsp;Call</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=>navigate('BookAppointmentScreen', item)} style={[styles.themeButton, {backgroundColor:COLOR.blueColor}]}>
              <Text style={[styles.buttonText,{color:COLOR.whiteColor}]}>Book Appointment</Text>
            </TouchableOpacity>
          </View>
        }
      </View>
    </View>
  );
};

export const Item = ({item}) => {
  return (
    <TouchableOpacity style={styles.FirstItem}>
      <View style={[styles.Fabsolute,{top:item.position.y, right:item.position.x}]}></View>
      <Image source={item.image} style={styles.FitemImage}/>
      <Text numberOfLines={1} style={styles.Ftitle}>{item.title}</Text>
      <Text numberOfLines={1} style={styles.Fdesc}>{item.desc}</Text>
    </TouchableOpacity>
  );
};

export const DoctorItem = ({item}) => {
  return (
    <TouchableOpacity style={styles.FDirstItem} onPress={()=>navigate('AppointmentsScreen', item)}>
      <View style={styles.FDimageBox}>
        <Image source={item.image} style={styles.FDitemImage}/>
      </View>
      <Text numberOfLines={1} style={styles.FDtitle}>{item.name}</Text>
      <Text numberOfLines={1} style={styles.FDdesc}>{item.desc}</Text>
    </TouchableOpacity>
  );
};

export const ServiceItem = ({item}) => {
  return (
    <TouchableOpacity style={styles.FSItem}>
      <View style={styles.FSimageBox}>
        <Image source={item.image} style={styles.FSImage}/>
      </View>
      <View style={styles.FSTextBox}>
        <Text numberOfLines={1} style={styles.FStitle}>{item.name}</Text>
        <SimpleLineIcons name="arrow-right" size={LAYOUT.window.width*0.03} color={COLOR.blackColor} />
      </View>
    </TouchableOpacity>
  );
};

export const ArticlesItem = ({item}) => {
  return (
    <TouchableOpacity style={styles.FAItem}>
      <View style={styles.FAimageBox}>
        <Image source={item.image} style={styles.FAImage}/>
      </View>
      <View style={styles.FATextBox}>
        <Text style={styles.FAText}>{item.text}</Text>
        <Text style={styles.FADate}>{item.date}</Text>
      </View>
    </TouchableOpacity>
  );
};
export const InputBox = (props) => {
  return (
    <View style={[props.style,{width:LAYOUT.window.width*0.85}]}>
      <View style={styles.bgP}>
        <View style={styles.inputRight}>
          {props.inputRight?props.inputRight:null}
        </View>
        <TextInput
          {...props}
          placeholderTextColor={COLOR.placeholderTextColor}
          autoCapitalize="none"
          style={[
            styles.InputBox,
            props.width !== undefined ? props.width : {},
          ]}
        />
        <View style={styles.inputLeft}>
          {props.leftLabel?props.leftLabel:null}
        </View>
      </View>
    </View>
  );
};

export const TextArea = (props) => {
    return (
      <View style={props.style}>
        <View style={styles.bgPT}>  
          <TextInput
            {...props}
            multiline
            placeholderTextColor={COLOR.placeholderTextColor}
            autoCapitalize="none"
            style={[
              styles.TextArea,
              props.width !== undefined ? props.width : {},
            ]}
          />
        </View>
      </View>
    );
};

export const Headers = ({screen, leftLabel, title, rightLabel=null}) =>{
  return(
    <Header style={HeaderStyles.header}>
      <View style={HeaderStyles.headerBackground}>
        <TouchableOpacity style={HeaderStyles.headerLeft} onPress={screen}>
          {leftLabel}
        </TouchableOpacity>
        <View style={HeaderStyles.headerCenter}>
          <Text style={HeaderStyles.headerTitle}>{title}</Text>
        </View>
        <View style={HeaderStyles.headerRight}>
          {rightLabel}
        </View>
      </View>
    </Header>
  )
}

const HeaderStyles = StyleSheet.create({
  header:{
    backgroundColor:'transparent',
    height:LAYOUT.window.height*0.08,
    width:LAYOUT.window.width,
  },
  headerBackground:{
    width:LAYOUT.window.width,
    flexDirection:'row',
    alignItems:'center',
  },
  headerLeft:{
    width:LAYOUT.window.width*0.2,
    alignItems:'center'
  },
  headerCenter:{
    width:LAYOUT.window.width*0.6, 
    alignItems:'center'
  },
  headerTitle:{
    fontSize:LAYOUT.fontSize4,
    color:COLOR.blackColor,
    fontWeight:'bold',
    alignItems:'center',
    justifyContent:'center'
  },
  headerRight:{
    flexDirection:'row', 
    width:LAYOUT.window.width*0.2, 
    justifyContent:'center'
  },
})

const styles = StyleSheet.create({
  AppointmentItem:{
    flexDirection:'row',
    justifyContent:'space-between',
    width:LAYOUT.window.width*0.85,
    paddingVertical:LAYOUT.window.width*0.05,
  },
  AppointmentBadg:{
    position:'absolute', 
    bottom:LAYOUT.window.width*0.01, 
    right:LAYOUT.window.width*0.01, 
    backgroundColor:COLOR.blueColor, 
    width:LAYOUT.window.width*0.03, 
    height:LAYOUT.window.width*0.03, 
    borderRadius:LAYOUT.window.width*0.015, 
    borderWidth:1, 
    borderColor:COLOR.whiteColor,
  },
  AppointmentAvatarBox:{
    justifyContent:'space-between',
    alignItems:'center',
  },
  AAvatar:{
    width:LAYOUT.window.width*0.18, 
    height:LAYOUT.window.width*0.18,
    borderRadius:LAYOUT.window.width*0.09,
    resizeMode:'contain'
  },
  AAvatarBook:{
    width:LAYOUT.window.width*0.15, 
    height:LAYOUT.window.width*0.15,
    borderRadius:LAYOUT.window.width*0.09,
    resizeMode:'contain'
  },
  AppointmentDetailBox:{
    width:LAYOUT.window.width*0.63,
  },
  AppointmentDetails:{
    justifyContent:'space-between',
    flexDirection:'row',
  },
  AppointmentButtons:{
    marginTop:LAYOUT.window.width*0.03,
    justifyContent:'space-between',
    flexDirection:'row',
  },
  APDText1:{
    fontSize:LAYOUT.fontSize2, 
    fontWeight:'700', 
    color:COLOR.blackColor,
    marginBottom:LAYOUT.window.width*0.01
  },
  APDText2:{
    fontSize:LAYOUT.fontSize1, 
    fontWeight:'600', 
    color:COLOR.black1Color,
    marginBottom:LAYOUT.window.width*0.01
  },
  
  FAItem:{
    justifyContent:'center',
    alignItems:'center',
    paddingVertical:LAYOUT.window.height*0.01,
    flexDirection:'row'
  },
  FAimageBox:{
    width:LAYOUT.window.width*0.28,
    overflow:'hidden'
  },
  FAImage:{
    resizeMode:'cover',
    width:"100%",
    height:LAYOUT.window.height*0.13,
    borderRadius:10
  },
  FATextBox:{
    marginLeft:LAYOUT.window.width*0.02,
    width:LAYOUT.window.width*0.55,
  },
  FAText:{
    fontSize:LAYOUT.fontSize4,
    fontWeight:'700'
  },
  FADate:{
    marginTop:5,
    color:COLOR.black1Color
  },

  FSItem:{
    height:LAYOUT.window.height*0.08,
    alignItems:'center',
    flexDirection:'row',
  },
  FSImage:{
    resizeMode:'contain',
  },
  FStitle:{
    fontSize:LAYOUT.fontSize2,
    color:COLOR.blueColor,
    fontWeight:'bold',
  },
  FSimageBox:{
    width:LAYOUT.window.width*0.15,
    alignItems:'center'
  },
  FSTextBox:{
    width:LAYOUT.window.width*0.68,
    justifyContent:'space-between',
    flexDirection:'row',
    alignItems:'center'
  },

  FirstItem:{
    borderRadius:10,
    overflow:'hidden',
    width:LAYOUT.window.width*0.4,
    height:LAYOUT.window.height*0.2,
    padding:LAYOUT.window.width*0.05,
    backgroundColor:COLOR.blueColor,
    marginHorizontal:LAYOUT.window.width*0.02,
    marginVertical:LAYOUT.window.width*0.01,
  },
  Fabsolute:{
    position:'absolute', 
    width:LAYOUT.window.width*0.4, 
    height:LAYOUT.window.width*0.4, 
    backgroundColor:COLOR.blue2Color,
    borderRadius:LAYOUT.window.width*0.4,
  },
  FitemImage:{
    resizeMode:'contain'
  },
  Ftitle:{
    paddingVertical:LAYOUT.window.height*0.01,
    fontSize:LAYOUT.fontSize5,
    color:COLOR.whiteColor,
    fontWeight:'600',
    width:'100%',
  },
  Fdesc:{
    fontSize:LAYOUT.fontSize1,
    color:COLOR.whiteColor,
    width:'100%',
  },


  FDirstItem:{
    alignItems:'center',
    borderRadius:10,
    overflow:'hidden',
    width:LAYOUT.window.width*0.35,
    height:LAYOUT.window.height*0.24,
    padding:LAYOUT.window.width*0.05,
    backgroundColor:COLOR.whiteColor,
    marginHorizontal:LAYOUT.window.width*0.02,
    marginVertical:LAYOUT.window.width*0.01,

    shadowOffset: { width: 0, height:5 },
    shadowColor: COLOR.blackColor,
    shadowOpacity: 0.9, 
    shadowRadius: 10,
    elevation:3,
  },
  FDitemImage:{ 
    resizeMode:'contain',
  },
  FDimageBox:{
    backgroundColor:COLOR.blueColor,
    width:LAYOUT.window.width*0.18,
    height:LAYOUT.window.width*0.18,
    borderRadius:LAYOUT.window.width*0.1,
    alignItems:'center',
    justifyContent:'center',
    overflow:'hidden'
  },
  FDtitle:{
    paddingTop:LAYOUT.window.height*0.01,
    fontSize:LAYOUT.fontSize5,
    fontWeight:'600',
  },
  FDdesc:{
    fontSize:LAYOUT.fontSize1,
    color:COLOR.blueColor,
  },


  bgP: {
    flexDirection: "row",
    flexWrap: "wrap",
    borderRadius: 10,
    width: "auto",
    padding: 15,
    paddingLeft: 20,
    paddingRight: 20,
    marginVertical: LAYOUT.window.height*0.01,
    backgroundColor:COLOR.whiteColor,

    shadowOffset: { width: 0, height:5 },
    shadowColor: COLOR.blackColor,
    shadowOpacity: 0.9, 
    shadowRadius: 10,
    elevation:3,
  },    
  InputBox: {
    flex: 1,
    height: LAYOUT.window.height*0.036,
    fontSize: LAYOUT.fontSize2,
    fontWeight: '600',
    color: COLOR.grey2Color,
  },
  bgPT: {
    flexDirection: "row",
    flexWrap: "wrap",
    backgroundColor: COLOR.whiteColor,
    borderRadius: 5,
    width: "auto",
    padding: 15,
    paddingLeft: 15,
    paddingRight: 15,
    marginVertical: LAYOUT.window.height*0.01,

    shadowOffset: { width: 0, height:5 },
    shadowColor: COLOR.greyColor,
    shadowOpacity: 0.5, 
    shadowRadius: 10,
    elevation:3,
  },    
  TextArea: {
    flex: 1,
    height: LAYOUT.window.height*0.1,
    fontSize: LAYOUT.fontSize3,
    textAlignVertical:'top',
    fontWeight: '600',
    color: COLOR.grey2Color,
  },
  inputLeft: {
    width: "auto",
    justifyContent: "center",
    alignItems: "center",
  },
  inputRight: {
    width: "auto",
    justifyContent: "center",
    alignItems: "center",
    marginRight:10
  },

  container: {
    width:LAYOUT.window.width,
    height:LAYOUT.window.height,
    alignItems:'center',
    backgroundColor:COLOR.baseBackground
  },
  
  content:{
    height:LAYOUT.window.height*0.92,
    alignItems:'center'
  },
  
  TW:{
    color:COLOR.whiteColor
  },

  themeButton:{
    backgroundColor:COLOR.blueColor,
    paddingVertical: LAYOUT.window.width*0.03,
    paddingHorizontal: LAYOUT.window.width*0.05,
    alignItems: 'center', 
    borderRadius: 10,
    justifyContent:'center',
    flexDirection:'row',
    alignSelf:'center'
  },
  GThemeButton:{
    backgroundColor:COLOR.whiteColor, 
    borderWidth:1.5, 
    borderColor:COLOR.blueColor,
    paddingVertical: LAYOUT.window.width*0.025,
    paddingHorizontal: LAYOUT.window.width*0.05,
    alignItems: 'center', 
    borderRadius: 10,
    justifyContent:'center',
    flexDirection:'row',
    alignSelf:'center'
  },
  buttonText:{
    fontSize:LAYOUT.fontSize2, 
    textAlign:'center',
    fontWeight:'600',
    color:COLOR.blueColor
  },
  whiteButton:{
    backgroundColor:COLOR.whiteColor,
    padding: LAYOUT.window.width*0.03,
    margin: LAYOUT.window.width*0.024, 
    alignItems: 'center', 
    borderRadius: LAYOUT.window.width*0.055,
    width:LAYOUT.window.width*0.8,
  },
  textButton:{
    fontSize:LAYOUT.fontSize5,
    color:COLOR.whiteColor,
    textAlign:'center',
    fontWeight:'500'
  },

  radioIcon:{
    width:LAYOUT.window.width*0.035,
    height:LAYOUT.window.width*0.035,
    marginHorizontal:LAYOUT.window.width*0.03,
    borderRadius:LAYOUT.window.width*0.03,
    borderWidth:1.5,
    borderColor:COLOR.blueColor
  },
  radio:{
      flexDirection:'row',
      width:LAYOUT.window.width*0.8, 
      marginVertical:LAYOUT.window.height*0.005, 
      alignItems:'center',
  },
  radioText:{
      fontSize:LAYOUT.fontSize2, 
      color:COLOR.whiteColor, 
      textAlign:'left',
  },
  radioActive:{
    backgroundColor:COLOR.whiteColor
  },


  logoBox:{
    marginTop:LAYOUT.window.width*0.15,
    alignItems:'center'
  },
  logoTitle:{
    fontSize:LAYOUT.fontSize9,
    fontWeight:'700'
  },
  logoDetail:{
    fontSize:LAYOUT.fontSize2,
  },
  logoImage:{
    width:LAYOUT.window.width*0.21,
    height:LAYOUT.window.width*0.2,
    marginVertical:LAYOUT.window.height*0.02,
    resizeMode:'contain'
  },

  buttonBox:{
    width:'100%',
    marginTop:LAYOUT.window.height*0.15, 
    alignItems:'center',
  },
})

export const defaultStyles = styles;

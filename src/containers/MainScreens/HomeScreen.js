import React from 'react';
import { connect } from 'react-redux'
import { StyleSheet, ScrollView, View, Text, Image, TouchableOpacity } from 'react-native';
import { Container, Button } from 'native-base';
import { MaterialCommunityIcons, FontAwesome, Fontisto } from 'react-native-vector-icons';
import { LAYOUT, COLOR } from "../../constants";
import { defaultStyles, Headers, InputBox, Item, DoctorItem, ServiceItem, ArticlesItem } from '../../components';
import { navigate, setNavigator } from '../../redux/services/navigator';

export class HomeScreen extends React.Component{
  constructor(props) {
    super(props)
    this.state = {
      search:''
    }
    setNavigator(props.navigation)  
  }

  componentDidMount(){
  }

  render(){
    const { search } =this.state;
    return(
      <Container style={styles.container}>
        <Headers
          screen={this.props.navigation.openDrawer} 
          title={'New Delhi'}
          leftLabel={<MaterialCommunityIcons name="menu" size={LAYOUT.window.width*0.06} color={COLOR.blackColor} />}
          rightLabel={<FontAwesome name="bell-o" size={LAYOUT.window.width*0.05} color={COLOR.blackColor} />}
        />
        <View style={styles.content}>
          <ScrollView showsVerticalScrollIndicator={false}>
            <View style={{alignItems:'center', paddingBottom:LAYOUT.window.height*0.05}}>
              <View style={styles.textBox}>
                <Text style={styles.welcomeText}>Welcome back!</Text>
                <Text style={styles.whatText}>What are you looking for?</Text>
              </View>
              <InputBox
                placeholder='Search Doctors, Medicines, Hospitals…'
                inputRight={<Fontisto name="search" size={LAYOUT.window.width*0.05} color={COLOR.black1Color} />}
                onChangeText={(e)=>this.setState({search:e})}
                value={search}
              />
              <View style={{justifyContent:'center', flexDirection:'row', flexWrap:'wrap' }}>
                {LAYOUT.firstButton.map((item, key)=>(
                  <Item key={key} item={item}/>
                ))}
              </View>
              <View style={{width:LAYOUT.window.width*0.85}}>
                <Text style={styles.recentlyText}>
                  Recently Visited Doctors
                </Text>
                <ScrollView showsHorizontalScrollIndicator={false} horizontal>
                  {LAYOUT.RecentlyVisitedDoc.map((item, key)=>(
                    <DoctorItem key={key} item={item}/>
                  ))}
                </ScrollView>
              </View>
              <View style={{width:LAYOUT.window.width*0.85}}>
                <View style={{flexDirection:'row', width:LAYOUT.window.width*0.85, justifyContent:'space-between', alignItems:'center'}}>
                  <Text style={styles.recentlyText}>
                    Consult Specialized Doctors
                  </Text>
                  <TouchableOpacity onPress={()=>navigate('DoctorScreen')}>
                    <Text style={styles.viewallText}>View All</Text>
                  </TouchableOpacity>
                </View>
                <ScrollView showsHorizontalScrollIndicator={false} horizontal>
                  {LAYOUT.ConsultSpecialized.map((item, key)=>(
                    <DoctorItem key={key} item={item}/>
                  ))}
                </ScrollView>
              </View>
              <View style={{width:LAYOUT.window.width*0.85}}>
                <View style={{flexDirection:'row', width:LAYOUT.window.width*0.85, justifyContent:'space-between', alignItems:'center'}}>
                  <Text style={styles.recentlyText}>
                    Other Services
                  </Text>
                </View>
                {LAYOUT.OtherServices.map((item, key)=>(
                  <ServiceItem key={key} item={item}/>
                ))}
              </View>
              <View style={styles.labTestBox}>
                <Text style={styles.labText}>Lab Test From The Comfort Of Your Home</Text>
                <View style={{flexDirection:'row', paddingVertical:LAYOUT.window.height*0.03}}>
                  <View style={{width:'50%'}}>
                    <View style={{height:LAYOUT.window.height*0.12, justifyContent:'center'}}>
                      <Image source={LAYOUT.shield} style={styles.FDitemImage}/>
                    </View>
                    <Text style={styles.labItemText}>100% Safe & Hygenic</Text>
                  </View>
                  <View style={{width:'50%'}}>
                    <View style={{height:LAYOUT.window.height*0.12, justifyContent:'center'}}>
                      <Image source={LAYOUT.exam} style={styles.FDitemImage}/>
                    </View>
                    <Text style={styles.labItemText}>View Reports Online</Text>
                  </View>
                </View>
                <TouchableOpacity style={[styles.themeButton, {width:LAYOUT.window.width*0.5}]}>
                  <Text style={[styles.buttonText,{color:COLOR.whiteColor}]}>View All Packages</Text>
                </TouchableOpacity>
              </View>
              <View style={styles.healthtBox}>
                <Text style={styles.healthText}>Health Articles</Text>
                {LAYOUT.HealthArticles.map((item, key)=>(
                  <ArticlesItem key={key} item={item}/>
                ))}
              </View>
            </View>
          </ScrollView>
        </View>
      </Container>
    )
  }
}


const mapStateToProps = (state) => ({
})

const mapDispatchToProps = {
}

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen)


const styles = StyleSheet.create({
  ...defaultStyles,
  container : {
    backgroundColor:COLOR.whiteColor,
    width:LAYOUT.window.width,
  },
  welcomeText:{
    fontSize:LAYOUT.fontSize2,
    color:COLOR.blueColor,
  },
  whatText:{
    fontSize:LAYOUT.fontSize6,
    color:COLOR.blackColor,
    fontWeight:'bold'
  },
  textBox:{
    width:LAYOUT.window.width*0.85,
    paddingTop:LAYOUT.window.height*0.02,
  },
  recentlyText:{
    color:COLOR.blackColor,
    fontSize:LAYOUT.fontSize4,
    marginTop:LAYOUT.window.height*0.02,
    fontWeight:'bold'
  },
  viewallText:{
    color:COLOR.blueColor,
    fontSize:LAYOUT.fontSize2,
    marginTop:LAYOUT.window.height*0.02,
  },
  labTestBox:{
    backgroundColor:COLOR.yellowColor,
    height:LAYOUT.window.width*0.75,
    width:LAYOUT.window.width*0.85,
    borderRadius:10,
    padding:LAYOUT.window.width*0.06
  },
  labText:{
    fontSize:LAYOUT.fontSize6,
    fontWeight:'bold'
  },
  labItemText:{
    fontSize:LAYOUT.fontSize1,
    fontWeight:'bold',
    width:'70%',
  },
  healthtBox:{
    marginTop:LAYOUT.window.height*0.01,
    width:LAYOUT.window.width*0.85,
  },
  healthText:{
    fontSize:LAYOUT.fontSize5,
    fontWeight:'bold'
  },
})

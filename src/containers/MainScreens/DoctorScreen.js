import React from 'react';
import { connect } from 'react-redux'
import { StyleSheet, ScrollView, View, Text, TouchableOpacity } from 'react-native';
import { Container } from 'native-base';
import { MaterialCommunityIcons, Fontisto } from 'react-native-vector-icons';
import { LAYOUT, COLOR } from "../../constants";
import { defaultStyles, Headers, InputBox, DoctorItem } from '../../components';

export class DoctorScreen extends React.Component{
  constructor(props) {
    super(props)
    this.state = {
      search:''
    }
  }

  componentDidMount(){
  }

  render(){
    const { search } =this.state;
    return(
      <Container style={styles.container}>
        <Headers
          screen={()=>this.props.navigation.goBack()} 
          title={'Find Doctors'}
          leftLabel={<MaterialCommunityIcons name="keyboard-backspace" size={LAYOUT.window.width*0.06} color={COLOR.blackColor} />}
        />
        <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{width:LAYOUT.window.width, paddingBottom:10, alignItems:'center'}}>
          <InputBox
            style={{marginTop:LAYOUT.window.height*0.01}}
            placeholder='Search Doctors, Specialities, Clinic'
            inputRight={<Fontisto name="search" size={LAYOUT.window.width*0.05} color={COLOR.black1Color} />}
            onChangeText={(e)=>this.setState({search:e})}
            value={search}
          />
          <View style={{width:LAYOUT.window.width*0.85}}>
            <View style={{flexDirection:'row', width:LAYOUT.window.width*0.85, justifyContent:'space-between', alignItems:'center'}}>
              <Text style={styles.recentlyText}>
                Search by Speciality
              </Text>
            </View>
            <View style={{justifyContent:'space-between', flexDirection:'row', flexWrap:'wrap'}}>
              {LAYOUT.ConsultSpecialized.map((item, key)=>(
                <DoctorItem key={key} item={item}/>
              ))}
            </View>
          </View>
          <Text style={styles.detailText}>Didn’t find what you looking for</Text>
          <TouchableOpacity>
            <Text style={styles.searchText}>Search More</Text>
          </TouchableOpacity>
        </ScrollView>
      </Container>
    )
  }
}


const mapStateToProps = (state) => ({
})

const mapDispatchToProps = {
}

export default connect(mapStateToProps, mapDispatchToProps)(DoctorScreen)


const styles = StyleSheet.create({
  ...defaultStyles,
  container : {
    backgroundColor:COLOR.whiteColor,
    alignItems:'center'
  },
  recentlyText:{
    color:COLOR.blackColor,
    fontSize:LAYOUT.fontSize4,
    fontWeight:'bold'
  },
  detailText:{
    color:COLOR.blueColor,
    fontSize:LAYOUT.fontSize2,
    paddingTop:10,
  },
  searchText:{
    color:COLOR.blueColor,
    fontSize:LAYOUT.fontSize4,
    paddingVertical:5,
    fontWeight:'bold'
  }
})

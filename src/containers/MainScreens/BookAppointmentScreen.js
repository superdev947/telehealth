import React from 'react';
import { connect } from 'react-redux'
import { StyleSheet, View, Text } from 'react-native';
import { Container } from 'native-base';
import { MaterialCommunityIcons } from 'react-native-vector-icons';
import { LAYOUT, COLOR } from "../../constants";
import { defaultStyles, Headers, AppointmentItem } from '../../components';

export class BookAppointmentScreen extends React.Component{
  constructor(props) {
    super(props)
    let state = props.navigation.state.params;
    this.state = {
      item:state,
      search:''
    }
  }

  componentDidMount(){
  }

  render(){
    const { item } =this.state;
    return(
      <Container style={styles.container}>
        <Headers
          screen={()=>this.props.navigation.goBack()}
          title={'Book an Appointment'}
          leftLabel={<MaterialCommunityIcons name="keyboard-backspace" size={LAYOUT.window.width*0.06} color={COLOR.blackColor} />}
        />
        <AppointmentItem item={item} type={false}/>
        <View style={{backgroundColor:'#F5F8FA', width:'100%', padding:LAYOUT.window.width*0.05}}>
          <Text>Select Date & Time</Text>
        </View>
      </Container>
    )
  }
}


const mapStateToProps = (state) => ({
})

const mapDispatchToProps = {
}

export default connect(mapStateToProps, mapDispatchToProps)(BookAppointmentScreen)


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

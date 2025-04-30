import React from 'react';
import { connect } from 'react-redux'
import { StyleSheet, ScrollView } from 'react-native';
import { Container } from 'native-base';
import { MaterialCommunityIcons, Fontisto } from 'react-native-vector-icons';
import { LAYOUT, COLOR } from "../../constants";
import { defaultStyles, Headers, InputBox, AppointmentItem } from '../../components';

export class AppointmentsScreen extends React.Component{
  constructor(props) {
    super(props)
    let state = props.navigation.state.params;
    this.state = {
      screenTitle:state.name,
      search:''
    }
  }

  componentDidMount(){
  }

  render(){
    const { screenTitle, search } =this.state;
    return(
      <Container style={styles.container}>
        <Headers
          screen={()=>this.props.navigation.goBack()}
          title={screenTitle}
          leftLabel={<MaterialCommunityIcons name="keyboard-backspace" size={LAYOUT.window.width*0.06} color={COLOR.blackColor} />}
        />
        <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{width:LAYOUT.window.width, paddingBottom:10, alignItems:'center'}}>
          <InputBox
            style={{marginTop:LAYOUT.window.height*0.01}}
            placeholder={'Search  '+screenTitle}
            inputRight={<Fontisto name="search" size={LAYOUT.window.width*0.05} color={COLOR.black1Color} />}
            onChangeText={(e)=>this.setState({search:e})}
            value={search}
          />
           {LAYOUT.AppointmentList.map((item, key)=>(
              <AppointmentItem key={key} item={item}/>
            ))}
        </ScrollView>
      </Container>
    )
  }
}


const mapStateToProps = (state) => ({
})

const mapDispatchToProps = {
}

export default connect(mapStateToProps, mapDispatchToProps)(AppointmentsScreen)


const styles = StyleSheet.create({
  ...defaultStyles,
  container : {
    backgroundColor:COLOR.whiteColor,
    alignItems:'center'
  },
})

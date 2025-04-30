import React, { Component } from 'react'
import { connect } from 'react-redux'
import { StyleSheet, View, Text, TouchableOpacity, ScrollView } from 'react-native'
import { COLOR, LAYOUT } from '../../constants'
import { Zocial } from 'react-native-vector-icons';
import { navigate } from '../../redux/services/navigator';
import { sendMail } from '../../redux/actions/authActions';
import { defaultStyles, InputBox } from '../../components';
export class ForgetScreen extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            email : '',
            time:30,
            status:true,
        }
    }
    
    sendMail(){
        if(this.state.email){
            this.setState({email:'', status:false});
            this.props.sendMail({email:this.state.email});
            var counter=setInterval(timer, 1000);
            var me = this;
            function timer()
            {
                me.setState({time:me.state.time-1});
                if (me.state.time <= 0)
                {
                    me.setState({time:30, status:true});
                    clearInterval(counter);
                    return;
                }
            }
        }
    }
    
    render() {
        const {email, status, time} =this.state;
        return (
            <ScrollView>
                <View style={styles.container}>
                    <Text style={styles.screenTitle}>Forget Password?</Text>
                    <View style={styles.buttonBox}>
                        <InputBox
                            style = {{width:LAYOUT.window.width*0.8}}
                            placeholder = 'Email Address'
                            leftLabel={ <Zocial name="email" size={LAYOUT.window.width*0.05} color={COLOR.blueColor} />}
                            onChangeText={(e)=>this.setState({email:e})}
                            value={email}
                        />
                        {
                            status?
                            <TouchableOpacity onPress={()=>this.sendMail()} style={styles.whiteButton}>
                                <Text style={styles.buttonText}>GET CODE</Text>
                            </TouchableOpacity>:
                            <View style={styles.whiteButton}>
                                <Text style={styles.buttonText}>GET CODE</Text>
                            </View>

                        }
                        <TouchableOpacity onPress={()=>navigate('SignInScreen')} style={styles.whiteButton}>
                            <Text style={styles.buttonText}>LOG IN</Text>
                        </TouchableOpacity>
                        {
                            !status&&
                            <View style={{width:'100%', alignItems:'flex-end'}}>
                                <TouchableOpacity>
                                    <Text style={styles.resendText}>Resend ({time}s)</Text>
                                </TouchableOpacity>
                            </View>
                        }
                    </View>
                </View>
            </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
    ...defaultStyles,
    screenTitle:{
        marginTop:LAYOUT.window.height*0.22,
        marginLeft:LAYOUT.window.width*0.22, 
        color:COLOR.whiteColor, 
        fontSize:LAYOUT.fontSize5, 
        fontWeight:'600', 
        width:'100%'
    },
    buttonBox:{
        width:'100%',
        marginVertical:LAYOUT.window.height*0.1,
        alignItems:'center',
    },
    resendText:{
        color:COLOR.greyColor, 
        marginTop:LAYOUT.window.height*0.01, 
        fontSize:LAYOUT.fontSize3, 
    }
})

const mapStateToProps = (state) => ({
    
})

const mapDispatchToProps = {
    sendMail
}

export default connect(mapStateToProps, mapDispatchToProps)(ForgetScreen)

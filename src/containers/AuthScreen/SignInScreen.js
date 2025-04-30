import React, { Component } from 'react'
import { connect } from 'react-redux'
import { StyleSheet, View, Text, Image, TouchableOpacity, ScrollView } from 'react-native'
import { Fontisto, Zocial } from 'react-native-vector-icons'
import { COLOR, LAYOUT } from '../../constants'
import { defaultStyles, InputBox } from '../../components'
import { validateEmail, navigate } from '../../redux/services'
import { login } from '../../redux/actions/authActions'

export class SignInScreen extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            email : '',
            password: '',
            mode: 'app',
        }
    }

    login(){
        const {email, password} = this.state;
        if(!email||!validateEmail(email)){
            alert('Your email address is not valid.')
        }else if(!password){
            alert('Your password is not valid.')
        }else{
            this.props.login(this.state);
        }
        this.props.login(this.state);
    }
    
    render() {
        const {email, password} = this.state;
        return (
            <ScrollView>
                <View style={styles.container}>
                    <View style={styles.logoBox}>
                        <Image source={LAYOUT.logo} style={styles.logoImage}/>
                        <Text style={[styles.TW, styles.logoTitle]}>My Heal</Text>
                        <Text style={[styles.TW, styles.logoDetail]}></Text>
                    </View>
                    <View style={[styles.buttonBox, {marginTop:LAYOUT.window.height*0.1}]}>
                        <InputBox
                            style={{width:LAYOUT.window.width*0.8}}
                            placeholder='Email Address'
                            leftLabel={<Zocial name="email" size={LAYOUT.window.width*0.05} color={COLOR.blueColor} />}
                            onChangeText={(e)=>this.setState({email:e})}
                            value={email}
                        />
                        <InputBox
                            style={{width:LAYOUT.window.width*0.8}}
                            placeholder='Password'
                            secureTextEntry={true}
                            leftLabel={<Fontisto name="key" size={LAYOUT.window.width*0.05} color={COLOR.blueColor} />}
                            onChangeText={(e)=>this.setState({password:e})}
                            value={password}
                        />
                        <TouchableOpacity onPress={()=>navigate('ForgetScreen')}>
                            <Text style={[styles.textButton, styles.forgetButton]}>Forget Password?</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={()=>this.login()} style={styles.whiteButton}>
                            <Text style={styles.buttonText}>LOG IN</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={()=>navigate('SignUpScreen')} style={styles.whiteButton}>
                            <Text style={styles.buttonText}>CREATE ACCOUNT</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
    ...defaultStyles,
    forgetButton:{
        marginTop:LAYOUT.window.height*0.04,
    },
})

const mapStateToProps = (state) => ({
    
})

const mapDispatchToProps = {
    login
}

export default connect(mapStateToProps, mapDispatchToProps)(SignInScreen)

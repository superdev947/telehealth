import React, { Component } from 'react'
import { connect } from 'react-redux'
import { StyleSheet, View, Text, Image, TouchableOpacity, ScrollView } from 'react-native'
import { FontAwesome, Fontisto, Zocial } from 'react-native-vector-icons'
import { COLOR, LAYOUT } from '../../constants'
import { defaultStyles, InputBox } from '../../components'
import { validateEmail, navigate } from '../../redux/services'
import { Register } from '../../redux/actions/authActions'

export class SignUpScreen extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            email : '',
            password: '',
            phone: '',
            countryCode : '',
            country:null,
            isCountryPicker:false,
            role:false
        }
    }

    onSelect = (country) => {
        this.setState({countryCode:country.cca2, country:country.name, isCountryPicker:false})
    }
    
    Register(){
        const { role, email, password, phone, country, countryCode }=this.state;
        if(!email||!validateEmail(email)){
            alert('Your email address is not valid.')
        }else if(!password){
            alert('Your password is not valid.')
        }else if(!countryCode){
            alert('Your country address is not valid.')
        }else if(!phone){
            alert('Your phone number is not valid.')
        }else if(role){
            this.props.Register({ email, password, phone, country, status:'Active', role:'Seller'})
            this.state={};
        }else{
            this.props.Register({email, password, phone, country,status:'Active',role:'Customer'})
            this.state={};
        }
    }
    
    render() {
        const { role, email, password, phone }=this.state;
        return (
            <View style={styles.container}>
                <ScrollView showsVerticalScrollIndicator={false}>
                    <View style={styles.logoBox}>
                        <Image source={LAYOUT.logo} style={styles.logoImage}/>
                        <Text style={[styles.TW, styles.logoTitle]}>Medicos</Text>
                    </View>
                    <View style={[styles.buttonBox, {marginTop:LAYOUT.window.height*0.025}]}>
                        <InputBox
                            style={{width:LAYOUT.window.width*0.8}}
                            placeholder='Email Address'
                            leftLabel={ <Zocial name="email" size={LAYOUT.window.width*0.05} color={COLOR.blueColor} />}
                            onChangeText={(e)=>this.setState({email:e})}
                            value={email}
                        />
                        <InputBox
                            style={{width:LAYOUT.window.width*0.8}}
                            placeholder='Password'
                            secureTextEntry={true}
                            leftLabel={ <Fontisto name="key" size={LAYOUT.window.width*0.05} color={COLOR.blueColor} />}
                            onChangeText={(e)=>this.setState({password:e})}
                            value={password}
                        />
                        <InputBox
                            style={{width:LAYOUT.window.width*0.8}}
                            placeholder='Phone'
                            leftLabel={ <FontAwesome name="phone" size={LAYOUT.window.width*0.05} color={COLOR.blueColor}  /> }
                            onChangeText={(e)=>this.setState({phone:e})}
                            value={phone}
                        />
                        {/* <TouchableOpacity style={[styles.radio,{marginTop:LAYOUT.window.height*0.01}]} onPress={()=>this.setState({role:!this.state.role})}>
                            <View style={[styles.radioIcon, role&&styles.radioActive]}></View>
                            <Text style={styles.radioText}>I'm a Customer</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.radio} onPress={()=>this.setState({role:!role})}>
                            <View style={[styles.radioIcon, !role&&styles.radioActive]}></View>
                            <Text style={styles.radioText}>I'm a Seller</Text>
                        </TouchableOpacity> */}
                        <TouchableOpacity onPress={()=>this.Register()} style={[styles.whiteButton,{marginTop:50}]}>
                            <Text style={styles.buttonText}>CREATE ACCOUNT</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={()=>navigate('SignInScreen')} style={styles.whiteButton}>
                            <Text style={styles.buttonText}>LOG IN</Text>
                        </TouchableOpacity>
                    </View>
            </ScrollView>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    ...defaultStyles,
})

const mapStateToProps = (state) => ({
    
})

const mapDispatchToProps = {
    Register
}

export default connect(mapStateToProps, mapDispatchToProps)(SignUpScreen)
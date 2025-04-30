import React, { Component } from 'react'
import { connect } from 'react-redux'
import { StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native'
import { LAYOUT } from '../../constants'
import { setNavigator } from '../../redux/services'
import { setRole } from '../../redux/actions/authActions'
import { defaultStyles } from '../../components'

export class ExploreScreen extends Component {

    constructor(props) {
        super(props)
        setNavigator(props.navigation)
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={[styles.logoBox,{marginTop:LAYOUT.window.height*0.2}]}>
                    <Image source={LAYOUT.logo} style={styles.logoImage}/>
                    <Text style={[styles.TW, styles.logoTitle]}>Medicos</Text>
                    <Text style={[styles.TW, styles.logoDetail]}>Your Personal Medical Assistant</Text>
                </View>
                <View style={styles.buttonBox}>
                    <TouchableOpacity onPress={()=>this.props.setRole('Patient')} style={styles.whiteButton}>
                        <Text style={[styles.buttonText, {fontSize:LAYOUT.fontSize5}]}>I'm a Patient</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={()=>this.props.setRole('Doctor')} style={styles.whiteButton}>
                        <Text style={[styles.buttonText, {fontSize:LAYOUT.fontSize5}]}>I'm a Doctor</Text>
                    </TouchableOpacity>
                </View>
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
    setRole
}

export default connect(mapStateToProps, mapDispatchToProps)(ExploreScreen)

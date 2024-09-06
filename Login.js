import React, { Component } from 'react'
import { Text, View, Image, ImageBackground, StyleSheet, TouchableOpacity, Alert } from 'react-native'
import { TextInput, Button, HelperText } from 'react-native-paper';
//import AsyncStorage from '@react-native-async-storage/async-storage';
//import { AuthContext } from './AuthContext';
import auth from "@react-native-firebase/auth"
import Icon from 'react-native-vector-icons/MaterialIcons';
const myIcon = <Icon icon="mail" size={30} color="#900" />;

export default class Login extends Component {

    //static contextType = AuthContext


    constructor(props) {
        super(props)

        this.state = {
            isPasswordSecure: true,
            email: '',
            password: '',
            emailError: false,
            passwordError: false,
            dataArray: [
                {
                    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
                    title: 'First Item',
                },
                {
                    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
                    title: 'Second Item',
                },
                {
                    id: '58694a0f-3da1-471f-bd96-145571e29d72',
                    title: 'Third Item',
                },
            ]

        }
    }

     SignUpTestFn = () => {

        auth().createUserWithEmailAndPassword("ravikumar.kada@gmail.com","ravikumar123").then(() => {
           Alert.alert("User Created")
        })
        .catch((err)=>{
            console.log(err)
        })
    }  

    passwordShow = () => {
        this.setState({ isPasswordSecure: !this.state.isPasswordSecure })
    }


    textChangingEmail = (text) => {

        console.log("text enters", text)




        this.setState({ email: text })

    }



    textChangingPassword = (text) => {

        console.log("text password", text)

        this.setState({ password: text })

    }

    CountScreen = () => {
        this.props.navigation.navigate("Count")
    }

    validationCredentails = async () => {

        console.log("email and password", this.state.email, this.state.password)

        if (this.state.email == "") {
            this.setState({ emailError: true })
        }
        else {
            this.setState({ emailError: false })

        }

        if (this.state.password == "") {
            this.setState({ passwordError: true })
        }
        else {
            this.setState({ passwordError: false })

        }


        // if (this.state.email != "" && this.state.password != "") {

        //     AsyncStorage.setItem('userToken', "123456");


        //     this.context.signIn('123456')

        //   //  this.props.navigation.navigate('FlatList')
        // }

    }

    signUp = () => {
        this.props.navigation.navigate('SignUp')

    }

    componentDidMount() {
        console.log("Calling Method 2")
    }

    componentWillMount() {
        console.log("Calling Method 3")
    }


    render() {

        console.log("Calling Method 1")


        return (
            <View style={styles.parentView}>

                 <ImageBackground style={{ flex: 1 }} resizeMode="cover" source={require('../login/assets/img15.jpg')}>

                <View style={{margin:10,marginTop:60 }}>
                <Text style={{fontSize:65,fontWeight:'bold',color:'#F08080',fontFamily:'Cochin'}}>Hello :)</Text>

                            <Text style={{fontSize:20,fontWeight:'bold',color:'#F08080',fontFamily:'Cochin'}}>Login to your Account ...</Text>
                            {/* <Image style={styles.imageStyles} source={require('../demoproject/assets/img6.png')} /> */}
                        </View>

                    <View style={{ margin: '5%', justifyContent:'center',marginTop:'20%' }}>


                        {/* <View style={{ alignItems: 'center' }}>
                            <Text style={{fontSize:20,fontWeight:'bold',color:'#FFFFFF'}}>Login</Text>
                            {/* <Image style={styles.imageStyles} source={require('../demoproject/assets/img6.png')} /> *
                        </View> */}

                        <TextInput
                            onChangeText={this.textChangingEmail}
                           // mode='outlined'
                            style={styles.textInputStyle}

                            error={this.state.emailError}
                            label="Email"
                            placeholder="Email"
                           // outlineColor='#F08080'
                           focusable={false}
                           ////// activeOutlineColor='undefined'
                            activeUnderlineColor='transparent'
                            //outlineColor='undefined'
                            underlineColor='transparent'
                            right={<TextInput.Icon icon="eye" />}

                        />

                        <HelperText style={{fontSize:14,fontWeight:'bold',color:'#FFFFFF'}} type="error" visible={this.state.emailError}>
                            Please enter email address
                        </HelperText>


                        <TextInput 

                            left={<TextInput.Icon color='#F08080' icon="lock" />}
                            style={styles.textInputStyle1}
                            onChangeText={this.textChangingPassword}
                            secureTextEntry={this.state.isPasswordSecure}
                            error={this.state.passwordError}
                           // mode="outlined"
                           activeUnderlineColor="transparent"
                           underlineColor='transparent'

                            label="Password"
                            placeholder='Password'
                          //  outlineColor='#F08080'
                         //   activeOutlineColor='#F08080'
                             right={<TextInput.Icon color='#F08080' onPress={this.passwordShow} icon={this.state.isPasswordSecure ? "eye" : 'eye-off'} />}
                        />

                        <HelperText style={{fontSize:14,fontWeight:'bold',color:'#FFFFFF'}} type="error" visible={this.state.passwordError}>
                            Please enter password
                        </HelperText>

                        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                       
                            {/* <TouchableOpacity style={styles.appButtonContainer}>
                                <Button color='#008b8b' textcolor = '#FFFFFF'
                                    mode="text" onPress={() => this.validationCredentails()}>
                                    Login
                                </Button>
                            </TouchableOpacity> */}

                            <TouchableOpacity onPress={() => this.validationCredentails()} style={styles.appButtonContainer}>

                                <Text style={styles.appButtonText}>Login</Text>



                            </TouchableOpacity>

                            <Text style={styles.appButtonText}>or</Text>

                            <TouchableOpacity onPress={() => this.SignUpTestFn()} style={styles.appButtonContainer}>

                                <Text style={styles.appButtonText}>Sign Up</Text>

                            </TouchableOpacity>

                            {/* <TouchableOpacity style={{ marginTop: '3%',width: 150 }}>
                                <Button color='#008b8b'
                                    mode="contained" onPress={() => this.validationCredentails()}>
                                    Sign Up
                                </Button>
                            </TouchableOpacity> */}
                        </View>
                        {/* 
                    <TouchableOpacity style={{marginTop:'3%'}}>
                    <Button mode="contained" icon={'counter'} onPress={() => this.CountScreen()}>
                        Count Screen
                    </Button>
                    </TouchableOpacity> */}



                    </View>
                 </ImageBackground>
            </View>
        )
    }
}

const styles = StyleSheet.create({

    parentView: {
        flex: 1,
        //  justifyContent: 'center'
        flexDirection: 'row'
    },
    appButtonText: {
        fontSize: 16,
        color: "#fff",
        fontWeight: "bold",
        alignSelf: "center",
        
      },
    appButtonContainer: {
        elevation: 0,
        backgroundColor: "#87CEEB",
        borderRadius: 30,
        paddingVertical: 10,
        paddingHorizontal: 12,
        marginTop: '3%',
        width: 150
    },
    // secondView: {
    //   // justifyContent: 'center',
    //   marginTop:'5%',
    //    alignItems: 'center',
    //     height:'10%'
    // },
    textStyles: {
        fontWeight: 'bold',
        fontSize: 20,
        color: '#A52A2A',
        marginBottom: '5%'
    },
    imageStyles: {
        width: 100,
        height: 150,
        alignItems: 'center'
    },
    textInputStyle: {
       // marginTop: '2%',
       fontWeight:'bold',
        borderWidth:2,
        borderColor:'#DDA0DD',
        borderRadius:40,
        borderTopLeftRadius:40,
        borderTopRightRadius:40
    },
    textInputStyle1: {
        // marginTop: '2%',
        fontWeight:'bold',
         borderWidth:2,
         borderColor:'#DDA0DD',
         borderRadius:40,
         borderTopLeftRadius:40,
         borderTopRightRadius:40
     },

});

import React, { Component } from 'react';
import {View, Text, StyleSheet, ScrollView,ImageBackground,Image} from 'react-native';
import { Entypo } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const image = require('./components/spreadpaint2.jpeg')

export default class App extends Component {
  render() {
    return (
      <ScrollView>
      <View style={styles.container}>
        <ScrollView style={styles.mainContainer}>
          <ImageBackground style={styles.topContainer} source={require('./components/fullcolourful.jpg')}> 
             
           </ImageBackground>
           <ImageBackground source={image} style={styles.mainBackground} >
           <View style={styles.middleContainer}>
             <Text style={{paddingLeft:60,paddingRight:60}}>
               IIT Madras is a whole new world - a world that welcomes everyone, however idiosyncratic they may be; 
               a world that pushesyou to be all that you can be . A world that is, quite simple put, Saarang. Street
               plays, dance troupes, comedy shows, lectures, workshops, musicians, magicians - Saarang's got it all.
               There's energy, exhilaration, competition, camaraderie and pure, unadulterated fun. Unlimited. This 
               year too, we call out to those gypsy souls who have felt the all too familar tug to transverse through
               terrains unfamiliar, to roam around city streets, valleys and creeks; we call out to those who are 
               unafraid to let go. Come, celebrate the spirit of wanderlust with Saarang, South India's largest 
               cultural festival.
             </Text>
           </View>
           <View style={styles.iconContainer}>
             <View style={styles.iconRow}>
             <Entypo 
              name="google-play" 
              size={28} 
              onPress={() => alert('google playstore')}
              style={{height:40,width:40,paddingRight:10,marginRight:100,marginLeft:20}}
              color="black" />

             <FontAwesome 
              name="facebook" 
              size={28} 
              onPress={() => alert('facebook')}
              style={{height:40,width:40,paddingRight:10,marginRight:100,paddingLeft:10}}
              color="black" />

             <AntDesign 
              name="twitter" 
              size={28} 
              onPress={() => alert(' twitter')}
              style={{height:40,width:40,marginRight:20,paddingLeft:10}}
              color="black" />

             </View>
             <View style={styles.textIconRow}>
               <Text style={{height:40,paddingRight:80}}>Play Store</Text>
               <Text style={{paddingRight:60}}>Facebook</Text>
               <Text style={{paddingLeft:30}}>Twitter</Text>
             </View>

             <View style={styles.secondIconRow}>

             <AntDesign 
              name="instagram" 
              onPress={() => alert('instagram')}
              style={{height:40,width:40,paddingRight:10,marginRight:100,marginLeft:30}}
              size={28} 
              color="#000000" />

             <Entypo 
              name="youtube"
              onPress={() => alert('youtube')}
              style={{height:40,width:50,paddingRight:10,marginRight:100,paddingLeft:10}} 
              size={28} 
              color="black" />
            
             <FontAwesome  
              name="linkedin" 
              onPress={() => alert('linkedin')}
              style={{height:40,width:40,marginRight:30,paddingLeft:10}}
              size={28} 
              color="black" />
             </View>

             <View style={styles.textIconRow}>
               <Text style={{height:40,paddingRight:80}}>Instagram</Text>
               <Text style={{paddingRight:60}}>Youtube</Text>
               <Text style={{paddingLeft:30}}>Linkedin</Text>
             </View>

          <View style={styles.thirdIconRow}>
           <MaterialIcons 
            name="email"
            onPress={() => alert('email')}
            size={28} 
            style={{height:40,width:40,paddingRight:10,marginRight:100,marginLeft:30}}
            color="black" />

           <AntDesign 
            name="google" 
            onPress={() => alert('google')}
            size={28} 
            style={{height:40,width:50,paddingRight:10,marginRight:100,paddingLeft:10}}
            color="black" />

           <MaterialCommunityIcons 
            name="web" 
            onPress={() => alert('web')}
            size={28} 
            style={{height:40,width:40,marginRight:20,paddingLeft:10}}
            color="black" />

           </View>

           <View style={styles.textIconRow}>
               <Text style={{height:40,paddingRight:110,paddingLeft:10}}>E-mail</Text>
               <Text style={{paddingRight:70}}>Google</Text>
               <Text style={{paddingLeft:30}}>Website</Text>
             </View>

           </View>

           <View style={styles.endContainer}>

           <Entypo 
            name="share" 
            size={28} 
            onPress={() => alert('Share this App')}
            style={{marginTop:100,padding:10}}
            color="black" />

            <Text style={{marginTop:115}}>Share this app</Text>

            <MaterialIcons 
             name="file-download" 
             onPress={() => alert('Update this App')}
             style={{marginTop:100,padding:10,paddingLeft:90}}
             size={28} 
             color="black" />

            <Text style={{marginTop:115}}>Update this app</Text>


           </View>
           </ImageBackground>


        </ScrollView>

      </View>

      </ScrollView>

    )
  }
}

const styles= StyleSheet.create({

  container: {
    flex:1,
    padding:10,
    paddingTop:20,
 },

  mainContainer: {
   height:650,
   backgroundColor:'white',
   color:'blue',
   borderWidth:4,
   borderColor:'black',
 },

 mainBackground: {
   opacity:0.4,
 },

 topContainer: {
   height:100,
   backgroundColor:'transparent',
   justifyContent:'center',
   alignItems:'center',
 },

 middleContainer: {
   height:400,
   backgroundColor:'transparent',
   justifyContent:'center',
   alignItems:'center'
 },

 iconContainer: {
   height:250,
   borderTopColor:'black',
   borderTopWidth:1,
   borderBottomColor:'black',
   borderBottomWidth:1,
   alignItems:'center',
   
 },

 iconRow: {
  marginTop:20,
  flexDirection:'row',
   },

  textIconRow: {
    flexDirection:'row',
  },

  secondIconRow: {
    flexDirection:'row',
  },

  thirdIconRow: {
    flexDirection:'row',
  },

  endContainer: {

    height:150,
    flexDirection:'row',
  }


})
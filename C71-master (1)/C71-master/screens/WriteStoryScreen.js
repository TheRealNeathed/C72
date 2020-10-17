import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View,Image,TextInput,TouchableOpacity,textb} from 'react-native';
import {createAppContainer} from 'react-navigation'
import {createBottomTabNavigator} from 'react-navigation-tabs'
import {Header} from 'react-native-elements'
import db from '../config'

export default class WriteStoryScreen extends React.Component{
    constructor(){
        super()
        this.state={
            storyTitle:"",
            authorName:"",
            Story:""
        }
    }
    submitStory=()=>{
      var storytitle=this.state.storyTitle
      var authorname=this.state.authorName
      var story=this.state.Story

var newStory = db.ref('Stories'+'/'+storytitle)
newStory.update({
  Title:storytitle,
  AuthorName:authorname,
  TheStory:story

})

    }
    render(){
      return (
        <View style={styles.container}>
             <Header backgroundColor={'cyan'}
      centerComponent={{text:'Story Hub',style:{color:'#000000',fontSize:25,fontWeight:'bold',alignSelf:'center'}}}
    
      />

          <TextInput placeholder="Apurva Title" onChangeText={(text)=>{this.setState({storyTitle:text})}} value={this.state.storyTitle} style={styles.inputBox}/>

          <TextInput placeholder="Apurva Name"  onChangeText={(text)=>{this.setState({authorName:text})}} value={this.state.authorName}  style={styles.inputBox}/>

          <TextInput placeholder="Write your Apurva here"  onChangeText={(text)=>{this.setState({Story:text})}} value={this.state.Story} style={styles.StoryBox}/>

          <TouchableOpacity style={styles.goButton} onPress={()=>{this.submitStory()}}><Text style={styles.buttonText}>SUBMIT</Text></TouchableOpacity>
        </View>
      );
    }
    
  }
  const styles = StyleSheet.create({
 
    inputBox:{
      marginTop:50,
      width:300,
      alignSelf:'center',
      height:50,
      textAlign:'center',
      borderWidth:4,
   
    },
    StoryBox:{
        marginTop:50,
        width:300,
        alignSelf:'center',
        height:200,
        textAlign:'center',
        borderWidth:4,
     
      },
     goButton:{
      width:'30%',
      height:50,
      alignSelf:'center',
      padding:10,
      margin:10,
      marginTop:20,
      alignItems:'center',
      backgroundColor:'yellow',
      
     },
     buttonText:{
        textAlign:'center',
           fontSize:20,
           fontWeight:'bold'
          },
          container: {
            flex: 1,
            backgroundColor: '#fff',
            alignItems: 'center',
            justifyContent: 'center',
          }
        })
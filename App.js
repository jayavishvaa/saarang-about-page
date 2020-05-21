import React from 'react';
import { StyleSheet, Text, View, SectionList, TouchableOpacity} from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import StarIcon from './components/starIcon';
import { Button } from 'react-native';

const sections = [
  {
    id: 0,
    title: 'Arts Craft & Fashion events',
    data: [
      
        {id:0, text: 'Fine Arts'},
        {id:1,text: 'Lifestyle'}
      ]
  },

  {
    id: 1,
    title: 'Food, Anime and Fun',
    data: [
      
        {id:0, text: 'Foodfest'},
        {id:1,text: 'Anime Fest'}
      ]
  },

  {
    id: 2,
    title: 'Gaming Events',
    data: [
      
        {id:0, text: 'Gameplex'},
      ]
  },

  {
    id: 3,
    title: 'Literary Competition',
    data: [
      
        {id:0, text: 'Writing'},
        {id:1,text: 'WordGames'}
      ]
  },

  {
    id:4,
    title: 'Media & Design',
    data: [
      {id:0, text: 'Design'},
      {id:1, text: 'Media'}
    ]
  }
]

const extractKey = ({id}) => id



export default class App extends React.Component {

  constructor(props) {
    super(props)
  
    this.state = {
     selectAll: false
     
    }

    
 }
  
  selectAllIcon = () => {
    this.setState({
      selectAll: !this.state.selectAll
    })
  }
  

  clickAlert () {

    alert("Item selected")
    

  }
  
 
  
  

  renderSectionHeader = ({section}) => {
    return (
      <Text style={styles.sectionHeader}>
        {section.title}
      </Text>
    )
  }
  render(){
    

     
  return (
    <View style={styles.container}>
      <View style={styles.topView}>
        
        <View style={styles.topHigh}>
        <TouchableOpacity>
        <AntDesign 
        name="check" 
        size={26} 
        color="white" 
        onPress={() => this.clickAlert()} /></TouchableOpacity>

        <TouchableOpacity>

        <Text style={{color:'#fff', fontSize:17, fontFamily:'sans-serif-light', fontWeight:'200'}} onPress={this.selectAllIcon}>
              Select All</Text>
        </TouchableOpacity>      
        </View>
        

        <View style={styles.topMiddle}>
          <Text style={{color:'white', fontWeight:'bold', fontSize:27, fontFamily:'sans-serif-light'}}>EVENT CATEGORIES</Text>
          <Text style={{color:'white', fontWeight:'300', fontSize:15, fontFamily:'sans-serif-thin'}}>You'll receive updates for only these topics</Text>

        </View>
      </View>

      <SectionList

      style= {styles.sectionContainer}
      sections = {sections}
      renderItem ={({item}) =>  {
        
    
        return (
          <View style={styles.dataContainer}>
            
              <Text style={styles.row}>
                  {item.text}
                  
              </Text>
              <StarIcon selectAll={this.state.selectAll}/>
              
          </View>
        );
      }}
      renderSectionHeader={this.renderSectionHeader}
      keyExtractor={extractKey}
      
      />
    </View>
  );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    
  },

  topView: {
    backgroundColor:'#8b0000',

    height:150,
    
    },
    topHigh: {
      justifyContent:'space-between',
      marginTop:30,
      flexDirection:'row',
      paddingRight:17,
      paddingLeft:15,
    },

    topMiddle: {
      justifyContent:'center',
      alignItems:'center',
      marginTop:20,
    },

    sectionContainer: {

      flex:1,
      padding:10,
      
    },


    dataContainer: {

      flexDirection:'row',
      marginVertical: 8,
      borderColor:'#000000',
      borderWidth:1,
      borderRadius:10,
      justifyContent:'space-between',
      marginTop:20,
      

    },
    row : {

      
      padding:10,
      fontSize:24,
    },

    

    sectionHeader: {

      fontSize:30,
      paddingLeft:10,
    }

    
});

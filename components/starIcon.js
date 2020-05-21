import React from 'react';
import { TouchableOpacity} from 'react-native';
import { Icon} from 'react-native-elements';
import { View } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
export default class StarIcon extends React.Component {

    constructor(props) {
        super(props);
      
        this.state = {
          iconColor: false
        }
        
     }
       starWithoutShade = () => {
         
         this.setState({
           iconColor: !this.state.iconColor
         })
      }

      componentWillReceiveProps({ selectAll }) {
        this.setState({
          iconColor: selectAll
        })
      }
     
    render() {
        return (
            <TouchableOpacity> 
            <Icon 
              name= 'grade'
              color={this.state.iconColor ? "yellow" : "black"} 
              onPress={this.starWithoutShade}/>
            </TouchableOpacity>  
          
        )
    }
}

import React from 'react';
import { TouchableOpacity} from 'react-native';
import { Icon} from 'react-native-elements';

export default class SelectAll extends React.Component {

    constructor(props) {
        super(props);
      
        this.state = {
          iconColor: 'black'
        }
        
     }
       starWithoutShade = () => {
         
         if(this.state.iconColor==='yellow')
         this.setState({ iconColor: 'black'});
         else
         this.setState({ iconColor: 'yellow'});
         
      }
      
    render() {
        return (
            <TouchableOpacity>
            <Icon 
              name= 'grade'
              color={this.state.iconColor} 
              onPress={this.starWithoutShade}/>
            </TouchableOpacity>  
        )
    }
}

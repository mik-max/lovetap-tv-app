import { View, Text, TouchableOpacity, Image } from 'react-native'
export const RectButton = ({minWidth, fontSize, handlePress, title,...props}) => {
     return (
        <TouchableOpacity style = {{    
             backgroundColor: '#7B16FF',
             borderRadius: 50,
             minWidth: 150,
             padding: 10,
             marginTop: 20,
             ...props
        }}  onPress = {handlePress}
        >
         <Text style = {{ fontSize: fontSize, color: 'white', textAlign: 'center'}}>{title}</Text>
        </TouchableOpacity>
     )
   }
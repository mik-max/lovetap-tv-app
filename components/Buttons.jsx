import { View, Text, TouchableOpacity, Image } from 'react-native'
export const RectButton = ({minWidth, fontSize, handlePress, title,...props}) => {
     return (
        <TouchableOpacity style = {{
             
             backgroundColor: 'hsl(161, 94%, 50%)',
             borderRadius: 50,
             minWidth: 150,
             padding: 10,
             ...props
        }}  onPress = {handlePress}
        >
         <Text style = {{ fontSize: fontSize, color: 'white', textAlign: 'center'}}>{title}</Text>
        </TouchableOpacity>
     )
   }
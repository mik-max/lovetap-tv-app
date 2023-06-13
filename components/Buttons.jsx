import { View, Text, TouchableOpacity, Image } from 'react-native'
import AntDesignIcon from 'react-native-vector-icons/AntDesign'

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
export const BackButton = ({ iconColor, handlePress,...props}) => {
     return (
       <TouchableOpacity
         style={{
           backgroundColor: "#FAFAFA",
           borderRadius: 24,
           width: 40,
           height: 40,
           position: "relative",
           justifyContent: "center",
           alignItems: "center",
           marginLeft: 10,
           marginTop: 30,
           marginBottom: 10,
           ...props,
         }}
         onPress={handlePress}
       >
         <AntDesignIcon name='left' size={20} color={ iconColor} />
       </TouchableOpacity>
     );
   }
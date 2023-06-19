import { View, Text, ScrollView, SafeAreaView, TouchableOpacity } from 'react-native'

import FocusedStatusBar from '../components/FocusedStatusBar'
import FeatherIcon from 'react-native-vector-icons/Feather'
import CommentCard from '../components/CommentCard'
import MyWebView from '../components/MyWebView'
import ChatInput from '../components/ChatInput'
import { useNavigation } from '@react-navigation/native'
const Live = () => {
     const navigation = useNavigation()
     const handlePress =  (route) => navigation.navigate(route)
     return (
          <SafeAreaView style={{flex:1}}>
               <FocusedStatusBar background ='black' />
               <View style ={{display: 'flex', flexDirection: 'row',  alignItems:'center', }}>
                    <TouchableOpacity style={{width: 45, height: 45, borderRadius: 50, display:'flex', justifyContent:'center', alignItems:'center', }}  onPress={() => {handlePress('Home')}}>
                         <FeatherIcon name="arrow-left" size={20} color="black"   />
                    </TouchableOpacity>
                    <Text style={{textAlign: 'center', fontSize: 17, fontWeight: '500', paddingVertical:10, flex:1}} >Live TV Transmission</Text>
               </View>    
               <MyWebView/> 
               <View style={{flex:1, backgroundColor: '#f1f2f3f4'}}>
                    <ScrollView>
                         <View style={{padding:10}}>
                              <Text style={{fontSize:18, fontWeight:"bold", paddingVertical: 15}}>Comments</Text>
                              <CommentCard/>
                              <CommentCard/>
                              <CommentCard/>
                              <CommentCard/>
                         </View>
                    </ScrollView>
                    {/* <Footer/> */}
                    <ChatInput/>
               </View>
          </SafeAreaView>
     )
}

export default Live
import React from 'react'
import { Dimensions } from 'react-native'
import WebView from 'react-native-webview'
const MyWebView = () => {
  return (
     <WebView allowsFullscreenVideo ={true}  source={{html: '<div style="padding:100% 0 0 0;position:relative;"><iframe src="https://vimeo.com/event/3420837/embed" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen style="position:absolute;top:0;left:0;width:100%;height:100%;"></iframe></div>' }}  />
  )
}

export default MyWebView
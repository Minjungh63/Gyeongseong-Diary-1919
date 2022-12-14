LogBox.ignoreLogs(['Warning: ...']) // Ignore log notification by message
LogBox.ignoreAllLogs() //Ignore all log notifications
import React from 'react'
import { View, Text, LogBox, ImageBackground } from 'react-native'
import styles from './styles'
import { Button } from '../components/button'
import { Box } from '../components/box'
import { STRING } from '../string'

const HomeView = ({ navigation }) => {
  return (
    <View style={{ flex: 1 }}>
      <ImageBackground
        source={require('../assets/background.jpg')}
        style={[styles.bgImage, { flex: 1 }]}
      >
        <View style={{ flex: 1, backgroundColor: 'rgba(11, 2, 2, 0.7)' }}>
          <View style={styles.container}>
            <View
              style={{
                alignItems: 'center',
                justifyContent: 'flex-end',
                flex: 0.15,
              }}
            >
              <Text style={[styles.titleNoticeText]}>경성일기 : 1919</Text>
            </View>
            <Box text={STRING.guide} text2={STRING.guide_content} />
            <Button
              navigation={navigation}
              text={STRING.start_buttonText}
              viewName={'Quest1View'}
            />
          </View>
        </View>
      </ImageBackground>
    </View>
  )
}

export default HomeView

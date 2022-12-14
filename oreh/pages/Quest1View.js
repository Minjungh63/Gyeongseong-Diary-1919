LogBox.ignoreLogs(['Warning: ...']) // Ignore log notification by message
LogBox.ignoreAllLogs() //Ignore all log notifications
import React, { useState, useEffect } from 'react'
import {
  View,
  Text,
  LogBox,
  ImageBackground,
  Dimensions,
  StatusBar,
  BackHandler,
  Alert,
} from 'react-native'
import styles from './styles'
import { Button } from '../components/button'
import { Box } from '../components/box'
import { Input } from '../components/Input'
import { ModalWindow } from '../components/modal'
import { Header } from '../components/head'
import { STRING } from '../string'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'

const Quest1View = ({ navigation }) => {
  useEffect(() => {
    const backAction = () => {
      Alert.alert('', '앱을 종료하시겠습니까?', [
        {
          text: '취소',
          onPress: () => null,
        },
        { text: '종료', onPress: () => BackHandler.exitApp() },
      ])
      return true
    }

    const backHandler = BackHandler.addEventListener(
      'hardwareBackPress',
      backAction,
    )

    return () => backHandler.remove()
  }, [])
  const [inputAns, setInputAns] = useState('')
  const [hintOpen, setHintOpen] = useState(false)
  const [isWrongAns, setIsWrongAns] = useState(false)
  const [isHintFin, setIsHintFin] = useState(false)
  const [useHint, setUseHint] = useState(false)

  return (
    <KeyboardAwareScrollView
      contentContainerStyle={{
        height: Dimensions.get('window').height + StatusBar.currentHeight,
        width: Dimensions.get('window').width,
      }}
      resetScrollToCoords={{ x: 0, y: 0 }}
      scrollEnabled={false}
    >
      <ImageBackground
        source={require('../assets/background.jpg')}
        style={[styles.bgImage, { height: Dimensions.get('screen').height }]}
      >
        <View style={styles.container}>
          <Header
            setHintOpen={setHintOpen}
            setIsHintFin={setIsHintFin}
            useHint={useHint}
            setUseHint={setUseHint}
            timerStart={true}
          />
          <View
            style={{
              flex: 0.1,
              alignItems: 'flex-end',
              justifyContent: 'flex-end',
              paddingBottom: 10,
              paddingLeft: 10,
            }}
          >
            <Text style={styles.basicText}>1918년 10월 1일</Text>
          </View>
          <Box
            option={'quest'}
            img={require('../assets/quest_img/questImg1_2.png')}
            img2={require('../assets/quest_img/questImg1_1.png')}
            hintNum={'Mission 01.'}
            text={STRING.quest1}
          />
          <View
            style={{
              flex: 0.05,
              justifyContent: 'space-around',
              flexDirection: 'row',
              alignItems: 'center',
            }}
          >
            <Input setInputAns={setInputAns} />
            <Button
              navigation={navigation}
              text={STRING.quest_buttonText}
              viewName={'Quest2View'}
              inputAns={inputAns}
              ans={STRING.ans1}
              setIsWrongAns={setIsWrongAns}
            />
          </View>
          <ModalWindow
            open={hintOpen}
            setOpen={setHintOpen}
            text={STRING.hint1_1}
            text2={STRING.hint1_2}
            isHint={true}
          />
          <ModalWindow
            open={isHintFin}
            setOpen={setIsHintFin}
            text={STRING.hintEndModalText}
            isHint={false}
          />
          <ModalWindow
            open={isWrongAns}
            setOpen={setIsWrongAns}
            text={STRING.wrongAnsModalText}
            isHint={false}
          />
        </View>
      </ImageBackground>
    </KeyboardAwareScrollView>
  )
}

export default Quest1View

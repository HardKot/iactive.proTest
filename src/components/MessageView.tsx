import React, {useCallback, useRef, useState} from 'react'
import {Text, View, StyleSheet, Animated} from 'react-native'
import type { FC } from 'react'
import type { ViewProps } from 'react-native'
import UserView from "./UserView";
import Content from "./Content";
import MessagesToolsButtons from "./MessagesToolsButtons";
interface MessageProps extends ViewProps {
  message: MessageType
}

const styles = StyleSheet.create({
  background: {
    padding: 5,
    width: '100%',
    borderBottomColor: '#4c4c4c',
    borderBottomWidth: 2,
    marginBottom: 5,
    paddingBottom: 10
  },
  nextButton: {
    color: '#808080',
    fontWeight: '400',
    fontSize: 12,
    marginVertical: 8,
  },
  teg: {
    fontSize: 12,
    fontWeight: '400',
    marginHorizontal: 4
  },
  messageBody: {
    flex: 1,
    flexDirection: 'row',
  },
  dateTimeCreate: {
    color: '#808080',
    fontWeight: '400',
    fontSize: 14,
    marginHorizontal: 5
  },
  textBody: {
    fontSize: 16,
    fontWeight: '400',
    color: '#3333333',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  }
})

const MessageView: FC<MessageProps>  = (props) => {
  const [isHidden, setIsHidden] = useState(false)
  const opacityAnimated = useRef(new Animated.Value(1000)).current
  const { message } = props

  const hiddenContent = () => Animated.timing(opacityAnimated, { toValue: 0, useNativeDriver: false, duration: 500 })
    .start(() => {setIsHidden(true)})

  const showContent = () => {
    setIsHidden(false)
    Animated.timing(opacityAnimated, { toValue: 1, useNativeDriver: false, duration: 500 }).start()
  }

  const sharingContent = () => {
    if (message.attachments.length > 0) {
      return message.attachments[0].url
    }
    return undefined
  }

  return (
    <View
      {...props}
      style={[styles.background, props.style]}
    >
      <View style={styles.header}>
        <UserView user={{ imageURL: undefined, name: message.author }} />
        <MessagesToolsButtons
          messageId={`${message.channel}_${message.id}`}
          onPressHidden={useCallback(()=>{
            if (isHidden) {
              showContent()
            } else {
              hiddenContent()
            }}, [isHidden])}
          sharingContent={sharingContent()}
        />
      </View>
      {
        isHidden ? null :
          <Animated.View style={[styles.messageBody, { opacity: opacityAnimated }]}>
            <Text style={styles.dateTimeCreate}>
              {message.dateTimeCreate.getHours()}:{message.dateTimeCreate.getMinutes() < 10 ? 0 : null}{message.dateTimeCreate.getMinutes()}
            </Text>
            <Content attachments={message.attachments} text={message.content} style={{ flex: 1 }}/>
          </Animated.View>
      }
    </View>
  )
}

export default MessageView


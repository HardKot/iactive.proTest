import React, { useState } from 'react'
import {View, Image, Text, StyleSheet, Button, Pressable} from 'react-native'
import type { FC } from 'react'
import type { ViewProps } from 'react-native'
import {Video} from "expo-av";

interface ContentProps extends ViewProps {
  text?: string,
  attachments: Array<attachmentsContent>
}

const styles = StyleSheet.create({
  attachments: {
    height: 300,
    width: 300,
    marginVertical: 10,
  }
})

const Content: FC<ContentProps> = (props) => {
  const { text, attachments } = props
  const [isShowText, setIsShowText] = useState(false)
  return (
    <View {...props}>
      {
        text ?
          <View style={{ flex: 1 }}>
            <Text numberOfLines={isShowText ? 0 : 249} style={{ height: 50 }} ellipsizeMode={"clip"}>{text}</Text>
            {
              text.length <= 249 || isShowText ? null :
                <Pressable onPress={()=>(setIsShowText(true))}>
                  <Text style={{ color: '#808080' }}>Далее</Text>
                </Pressable>
            }
          </View>
          : null
      }
      {
        attachments.length == 0 ? null :
          <View style={{ justifyContent: 'flex-start', flexDirection: 'row', alignContent : 'center' }}>
            {
              attachments.map(
                (item, index) =>
                  item.type == 'image' ?
                    <Image
                      source={{ uri: item.url }}
                      key={index.toString()}
                      style={styles.attachments}
                      resizeMode={'contain'}
                    /> :
                  item.type == 'video' ?
                    <Video
                      source={{ uri: item.url }}
                      key={index.toString()}
                      useNativeControls
                      resizeMode={'contain'}
                      style={styles.attachments}

                    />
                    : null)
            }
          </View>
      }
    </View>
  )
}

export default Content
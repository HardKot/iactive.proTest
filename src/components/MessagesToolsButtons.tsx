import React, {useCallback, useEffect, useState} from 'react'
import {View, Pressable, StyleSheet, Image} from 'react-native'
import * as Sharing from 'expo-sharing';
import MessageFavorites from '../../static/icons/MessageFavourites'
import MessageSend from '../../static/icons/MessageSend'
import MessagesHide from '../../static/icons/MessagesHide'
import Options from '../../static/icons/Options'
import type { FC } from 'react'
import type { ViewProps } from 'react-native'
import {addMessageIdFavorite, checkMessageIdFavorite, removeMessageIdFavorite} from "../models/messages";

interface MessagesToolsButtonsProps extends ViewProps {
  isFavorite?: boolean
  messageId: string
  onPressHidden?: {(): void}
  sharingContent?: any
}


const styles = StyleSheet.create({
  background: {
    flexDirection: 'row'
  }
})

const MessagesToolsButtons: FC<MessagesToolsButtonsProps> = (props) => {
  const [sharingIsAvailable, setSharingIsAvailable] = useState<boolean | undefined>()
  const [isFavorite, setIsFavorite] = useState<boolean>(false)
  const { messageId, onPressHidden, sharingContent } = props

  useEffect(()=>{
    checkMessageIdFavorite(messageId).then((result) => setIsFavorite(result))
    Sharing.isAvailableAsync().then((result) => setSharingIsAvailable(result))
    return ()=> {

    }
  },[setIsFavorite])

  const editStatusFavoriteMessage = useCallback(()=>{
    if (isFavorite) {
      removeMessageIdFavorite(messageId).then(()=>setIsFavorite(false))
    } else {
      addMessageIdFavorite(messageId).then(()=>setIsFavorite(true))
    }
  }, [isFavorite])
  if (sharingIsAvailable == undefined) {
    return null
  }
  return (
    <View style={styles.background} {...props}>
      {
        sharingContent && sharingIsAvailable ?
          <Pressable /* onPress={()=> Sharing.shareAsync(sharingContent, { dialogTitle: 'Поделиться' }).catch()} */>
            <MessageSend />
          </Pressable>
          : null
      }
      <Pressable onPress={()=> onPressHidden()}>
        <MessagesHide />
      </Pressable>
      <Pressable>
        <Options />
      </Pressable>
      <Pressable onPress={editStatusFavoriteMessage}>
        <MessageFavorites isFavorite={isFavorite}/>
      </Pressable>
    </View>
  )
}

export default MessagesToolsButtons
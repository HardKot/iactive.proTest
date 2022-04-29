import React, { useEffect, useReducer, forwardRef, useImperativeHandle } from 'react'
import {FlatList, View, ActivityIndicator, Button} from 'react-native'
import type { FC } from 'react'
import type { ViewProps } from 'react-native'
import MessageView from "./components/MessageView";
import {getMessages, subscribeGetMessages} from "./models/messages";


enum MessagesViewStatus {
  LOADING,
  READY,
  ERROR
}

type Direction = 'newOld' | 'oldNew'

interface MessagesViewState {
  messages: Array<any>
  status: MessagesViewStatus
  direction: Direction
}

interface MessagesViewProps extends ViewProps {

}


type MessagesViewAction =
  { type: 'addMessage', payload: any } |
  { type: 'editDirection', payload: any }

function reducer(state: MessagesViewState, { type, payload }: MessagesViewAction): MessagesViewState {
  switch (type) {
    case "addMessage":
      if (payload.length != 0) {
        if (state.messages.length == 0) {
          state.status = MessagesViewStatus.READY
        }
        state.messages = [...state.messages, ...payload]
      }
      break
    case "editDirection":
      state.direction = payload
      break
  }
  return { ...state }
}

const initState: MessagesViewState = {
  messages: [],
  status: MessagesViewStatus.LOADING,
  direction: 'oldNew'
}


const MessagesView: FC<MessagesViewProps> = (props) => {
  const [state, dispatch] = useReducer(reducer, initState)
  useEffect(()=>{
    let unSubscribe = subscribeGetMessages(
      (messages) => {dispatch({ type: 'addMessage', payload: messages })},
      (error) => {alert(error)}
    )
    return () => {
      unSubscribe()
    }
  }, [dispatch])

  switch (state.status) {
    case MessagesViewStatus.LOADING:
      return (
        <ActivityIndicator color={'#000000'}/>
      )
    case MessagesViewStatus.READY:
      return (
        <View {...props}>
          <Button
            title={state.direction == 'newOld' ? 'Сначала новые' : 'Сначала старые'}
            onPress={() => dispatch({ type: 'editDirection', payload: state.direction == 'newOld' ? 'oldNew' : 'newOld' })}
          />
          <FlatList
            data={state.messages}
            renderItem={({ item })=>(<MessageView message={item} />)}
            keyExtractor={(item) => (`${item.channel}_${item.id}`)}
            inverted={state.direction == 'newOld'}
          />
        </View>
      )
  }
}

export default MessagesView
import AsyncStorage from '@react-native-async-storage/async-storage'

enum StatusRequest {
  LOADING,
  WAIT
}

let statusRequest: StatusRequest = StatusRequest.WAIT

export function subscribeGetMessages(onGetNewMessage, onError = console.error) {
  let work: boolean = true
  new Promise(async()=>{
    let lastMessageId: number
    let messages: Array<MessageType>
    messages = await getMessages()
    onGetNewMessage(messages)
    lastMessageId = messages[messages.length - 1].id
    while (work) {
      try {
        console.log('Проверяю сообщения. Последний id', lastMessageId)
        messages = await getMessages(lastMessageId)
        if (messages.length > 0) {
          lastMessageId = messages[0].id
          onGetNewMessage(messages)
        }
      } catch (error) {
        onError(error)
      }
      await new Promise(res => setTimeout(res, 5 * 1000))
    }
  })
  return () => {work = false}
}



export async function getMessages(lastMessageId:number=0, oldMessage: boolean = false): Promise<Array<MessageType>> {
  const formData = new FormData()
  formData.append('actionName', 'MessagesLoad')
  formData.append('messageId', lastMessageId.toString())
  formData.append('oldMessage', oldMessage.toString())
  const result = await fetch('http://f0665380.xsph.ru/', {
    method: 'POST',
    body: formData
  })
  if (result.ok) {
    const json = await result.json()
    if (json == 'no message') {
      return []
    }
    statusRequest = StatusRequest.WAIT
    return json.Messages.map(message => ({
      id: message.id,
      channel: message.channel,
      author: message.author,
      content: message.content.length != 0 ? message.content : undefined,
      attachments: message.attachments,
      dateTimeCreate: new Date(Date.parse(message.date.replace(' ', 'T')))
    }))
  }
  throw new Error('Server Error')
}

export async function addMessageIdFavorite(messageId: string) {
  const messagesIdFavorite = JSON.parse(await AsyncStorage.getItem('@MessagesIdFavorite') ?? '[]')
  messagesIdFavorite.push(messageId)
  await AsyncStorage.setItem('@MessagesIdFavorite', JSON.stringify(messagesIdFavorite.sort()))
}

export async function removeMessageIdFavorite(messageId: string) {
  const messagesIdFavorite = JSON.parse(await AsyncStorage.getItem('@MessagesIdFavorite') ?? '[]')
  await AsyncStorage.setItem('@MessagesIdFavorite', JSON.stringify(
    messagesIdFavorite.filter(item=> messageId != item)))
}

export async function checkMessageIdFavorite(messageId: string) {
  const messagesIdFavorite = JSON.parse(await AsyncStorage.getItem('@MessagesIdFavorite') ?? '[]')
  return (messagesIdFavorite.includes(messageId))
}
import React from 'react'
import { Image, View, Text, StyleSheet } from 'react-native'
import type { FC } from 'react'
import type { ViewProps } from 'react-native'

type sizeView = 'small'

interface UserViewProps extends ViewProps {
  user: UserType,
}
const styles = StyleSheet.create({
  background: {
    flexDirection: 'row',
    padding: 5
  },
  image: {
    width: 36,
    height: 36,
    borderRadius: 18,
  },
  nameBackground: {
    marginLeft: 10
  },
  name: {
    fontSize: 16,
    color: '#808080',
    fontWeight: '400',
  },
  subText: {
    fontSize: 12,
    color: '#808080',
    fontWeight: '400',
  },
  textCustomIcon: {
    backgroundColor: 'blue',
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    textAlignVertical: 'center',
    paddingTop: 3
  }
})

const UserView: FC<UserViewProps> = (props)=> {
  const { user } = props
  return (
    <View {...props} style={styles.background}>
      {
        user.imageURL ? <Image source={{ uri: user.imageURL }} style={styles.image}/> :
          <Text style={[styles.image, styles.textCustomIcon]}>{user.name[0]}</Text>
      }

      <View style={styles.nameBackground}>
        <Text style={styles.name}>{user.name}</Text>
        <Text style={styles.subText}>Текст поста в соц. сетях если это комментарий</Text>
      </View>
    </View>
  )
}

export default UserView

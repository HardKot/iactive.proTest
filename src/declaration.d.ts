declare module "*.svg" {
  import React from 'react';
  import { SvgProps } from "react-native-svg";
  const content: React.FC<SvgProps>;
  export default content;
}

declare interface UserType {
  imageURL?: string
  name: string
}

declare type attachmentsContent = { type: 'video' | 'image', url: string }

declare interface MessageType {
  channel: string,
  id: number,
  author: string,
  content?: string,
  attachments: Array<attachmentsContent>,
  dateTimeCreate: Date
}
export enum Sender {
  React,
  Content,
}

export enum MessageEnum {
  TOGGLE_SNOW = 'TOGGLE_SNOW',
  SNOW_STATUS = 'SNOW_STATUS',
  CHANGED_PAGE = 'CHANGED_PAGE',
  REQ_SNOW_STATUS = 'REQ_SNOW_STATUS',
}

interface BaseMessage<T extends MessageEnum> {
  type: T;
}

export interface ChromeMessage {
  from: Sender;
  message: string;
}

// Popup or content script requesting the current status
export type ChangedPage = BaseMessage<MessageEnum.CHANGED_PAGE>;

// Popup or content script requesting the current status
interface SnowRequest {
  type: MessageEnum.REQ_SNOW_STATUS;
}

// Background script broadcasting current status
interface SnowResponse extends BaseMessage<MessageEnum.SNOW_STATUS> {
  snowing: boolean;
}

// Popup requesting background script for status change
interface SnowToggle {
  type: MessageEnum.TOGGLE_SNOW;
  snowing: boolean;
}

export type MessageType = SnowRequest | SnowResponse | SnowToggle | ChangedPage;

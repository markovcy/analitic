/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';

import { MessageType, MessageEnum } from '../types';

const color = '#3aa757';

chrome.runtime.onInstalled.addListener(() => {
  chrome.storage.sync.set({ color });
  console.log('Default background color set to %cgreen', `color: ${color}`);
});

chrome.runtime.onMessage.addListener((message: MessageType) => {
  switch (message.type) {
    case MessageEnum.CHANGED_PAGE:
      console.log('before render');
      break;

    default:
      console.log(message);
      break;
  }
});

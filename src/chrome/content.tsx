import { MessageEnum } from '../types';

chrome.runtime.sendMessage({
  type: MessageEnum.CHANGED_PAGE,
});

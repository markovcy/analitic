/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/ban-ts-comment */
import React, { useEffect, useState } from 'react';
import cx from 'classnames';
// import axios from 'axios';
// import { ChromeMessage, Sender } from '../../types';
import { Widget, Popup } from '@upp/chrome/components';

import styles from './ExtensionWrapper.module.scss';

export const ExtensionWrapper = () => {
  const [url, setUrl] = useState<string | undefined>('');
  const [isPopupVisible, setPopupVisible] = useState<boolean>(true);
  // const [responseFromContent, setResponseFromContent] = useState<string>('');

  /**
   * Get current URL
   */
  useEffect(() => {
    const queryInfo = { active: true, lastFocusedWindow: true };

    chrome.tabs &&
      chrome.tabs.query(queryInfo, (tabs) => {
        console.log(tabs);
        const { url } = tabs[0];
        setUrl(url);
      });
  }, []);

  const onWidgetClick = () => {
    setPopupVisible(!isPopupVisible);
  };

  return (
    <div
      className={cx(styles.wrapper, {
        [styles.expanded]: isPopupVisible,
      })}
    >
      {console.log('URL')}
      {console.log(url)}
      <Widget isExpanded={isPopupVisible} onWidgetClick={onWidgetClick} />
      {isPopupVisible && <Popup isVisible={isPopupVisible} />}
    </div>
  );
};

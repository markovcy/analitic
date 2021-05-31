/* eslint-disable @typescript-eslint/ban-ts-comment */
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { ChromeMessage, Sender } from '../../types';

import Styles from './ExtensionWrapper.module.scss';

import { Widget } from '../index';

const ExtensionWrapper = () => {
  const [url, setUrl] = useState<string | undefined>('');
  const [responseFromContent, setResponseFromContent] = useState<string>('');

  /**
   * Get current URL
   */
  useEffect(() => {
    const queryInfo = { active: true, lastFocusedWindow: true };

    // chrome.tabs &&
    //   chrome.tabs.query(queryInfo, (tabs) => {
    //     console.log(tabs);
    //     const { url } = tabs[0];
    //     setUrl(url);
    //   });
  }, []);

  // chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
  //   chrome.tabs.sendMessage(
  //     // @ts-ignore
  //     tabs[0].id,
  //     { createDiv: { width: '100px', height: '100px', innerHTML: 'Hello' } },
  //     function (response) {
  //       console.log(response.confirmation);
  //     }
  //   );
  // });

  return (
    <div className={Styles.wrapper}>
      <Widget isCandidateExist={false} />
      <p>URL:</p>
      <p>{url}</p>
    </div>
  );
};

export default ExtensionWrapper;

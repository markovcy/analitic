/* eslint-disable @typescript-eslint/ban-ts-comment */
import React, { useEffect, useState } from 'react';
import Create from 'uppeople/components/Candidate/Create/Create';
import { ChromeMessage, Sender } from '../../types';

import logo from '../../logo.svg';

const ExtensionWrapper = () => {
  const [url, setUrl] = useState<string | undefined>('');
  const [responseFromContent, setResponseFromContent] = useState<string>('');

  /**
   * Get current URL
   */
  useEffect(() => {
    const queryInfo = { active: true, lastFocusedWindow: true };

    chrome.tabs &&
      chrome.tabs.query(queryInfo, (tabs) => {
        const { url } = tabs[0];
        setUrl(url);
      });
  }, []);

  /**
   * Send message to the content script
   */
  const sendTestMessage = () => {
    const message: ChromeMessage = {
      from: Sender.React,
      message: 'Hello from React',
    };

    const queryInfo: chrome.tabs.QueryInfo = {
      active: true,
      currentWindow: true,
    };

    /**
     * We can't use "chrome.runtime.sendMessage" for sending messages from React.
     * For sending messages from React we need to specify which tab to send it to.
     */
    chrome.tabs &&
      chrome.tabs.query(queryInfo, (tabs) => {
        const currentTabId = tabs[0].id;
        /**
         * Sends a single message to the content script(s) in the specified tab,
         * with an optional callback to run when a response is sent back.
         *
         * The runtime.onMessage event is fired in each content script running
         * in the specified tab for the current extension.
         */
        if (typeof currentTabId === 'number') {
          chrome.tabs.sendMessage(
            // @ts-ignore
            currentTabId,
            message,
            (response) => {
              setResponseFromContent(response);
            }
          );
        }
      });
  };

  const sendRemoveMessage = () => {
    const message: ChromeMessage = {
      from: Sender.React,
      message: 'delete logo',
    };

    const queryInfo: chrome.tabs.QueryInfo = {
      active: true,
      currentWindow: true,
    };

    chrome.tabs &&
      chrome.tabs.query(queryInfo, (tabs) => {
        const currentTabId = tabs[0].id;
        chrome.tabs.sendMessage(
          // @ts-ignore
          currentTabId,
          message,
          (response) => {
            setResponseFromContent(response);
          }
        );
      });
  };

  const formProps = {
    platforms: [
      {
        id: 1,
        label: '1',
        value: '1',
      },
      {
        id: 2,
        label: '2',
        value: '2',
      },
      {
        id: 3,
        label: '3',
        value: '3',
      },
    ],
    seniorities: [
      {
        id: 1,
        label: '1',
        value: '1',
      },
      {
        id: 2,
        label: '2',
        value: '2',
      },
      {
        id: 3,
        label: '3',
        value: '3',
      },
    ],
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>URL:</p>
        <p>{url}</p>
        <Create />
        <button type="button" onClick={sendTestMessage}>
          SEND MESSAGE
        </button>
        <button type="button" onClick={sendRemoveMessage}>
          Remove logo
        </button>
        <p>Response from content:</p>
        <p>{responseFromContent}</p>
      </header>
    </div>
  );
};

export default ExtensionWrapper;

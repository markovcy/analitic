import React, { useState, useEffect } from 'react';
import cx from 'classnames';

import { CandidateForm } from '@upp/chrome/components';

import { MessageType } from '../../types';

import styles from './Popup.module.scss';

interface PopupProps {
  isVisible: boolean;
}

export const Popup = (props: PopupProps) => {
  const [snowing, setSnowing] = useState(true);

  const { isVisible } = props;

  // useEffect(() => {
  //   chrome.runtime.sendMessage({ type: 'REQ_SNOW_STATUS' });
  //   chrome.runtime.onMessage.addListener((message: MessageType) => {
  //     switch (message.type) {
  //       case 'SNOW_STATUS':
  //         setSnowing(message.snowing);
  //         break;
  //       default:
  //         break;
  //     }
  //   });
  // }, []);

  const onModalClose = () => {
    console.log('on modal close');
  };

  const onClick = () => {
    setSnowing(!snowing);
    console.log(snowing);
    // chrome.runtime.sendMessage({ type: 'TOGGLE_SNOW', snowing: !snowing });
  };

  return (
    <div
      className={cx(styles.popup, {
        [styles.visible]: isVisible,
      })}
    >
      <CandidateForm />
    </div>
  );
};

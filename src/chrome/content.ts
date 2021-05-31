// /* eslint-disable @typescript-eslint/ban-ts-comment */
// /* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';
// import ReactDOM from 'react-dom';
// import { ChromeMessage, Sender } from '../types';

// import './content.css';
// import { Widget } from '../components';

// const messagesFromReactAppListener = (
//   message: ChromeMessage,
//   sender: any,
//   response: any
// ) => {
//   console.log('[content.js]. Message received', {
//     message,
//     sender,
//   });

//   if (
//     sender.id === chrome.runtime.id &&
//     message.from === Sender.React &&
//     message.message === 'Hello from React'
//   ) {
//     response('Hello from content.js');
//   }

//   if (
//     sender.id === chrome.runtime.id &&
//     message.from === Sender.React &&
//     message.message === 'delete logo'
//   ) {
//     const logo = document.getElementById('hplogo');
//     // logo.parentElement.removeChild(logo)
//   }
// };

// /**
//  * Fired when a message is sent from either an extension process or a content script.
//  */
// chrome.runtime.onMessage.addListener(messagesFromReactAppListener);

// chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
//   if (request.requested == 'createDiv') {
//     // Code to create the div
//     sendResponse({ confirmation: 'Successfully created div' });
//   }
// });

// const widgetContainer = document.createElement('div');
// widgetContainer.className = 'widget-container';
// widgetContainer.setAttribute('aria-hidden', 'true');

// const widget = document.createElement('div');
// widget.className = 'widget';
// widget.style.width = '50px';
// widget.style.height = '50px';
// widget.style.color = 'pink';
// widget.style.border = '1px solid blue';
// widget.style.borderRadius = '50%';
// widget.style.backgroundColor = 'blue';
// widget.style.position = 'absolute';
// widget.style.top = '200px';
// widget.style.right = '0px';
// widget.style.zIndex = '10000';
// widget.innerHTML = 'Up';
// widget.onclick = function handleClick() {
//   console.log('hello');
//   widget.style.color = 'green';
// };

// // width: 200px;
// //   height: 200px;
// //   color: pink;
// //   background-color: blue;
// //   position: absolute;
// //   top: 200px;
// //   right: 20px;

// // widgetContainer.appendChild(Widget);
// // @ts-ignore
// ReactDOM.render(Widget, document.getElementsByTagName('body'));

// body[0]?.prepend(widgetContainer);

// /* eslint-disable no-case-declarations */
// /* eslint-disable @typescript-eslint/no-explicit-any */
import axios from 'axios';

// const CANDIDATE_URL_EXPRESSION = 'https://www.linkedin.com/in/.+/';

// chrome.tabs.onUpdated.addListener(function (tabId, changeInfo, tabs) {
//   const matchedURL = decodeURIComponent(
//     typeof tabs.url === 'string' ? tabs.url : 'url'
//   ).match(CANDIDATE_URL_EXPRESSION);

//   if (matchedURL !== null) {
//     if (changeInfo.status === 'loading') {
//       chrome.storage.local.get('access_token', (token: any) => {
//         if (token !== null) {
//           check(matchedURL[0]);
//         } else {
//           chrome.storage.local.set({
//             result: {
//               status: 401,
//               api: 'new_url',
//             },
//           });
//         }
//       });
//     }
//   }
// });

// chrome.runtime.onMessage.addListener((msg) => {
//   switch (msg.command) {
//     case 'update_candidate':
//       AJAXJson(`${API_URL}/api/main/addNewCandidate`, msg.data);
//       break;
//     case 'update_selector':
//       AJAX(
//         `${API_URL}/api/update_selector`,
//         `name=${msg.name}&selector=${encodeURIComponent(
//           msg.new_selector
//         )}&type=${msg.type}`,
//         ''
//       );
//       break;
//     case 'authorize':
//       AJAXJson('/api/auth/login', msg.data);
//       break;
//     case 'new_url':
//       console.log('try check again');
//       check(msg.url);
//       break;
//     case 'find_dublicate':
//       AJAX('/api/get_candidate_info', msg.params, '');
//       break;
//     default:
//       console.log('unknow command', msg);
//   }
// });

// const API_URL = process.env.REACT_APP_API_URL;
// const xhttp = new XMLHttpRequest();

// function AJAXJson(api: string, data: any) {
//   xhttp.open('POST', API_URL + api, true);
//   if (data.token > '') {
//     xhttp.setRequestHeader('Authorization', `Bearer ${data.token}`);
//   }
//   xhttp.setRequestHeader('Content-Type', 'application/json');
//   delete data.token;
//   const body = JSON.stringify(data);
//   xhttp.onreadystatechange = function (this: any) {
//     if (this.readyState !== 4) {
//       return;
//     }
//     if (this.status === 200) {
//       const result = JSON.parse(this.responseText);
//       chrome.storage.local.set({
//         result: {
//           status: 'ok',
//           message: result.message,
//           result,
//           api,
//         },
//       });
//     } else if (this.status >= 200 && this.status < 300) {
//       const result = JSON.parse(this.responseText);
//       chrome.storage.local.set({
//         result: {
//           status: this.status,
//           message: result.message,
//           result,
//           api,
//         },
//       });
//     } else if (this.status === 400) {
//       const data = JSON.parse(this.responseText);
//       chrome.storage.local.set({
//         result: {
//           status: this.status,
//           formErrors: data.formErrors,
//           api,
//         },
//       });
//     } else if (this.status === 401) {
//       set401(api);
//     } else {
//       console.log('error unknown');
//       chrome.storage.local.set({
//         result: {
//           status: this.status,
//           result: this.responseText,
//           api,
//         },
//       });
//     }
//   };
//   xhttp.send(body);
// }

// function set401(api: string) {
//   console.log('401, need auth');
//   chrome.storage.local.set({
//     result: {
//       status: 401,
//       result: '',
//       api,
//     },
//     ajax_error: 401,
//   });
// }

// function AJAX(api: string, param: string, token: string) {
//   chrome.storage.local.set({
//     result: null,
//   });
//   const xhttp = new XMLHttpRequest();
//   xhttp.open('POST', API_URL + api, true);
//   if (token > '') {
//     xhttp.setRequestHeader('Authorization', `Bearer ${token}`);
//   }
//   xhttp.setRequestHeader(
//     'Content-Type',
//     'application/x-www-form-urlencoded'
//     // 'Set-Cookie: cross-site-cookie=name; SameSite=Strict; Secure'
//   );
//   xhttp.onreadystatechange = function (this: any) {
//     if (this.readyState !== 4) {
//       return;
//     }
//     if (this.status === 200) {
//       switch (api) {
//         case '/api/auth/login':
//           chrome.storage.local.set({
//             result: {
//               status: 'ok',
//               result: JSON.parse(this.responseText),
//               api,
//             },
//           });
//           break;

//         case '/api/get_platforms':
//           chrome.storage.local.set({
//             platforms: JSON.parse(this.responseText).status,
//           });
//           break;

//         case '/api/get_seniorities':
//           chrome.storage.local.set({
//             seniorities: JSON.parse(this.responseText).status,
//           });
//           break;

//         case '/api/get_tags':
//           chrome.storage.local.set({
//             tags: JSON.parse(this.responseText).status,
//           });
//           break;

//         case '/api/get_reasons':
//           chrome.storage.local.set({
//             reasons: JSON.parse(this.responseText).status,
//           });
//           break;

//         case '/api/get_recruiter_vacancies':
//           chrome.storage.local.set({
//             vacancies: JSON.parse(this.responseText).vacancies,
//           });
//           break;

//         case '/api/get_selectors':
//           chrome.storage.local.set({
//             selectors: JSON.parse(this.responseText).data,
//           });
//           break;

//         case '/api/get_candidate_info':
//           if (param.startsWith('name=')) {
//             chrome.storage.local.set({
//               dublicate: JSON.parse(this.responseText),
//             });
//           } else {
//             chrome.storage.local.set({
//               candidate: JSON.parse(this.responseText),
//             });
//           }

//           chrome.storage.local.set({
//             result: {
//               // status: result_.status,
//               // result: result_,
//               api,
//             },
//           });
//           break;

//         default:
//           const result = JSON.parse(this.responseText);
//           chrome.storage.local.set({
//             result: {
//               status: result.status,
//               result,
//               api,
//             },
//           });
//           break;
//       }
//     } else if (this.status === 204) {
//       switch (api) {
//         case '/api/get_candidate_info':
//           chrome.storage.local.set({ candidate: null });

//           chrome.storage.local.set({
//             result: {
//               status: 'ok',
//               result: '{"data":""}',
//               api,
//             },
//           });
//       }
//     } else if (this.status === 400) {
//       switch (api) {
//         case '/api/get_candidate_info':
//           chrome.storage.local.set({ candidate: null });
//       }
//       chrome.storage.local.set({
//         result: {
//           status: 400,
//           result: JSON.parse(this.responseText),
//           api,
//         },
//       });
//     } else if (this.status === 401) {
//       set401(api);
//     } else if (this.status === 0) {
//       chrome.storage.local.set({
//         result: {
//           status: 0,
//           result: 'pls, open CRM site & try again',
//           api,
//         },
//       });
//     } else {
//       console.log(this.response);
//       chrome.storage.local.set({
//         result: {
//           status: this.status,
//           result: this.responseText,
//           api,
//         },
//       });
//     }
//   };

//   xhttp.send(param);
// }

// function check(url_: string) {
//   chrome.storage.local.remove('ajax_error');
//   const url = url_ !== null ? url_ : decodeURIComponent(window.location.href);
//   chrome.tabs.query({ currentWindow: true, active: true }, function (tab) {
//     AJAX('/api/get_selectors', 'null', '');
//     AJAX('/api/get_platforms', 'null', '');
//     AJAX('/api/get_seniorities', 'null', '');
//     AJAX('/api/get_tags', 'null', '');
//     AJAX('/api/get_reasons', 'null', '');
//     const matchedURL = url.match(CANDIDATE_URL_EXPRESSION);
//     if (matchedURL !== null) {
//       chrome.storage.local.get('access_token', (token) => {
//         // отримання локальних даних
//         if (token !== null) {
//           AJAX('/api/get_recruiter_vacancies', 'null', token.access_token);
//           chrome.storage.local.get('ajax_error', function (data) {
//             // отримання локальних даних
//             if (data.ajax_error !== null && data.ajax_error === 401) {
//               console.log(data);
//               // chrome.storage.local.remove('ajax_error');
//               chrome.storage.local.remove('access_token');
//             } else {
//               AJAX('/api/get_candidate_info', `url=${matchedURL[0]}`, '');
//             }
//           });
//         } else {
//           console.log('need to auth');
//           chrome.storage.local.set({
//             ajax_error: 401,
//           });
//         }
//       });
//     }
//   });
// }

// function encodeQueryData(data: any) {
//   const ret = [];
//   for (const d in data)
//     if (data[d] !== null && data[d].length > 0) {
//       ret.push(`${encodeURIComponent(d)}=${encodeURIComponent(data[d])}`);
//     }
//   return ret.join('&');
// }

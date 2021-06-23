import React from 'react';
import ReactDOM from 'react-dom';

import { App } from './App';
import reportWebVitals from './reportWebVitals';

import './styles/index.scss';
import styles from './styles/dev.module.scss';

const viewport = document.body;
const appId = process.env.REACT_APP_ID;
const isDev = process.env.NODE_ENV === 'development';

if (viewport) {
  let root = viewport.querySelector(`#${appId}`);

  if (!root) {
    root = document.createElement('div');
    root.id = appId || '';
    root.attachShadow({ mode: 'open' });
  }

  if (!root.shadowRoot) {
    viewport.appendChild(root);
  }

  const app = document.createElement('div');

  if (isDev) {
    app.classList.add(styles.body);
  }

  root.shadowRoot?.prepend(app);
  ReactDOM.render(<App />, app);
}

const k = document.createElement('div');

k.innerHTML = `<body dir="ltr" class="render-mode-BIGPIPE nav-v2 ember-application boot-complete icons-loaded" data-t-link-to-event-attached="true" data-new-gr-c-s-loaded="14.1017.0"><meta name="apple-itunes-app" content="app-id=288429040, affiliate-data=ct=campaign_vw_smart_app_banner&amp;pt=10746, app-argument=voyager://in/alexandr-tretiakov-ba831051/?trk=vw_smart_app_banner">
    
  

  
<!-- HUED-11420 -->
<div id="artdeco-toasts__wormhole">  <section id="artdeco-toasts" class="artdeco-toasts">
<header class="artdeco-toasts__header">
  <h2 class="artdeco-toasts__title">
    Всего 0&nbsp;уведомлений
  </h2>
</header>

<!---->
<ul class="artdeco-toasts_toasts">
<!---->    </ul>
</section>
</div>

<!-- EMBER_CLI_FASTBOOT_BODY -->

      <script src="https://static-exp1.licdn.com/sc/h/b5gtyijejm09vg7aeyexsbnvz" data-fastboot-src="assets/polyfill-shared.js"></script>
      <script src="https://static-exp1.licdn.com/sc/h/7tkw2k5x3undloo7cj9knj3d8" nomodule="" data-fastboot-src="assets/polyfill-legacy.js"></script>
      <script src="https://static-exp1.licdn.com/sc/h/a8q6glm6zvu7gvt3mhab9x3zv" data-fastboot-src="assets/polyfill-evergreen.js"></script>
    
<div id="app-boot-bg-loader" class="app-boot-bg-skeleton">
<div class="top-bar"></div>
<div class="content">
<div class="initial-load-animation fade-load">
  <div class="linkedin-image display-flex justify-center">
    <svg xmlns="http://www.w3.org/2000/svg" class="loader__linkedin-logo" width="190" height="48" viewBox="0 0 190 48">
      <g>
        <g>
          <path d="M58,27.22V41H51V28.88c0-3.7-2.07-5.24-4-5.24a5,5,0,0,0-5.14,4.85,4.34,4.34,0,0,0,0,.51V41H35V18h6.6v3.25h.09c.69-1.41,3.64-3.75,7.66-3.75S58,20.22,58,27.22ZM24,41h7V18H24ZM27.5,6.45a4.05,4.05,0,1,0,4.1,4.05,4,4,0,0,0-4-4ZM190,3.5v41a3.5,3.5,0,0,1-3.5,3.5h-41a3.5,3.5,0,0,1-3.5-3.5V3.5A3.5,3.5,0,0,1,145.5,0h41A3.5,3.5,0,0,1,190,3.5ZM156,18h-7V41h7Zm.6-7.5a4.1,4.1,0,1,0-4.15,4.05h.05a4,4,0,0,0,4.1-3.9ZM183,27.22c0-7-4.63-9.72-8.65-9.72s-7,2.34-7.66,3.75h-.09V18H160V41h7V29c0-3.69,2.51-5.33,4.95-5.33,2,0,4.05,1.54,4.05,5.24V41h7ZM8,7H0V41H21V34H8ZM108,29.77v2H91a1.33,1.33,0,0,0,.11.43c.58,1.93,2.67,3.56,5.75,3.56A6.3,6.3,0,0,0,102,33.52l5.1,3.18a12.72,12.72,0,0,1-10.45,4.8C89.94,41.5,84,37.42,84,29.59S90,17.5,96.44,17.5,108,21.81,108,29.77ZM101,27c0-2.4-1.56-4.38-4.75-4.38-3,0-5.09,2-5.25,4.38ZM85.26,18H76.68l-7.54,9.37H69V7H62V41h7V30h.14l7.72,11h8.77L76.2,28.43ZM128,7h7V41h-6.6V38h-.09c-.88,1.52-3.24,3.49-7.4,3.49-5,0-10.91-3.63-10.91-12,0-7.53,5.1-11.95,10.82-11.95a9.55,9.55,0,0,1,7.09,3H128Zm.3,22.49a5.74,5.74,0,0,0-5.59-5.89h-.15A5.54,5.54,0,0,0,116.89,29c0,.15,0,.29,0,.44a5.61,5.61,0,0,0,5.26,5.94h.4A5.83,5.83,0,0,0,128.3,29.49Z" fill="currentColor"></path>
        </g>
      </g>
    </svg>
  </div>
  <div class="loading-bar">
    <div class="blue-bar"></div>
  </div>
</div>
</div>
</div>


<script crossorigin="" src="https://static-exp1.licdn.com/sc/h/6oydvamu0ccyz6bjubzwr4zq1" %defer%="" %remove_in_ssrlite%="" data-fastboot-src="assets/vendor-static.js"></script>
<script crossorigin="" src="https://static-exp1.licdn.com/sc/h/3fpvgp139ytyncvhp1ke3qejn" %defer%="" %remove_in_ssrlite%="" data-fastboot-src="assets/vendor.js"></script>
<script crossorigin="" src="https://static-exp1.licdn.com/sc/h/551vciqnih0gym4em5ie545pd" %defer%="" %remove_in_ssrlite%="" data-fastboot-src="assets/i18n/support_ru_RU.js"></script>
<script src="https://static-exp1.licdn.com/sc/h/5o9wbvq1x4702oc7xukj3lpt0"></script><script src="https://static-exp1.licdn.com/sc/h/doj0jpyues7i253v94cssro0m"></script><script src="https://static-exp1.licdn.com/sc/h/encw2yz2o521vlzjrkxq9p8tc"></script><script src="https://static-exp1.licdn.com/sc/h/a6u3kquefbual4nnehevv3yc0"></script><script src="https://static-exp1.licdn.com/sc/h/b2c62eg3ysge19ctdvmzn3oh8"></script><script src="https://static-exp1.licdn.com/sc/h/encw2yz2o521vlzjrkxq9p8tc"></script>
<script crossorigin="" src="https://static-exp1.licdn.com/sc/h/8edcka48rekuds8yma36yolz5" %defer%="" %remove_in_ssrlite%="" data-fastboot-src="assets/extended.js"></script>
<div id="artdeco-modal-outlet"></div>

<code style="display: none" id="bpr-guid-1229173">
{"data":{"entityUrn":"urn:li:collectionResponse:nZx6/1e1AAbOHh075gv083zrunZT186/K+rx5FP70A4=","elements":[],"paging":{"count":10,"start":0,"links":[]},"$type":"com.linkedin.restli.common.CollectionResponse"},"included":[]}
</code>
<code style="display: none" id="datalet-bpr-guid-1229173">
{"request":"/voyager/api/chameleonConfig","status":200,"body":"bpr-guid-1229173","method":"GET"}
</code>
<img src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" style="display: none" class="datalet-bpr-guid-1229173"><code style="display: none" id="bpr-guid-1229174">
{"data":{"canBrowseProfiles":false,"reactivationFeaturesEligible":false,"canViewJobAnalytics":false,"canViewWVMP":false,"premiumFreeTrialEligible":true,"canAccessLearningVideos":false,"premiumLearningUpgradeEligible":false,"canViewCompanyInsights":false,"$type":"com.linkedin.voyager.premium.FeatureAccess"},"included":[]}
</code>
<code style="display: none" id="datalet-bpr-guid-1229174">
{"request":"/voyager/api/premium/featureAccess?name\u003DreactivationFeaturesEligible","status":200,"body":"bpr-guid-1229174","method":"GET"}
</code>
<img src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" style="display: none" class="datalet-bpr-guid-1229174"><code style="display: none" id="bpr-guid-1229175">
{"data":{"entityUrn":"urn:li:collectionResponse:uPYuDSPXzooiHx+zPOguG1+f+JFMWTWFEfhiIQtEFMM=","elements":[],"paging":{"count":10,"start":0,"total":0,"links":[]},"$type":"com.linkedin.restli.common.CollectionResponse"},"included":[]}
</code>
<code style="display: none" id="datalet-bpr-guid-1229175">
{"request":"/voyager/api/takeovers","status":200,"body":"bpr-guid-1229175","method":"GET"}
</code>
<img src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" style="display: none" class="datalet-bpr-guid-1229175"><code style="display: none" id="bpr-guid-1229176">
{"data":{"paidProducts":[],"hasAccessPremium":false,"*companies":["urn:li:fs_miniCompany:73252620"],"memberGroup":"FREE","showStaticLearning":false,"$type":"com.linkedin.voyager.common.Nav"},"included":[{"objectUrn":"urn:li:company:73252620","entityUrn":"urn:li:fs_miniCompany:73252620","name":"Mariia's experimets page","showcase":false,"active":true,"logo":null,"universalName":"mariia-s-experimets-page","dashCompanyUrn":"urn:li:fsd_company:73252620","trackingId":"vNM3H8eURMq2rip3Sxon9A==","$type":"com.linkedin.voyager.entities.shared.MiniCompany"}]}
</code>
<code style="display: none" id="datalet-bpr-guid-1229176">
{"request":"/voyager/api/nav","status":200,"body":"bpr-guid-1229176","method":"GET"}
</code>
<img src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" style="display: none" class="datalet-bpr-guid-1229176"><code style="display: none" id="bpr-guid-1229177">
{"data":{"plainId":645270965,"publicContactInfo":{"$type":"com.linkedin.voyager.identity.shared.PublicContactInfo"},"premiumSubscriber":false,"*miniProfile":"urn:li:fs_miniProfile:ACoAACZ2DbUBHJ9p7xq7cgqJILaQyOcNvErg49o","$type":"com.linkedin.voyager.common.Me"},"included":[{"customPronoun":null,"memorialized":false,"lastName":"Derzhanivska","standardizedPronoun":null,"occupation":"Software Engineer","objectUrn":"urn:li:member:645270965","backgroundImage":null,"picture":{"artifacts":[{"width":100,"fileIdentifyingUrlPathSegment":"100_100/0/1617054793555?e=1629936000&amp;v=beta&amp;t=qVEICCqQBqVbEnGffyY8jMKhSfplXoKkmwVzeEQ4qHI","expiresAt":1629936000000,"height":100,"$type":"com.linkedin.common.VectorArtifact"},{"width":200,"fileIdentifyingUrlPathSegment":"200_200/0/1617054793555?e=1629936000&amp;v=beta&amp;t=kxrHaIssx28pfBRlsf7XRi-TNsSGJUdJJdL2VY1eDGU","expiresAt":1629936000000,"height":200,"$type":"com.linkedin.common.VectorArtifact"},{"width":400,"fileIdentifyingUrlPathSegment":"400_400/0/1617054793555?e=1629936000&amp;v=beta&amp;t=wl0D4EaNF842BXIHQRznCXq-hX9CSvEak_u5l1s1IAU","expiresAt":1629936000000,"height":400,"$type":"com.linkedin.common.VectorArtifact"},{"width":800,"fileIdentifyingUrlPathSegment":"800_800/0/1617054793555?e=1629936000&amp;v=beta&amp;t=-mQu-La1xIW9usOGp5ODbhd3XEUwHp11jiRVqN2m7Hc","expiresAt":1629936000000,"height":800,"$type":"com.linkedin.common.VectorArtifact"}],"rootUrl":"https://media-exp3.licdn.com/dms/image/C4D03AQFn3ug3E1r59Q/profile-displayphoto-shrink_","$type":"com.linkedin.common.VectorImage"},"$type":"com.linkedin.voyager.identity.shared.MiniProfile","firstName":"Mariia","entityUrn":"urn:li:fs_miniProfile:ACoAACZ2DbUBHJ9p7xq7cgqJILaQyOcNvErg49o","publicIdentifier":"mariia-derzhanivska","trackingId":"bUwMvijlRi2rmctWCjdb4g=="}]}
</code>
<code style="display: none" id="datalet-bpr-guid-1229177">
{"request":"/voyager/api/me","status":200,"body":"bpr-guid-1229177","method":"GET"}
</code>
<img src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" style="display: none" class="datalet-bpr-guid-1229177"><code style="display: none" id="bpr-guid-1229178">
{"data":{"versionTag":"982274417","$type":"com.linkedin.voyager.identity.profile.VersionTag"},"included":[]}
</code>
<code style="display: none" id="datalet-bpr-guid-1229178">
{"request":"/voyager/api/identity/profiles/ACoAACZ2DbUBHJ9p7xq7cgqJILaQyOcNvErg49o/versionTag","status":200,"body":"bpr-guid-1229178","method":"GET"}
</code>
<img src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" style="display: none" class="datalet-bpr-guid-1229178"><code style="display: none" id="bpr-guid-1229179">
{"data":{"fullLastNameShown":true,"requireReferral":null,"showPublicProfile":true,"formerNameVisibilitySetting":"CONNECTIONS","discloseAsProfileViewer":"DISCLOSE_FULL","$recipeTypes":["com.linkedin.voyager.dash.deco.identity.profile.PrivacySettings"],"messagingSeenReceipts":null,"allowProfileEditBroadcasts":null,"$type":"com.linkedin.voyager.dash.identity.profile.PrivacySettings","messagingTypingIndicators":null,"allowOpenProfile":false,"profilePictureVisibilitySetting":"CONNECTIONS","entityUrn":"urn:li:fsd_privacySettings:singleton","publicProfilePictureVisibilitySetting":"CONNECTIONS","namePronunciationVisibilitySetting":"MEMBERS","pronounVisibilitySetting":"MEMBERS"},"meta":{"microSchema":{"version":"2","types":{"com.linkedin.voyager.dash.deco.identity.profile.PrivacySettings":{"fields":{"fullLastNameShown":{"type":"boolean"},"requireReferral":{"type":"boolean"},"showPublicProfile":{"type":"boolean"},"formerNameVisibilitySetting":{"type":"string"},"messagingSeenReceipts":{"type":"string"},"discloseAsProfileViewer":{"type":"string"},"allowProfileEditBroadcasts":{"type":"boolean"},"messagingTypingIndicators":{"type":"string"},"allowOpenProfile":{"type":"boolean"},"profilePictureVisibilitySetting":{"type":"string"},"entityUrn":{"type":"string"},"publicProfilePictureVisibilitySetting":{"type":"string"},"namePronunciationVisibilitySetting":{"type":"string"},"pronounVisibilitySetting":{"type":"string"}},"baseType":"com.linkedin.voyager.dash.identity.profile.PrivacySettings"}}}},"included":[]}
</code>
<code style="display: none" id="datalet-bpr-guid-1229179">
{"request":"/voyager/api/identity/dash/profilePrivacySettings?decorationId\u003Dcom.linkedin.voyager.dash.deco.identity.profile.PrivacySettings-9","status":200,"body":"bpr-guid-1229179","method":"GET"}
</code>
<img src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" style="display: none" class="datalet-bpr-guid-1229179"><code style="display: none" id="bpr-guid-1229180">
{"data":{"entityUrn":"urn:li:collectionResponse:VyZKvyMAiMyKSsULETX3cZXyVJw6nwxE400VV9tfF8Q=","paging":{"count":10,"start":0,"links":[]},"*elements":["urn:li:fsd_profile:ACoAAArnC7ABDK0JxoBsuqWZNH15yxLBhyJmWto"],"$type":"com.linkedin.restli.common.CollectionResponse"},"meta":{"microSchema":{"version":"2","types":{"com.linkedin.voyager.dash.deco.identity.profile.ProfileEntityUrn":{"fields":{"entityUrn":{"type":"string"}},"baseType":"com.linkedin.voyager.dash.identity.profile.Profile"}}}},"included":[{"entityUrn":"urn:li:fsd_profile:ACoAAArnC7ABDK0JxoBsuqWZNH15yxLBhyJmWto","$recipeTypes":["com.linkedin.voyager.dash.deco.identity.profile.ProfileEntityUrn"],"$type":"com.linkedin.voyager.dash.identity.profile.Profile"}]}
</code>
<code style="display: none" id="datalet-bpr-guid-1229180">
{"request":"/voyager/api/identity/dash/profiles?q\u003DmemberIdentity\u0026memberIdentity\u003Dalexandr-tretiakov-ba831051\u0026decorationId\u003Dcom.linkedin.voyager.dash.deco.identity.profile.ProfileEntityUrn-2","status":200,"body":"bpr-guid-1229180","method":"GET"}
</code>
<img src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" style="display: none" class="datalet-bpr-guid-1229180"><code style="display: none" id="bpr-guid-1229181">
{"data":{"messagingTypingIndicators":"ALL_ENABLED","allowOpenProfile":false,"profilePictureVisibilitySetting":"CONNECTIONS","entityUrn":"urn:li:fs_privacySettings:ACoAACZ2DbUBHJ9p7xq7cgqJILaQyOcNvErg49o","showPublicProfile":true,"showPremiumSubscriberBadge":false,"publicProfilePictureVisibilitySetting":"CONNECTIONS","formerNameVisibilitySetting":"CONNECTIONS","messagingSeenReceipts":"ALL_ENABLED","allowProfileEditBroadcasts":true,"$type":"com.linkedin.voyager.identity.profile.PrivacySettings"},"included":[]}
</code>
<code style="display: none" id="datalet-bpr-guid-1229181">
{"request":"/voyager/api/identity/profiles/alexandr-tretiakov-ba831051/privacySettings","status":200,"body":"bpr-guid-1229181","method":"GET"}
</code>
<img src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" style="display: none" class="datalet-bpr-guid-1229181"><code style="display: none" id="bpr-guid-1229182">
{"data":{"distance":{"value":"DISTANCE_2","$type":"com.linkedin.voyager.common.MemberDistance"},"entityUrn":"urn:li:fs_profileNetworkInfo:ACoAAArnC7ABDK0JxoBsuqWZNH15yxLBhyJmWto","following":false,"followable":true,"*followingInfo":"urn:li:fs_followingInfo:urn:li:member:ACoAAArnC7ABDK0JxoBsuqWZNH15yxLBhyJmWto","followersCount":948,"connectionsCount":500,"$type":"com.linkedin.voyager.identity.profile.ProfileNetworkInfo"},"included":[{"entityUrn":"urn:li:fs_followingInfo:urn:li:member:ACoAAArnC7ABDK0JxoBsuqWZNH15yxLBhyJmWto","following":false,"trackingUrn":"urn:li:member:182913968","followingType":"DEFAULT","followerCount":948,"followingCount":null,"$type":"com.linkedin.voyager.common.FollowingInfo"}]}
</code>
<code style="display: none" id="datalet-bpr-guid-1229182">
{"request":"/voyager/api/identity/profiles/alexandr-tretiakov-ba831051/networkinfo","status":200,"body":"bpr-guid-1229182","method":"GET"}
</code>
<img src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" style="display: none" class="datalet-bpr-guid-1229182"><code style="display: none" id="bpr-guid-1229183">
{"data":{"entityUrn":"urn:li:collectionResponse:3HcEMi8VmVI3ycu+8Z8Egwaardo2xjGFgfpDfCb5dxc=","paging":{"count":10,"start":0,"links":[]},"*elements":["urn:li:fsd_profilePhotoFrame:(ACoAACZ2DbUBHJ9p7xq7cgqJILaQyOcNvErg49o,OPEN_TO_WORK)","urn:li:fsd_profilePhotoFrame:(ACoAACZ2DbUBHJ9p7xq7cgqJILaQyOcNvErg49o,HIRING)"],"$type":"com.linkedin.restli.common.CollectionResponse"},"included":[{"frameUrl":"https://media.licdn.com/media/AAYQAQSOAAgAAQAAAAAAABy3-hIQRcT8QpykdK6OdWi7yQ.png","applyButtonControlName":"frames_editor_apply_hiring_frame","entityUrn":"urn:li:fsd_profilePhotoFrame:(ACoAACZ2DbUBHJ9p7xq7cgqJILaQyOcNvErg49o,HIRING)","frameText":"#Hiring","bannerText":"Ищете специалистов? Получите эту рамку, поделившись со всеми участниками LinkedIn, что вы в поиске работы #Hiring.","frameType":"HIRING","pageKey":{"pageKey":"profile_view_base","anchorPage":true,"$type":"com.linkedin.voyager.dash.common.tracking.PageKey"},"actionTarget":"https://www.linkedin.com/in/mariia-derzhanivska/opportunities/hiring-opportunities/onboarding","visibilityPreferenceText":"Рамка доступна для просмотра всем участникам LinkedIn","$type":"com.linkedin.voyager.dash.identity.profile.ProfilePhotoFrame"},{"frameUrl":"https://media.licdn.com/media/AAYQAQSOAAgAAQAAAAAAAB-zrMZEDXI2T62PSuT6kpB6qg.png","applyButtonControlName":"frames_editor_apply_otw_frame","entityUrn":"urn:li:fsd_profilePhotoFrame:(ACoAACZ2DbUBHJ9p7xq7cgqJILaQyOcNvErg49o,OPEN_TO_WORK)","frameText":"#OpenToWork","bannerText":"В поиске новой работы? Получите эту рамку, поделившись со всеми участниками LinkedIn, что вы в поиске работы #OpenToWork.","frameType":"OPEN_TO_WORK","pageKey":{"pageKey":"profile_view_base","anchorPage":true,"$type":"com.linkedin.voyager.dash.common.tracking.PageKey"},"actionTarget":"https://www.linkedin.com/in/mariia-derzhanivska/opportunities/job-opportunities/edit?origin=PHOTO_FRAME_EDITOR&amp;trk=opento_sprofile_pfeditor","visibilityPreferenceText":"Рамка доступна для просмотра всем участникам LinkedIn","$type":"com.linkedin.voyager.dash.identity.profile.ProfilePhotoFrame"}]}
</code>
<code style="display: none" id="datalet-bpr-guid-1229183">
{"request":"/voyager/api/voyagerIdentityDashProfilePhotoFrames","status":200,"body":"bpr-guid-1229183","method":"GET"}
</code>
<img src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" style="display: none" class="datalet-bpr-guid-1229183"><code style="display: none" id="bpr-guid-1229184">
{"data":{"entityUrn":"urn:li:collectionResponse:7ZvAwvPwYldk7Tvl3jXgC4ymrtxthgc+3EdE7ncMd98=","elements":[{"count":0,"tab":"MESSAGING","$type":"com.linkedin.voyager.common.communications.TabBadge"},{"count":3,"tab":"NOTIFICATIONS","$type":"com.linkedin.voyager.common.communications.TabBadge"},{"count":0,"tab":"MY_NETWORK","$type":"com.linkedin.voyager.common.communications.TabBadge"}],"paging":{"count":10,"start":0,"links":[]},"$type":"com.linkedin.restli.common.CollectionResponse"},"included":[]}
</code>
<code style="display: none" id="datalet-bpr-guid-1229184">
{"request":"/voyager/api/voyagerCommunicationsTabBadges?q\u003DtabBadges\u0026countFrom\u003D0","status":200,"body":"bpr-guid-1229184","method":"GET"}
</code>
<img src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" style="display: none" class="datalet-bpr-guid-1229184"><code style="display: none" id="bpr-guid-1229185">
{"data":{"entityUrn":"urn:li:collectionResponse:Bz4SOYk/mYlW5TQXDsHhPDo1RjU9sbUX/3Z4SRHd6pI=","paging":{"count":10,"start":0,"links":[]},"*elements":["urn:li:fsd_profile:ACoAAArnC7ABDK0JxoBsuqWZNH15yxLBhyJmWto"],"$type":"com.linkedin.restli.common.CollectionResponse"},"meta":{"microSchema":{"version":"2","types":{"com.linkedin.voyager.dash.deco.identity.profile.ProfileLocation":{"fields":{"preferredGeoPlace":{"type":"string"},"countryCode":{"type":"string"},"postalCode":{"type":"string"}},"baseType":"com.linkedin.voyager.dash.identity.profile.ProfileLocation"},"com.linkedin.voyager.dash.deco.identity.profile.EmploymentType":{"fields":{"name":{"type":"string"},"entityUrn":{"type":"string"},"companyNameRequired":{"type":"boolean"}},"baseType":"com.linkedin.voyager.dash.identity.profile.EmploymentType"},"com.linkedin.voyager.dash.deco.identity.profile.FullProfilePublication":{"fields":{"entityUrn":{"type":"string"},"name":{"type":"string"},"multiLocaleName":{"type":{"map":"string"}},"publishedOn":{"type":"com.linkedin.voyager.dash.deco.common.Date"},"publisher":{"type":"string"},"description":{"type":"string"},"multiLocaleDescription":{"type":{"map":"string"}},"multiLocalePublisher":{"type":{"map":"string"}},"url":{"type":"string"},"authors":{"type":{"array":{"union":{"nonStandardizedContributor":"com.linkedin.voyager.dash.deco.identity.profile.FullNonStandardizedContributor","standardizedContributor":"com.linkedin.voyager.dash.deco.identity.profile.StandardizedContributor"}}}}},"baseType":"com.linkedin.voyager.dash.identity.profile.Publication"},"com.linkedin.voyager.dash.deco.identity.profile.FullProfileHonorsInjection":{"fields":{"paging":{"type":"com.linkedin.voyager.dash.deco.common.FullPaging"},"elements":{"type":{"array":"com.linkedin.voyager.dash.deco.identity.profile.FullProfileHonor"}}},"baseType":"com.linkedin.restli.common.CollectionResponse"},"com.linkedin.voyager.dash.deco.identity.profile.FullProfileTreasuryMedia":{"fields":{"mediaDescription":{"type":"string"},"multiLocaleTitle":{"type":{"map":"string"}},"data":{"type":{"union":{"VectorImage":"com.linkedin.voyager.dash.deco.common.VectorImageOnlyRootUrlAndAttribution","ImageUrl":"com.linkedin.voyager.dash.deco.identity.profile.ImageUrl","NativeDocument":"com.linkedin.voyager.dash.deco.identity.profile.Document","Document":"com.linkedin.voyager.dash.deco.identity.profile.EmbeddableMedia","Video":"com.linkedin.voyager.dash.deco.identity.profile.EmbeddableMedia","Url":"string"}}},"description":{"type":"string"},"title":{"type":"string"},"previewImages":{"type":{"array":"com.linkedin.voyager.dash.deco.identity.profile.ImageUrl"}},"mediaTitle":{"type":"string"},"multiLocaleMediaDescription":{"type":{"map":"string"}},"entityUrn":{"type":"string"},"width":{"type":"int"},"multiLocaleDescription":{"type":{"map":"string"}},"previewImage":{"type":"com.linkedin.voyager.dash.deco.common.image.ImageViewModel"},"providerName":{"type":"string"},"multiLocaleMediaTitle":{"type":{"map":"string"}},"height":{"type":"int"}},"baseType":"com.linkedin.voyager.dash.identity.profile.treasury.TreasuryMedia"},"com.linkedin.deco.recipe.anonymous.Anon377984030":{"fields":{"professionalEvent":{"type":"com.linkedin.deco.recipe.anonymous.Anon1213723597","resolvedFrom":"professionalEventUrn"},"vectorImage":{"type":"com.linkedin.voyager.dash.deco.common.VectorImageOnlyRootUrlAndAttribution"},"professionalEventUrn":{"type":"string"}},"baseType":"com.linkedin.voyager.dash.common.image.NonEntityProfessionalEventLogo"},"com.linkedin.voyager.dash.deco.common.image.Company":{"fields":{"logo":{"type":{"union":{"url":"string","vectorImage":"com.linkedin.voyager.dash.deco.common.VectorImageOnlyRootUrlAndAttribution"}}},"entityUrn":{"type":"string"}},"baseType":"com.linkedin.voyager.dash.organization.Company"},"com.linkedin.deco.recipe.anonymous.Anon409680083":{"fields":{"type":{"type":"string"},"index":{"type":"int"}},"baseType":"com.linkedin.voyager.dash.common.text.ListItemStyle"},"com.linkedin.voyager.dash.deco.identity.profile.ImageUrl":{"fields":{"originalImageUrl":{"type":"string"},"originalHeight":{"type":"int"},"url":{"type":"string"},"originalWidth":{"type":"int"}},"baseType":"com.linkedin.voyager.dash.common.ImageUrl"},"com.linkedin.voyager.dash.deco.identity.profile.FullProfileCertificationsInjection":{"fields":{"paging":{"type":"com.linkedin.voyager.dash.deco.common.FullPaging"},"elements":{"type":{"array":"com.linkedin.voyager.dash.deco.identity.profile.FullProfileCertification"}}},"baseType":"com.linkedin.restli.common.CollectionResponse"},"com.linkedin.deco.recipe.anonymous.Anon316625974":{"fields":{"entityUrn":{"type":"string"}},"baseType":"com.linkedin.voyager.dash.common.Region"},"com.linkedin.voyager.dash.deco.identity.profile.FullProfileOrganization":{"fields":{"occupation":{"type":{"union":{"profilePosition":"com.linkedin.deco.recipe.anonymous.Anon517843535","profileEducation":"com.linkedin.deco.recipe.anonymous.Anon1621795678"}},"resolvedFrom":"occupationUnion"},"entityUrn":{"type":"string"},"dateRange":{"type":"com.linkedin.voyager.dash.deco.common.DateRange"},"name":{"type":"string"},"multiLocaleName":{"type":{"map":"string"}},"description":{"type":"string"},"occupationUnion":{"type":{"union":{"profilePosition":"string","profileEducation":"string"}}},"positionHeld":{"type":"string"},"multiLocalePositionHeld":{"type":{"map":"string"}},"multiLocaleDescription":{"type":{"map":"string"}}},"baseType":"com.linkedin.voyager.dash.identity.profile.Organization"},"com.linkedin.voyager.dash.deco.common.Locale":{"fields":{"variant":{"type":"string"},"country":{"type":"string"},"language":{"type":"string"}},"baseType":"com.linkedin.common.Locale"},"com.linkedin.voyager.dash.deco.identity.profile.FullProfileEducation":{"fields":{"dateRange":{"type":"com.linkedin.voyager.dash.deco.common.DateRange"},"profileTreasuryMediaEducation":{"type":"com.linkedin.voyager.dash.deco.identity.profile.FullProfileTreasuryMediaItemsInjection","isInjection":true},"degree":{"type":"com.linkedin.deco.recipe.anonymous.Anon875016385","resolvedFrom":"degreeUrn"},"description":{"type":"string"},"multiLocaleGrade":{"type":{"map":"string"}},"degreeName":{"type":"string"},"standardizedFieldOfStudy":{"type":"com.linkedin.deco.recipe.anonymous.Anon2017432627","resolvedFrom":"standardizedFieldOfStudyUrn"},"multiLocaleSchoolName":{"type":{"map":"string"}},"schoolUrn":{"type":"string"},"multiLocaleActivities":{"type":{"map":"string"}},"entityUrn":{"type":"string"},"school":{"type":"com.linkedin.voyager.dash.deco.organization.MiniSchool","resolvedFrom":"schoolUrn"},"activities":{"type":"string"},"grade":{"type":"string"},"multiLocaleFieldOfStudy":{"type":{"map":"string"}},"standardizedFieldOfStudyUrn":{"type":"string"},"multiLocaleDescription":{"type":{"map":"string"}},"schoolName":{"type":"string"},"fieldOfStudy":{"type":"string"},"multiLocaleDegreeName":{"type":{"map":"string"}},"degreeUrn":{"type":"string"}},"baseType":"com.linkedin.voyager.dash.identity.profile.Education"},"com.linkedin.voyager.dash.deco.identity.profile.FullProfileTestScore":{"fields":{"score":{"type":"string"},"occupation":{"type":{"union":{"profilePosition":"com.linkedin.deco.recipe.anonymous.Anon517843535","profileEducation":"com.linkedin.deco.recipe.anonymous.Anon1621795678"}},"resolvedFrom":"occupationUnion"},"entityUrn":{"type":"string"},"name":{"type":"string"},"multiLocaleName":{"type":{"map":"string"}},"description":{"type":"string"},"occupationUnion":{"type":{"union":{"profilePosition":"string","profileEducation":"string"}}},"multiLocaleDescription":{"type":{"map":"string"}},"dateOn":{"type":"com.linkedin.voyager.dash.deco.common.Date"}},"baseType":"com.linkedin.voyager.dash.identity.profile.TestScore"},"com.linkedin.deco.recipe.anonymous.Anon2017432627":{"fields":{"entityUrn":{"type":"string"}},"baseType":"com.linkedin.voyager.dash.identity.profile.StandardizedFieldOfStudy"},"com.linkedin.voyager.dash.deco.common.text.ProfileForFamiliarName":{"fields":{"lastName":{"type":"string"},"firstName":{"type":"string"},"entityUrn":{"type":"string"}},"baseType":"com.linkedin.voyager.dash.identity.profile.Profile"},"com.linkedin.voyager.dash.deco.identity.profile.FullProfileSkill":{"fields":{"name":{"type":"string"},"multiLocaleName":{"type":{"map":"string"}},"entityUrn":{"type":"string"}},"baseType":"com.linkedin.voyager.dash.identity.profile.Skill"},"com.linkedin.deco.recipe.anonymous.Anon584899856":{"fields":{"profileUrn":{"type":"string"},"vectorImage":{"type":"com.linkedin.voyager.dash.deco.common.VectorImageOnlyRootUrlAndAttribution"},"profile":{"type":"com.linkedin.deco.recipe.anonymous.Anon587401631","resolvedFrom":"profileUrn"}},"baseType":"com.linkedin.voyager.dash.common.image.NonEntityProfilePicture"},"com.linkedin.voyager.dash.deco.identity.profile.FullProfileSkillsInjection":{"fields":{"paging":{"type":"com.linkedin.voyager.dash.deco.common.FullPaging"},"elements":{"type":{"array":"com.linkedin.voyager.dash.deco.identity.profile.FullProfileSkill"}}},"baseType":"com.linkedin.restli.common.CollectionResponse"},"com.linkedin.voyager.dash.deco.common.Link":{"fields":{"type":{"type":"string"},"rel":{"type":"string"},"href":{"type":"string"}},"baseType":"com.linkedin.restli.common.Link"},"com.linkedin.voyager.dash.deco.common.image.School":{"fields":{"logo":{"type":{"union":{"url":"string","vectorImage":"com.linkedin.voyager.dash.deco.common.VectorImageOnlyRootUrlAndAttribution"}}},"entityUrn":{"type":"string"}},"baseType":"com.linkedin.voyager.dash.organization.School"},"com.linkedin.voyager.dash.deco.common.VectorImage":{"fields":{"attribution":{"type":"string"},"digitalmediaAsset":{"type":"string"},"rootUrl":{"type":"string"},"artifacts":{"type":{"array":"com.linkedin.voyager.dash.deco.common.VectorArtifact"}}},"baseType":"com.linkedin.common.VectorImage"},"com.linkedin.voyager.dash.deco.common.Coordinate2DFull":{"fields":{"x":{"type":"double"},"y":{"type":"double"}},"baseType":"com.linkedin.common.Coordinate2D"},"com.linkedin.voyager.dash.deco.common.image.Group":{"fields":{"logo":{"type":{"union":{"url":"string","vectorImage":"com.linkedin.voyager.dash.deco.common.VectorImageOnlyRootUrlAndAttribution"}}},"entityUrn":{"type":"string"}},"baseType":"com.linkedin.voyager.dash.groups.Group"},"com.linkedin.deco.recipe.anonymous.Anon1309211116":{"fields":{"saturation":{"type":"double"},"bottomLeft":{"type":"com.linkedin.voyager.dash.deco.common.Coordinate2DFull"},"vignette":{"type":"double"},"brightness":{"type":"double"},"photoFilterType":{"type":"string"},"bottomRight":{"type":"com.linkedin.voyager.dash.deco.common.Coordinate2DFull"},"topLeft":{"type":"com.linkedin.voyager.dash.deco.common.Coordinate2DFull"},"contrast":{"type":"double"},"topRight":{"type":"com.linkedin.voyager.dash.deco.common.Coordinate2DFull"}},"baseType":"com.linkedin.voyager.dash.identity.profile.PhotoFilterEditInfo"},"com.linkedin.deco.recipe.anonymous.Anon950950668":{"fields":{"urn":{"type":"string"},"duration":{"type":"long"},"url":{"type":"string"}},"baseType":"com.linkedin.voyager.dash.common.AudioMetadata"},"com.linkedin.voyager.dash.deco.identity.profile.Geo":{"fields":{"countryUrn":{"type":"string"},"country":{"type":"com.linkedin.voyager.dash.deco.identity.profile.CountryGeo","resolvedFrom":"countryUrn"},"defaultLocalizedNameWithoutCountryName":{"type":"string"},"entityUrn":{"type":"string"},"defaultLocalizedName":{"type":"string"}},"baseType":"com.linkedin.voyager.dash.common.Geo"},"com.linkedin.deco.recipe.anonymous.Anon1213723597":{"fields":{"entityUrn":{"type":"string"}},"baseType":"com.linkedin.voyager.dash.events.ProfessionalEvent"},"com.linkedin.voyager.dash.deco.identity.profile.FullNonStandardizedContributor":{"fields":{"name":{"type":"string"},"multiLocaleName":{"type":{"map":"string"}}},"baseType":"com.linkedin.voyager.dash.identity.profile.NonStandardizedContributor"},"com.linkedin.voyager.dash.deco.identity.profile.FullProfileWithEntities":{"fields":{"birthDateOn":{"type":"com.linkedin.voyager.dash.deco.common.Date"},"multiLocalePhoneticLastName":{"type":{"map":"string"}},"profileTreasuryMediaProfile":{"type":"com.linkedin.voyager.dash.deco.identity.profile.FullProfileTreasuryMediaItemsInjection","isInjection":true},"objectUrn":{"type":"string"},"multiLocaleLastName":{"type":{"map":"string"}},"pronounUnion":{"type":{"union":{"customPronoun":"string","standardizedPronoun":"string"}}},"multiLocaleFirstNamePronunciationHint":{"type":{"map":"string"}},"profileOrganizations":{"type":"com.linkedin.voyager.dash.deco.identity.profile.FullProfileOrganizationsInjection","isInjection":true},"multiLocaleLastNamePronunciationHint":{"type":{"map":"string"}},"tempStatusExpiredAtUnion":{"type":{"union":{"customizedExpiredAt":"long","standardizedExpiration":"string"}}},"profileEducations":{"type":"com.linkedin.voyager.dash.deco.identity.profile.FullProfileEducationsInjection","isInjection":true},"multiLocaleFirstName":{"type":{"map":"string"}},"multiLocaleTempStatus":{"type":{"map":"string"}},"companyNameOnProfileTopCardShown":{"type":"boolean"},"state":{"type":"com.linkedin.deco.recipe.anonymous.Anon244917463"},"profilePublications":{"type":"com.linkedin.voyager.dash.deco.identity.profile.FullProfilePublicationsInjection","isInjection":true},"profileCertifications":{"type":"com.linkedin.voyager.dash.deco.identity.profile.FullProfileCertificationsInjection","isInjection":true},"publicIdentifier":{"type":"string"},"phoneticFirstName":{"type":"string"},"trackingId":{"type":"string"},"multiLocaleSummary":{"type":{"map":"string"}},"firstNamePronunciationHint":{"type":"string"},"lastNamePronunciationHint":{"type":"string"},"profileVolunteerExperiences":{"type":"com.linkedin.voyager.dash.deco.identity.profile.FullProfileVolunteerExperiencesInjection","isInjection":true},"versionTag":{"type":"string"},"associatedHashtagsCopy":{"type":"com.linkedin.voyager.dash.deco.common.text.TextViewModelV2"},"firstName":{"type":"string"},"profilePicture":{"type":"com.linkedin.voyager.dash.deco.identity.profile.ProfilePhotoDecoSpecEditableProfilePicture"},"profileSkills":{"type":"com.linkedin.voyager.dash.deco.identity.profile.FullProfileSkillsInjection","isInjection":true},"multiLocaleMaidenName":{"type":{"map":"string"}},"profileProjects":{"type":"com.linkedin.voyager.dash.deco.identity.profile.FullProfileProjectsInjection","isInjection":true},"multiLocaleHeadline":{"type":{"map":"string"}},"profileHonors":{"type":"com.linkedin.voyager.dash.deco.identity.profile.FullProfileHonorsInjection","isInjection":true},"lastName":{"type":"string"},"memorialized":{"type":"boolean"},"multiLocalePhoneticFirstName":{"type":{"map":"string"}},"profilePatents":{"type":"com.linkedin.voyager.dash.deco.identity.profile.FullProfilePatentsInjection","isInjection":true},"volunteerCauses":{"type":{"array":"string"}},"showPremiumSubscriberBadge":{"type":"boolean"},"tempStatusEmoji":{"type":"string"},"maidenName":{"type":"string"},"industry":{"type":"com.linkedin.voyager.dash.deco.common.Industry","resolvedFrom":"industryUrn"},"geoLocationBackfilled":{"type":"boolean"},"multiLocaleFullNamePronunciationAudio":{"type":{"map":"com.linkedin.deco.recipe.anonymous.Anon950950668"}},"profileTestScores":{"type":"com.linkedin.voyager.dash.deco.identity.profile.FullProfileTestScoresInjection","isInjection":true},"phoneticLastName":{"type":"string"},"premium":{"type":"boolean"},"influencer":{"type":"boolean"},"entityUrn":{"type":"string"},"profileLanguages":{"type":"com.linkedin.voyager.dash.deco.identity.profile.FullProfileLanguagesInjection","isInjection":true},"headline":{"type":"string"},"fullNamePronunciationAudio":{"type":"com.linkedin.deco.recipe.anonymous.Anon950950668"},"summary":{"type":"string"},"profileCourses":{"type":"com.linkedin.voyager.dash.deco.identity.profile.FullProfileCoursesInjection","isInjection":true},"creator":{"type":"boolean"},"locationName":{"type":"string"},"supportedLocales":{"type":{"array":"com.linkedin.voyager.dash.deco.common.Locale"}},"address":{"type":"string"},"multiLocaleAddress":{"type":{"map":"string"}},"educationOnProfileTopCardShown":{"type":"boolean"},"industryUrn":{"type":"string"},"profilePositionGroups":{"type":"com.linkedin.voyager.dash.deco.identity.profile.FullProfilePositionGroupsInjection","isInjection":true},"geoLocation":{"type":"com.linkedin.voyager.dash.deco.identity.profile.ProfileGeoLocation"},"tempStatus":{"type":"string"},"location":{"type":"com.linkedin.voyager.dash.deco.identity.profile.ProfileLocation"},"primaryLocale":{"type":"com.linkedin.voyager.dash.deco.common.Locale"},"backgroundPicture":{"type":"com.linkedin.voyager.dash.deco.identity.profile.ProfilePhotoDecoSpecEditableBackgroundPicture"}},"baseType":"com.linkedin.voyager.dash.identity.profile.Profile"},"com.linkedin.deco.recipe.anonymous.Anon1251747613":{"fields":{"urn":{"type":"string"},"modelName":{"type":"string"},"fieldName":{"type":"string"},"value":{"type":"string"}},"baseType":"com.linkedin.voyager.dash.common.StringFieldReference"},"com.linkedin.voyager.dash.deco.identity.profile.FullProfilePatent":{"fields":{"multiLocalePatentNumber":{"type":{"map":"string"}},"multiLocaleTitle":{"type":{"map":"string"}},"applicationNumber":{"type":"string"},"inventors":{"type":{"array":{"union":{"nonStandardizedContributor":"com.linkedin.voyager.dash.deco.identity.profile.FullNonStandardizedContributor","standardizedContributor":"com.linkedin.voyager.dash.deco.identity.profile.StandardizedContributor"}}}},"multiLocaleApplicationNumber":{"type":{"map":"string"}},"pending":{"type":"boolean"},"patentNumber":{"type":"string"},"description":{"type":"string"},"title":{"type":"string"},"issuer":{"type":"string"},"url":{"type":"string"},"filedOn":{"type":"com.linkedin.voyager.dash.deco.common.Date"},"issuedOn":{"type":"com.linkedin.voyager.dash.deco.common.Date"},"entityUrn":{"type":"string"},"multiLocaleIssuer":{"type":{"map":"string"}},"multiLocaleDescription":{"type":{"map":"string"}}},"baseType":"com.linkedin.voyager.dash.identity.profile.Patent"},"com.linkedin.voyager.dash.deco.organization.MiniSchool":{"fields":{"name":{"type":"string"},"logo":{"type":{"union":{"url":"string","vectorImage":"com.linkedin.voyager.dash.deco.common.VectorImage"}}},"active":{"type":"boolean"},"entityUrn":{"type":"string"},"url":{"type":"string"}},"baseType":"com.linkedin.voyager.dash.organization.School"},"com.linkedin.deco.recipe.anonymous.Anon1869367056":{"fields":{"entityUrn":{"type":"string"}},"baseType":"com.linkedin.voyager.dash.groups.Group"},"com.linkedin.deco.recipe.anonymous.Anon517843535":{"fields":{"entityUrn":{"type":"string"}},"baseType":"com.linkedin.voyager.dash.identity.profile.Position"},"com.linkedin.voyager.dash.deco.identity.profile.FullProfilePublicationsInjection":{"fields":{"paging":{"type":"com.linkedin.voyager.dash.deco.common.FullPaging"},"elements":{"type":{"array":"com.linkedin.voyager.dash.deco.identity.profile.FullProfilePublication"}}},"baseType":"com.linkedin.restli.common.CollectionResponse"},"com.linkedin.voyager.dash.deco.identity.profile.FullProfileTreasuryMediaItemsInjection":{"fields":{"paging":{"type":"com.linkedin.voyager.dash.deco.common.FullPaging"},"elements":{"type":{"array":"com.linkedin.voyager.dash.deco.identity.profile.FullProfileTreasuryMedia"}}},"baseType":"com.linkedin.restli.common.CollectionResponse"},"com.linkedin.voyager.dash.deco.identity.profile.FullProfileProjectsInjection":{"fields":{"paging":{"type":"com.linkedin.voyager.dash.deco.common.FullPaging"},"elements":{"type":{"array":"com.linkedin.voyager.dash.deco.identity.profile.FullProfileProject"}}},"baseType":"com.linkedin.restli.common.CollectionResponse"},"com.linkedin.deco.recipe.anonymous.Anon1568806612":{"fields":{"school":{"type":"com.linkedin.deco.recipe.anonymous.Anon929195650","resolvedFrom":"schoolUrn"},"vectorImage":{"type":"com.linkedin.voyager.dash.deco.common.VectorImageOnlyRootUrlAndAttribution"},"schoolUrn":{"type":"string"}},"baseType":"com.linkedin.voyager.dash.common.image.NonEntitySchoolLogo"},"com.linkedin.voyager.dash.deco.common.image.ImageViewModel":{"fields":{"attributes":{"type":{"array":"com.linkedin.voyager.dash.deco.common.image.ImageAttribute"}},"actionTarget":{"type":"string"},"totalCount":{"type":"int"},"accessibilityTextAttributes":{"type":{"array":"com.linkedin.voyager.dash.deco.common.text.TextAttributeV2"}},"accessibilityText":{"type":"string"}},"baseType":"com.linkedin.voyager.dash.common.image.ImageViewModel"},"com.linkedin.voyager.dash.deco.identity.profile.EmbeddableMedia":{"fields":{"sourceUrl":{"type":"string"},"embedUrl":{"type":"string"},"mediaUrn":{"type":"string"}},"baseType":"com.linkedin.voyager.dash.identity.profile.treasury.EmbeddableMedia"},"com.linkedin.deco.recipe.anonymous.Anon648914460":{"fields":{"companyUrn":{"type":"string"},"company":{"type":"com.linkedin.deco.recipe.anonymous.Anon1927941263","resolvedFrom":"companyUrn"},"vectorImage":{"type":"com.linkedin.voyager.dash.deco.common.VectorImageOnlyRootUrlAndAttribution"}},"baseType":"com.linkedin.voyager.dash.common.image.NonEntityCompanyLogo"},"com.linkedin.voyager.dash.deco.common.text.ProfileForMention":{"fields":{"entityUrn":{"type":"string"}},"baseType":"com.linkedin.voyager.dash.identity.profile.Profile"},"com.linkedin.voyager.dash.deco.common.text.Hashtag":{"fields":{"entityUrn":{"type":"string"},"trackingUrn":{"type":"string"},"actionTarget":{"type":"string"}},"baseType":"com.linkedin.voyager.dash.feed.Hashtag"},"com.linkedin.voyager.dash.deco.identity.profile.MiniProfile":{"fields":{"profilePicture":{"type":"com.linkedin.voyager.dash.deco.identity.profile.ProfilePhotoDecoSpecReadOnlyProfilePicture"},"memorialized":{"type":"boolean"},"lastName":{"type":"string"},"firstName":{"type":"string"},"tempStatus":{"type":"string"},"entityUrn":{"type":"string"},"tempStatusEmoji":{"type":"string"},"publicIdentifier":{"type":"string"},"headline":{"type":"string"},"tempStatusExpiredAtUnion":{"type":{"union":{"customizedExpiredAt":"long","standardizedExpiration":"string"}}}},"baseType":"com.linkedin.voyager.dash.identity.profile.Profile"},"com.linkedin.voyager.dash.deco.identity.profile.FullProfileProject":{"fields":{"occupation":{"type":{"union":{"profilePosition":"com.linkedin.deco.recipe.anonymous.Anon517843535","profileEducation":"com.linkedin.deco.recipe.anonymous.Anon1621795678"}},"resolvedFrom":"occupationUnion"},"multiLocaleTitle":{"type":{"map":"string"}},"entityUrn":{"type":"string"},"dateRange":{"type":"com.linkedin.voyager.dash.deco.common.DateRange"},"description":{"type":"string"},"occupationUnion":{"type":{"union":{"profilePosition":"string","profileEducation":"string"}}},"contributors":{"type":{"array":{"union":{"nonStandardizedContributor":"com.linkedin.voyager.dash.deco.identity.profile.FullNonStandardizedContributor","standardizedContributor":"com.linkedin.voyager.dash.deco.identity.profile.StandardizedContributor"}}}},"title":{"type":"string"},"multiLocaleDescription":{"type":{"map":"string"}},"url":{"type":"string"}},"baseType":"com.linkedin.voyager.dash.identity.profile.Project"},"com.linkedin.voyager.dash.deco.common.VectorImageOnlyRootUrlAndAttribution":{"fields":{"attribution":{"type":"string"},"rootUrl":{"type":"string"},"artifacts":{"type":{"array":"com.linkedin.voyager.dash.deco.common.VectorArtifact"}}},"baseType":"com.linkedin.common.VectorImage"},"com.linkedin.voyager.dash.deco.common.FullPaging":{"fields":{"start":{"type":"int"},"count":{"type":"int"},"total":{"type":"int"},"links":{"type":{"array":"com.linkedin.voyager.dash.deco.common.Link"}}},"baseType":"com.linkedin.restli.common.CollectionMetadata"},"com.linkedin.voyager.dash.deco.identity.profile.FullProfileLanguage":{"fields":{"name":{"type":"string"},"multiLocaleName":{"type":{"map":"string"}},"entityUrn":{"type":"string"},"proficiency":{"type":"string"}},"baseType":"com.linkedin.voyager.dash.identity.profile.Language"},"com.linkedin.voyager.dash.deco.identity.profile.FullProfileTestScoresInjection":{"fields":{"paging":{"type":"com.linkedin.voyager.dash.deco.common.FullPaging"},"elements":{"type":{"array":"com.linkedin.voyager.dash.deco.identity.profile.FullProfileTestScore"}}},"baseType":"com.linkedin.restli.common.CollectionResponse"},"com.linkedin.voyager.dash.deco.common.image.ProfessionalEvent":{"fields":{"logoImage":{"type":{"union":{"url":"string","vectorImage":"com.linkedin.voyager.dash.deco.common.VectorImageOnlyRootUrlAndAttribution"}}},"entityUrn":{"type":"string"}},"baseType":"com.linkedin.voyager.dash.events.ProfessionalEvent"},"com.linkedin.voyager.dash.deco.common.Industry":{"fields":{"name":{"type":"string"},"entityUrn":{"type":"string"}},"baseType":"com.linkedin.voyager.dash.common.Industry"},"com.linkedin.voyager.dash.deco.identity.profile.FullProfileVolunteerExperiencesInjection":{"fields":{"paging":{"type":"com.linkedin.voyager.dash.deco.common.FullPaging"},"elements":{"type":{"array":"com.linkedin.voyager.dash.deco.identity.profile.FullProfileVolunteerExperience"}}},"baseType":"com.linkedin.restli.common.CollectionResponse"},"com.linkedin.voyager.dash.deco.common.DateRange":{"fields":{"start":{"type":"com.linkedin.voyager.dash.deco.common.Date"},"end":{"type":"com.linkedin.voyager.dash.deco.common.Date"}},"baseType":"com.linkedin.common.DateRange"},"com.linkedin.voyager.dash.deco.common.Date":{"fields":{"month":{"type":"int"},"year":{"type":"int"},"day":{"type":"int"}},"baseType":"com.linkedin.common.Date"},"com.linkedin.voyager.dash.deco.identity.profile.FullProfileCertification":{"fields":{"multiLocaleAuthority":{"type":{"map":"string"}},"entityUrn":{"type":"string"},"dateRange":{"type":"com.linkedin.voyager.dash.deco.common.DateRange"},"authority":{"type":"string"},"multiLocaleName":{"type":{"map":"string"}},"name":{"type":"string"},"licenseNumber":{"type":"string"},"company":{"type":"com.linkedin.voyager.dash.deco.identity.profile.LinkableMiniCompany","resolvedFrom":"companyUrn"},"multiLocaleLicenseNumber":{"type":{"map":"string"}},"displaySource":{"type":"string"},"companyUrn":{"type":"string"},"url":{"type":"string"}},"baseType":"com.linkedin.voyager.dash.identity.profile.Certification"},"com.linkedin.voyager.dash.deco.common.IntegerRange":{"fields":{"start":{"type":"int"},"end":{"type":"int"}},"baseType":"com.linkedin.common.IntegerRange"},"com.linkedin.voyager.dash.deco.common.text.TextViewModelV2":{"fields":{"textDirection":{"type":"string"},"text":{"type":"string"},"attributesV2":{"type":{"array":"com.linkedin.voyager.dash.deco.common.text.TextAttributeV2"}},"accessibilityTextAttributesV2":{"type":{"array":"com.linkedin.voyager.dash.deco.common.text.TextAttributeV2"}},"accessibilityText":{"type":"string"}},"baseType":"com.linkedin.voyager.dash.common.text.TextViewModel"},"com.linkedin.deco.recipe.anonymous.Anon1529112441":{"fields":{"originalImageUrl":{"type":"string"},"originalHeight":{"type":"int"},"url":{"type":"string"},"originalWidth":{"type":"int"}},"baseType":"com.linkedin.voyager.dash.common.ImageUrl"},"com.linkedin.voyager.dash.deco.identity.profile.LinkableMiniCompany":{"fields":{"name":{"type":"string"},"logo":{"type":{"union":{"url":"string","vectorImage":"com.linkedin.voyager.dash.deco.common.VectorImageOnlyRootUrlAndAttribution"}}},"universalName":{"type":"string"},"entityUrn":{"type":"string"},"url":{"type":"string"}},"baseType":"com.linkedin.voyager.dash.organization.Company"},"com.linkedin.deco.recipe.anonymous.Anon1621795678":{"fields":{"entityUrn":{"type":"string"}},"baseType":"com.linkedin.voyager.dash.identity.profile.Education"},"com.linkedin.voyager.dash.deco.identity.profile.CountryGeo":{"fields":{"entityUrn":{"type":"string"},"defaultLocalizedName":{"type":"string"}},"baseType":"com.linkedin.voyager.dash.common.Geo"},"com.linkedin.voyager.dash.deco.identity.profile.FullProfileLanguagesInjection":{"fields":{"paging":{"type":"com.linkedin.voyager.dash.deco.common.FullPaging"},"elements":{"type":{"array":"com.linkedin.voyager.dash.deco.identity.profile.FullProfileLanguage"}}},"baseType":"com.linkedin.restli.common.CollectionResponse"},"com.linkedin.deco.recipe.anonymous.Anon929195650":{"fields":{"entityUrn":{"type":"string"}},"baseType":"com.linkedin.voyager.dash.organization.School"},"com.linkedin.voyager.dash.deco.identity.profile.LinkablePositionCompany":{"fields":{"employeeCountRange":{"type":"com.linkedin.voyager.dash.deco.common.IntegerRange"},"entityUrn":{"type":"string"},"name":{"type":"string"},"logo":{"type":{"union":{"url":"string","vectorImage":"com.linkedin.voyager.dash.deco.common.VectorImageOnlyRootUrlAndAttribution"}}},"industry":{"type":{"map":"com.linkedin.voyager.dash.deco.common.Industry"},"resolvedFrom":"industryUrns"},"universalName":{"type":"string"},"industryUrns":{"type":{"array":"string"}},"url":{"type":"string"}},"baseType":"com.linkedin.voyager.dash.organization.Company"},"com.linkedin.voyager.dash.deco.identity.profile.FullProfilePatentsInjection":{"fields":{"paging":{"type":"com.linkedin.voyager.dash.deco.common.FullPaging"},"elements":{"type":{"array":"com.linkedin.voyager.dash.deco.identity.profile.FullProfilePatent"}}},"baseType":"com.linkedin.restli.common.CollectionResponse"},"com.linkedin.voyager.dash.deco.identity.profile.FullProfilePositionGroupsInjection":{"fields":{"paging":{"type":"com.linkedin.voyager.dash.deco.common.FullPaging"},"elements":{"type":{"array":"com.linkedin.voyager.dash.deco.identity.profile.FullProfilePositionGroup"}}},"baseType":"com.linkedin.restli.common.CollectionResponse"},"com.linkedin.voyager.dash.deco.common.text.LearningCourse":{"fields":{"title":{"type":"string"},"entityUrn":{"type":"string"}},"baseType":"com.linkedin.voyager.dash.learning.LearningCourse"},"com.linkedin.voyager.dash.deco.identity.profile.StandardizedContributor":{"fields":{"profileUrn":{"type":"string"},"profile":{"type":"com.linkedin.voyager.dash.deco.identity.profile.MiniProfile","resolvedFrom":"profileUrn"}},"baseType":"com.linkedin.voyager.dash.identity.profile.StandardizedContributor"},"com.linkedin.voyager.dash.deco.identity.profile.DocumentResolutionPages":{"fields":{"width":{"type":"int"},"imageUrls":{"type":{"array":"string"}},"height":{"type":"int"}},"baseType":"com.linkedin.documentcontent.DocumentResolutionPages"},"com.linkedin.voyager.dash.deco.identity.profile.FullProfileOrganizationsInjection":{"fields":{"paging":{"type":"com.linkedin.voyager.dash.deco.common.FullPaging"},"elements":{"type":{"array":"com.linkedin.voyager.dash.deco.identity.profile.FullProfileOrganization"}}},"baseType":"com.linkedin.restli.common.CollectionResponse"},"com.linkedin.voyager.dash.deco.identity.profile.ProfilePhotoDecoSpecEditableProfilePicture":{"fields":{"displayImageWithFrameReferenceUnion":{"type":{"union":{"url":"string","vectorImage":"com.linkedin.voyager.dash.deco.common.VectorImageOnlyRootUrlAndAttribution"}}},"originalImageUrn":{"type":"string"},"originalImageReference":{"type":{"union":{"url":"string","vectorImage":"com.linkedin.voyager.dash.deco.common.VectorImageOnlyRootUrlAndAttribution"}}},"displayImageReference":{"type":{"union":{"url":"string","vectorImage":"com.linkedin.voyager.dash.deco.common.VectorImageOnlyRootUrlAndAttribution"}}},"frameType":{"type":"string"},"photoFilterEditInfo":{"type":"com.linkedin.deco.recipe.anonymous.Anon1309211116"},"displayImageUrn":{"type":"string"}},"baseType":"com.linkedin.voyager.dash.identity.profile.PhotoFilterPicture"},"com.linkedin.voyager.dash.deco.identity.profile.ProfilePhotoDecoSpecReadOnlyProfilePicture":{"fields":{"displayImageWithFrameReferenceUnion":{"type":{"union":{"url":"string","vectorImage":"com.linkedin.voyager.dash.deco.common.VectorImageOnlyRootUrlAndAttribution"}}},"frameType":{"type":"string"},"displayImageUrn":{"type":"string"},"displayImageReference":{"type":{"union":{"url":"string","vectorImage":"com.linkedin.voyager.dash.deco.common.VectorImageOnlyRootUrlAndAttribution"}}}},"baseType":"com.linkedin.voyager.dash.identity.profile.PhotoFilterPicture"},"com.linkedin.voyager.dash.deco.identity.profile.FullProfileVolunteerExperience":{"fields":{"multiLocaleRole":{"type":{"map":"string"}},"role":{"type":"string"},"entityUrn":{"type":"string"},"multiLocaleCompanyName":{"type":{"map":"string"}},"dateRange":{"type":"com.linkedin.voyager.dash.deco.common.DateRange"},"companyName":{"type":"string"},"description":{"type":"string"},"cause":{"type":"string"},"company":{"type":"com.linkedin.voyager.dash.deco.identity.profile.LinkableMiniCompany","resolvedFrom":"companyUrn"},"multiLocaleDescription":{"type":{"map":"string"}},"companyUrn":{"type":"string"}},"baseType":"com.linkedin.voyager.dash.identity.profile.VolunteerExperience"},"com.linkedin.voyager.dash.deco.common.image.ImageAttribute":{"fields":{"detailData":{"type":{"union":{"profilePictureWithoutFrame":"com.linkedin.voyager.dash.deco.common.image.ProfileWithoutFrame","profilePicture":"com.linkedin.voyager.dash.deco.common.image.Profile","professionalEventLogo":"com.linkedin.voyager.dash.deco.common.image.ProfessionalEvent","schoolLogo":"com.linkedin.voyager.dash.deco.common.image.School","groupLogo":"com.linkedin.voyager.dash.deco.common.image.Group","companyLogo":"com.linkedin.voyager.dash.deco.common.image.Company"}},"resolvedFrom":"detailDataUnion"},"tintColor":{"type":"string"},"detailDataUnion":{"type":{"union":{"profilePictureWithoutFrame":"string","companyLogo":"string","icon":"string","systemImage":"string","nonEntityGroupLogo":"com.linkedin.deco.recipe.anonymous.Anon1436383648","vectorImage":"com.linkedin.voyager.dash.deco.common.VectorImageOnlyRootUrlAndAttribution","nonEntityProfessionalEventLogo":"com.linkedin.deco.recipe.anonymous.Anon377984030","profilePicture":"string","imageUrl":"com.linkedin.deco.recipe.anonymous.Anon1529112441","professionalEventLogo":"string","nonEntitySchoolLogo":"com.linkedin.deco.recipe.anonymous.Anon1568806612","nonEntityCompanyLogo":"com.linkedin.deco.recipe.anonymous.Anon648914460","schoolLogo":"string","groupLogo":"string","ghostImage":"string","nonEntityProfilePicture":"com.linkedin.deco.recipe.anonymous.Anon584899856"}}},"scalingType":{"type":"string"},"displayAspectRatio":{"type":"double"}},"baseType":"com.linkedin.voyager.dash.common.image.ImageAttribute"},"com.linkedin.voyager.dash.deco.identity.profile.FullProfileHonor":{"fields":{"occupation":{"type":{"union":{"profilePosition":"com.linkedin.deco.recipe.anonymous.Anon517843535","profileEducation":"com.linkedin.deco.recipe.anonymous.Anon1621795678"}},"resolvedFrom":"occupationUnion"},"multiLocaleTitle":{"type":{"map":"string"}},"entityUrn":{"type":"string"},"description":{"type":"string"},"occupationUnion":{"type":{"union":{"profilePosition":"string","profileEducation":"string"}}},"multiLocaleIssuer":{"type":{"map":"string"}},"title":{"type":"string"},"multiLocaleDescription":{"type":{"map":"string"}},"issuer":{"type":"string"},"issuedOn":{"type":"com.linkedin.voyager.dash.deco.common.Date"}},"baseType":"com.linkedin.voyager.dash.identity.profile.Honor"},"com.linkedin.voyager.dash.deco.common.image.PhotoFilterPicture":{"fields":{"displayImageWithFrameReferenceUnion":{"type":{"union":{"url":"string","vectorImage":"com.linkedin.voyager.dash.deco.common.VectorImageOnlyRootUrlAndAttribution"}}},"displayImageReference":{"type":{"union":{"url":"string","vectorImage":"com.linkedin.voyager.dash.deco.common.VectorImageOnlyRootUrlAndAttribution"}}}},"baseType":"com.linkedin.voyager.dash.identity.profile.PhotoFilterPicture"},"com.linkedin.voyager.dash.deco.identity.profile.FullProfileCoursesInjection":{"fields":{"paging":{"type":"com.linkedin.voyager.dash.deco.common.FullPaging"},"elements":{"type":{"array":"com.linkedin.voyager.dash.deco.identity.profile.FullProfileCourse"}}},"baseType":"com.linkedin.restli.common.CollectionResponse"},"com.linkedin.deco.recipe.anonymous.Anon875016385":{"fields":{"entityUrn":{"type":"string"}},"baseType":"com.linkedin.voyager.dash.identity.profile.StandardizedDegree"},"com.linkedin.voyager.dash.deco.common.text.Company":{"fields":{"name":{"type":"string"},"entityUrn":{"type":"string"}},"baseType":"com.linkedin.voyager.dash.organization.Company"},"com.linkedin.voyager.dash.deco.identity.profile.Document":{"fields":{"transcribedDocumentUrl":{"type":"string"},"urn":{"type":"string"},"manifestUrl":{"type":"string"},"scanRequiredForDownload":{"type":"boolean"},"totalPageCount":{"type":"int"},"manifestUrlExpiresAt":{"type":"long"},"title":{"type":"string"},"coverPages":{"type":"com.linkedin.voyager.dash.deco.identity.profile.DocumentPages"},"transcribedDocumentUrlExpiresAt":{"type":"long"}},"baseType":"com.linkedin.documentcontent.Document"},"com.linkedin.voyager.dash.deco.identity.profile.FullProfilePositionGroup":{"fields":{"multiLocaleCompanyName":{"type":{"map":"string"}},"entityUrn":{"type":"string"},"dateRange":{"type":"com.linkedin.voyager.dash.deco.common.DateRange"},"companyName":{"type":"string"},"profilePositionInPositionGroup":{"type":"com.linkedin.voyager.dash.deco.identity.profile.FullProfilePositionsInGroup","isInjection":true},"company":{"type":"com.linkedin.voyager.dash.deco.identity.profile.LinkablePositionCompany","resolvedFrom":"companyUrn"},"companyUrn":{"type":"string"}},"baseType":"com.linkedin.voyager.dash.identity.profile.PositionGroup"},"com.linkedin.voyager.dash.deco.identity.profile.ProfilePhotoDecoSpecEditableBackgroundPicture":{"fields":{"originalImageUrn":{"type":"string"},"originalImageReference":{"type":{"union":{"url":"string","vectorImage":"com.linkedin.voyager.dash.deco.common.VectorImageOnlyRootUrlAndAttribution"}}},"photoFilterEditInfo":{"type":"com.linkedin.deco.recipe.anonymous.Anon1309211116"},"displayImageUrn":{"type":"string"},"displayImageReference":{"type":{"union":{"url":"string","vectorImage":"com.linkedin.voyager.dash.deco.common.VectorImageOnlyRootUrlAndAttribution"}}}},"baseType":"com.linkedin.voyager.dash.identity.profile.PhotoFilterPicture"},"com.linkedin.voyager.dash.deco.identity.profile.FullProfileEducationsInjection":{"fields":{"paging":{"type":"com.linkedin.voyager.dash.deco.common.FullPaging"},"elements":{"type":{"array":"com.linkedin.voyager.dash.deco.identity.profile.FullProfileEducation"}}},"baseType":"com.linkedin.restli.common.CollectionResponse"},"com.linkedin.voyager.dash.deco.identity.profile.FullProfilePositionsInGroup":{"fields":{"paging":{"type":"com.linkedin.voyager.dash.deco.common.FullPaging"},"elements":{"type":{"array":"com.linkedin.voyager.dash.deco.identity.profile.FullProfilePosition"}}},"baseType":"com.linkedin.restli.common.CollectionResponse"},"com.linkedin.deco.recipe.anonymous.Anon1927941263":{"fields":{"entityUrn":{"type":"string"}},"baseType":"com.linkedin.voyager.dash.organization.Company"},"com.linkedin.voyager.dash.deco.common.image.ProfileWithoutFrame":{"fields":{"profilePicture":{"type":"com.linkedin.voyager.dash.deco.common.image.PhotoFilterPicture"},"entityUrn":{"type":"string"}},"baseType":"com.linkedin.voyager.dash.identity.profile.Profile"},"com.linkedin.deco.recipe.anonymous.Anon587401631":{"fields":{"entityUrn":{"type":"string"}},"baseType":"com.linkedin.voyager.dash.identity.profile.Profile"},"com.linkedin.voyager.dash.deco.identity.profile.ProfileGeoLocation":{"fields":{"geo":{"type":"com.linkedin.voyager.dash.deco.identity.profile.Geo","resolvedFrom":"geoUrn"},"geoUrn":{"type":"string"},"postalCode":{"type":"string"}},"baseType":"com.linkedin.voyager.dash.identity.profile.ProfileGeoLocation"},"com.linkedin.deco.recipe.anonymous.Anon1271139837":{"fields":{"entityUrn":{"type":"string"}},"baseType":"com.linkedin.voyager.dash.common.Geo"},"com.linkedin.deco.recipe.anonymous.Anon163061530":{"fields":{"name":{"type":"string"},"entityUrn":{"type":"string"}},"baseType":"com.linkedin.voyager.dash.groups.Group"},"com.linkedin.voyager.dash.deco.identity.profile.DocumentPages":{"fields":{"transcripts":{"type":{"array":"string"}},"pagesPerResolution":{"type":{"array":"com.linkedin.voyager.dash.deco.identity.profile.DocumentResolutionPages"}}},"baseType":"com.linkedin.documentcontent.DocumentPages"},"com.linkedin.voyager.dash.deco.common.text.ProfileForFullName":{"fields":{"lastName":{"type":"string"},"firstName":{"type":"string"},"entityUrn":{"type":"string"}},"baseType":"com.linkedin.voyager.dash.identity.profile.Profile"},"com.linkedin.voyager.dash.deco.common.image.Profile":{"fields":{"profilePicture":{"type":"com.linkedin.voyager.dash.deco.common.image.PhotoFilterPicture"},"entityUrn":{"type":"string"}},"baseType":"com.linkedin.voyager.dash.identity.profile.Profile"},"com.linkedin.voyager.dash.deco.common.text.JobPosting":{"fields":{"title":{"type":"string"},"entityUrn":{"type":"string"}},"baseType":"com.linkedin.voyager.dash.jobs.JobPosting"},"com.linkedin.voyager.dash.deco.common.text.TextAttributeV2":{"fields":{"start":{"type":"int"},"length":{"type":"int"},"detailData":{"type":{"union":{"jobPostingName":"com.linkedin.voyager.dash.deco.common.text.JobPosting","profileFamiliarName":"com.linkedin.voyager.dash.deco.common.text.ProfileForFamiliarName","groupName":"com.linkedin.deco.recipe.anonymous.Anon163061530","profileFullName":"com.linkedin.voyager.dash.deco.common.text.ProfileForFullName","learningCourseName":"com.linkedin.voyager.dash.deco.common.text.LearningCourse","companyName":"com.linkedin.voyager.dash.deco.common.text.Company","profileMention":"com.linkedin.voyager.dash.deco.common.text.ProfileForMention","schoolName":"com.linkedin.voyager.dash.deco.common.text.School","hashtag":"com.linkedin.voyager.dash.deco.common.text.Hashtag"}},"resolvedFrom":"detailDataUnion"},"detailDataUnion":{"type":{"union":{"jobPostingName":"string","profileFamiliarName":"string","hyperlink":"string","color":"string","companyName":"string","icon":"string","systemImage":"string","listItemStyle":"com.linkedin.deco.recipe.anonymous.Anon409680083","listStyle":"string","hyperlinkOpenExternally":"string","groupName":"string","profileFullName":"string","stringFieldReference":"com.linkedin.deco.recipe.anonymous.Anon1251747613","learningCourseName":"string","profileMention":"string","style":"string","schoolName":"string","hashtag":"string"}}}},"baseType":"com.linkedin.voyager.dash.common.text.TextAttribute"},"com.linkedin.deco.recipe.anonymous.Anon244917463":{"fields":{"stateName":{"type":"string"},"stateCode":{"type":"string"}},"baseType":"com.linkedin.voyager.dash.common.State"},"com.linkedin.voyager.dash.deco.identity.profile.FullProfileCourse":{"fields":{"name":{"type":"string"},"multiLocaleName":{"type":{"map":"string"}},"number":{"type":"string"},"occupationUnion":{"type":{"union":{"profilePosition":"string","profileEducation":"string"}}},"occupation":{"type":{"union":{"profilePosition":"com.linkedin.deco.recipe.anonymous.Anon517843535","profileEducation":"com.linkedin.deco.recipe.anonymous.Anon1621795678"}},"resolvedFrom":"occupationUnion"},"entityUrn":{"type":"string"}},"baseType":"com.linkedin.voyager.dash.identity.profile.Course"},"com.linkedin.voyager.dash.deco.common.VectorArtifact":{"fields":{"width":{"type":"int"},"fileIdentifyingUrlPathSegment":{"type":"string"},"expiresAt":{"type":"long"},"height":{"type":"int"}},"baseType":"com.linkedin.common.VectorArtifact"},"com.linkedin.voyager.dash.deco.common.text.School":{"fields":{"name":{"type":"string"},"entityUrn":{"type":"string"}},"baseType":"com.linkedin.voyager.dash.organization.School"},"com.linkedin.deco.recipe.anonymous.Anon1436383648":{"fields":{"groupUrn":{"type":"string"},"vectorImage":{"type":"com.linkedin.voyager.dash.deco.common.VectorImageOnlyRootUrlAndAttribution"},"group":{"type":"com.linkedin.deco.recipe.anonymous.Anon1869367056","resolvedFrom":"groupUrn"}},"baseType":"com.linkedin.voyager.dash.common.image.NonEntityGroupLogo"},"com.linkedin.voyager.dash.deco.identity.profile.FullProfilePosition":{"fields":{"shouldShowSourceOfHireBadge":{"type":"boolean"},"locationName":{"type":"string"},"multiLocaleTitle":{"type":{"map":"string"}},"multiLocaleCompanyName":{"type":{"map":"string"}},"employmentType":{"type":"com.linkedin.voyager.dash.deco.identity.profile.EmploymentType","resolvedFrom":"employmentTypeUrn"},"dateRange":{"type":"com.linkedin.voyager.dash.deco.common.DateRange"},"geoUrn":{"type":"string"},"companyName":{"type":"string"},"description":{"type":"string"},"title":{"type":"string"},"profileTreasuryMediaPosition":{"type":"com.linkedin.voyager.dash.deco.identity.profile.FullProfileTreasuryMediaItemsInjection","isInjection":true},"companyUrn":{"type":"string"},"geo":{"type":"com.linkedin.deco.recipe.anonymous.Anon1271139837","resolvedFrom":"geoUrn"},"regionUrn":{"type":"string"},"employmentTypeUrn":{"type":"string"},"entityUrn":{"type":"string"},"geoLocationName":{"type":"string"},"multiLocaleGeoLocationName":{"type":{"map":"string"}},"company":{"type":"com.linkedin.voyager.dash.deco.identity.profile.LinkablePositionCompany","resolvedFrom":"companyUrn"},"multiLocaleDescription":{"type":{"map":"string"}},"multiLocaleLocationName":{"type":{"map":"string"}},"region":{"type":"com.linkedin.deco.recipe.anonymous.Anon316625974","resolvedFrom":"regionUrn"},"sourceOfHireType":{"type":"string"}},"baseType":"com.linkedin.voyager.dash.identity.profile.Position"}}}},"included":[{"paging":{"total":0,"start":0,"count":20,"links":[],"$recipeTypes":["com.linkedin.voyager.dash.deco.common.FullPaging"],"$type":"com.linkedin.restli.common.CollectionMetadata"},"entityUrn":"urn:li:collectionResponse:+bBPGMjmADIFo7pu/0CR0nKPskjMR4GgMoukoDVZjVM=","$recipeTypes":["com.linkedin.voyager.dash.deco.identity.profile.FullProfileOrganizationsInjection"],"elements":[],"$type":"com.linkedin.restli.common.CollectionResponse"},{"paging":{"total":0,"start":0,"count":20,"links":[],"$recipeTypes":["com.linkedin.voyager.dash.deco.common.FullPaging"],"$type":"com.linkedin.restli.common.CollectionMetadata"},"entityUrn":"urn:li:collectionResponse:YxZtgNUbxB9Ac3TrKVCuMb8TeZpKpFgjUJ3VGo1xUM8=","$recipeTypes":["com.linkedin.voyager.dash.deco.identity.profile.FullProfileVolunteerExperiencesInjection"],"elements":[],"$type":"com.linkedin.restli.common.CollectionResponse"},{"paging":{"total":1,"start":0,"count":20,"links":[],"$recipeTypes":["com.linkedin.voyager.dash.deco.common.FullPaging"],"$type":"com.linkedin.restli.common.CollectionMetadata"},"*elements":["urn:li:fsd_profilePosition:(ACoAAArnC7ABDK0JxoBsuqWZNH15yxLBhyJmWto,1500139591)"],"entityUrn":"urn:li:collectionResponse:i800kPCFxsv/IaCjtgo0/RzhbdLzk8vCpxomDaVBs1o=","$recipeTypes":["com.linkedin.voyager.dash.deco.identity.profile.FullProfilePositionsInGroup"],"$type":"com.linkedin.restli.common.CollectionResponse"},{"paging":{"total":0,"start":0,"count":10,"links":[],"$recipeTypes":["com.linkedin.voyager.dash.deco.common.FullPaging"],"$type":"com.linkedin.restli.common.CollectionMetadata"},"entityUrn":"urn:li:collectionResponse:4wT1dA7+pqssgYsxZu7XikQjLmgteZt0wzKCu4q51rA=","$recipeTypes":["com.linkedin.voyager.dash.deco.identity.profile.FullProfileTreasuryMediaItemsInjection"],"elements":[],"$type":"com.linkedin.restli.common.CollectionResponse"},{"paging":{"total":1,"start":0,"count":20,"links":[],"$recipeTypes":["com.linkedin.voyager.dash.deco.common.FullPaging"],"$type":"com.linkedin.restli.common.CollectionMetadata"},"*elements":["urn:li:fsd_profileEducation:(ACoAAArnC7ABDK0JxoBsuqWZNH15yxLBhyJmWto,146825862)"],"entityUrn":"urn:li:collectionResponse:nNiRf5TgQkorkDvXxPlOWDc8NMX/LGG+x4jDcOUgbTA=","$recipeTypes":["com.linkedin.voyager.dash.deco.identity.profile.FullProfileEducationsInjection"],"$type":"com.linkedin.restli.common.CollectionResponse"},{"paging":{"total":0,"start":0,"count":20,"links":[],"$recipeTypes":["com.linkedin.voyager.dash.deco.common.FullPaging"],"$type":"com.linkedin.restli.common.CollectionMetadata"},"entityUrn":"urn:li:collectionResponse:acL7vVTkIBZBvJQm19+MCu50GCiF4EBz8tpG3mVHzoE=","$recipeTypes":["com.linkedin.voyager.dash.deco.identity.profile.FullProfileHonorsInjection"],"elements":[],"$type":"com.linkedin.restli.common.CollectionResponse"},{"paging":{"total":0,"start":0,"count":20,"links":[],"$recipeTypes":["com.linkedin.voyager.dash.deco.common.FullPaging"],"$type":"com.linkedin.restli.common.CollectionMetadata"},"entityUrn":"urn:li:collectionResponse:qfBOrOtgwd2xXcAMfJYmRjlluMsbpgbVvEcUj1LC1L4=","$recipeTypes":["com.linkedin.voyager.dash.deco.identity.profile.FullProfileLanguagesInjection"],"elements":[],"$type":"com.linkedin.restli.common.CollectionResponse"},{"paging":{"total":1,"start":0,"count":20,"links":[],"$recipeTypes":["com.linkedin.voyager.dash.deco.common.FullPaging"],"$type":"com.linkedin.restli.common.CollectionMetadata"},"*elements":["urn:li:fsd_profilePosition:(ACoAAArnC7ABDK0JxoBsuqWZNH15yxLBhyJmWto,281090366)"],"entityUrn":"urn:li:collectionResponse:oy2gmtqziyF1l+T/JfQoKyURiZQGwrq8FxwOMg+CdjA=","$recipeTypes":["com.linkedin.voyager.dash.deco.identity.profile.FullProfilePositionsInGroup"],"$type":"com.linkedin.restli.common.CollectionResponse"},{"paging":{"total":6,"start":0,"count":10,"links":[],"$recipeTypes":["com.linkedin.voyager.dash.deco.common.FullPaging"],"$type":"com.linkedin.restli.common.CollectionMetadata"},"*elements":["urn:li:fsd_profilePositionGroup:(ACoAAArnC7ABDK0JxoBsuqWZNH15yxLBhyJmWto,ef88b661c57cfe4004420ca559fe8db815af7fe5)","urn:li:fsd_profilePositionGroup:(ACoAAArnC7ABDK0JxoBsuqWZNH15yxLBhyJmWto,521c01c42e1bf5945a13abd7f2d1f9cee8792674)","urn:li:fsd_profilePositionGroup:(ACoAAArnC7ABDK0JxoBsuqWZNH15yxLBhyJmWto,45892717e675c02d67dbac7b3c480e37d7b42717)","urn:li:fsd_profilePositionGroup:(ACoAAArnC7ABDK0JxoBsuqWZNH15yxLBhyJmWto,fbf6b34f74613e91a116749872f6a9ad29021ae2)","urn:li:fsd_profilePositionGroup:(ACoAAArnC7ABDK0JxoBsuqWZNH15yxLBhyJmWto,10d5988432f2a64d537e7d762f8033c1ab2c60fe)","urn:li:fsd_profilePositionGroup:(ACoAAArnC7ABDK0JxoBsuqWZNH15yxLBhyJmWto,3c04d95ab65ec83247b54871e3e602e9882f87c4)"],"entityUrn":"urn:li:collectionResponse:sWRpwHt0nXYaxAgZjr08KNOMabutdwtyj63sJi8n6aM=","$recipeTypes":["com.linkedin.voyager.dash.deco.identity.profile.FullProfilePositionGroupsInjection"],"$type":"com.linkedin.restli.common.CollectionResponse"},{"paging":{"total":0,"start":0,"count":10,"links":[],"$recipeTypes":["com.linkedin.voyager.dash.deco.common.FullPaging"],"$type":"com.linkedin.restli.common.CollectionMetadata"},"entityUrn":"urn:li:collectionResponse:QM/c88fO9jvkf8Xw0JuXQmHTzZgVauE2s3OBR04qw5I=","$recipeTypes":["com.linkedin.voyager.dash.deco.identity.profile.FullProfileTreasuryMediaItemsInjection"],"elements":[],"$type":"com.linkedin.restli.common.CollectionResponse"},{"paging":{"total":0,"start":0,"count":10,"links":[],"$recipeTypes":["com.linkedin.voyager.dash.deco.common.FullPaging"],"$type":"com.linkedin.restli.common.CollectionMetadata"},"entityUrn":"urn:li:collectionResponse:3qyABQ4RweTUKC7Tosx8mdxiAmF68TqUlXNS2ePvekQ=","$recipeTypes":["com.linkedin.voyager.dash.deco.identity.profile.FullProfileTreasuryMediaItemsInjection"],"elements":[],"$type":"com.linkedin.restli.common.CollectionResponse"},{"paging":{"total":0,"start":0,"count":20,"links":[],"$recipeTypes":["com.linkedin.voyager.dash.deco.common.FullPaging"],"$type":"com.linkedin.restli.common.CollectionMetadata"},"entityUrn":"urn:li:collectionResponse:gV5aQDJi5swVYnLldghQcmP7nDZ0YVgDXdF7me9rA2Q=","$recipeTypes":["com.linkedin.voyager.dash.deco.identity.profile.FullProfilePatentsInjection"],"elements":[],"$type":"com.linkedin.restli.common.CollectionResponse"},{"paging":{"total":0,"start":0,"count":20,"links":[],"$recipeTypes":["com.linkedin.voyager.dash.deco.common.FullPaging"],"$type":"com.linkedin.restli.common.CollectionMetadata"},"entityUrn":"urn:li:collectionResponse:cAx439O/rGxh5UZSw2PLpIUxy/t1ystI9/A5+yIrPMk=","$recipeTypes":["com.linkedin.voyager.dash.deco.identity.profile.FullProfileProjectsInjection"],"elements":[],"$type":"com.linkedin.restli.common.CollectionResponse"},{"paging":{"total":1,"start":0,"count":20,"links":[],"$recipeTypes":["com.linkedin.voyager.dash.deco.common.FullPaging"],"$type":"com.linkedin.restli.common.CollectionMetadata"},"*elements":["urn:li:fsd_profilePosition:(ACoAAArnC7ABDK0JxoBsuqWZNH15yxLBhyJmWto,1642213763)"],"entityUrn":"urn:li:collectionResponse:hDTVPW5nJysnvtnfPd+UT1DiDtPPbDDITxlq0a0KUcU=","$recipeTypes":["com.linkedin.voyager.dash.deco.identity.profile.FullProfilePositionsInGroup"],"$type":"com.linkedin.restli.common.CollectionResponse"},{"paging":{"total":0,"start":0,"count":20,"links":[],"$recipeTypes":["com.linkedin.voyager.dash.deco.common.FullPaging"],"$type":"com.linkedin.restli.common.CollectionMetadata"},"entityUrn":"urn:li:collectionResponse:uTsh10Rt88syC+dtXU0ToVqYFPdxQOwhof7waNZ0A4M=","$recipeTypes":["com.linkedin.voyager.dash.deco.identity.profile.FullProfileCoursesInjection"],"elements":[],"$type":"com.linkedin.restli.common.CollectionResponse"},{"paging":{"total":0,"start":0,"count":20,"links":[],"$recipeTypes":["com.linkedin.voyager.dash.deco.common.FullPaging"],"$type":"com.linkedin.restli.common.CollectionMetadata"},"entityUrn":"urn:li:collectionResponse:CpX6JrNap0R4JzW34J6hiqqL4IVZfiD6up6Bnhv9mz4=","$recipeTypes":["com.linkedin.voyager.dash.deco.identity.profile.FullProfileTestScoresInjection"],"elements":[],"$type":"com.linkedin.restli.common.CollectionResponse"},{"paging":{"total":13,"start":0,"count":20,"links":[],"$recipeTypes":["com.linkedin.voyager.dash.deco.common.FullPaging"],"$type":"com.linkedin.restli.common.CollectionMetadata"},"*elements":["urn:li:fsd_skill:(ACoAAArnC7ABDK0JxoBsuqWZNH15yxLBhyJmWto,478407910)","urn:li:fsd_skill:(ACoAAArnC7ABDK0JxoBsuqWZNH15yxLBhyJmWto,1)","urn:li:fsd_skill:(ACoAAArnC7ABDK0JxoBsuqWZNH15yxLBhyJmWto,2)","urn:li:fsd_skill:(ACoAAArnC7ABDK0JxoBsuqWZNH15yxLBhyJmWto,7)","urn:li:fsd_skill:(ACoAAArnC7ABDK0JxoBsuqWZNH15yxLBhyJmWto,3)","urn:li:fsd_skill:(ACoAAArnC7ABDK0JxoBsuqWZNH15yxLBhyJmWto,478407912)","urn:li:fsd_skill:(ACoAAArnC7ABDK0JxoBsuqWZNH15yxLBhyJmWto,478407914)","urn:li:fsd_skill:(ACoAAArnC7ABDK0JxoBsuqWZNH15yxLBhyJmWto,4)","urn:li:fsd_skill:(ACoAAArnC7ABDK0JxoBsuqWZNH15yxLBhyJmWto,478407925)","urn:li:fsd_skill:(ACoAAArnC7ABDK0JxoBsuqWZNH15yxLBhyJmWto,478407908)","urn:li:fsd_skill:(ACoAAArnC7ABDK0JxoBsuqWZNH15yxLBhyJmWto,478407916)","urn:li:fsd_skill:(ACoAAArnC7ABDK0JxoBsuqWZNH15yxLBhyJmWto,5)","urn:li:fsd_skill:(ACoAAArnC7ABDK0JxoBsuqWZNH15yxLBhyJmWto,6)"],"entityUrn":"urn:li:collectionResponse:TIg1Ok0Kw0Ze6uMW+EttS9TYVCjExFOk1iCqxHkDcj0=","$recipeTypes":["com.linkedin.voyager.dash.deco.identity.profile.FullProfileSkillsInjection"],"$type":"com.linkedin.restli.common.CollectionResponse"},{"paging":{"total":1,"start":0,"count":20,"links":[],"$recipeTypes":["com.linkedin.voyager.dash.deco.common.FullPaging"],"$type":"com.linkedin.restli.common.CollectionMetadata"},"*elements":["urn:li:fsd_profilePosition:(ACoAAArnC7ABDK0JxoBsuqWZNH15yxLBhyJmWto,1022531896)"],"entityUrn":"urn:li:collectionResponse:j0fFqjV0chg0nRUy7aQJa1K1lUlLBqRJ7s19waRKx6o=","$recipeTypes":["com.linkedin.voyager.dash.deco.identity.profile.FullProfilePositionsInGroup"],"$type":"com.linkedin.restli.common.CollectionResponse"},{"paging":{"total":1,"start":0,"count":20,"links":[],"$recipeTypes":["com.linkedin.voyager.dash.deco.common.FullPaging"],"$type":"com.linkedin.restli.common.CollectionMetadata"},"*elements":["urn:li:fsd_profilePosition:(ACoAAArnC7ABDK0JxoBsuqWZNH15yxLBhyJmWto,478407849)"],"entityUrn":"urn:li:collectionResponse:4ucxDpBywoTxADkXEBMqRrRqpoa6AYQrXdzywHgf2AY=","$recipeTypes":["com.linkedin.voyager.dash.deco.identity.profile.FullProfilePositionsInGroup"],"$type":"com.linkedin.restli.common.CollectionResponse"},{"paging":{"total":0,"start":0,"count":10,"links":[],"$recipeTypes":["com.linkedin.voyager.dash.deco.common.FullPaging"],"$type":"com.linkedin.restli.common.CollectionMetadata"},"entityUrn":"urn:li:collectionResponse:TZzyAeK2n0RuW1qClEsqLe0n+iCpgxJI80i+W9oqWOo=","$recipeTypes":["com.linkedin.voyager.dash.deco.identity.profile.FullProfileTreasuryMediaItemsInjection"],"elements":[],"$type":"com.linkedin.restli.common.CollectionResponse"},{"paging":{"total":0,"start":0,"count":10,"links":[],"$recipeTypes":["com.linkedin.voyager.dash.deco.common.FullPaging"],"$type":"com.linkedin.restli.common.CollectionMetadata"},"entityUrn":"urn:li:collectionResponse:UFpLYvP9j58BlhzW0QMtcBQ/PMhSN/4oOG7AccoJQeg=","$recipeTypes":["com.linkedin.voyager.dash.deco.identity.profile.FullProfileTreasuryMediaItemsInjection"],"elements":[],"$type":"com.linkedin.restli.common.CollectionResponse"},{"paging":{"total":0,"start":0,"count":10,"links":[],"$recipeTypes":["com.linkedin.voyager.dash.deco.common.FullPaging"],"$type":"com.linkedin.restli.common.CollectionMetadata"},"entityUrn":"urn:li:collectionResponse:AYNJfJZWVew0P2Ndh4l5zphrBP0bW6wZqWQt8W/Uzpo=","$recipeTypes":["com.linkedin.voyager.dash.deco.identity.profile.FullProfileTreasuryMediaItemsInjection"],"elements":[],"$type":"com.linkedin.restli.common.CollectionResponse"},{"paging":{"total":0,"start":0,"count":10,"links":[],"$recipeTypes":["com.linkedin.voyager.dash.deco.common.FullPaging"],"$type":"com.linkedin.restli.common.CollectionMetadata"},"entityUrn":"urn:li:collectionResponse:h4rpXos2a8xtjVN/krQKwzQP1WH4lu5s1jzfIkTPynQ=","$recipeTypes":["com.linkedin.voyager.dash.deco.identity.profile.FullProfileTreasuryMediaItemsInjection"],"elements":[],"$type":"com.linkedin.restli.common.CollectionResponse"},{"paging":{"total":0,"start":0,"count":20,"links":[],"$recipeTypes":["com.linkedin.voyager.dash.deco.common.FullPaging"],"$type":"com.linkedin.restli.common.CollectionMetadata"},"entityUrn":"urn:li:collectionResponse:9pnULQcqdbyCNfFb1sLb9EQbJ+QCHWExhMZghx2tD2k=","$recipeTypes":["com.linkedin.voyager.dash.deco.identity.profile.FullProfileCertificationsInjection"],"elements":[],"$type":"com.linkedin.restli.common.CollectionResponse"},{"paging":{"total":0,"start":0,"count":10,"links":[],"$recipeTypes":["com.linkedin.voyager.dash.deco.common.FullPaging"],"$type":"com.linkedin.restli.common.CollectionMetadata"},"entityUrn":"urn:li:collectionResponse:SCgtNsbjCQUZ+HkDlJLuwh7/sJ1aiNAYzXN7dA4kKQg=","$recipeTypes":["com.linkedin.voyager.dash.deco.identity.profile.FullProfileTreasuryMediaItemsInjection"],"elements":[],"$type":"com.linkedin.restli.common.CollectionResponse"},{"paging":{"total":0,"start":0,"count":20,"links":[],"$recipeTypes":["com.linkedin.voyager.dash.deco.common.FullPaging"],"$type":"com.linkedin.restli.common.CollectionMetadata"},"entityUrn":"urn:li:collectionResponse:tD3bKMGm95JhRw4nu7jMRb4yQ+XJZWpSjM37rC94cjQ=","$recipeTypes":["com.linkedin.voyager.dash.deco.identity.profile.FullProfilePublicationsInjection"],"elements":[],"$type":"com.linkedin.restli.common.CollectionResponse"},{"paging":{"total":1,"start":0,"count":20,"links":[],"$recipeTypes":["com.linkedin.voyager.dash.deco.common.FullPaging"],"$type":"com.linkedin.restli.common.CollectionMetadata"},"*elements":["urn:li:fsd_profilePosition:(ACoAAArnC7ABDK0JxoBsuqWZNH15yxLBhyJmWto,1788668310)"],"entityUrn":"urn:li:collectionResponse:aEzpchD6WQig0UN5hvyW46to9M6qY2i+UWXANzdP/ic=","$recipeTypes":["com.linkedin.voyager.dash.deco.identity.profile.FullProfilePositionsInGroup"],"$type":"com.linkedin.restli.common.CollectionResponse"},{"countryUrn":null,"defaultLocalizedNameWithoutCountryName":"Украина","entityUrn":"urn:li:fsd_geo:102264497","$recipeTypes":["com.linkedin.voyager.dash.deco.identity.profile.Geo"],"defaultLocalizedName":"Украина","$type":"com.linkedin.voyager.dash.common.Geo"},{"entityUrn":"urn:li:fsd_industry:33","name":"Спорт","$recipeTypes":["com.linkedin.voyager.dash.deco.common.Industry"],"$type":"com.linkedin.voyager.dash.common.Industry"},{"entityUrn":"urn:li:fsd_industry:4","name":"Программное обеспечение","$recipeTypes":["com.linkedin.voyager.dash.deco.common.Industry"],"$type":"com.linkedin.voyager.dash.common.Industry"},{"entityUrn":"urn:li:fsd_industry:102","name":"Разработка программ","$recipeTypes":["com.linkedin.voyager.dash.deco.common.Industry"],"$type":"com.linkedin.voyager.dash.common.Industry"},{"entityUrn":"urn:li:fsd_industry:41","name":"Банковское дело","$recipeTypes":["com.linkedin.voyager.dash.deco.common.Industry"],"$type":"com.linkedin.voyager.dash.common.Industry"},{"entityUrn":"urn:li:fsd_industry:123","name":"Привлечение услуг сторонних организаций/вывод деятельности за рубеж","$recipeTypes":["com.linkedin.voyager.dash.deco.common.Industry"],"$type":"com.linkedin.voyager.dash.common.Industry"},{"entityUrn":"urn:li:fsd_industry:53","name":"Автомобильная промышленность","$recipeTypes":["com.linkedin.voyager.dash.deco.common.Industry"],"$type":"com.linkedin.voyager.dash.common.Industry"},{"entityUrn":"urn:li:fsd_industry:96","name":"Информационные технологии и услуги","$recipeTypes":["com.linkedin.voyager.dash.deco.common.Industry"],"$type":"com.linkedin.voyager.dash.common.Industry"},{"dateRange":{"start":{"year":2006,"$recipeTypes":["com.linkedin.voyager.dash.deco.common.Date"],"$type":"com.linkedin.common.Date"},"end":{"year":2011,"$recipeTypes":["com.linkedin.voyager.dash.deco.common.Date"],"$type":"com.linkedin.common.Date"},"$recipeTypes":["com.linkedin.voyager.dash.deco.common.DateRange"],"$type":"com.linkedin.common.DateRange"},"description":null,"degreeName":"Master's degree","multiLocaleGrade":null,"*profileTreasuryMediaEducation":"urn:li:collectionResponse:4wT1dA7+pqssgYsxZu7XikQjLmgteZt0wzKCu4q51rA=","$recipeTypes":["com.linkedin.voyager.dash.deco.identity.profile.FullProfileEducation"],"multiLocaleSchoolName":{"ru_RU":"Dnipropetrovs'kij Nacional'nij Universitet"},"schoolUrn":"urn:li:fsd_school:17529","$type":"com.linkedin.voyager.dash.identity.profile.Education","multiLocaleActivities":null,"entityUrn":"urn:li:fsd_profileEducation:(ACoAAArnC7ABDK0JxoBsuqWZNH15yxLBhyJmWto,146825862)","activities":null,"grade":null,"*school":"urn:li:fsd_school:17529","multiLocaleFieldOfStudy":{"ru_RU":"Computer Science"},"standardizedFieldOfStudyUrn":null,"schoolName":"Dnipropetrovs'kij Nacional'nij Universitet","*degree":"urn:li:fsd_degree:500","multiLocaleDescription":null,"fieldOfStudy":"Computer Science","degreeUrn":"urn:li:fsd_degree:500","multiLocaleDegreeName":{"ru_RU":"Master's degree"}},{"entityUrn":"urn:li:fsd_employmentType:12","companyNameRequired":true,"name":"Полный рабочий день","$recipeTypes":["com.linkedin.voyager.dash.deco.identity.profile.EmploymentType"],"$type":"com.linkedin.voyager.dash.identity.profile.EmploymentType"},{"dateRange":{"start":{"month":12,"year":2017,"$recipeTypes":["com.linkedin.voyager.dash.deco.common.Date"],"$type":"com.linkedin.common.Date"},"end":{"month":11,"year":2019,"$recipeTypes":["com.linkedin.voyager.dash.deco.common.Date"],"$type":"com.linkedin.common.Date"},"$recipeTypes":["com.linkedin.voyager.dash.deco.common.DateRange"],"$type":"com.linkedin.common.DateRange"},"multiLocaleCompanyName":{"ru_RU":"Zports.com"},"companyName":"Zports.com","description":"Project:\nSports recruitment and networking platforms that help to apply to open jobs and connect with players, coaches, teams, agents, and scouts, and promote yourself by posting your sports performances, photos, or videos.\n\nResponsibilities:\n- Lead the small distributed team of 4 devs\n- Work directly with the CEO to clarify requirements and writing specs\n- Design and implement the system architecture\n\nTechnology stack:\nAWS\nReact/Redux\nNode.js\nMongoDB\nPHP\nMySQL","*company":"urn:li:fsd_company:22295607","title":"Senior Full Stack JavaScript Developer (React / Node.js)","companyUrn":"urn:li:fsd_company:22295607","*employmentType":"urn:li:fsd_employmentType:12","employmentTypeUrn":"urn:li:fsd_employmentType:12","entityUrn":"urn:li:fsd_profilePosition:(ACoAAArnC7ABDK0JxoBsuqWZNH15yxLBhyJmWto,1500139591)","shouldShowSourceOfHireBadge":false,"*profileTreasuryMediaPosition":"urn:li:collectionResponse:UFpLYvP9j58BlhzW0QMtcBQ/PMhSN/4oOG7AccoJQeg=","multiLocaleTitle":{"ru_RU":"Senior Full Stack JavaScript Developer (React / Node.js)"},"$recipeTypes":["com.linkedin.voyager.dash.deco.identity.profile.FullProfilePosition"],"$type":"com.linkedin.voyager.dash.identity.profile.Position","multiLocaleDescription":{"ru_RU":"Project:\nSports recruitment and networking platforms that help to apply to open jobs and connect with players, coaches, teams, agents, and scouts, and promote yourself by posting your sports performances, photos, or videos.\n\nResponsibilities:\n- Lead the small distributed team of 4 devs\n- Work directly with the CEO to clarify requirements and writing specs\n- Design and implement the system architecture\n\nTechnology stack:\nAWS\nReact/Redux\nNode.js\nMongoDB\nPHP\nMySQL"}},{"dateRange":{"start":{"month":12,"year":2019,"$recipeTypes":["com.linkedin.voyager.dash.deco.common.Date"],"$type":"com.linkedin.common.Date"},"end":{"year":2021,"$recipeTypes":["com.linkedin.voyager.dash.deco.common.Date"],"$type":"com.linkedin.common.Date"},"$recipeTypes":["com.linkedin.voyager.dash.deco.common.DateRange"],"$type":"com.linkedin.common.DateRange"},"multiLocaleCompanyName":{"ru_RU":"UJET"},"companyName":"UJET","description":"Project:\nThe platform of customizable ECUs and firmware that control driving, onboard IoT sensors of electric scooters, and consists of the admin tool and several customer-facing and back-office mobile applications.\n\nResponsibilities:\n- Developing both Back-End services, Front-End, and mobile apps\n\nTechnology stack:\nTypeScript / JavaScript\nNode.js / PHP\nReact / Redux / Redux-Saga / MobX / Ant Design\nReact Native\nDocker\nMongoDB / MySQL","*company":"urn:li:fsd_company:10208060","title":"Senior Software Engineer (JavaScript / TypeScript)","companyUrn":"urn:li:fsd_company:10208060","*employmentType":"urn:li:fsd_employmentType:12","employmentTypeUrn":"urn:li:fsd_employmentType:12","entityUrn":"urn:li:fsd_profilePosition:(ACoAAArnC7ABDK0JxoBsuqWZNH15yxLBhyJmWto,1642213763)","shouldShowSourceOfHireBadge":false,"*profileTreasuryMediaPosition":"urn:li:collectionResponse:SCgtNsbjCQUZ+HkDlJLuwh7/sJ1aiNAYzXN7dA4kKQg=","multiLocaleTitle":{"ru_RU":"Senior Software Engineer (JavaScript / TypeScript)"},"$recipeTypes":["com.linkedin.voyager.dash.deco.identity.profile.FullProfilePosition"],"$type":"com.linkedin.voyager.dash.identity.profile.Position","multiLocaleDescription":{"ru_RU":"Project:\nThe platform of customizable ECUs and firmware that control driving, onboard IoT sensors of electric scooters, and consists of the admin tool and several customer-facing and back-office mobile applications.\n\nResponsibilities:\n- Developing both Back-End services, Front-End, and mobile apps\n\nTechnology stack:\nTypeScript / JavaScript\nNode.js / PHP\nReact / Redux / Redux-Saga / MobX / Ant Design\nReact Native\nDocker\nMongoDB / MySQL"},"sourceOfHireType":"REFERRAL"},{"shouldShowSourceOfHireBadge":false,"*profileTreasuryMediaPosition":"urn:li:collectionResponse:TZzyAeK2n0RuW1qClEsqLe0n+iCpgxJI80i+W9oqWOo=","multiLocaleTitle":{"ru_RU":"Software Developer (Java/JavaScript)"},"dateRange":{"start":{"year":2011,"$recipeTypes":["com.linkedin.voyager.dash.deco.common.Date"],"$type":"com.linkedin.common.Date"},"end":{"month":9,"year":2013,"$recipeTypes":["com.linkedin.voyager.dash.deco.common.Date"],"$type":"com.linkedin.common.Date"},"$recipeTypes":["com.linkedin.voyager.dash.deco.common.DateRange"],"$type":"com.linkedin.common.DateRange"},"multiLocaleCompanyName":{"ru_RU":"PrivatBank"},"companyName":"PrivatBank","description":"Project:\nWeb services allowing automating the collection, updating, and validation of the bank’s customers data, as well as simplifying and acceleration operations with accounts, cards, and agreements.\n\nResponsibilities:\n- Architecture design and planning\n- Back-End and Front-End software development\n- Collecting requirements for integration with 3rd party bank's services\n\nTechnology stack:\nJava\nSpring\nApache Camel\nOracleDB\nAngular.js","*company":"urn:li:fsd_company:165549","title":"Software Developer (Java/JavaScript)","companyUrn":"urn:li:fsd_company:165549","$recipeTypes":["com.linkedin.voyager.dash.deco.identity.profile.FullProfilePosition"],"$type":"com.linkedin.voyager.dash.identity.profile.Position","entityUrn":"urn:li:fsd_profilePosition:(ACoAAArnC7ABDK0JxoBsuqWZNH15yxLBhyJmWto,281090366)","multiLocaleDescription":{"ru_RU":"Project:\nWeb services allowing automating the collection, updating, and validation of the bank’s customers data, as well as simplifying and acceleration operations with accounts, cards, and agreements.\n\nResponsibilities:\n- Architecture design and planning\n- Back-End and Front-End software development\n- Collecting requirements for integration with 3rd party bank's services\n\nTechnology stack:\nJava\nSpring\nApache Camel\nOracleDB\nAngular.js"}},{"dateRange":{"start":{"month":3,"year":2015,"$recipeTypes":["com.linkedin.voyager.dash.deco.common.Date"],"$type":"com.linkedin.common.Date"},"end":{"month":12,"year":2017,"$recipeTypes":["com.linkedin.voyager.dash.deco.common.Date"],"$type":"com.linkedin.common.Date"},"$recipeTypes":["com.linkedin.voyager.dash.deco.common.DateRange"],"$type":"com.linkedin.common.DateRange"},"multiLocaleCompanyName":{"ru_RU":"Daxx Software Development Teams in Ukraine"},"companyName":"Daxx Software Development Teams in Ukraine","description":"Project:\nFinancial cloud-based close management solution to help finance professionals improve the efficiency and enhance controls in the close-to-filing process.\n\nResponsibilities:\n- Work with the CTO and CEO to design and implement the system architecture\n- Supervise and mentor other workers at the company\n- Maintain cloud infrastructure for a distributed application.\n- Assist in the collection of user requirements and writing technical specifications\n\nTechnology stack:\nGoogle cloud\nAngular.js\nNode.js\nJava\nMongoDB","*company":"urn:li:fsd_company:505391","title":"Senior Full Stack JavaScript/Java Developer","companyUrn":"urn:li:fsd_company:505391","entityUrn":"urn:li:fsd_profilePosition:(ACoAAArnC7ABDK0JxoBsuqWZNH15yxLBhyJmWto,1022531896)","multiLocaleGeoLocationName":{"ru_RU":"Dnepr"},"shouldShowSourceOfHireBadge":false,"locationName":"Dnepr","*profileTreasuryMediaPosition":"urn:li:collectionResponse:AYNJfJZWVew0P2Ndh4l5zphrBP0bW6wZqWQt8W/Uzpo=","multiLocaleTitle":{"ru_RU":"Senior Full Stack JavaScript/Java Developer"},"$recipeTypes":["com.linkedin.voyager.dash.deco.identity.profile.FullProfilePosition"],"$type":"com.linkedin.voyager.dash.identity.profile.Position","geoLocationName":"Dnepr","multiLocaleDescription":{"ru_RU":"Project:\nFinancial cloud-based close management solution to help finance professionals improve the efficiency and enhance controls in the close-to-filing process.\n\nResponsibilities:\n- Work with the CTO and CEO to design and implement the system architecture\n- Supervise and mentor other workers at the company\n- Maintain cloud infrastructure for a distributed application.\n- Assist in the collection of user requirements and writing technical specifications\n\nTechnology stack:\nGoogle cloud\nAngular.js\nNode.js\nJava\nMongoDB"},"multiLocaleLocationName":{"ru_RU":"Dnepr"}},{"shouldShowSourceOfHireBadge":true,"*profileTreasuryMediaPosition":"urn:li:collectionResponse:3qyABQ4RweTUKC7Tosx8mdxiAmF68TqUlXNS2ePvekQ=","multiLocaleTitle":{"ru_RU":"Senior Software Engineer (JavaScript / TypeScript)"},"dateRange":{"start":{"year":2021,"$recipeTypes":["com.linkedin.voyager.dash.deco.common.Date"],"$type":"com.linkedin.common.Date"},"$recipeTypes":["com.linkedin.voyager.dash.deco.common.DateRange"],"$type":"com.linkedin.common.DateRange"},"multiLocaleCompanyName":{"ru_RU":"Fluxon"},"companyName":"Fluxon","*company":"urn:li:fsd_company:27244401","title":"Senior Software Engineer (JavaScript / TypeScript)","companyUrn":"urn:li:fsd_company:27244401","$recipeTypes":["com.linkedin.voyager.dash.deco.identity.profile.FullProfilePosition"],"$type":"com.linkedin.voyager.dash.identity.profile.Position","*employmentType":"urn:li:fsd_employmentType:12","employmentTypeUrn":"urn:li:fsd_employmentType:12","entityUrn":"urn:li:fsd_profilePosition:(ACoAAArnC7ABDK0JxoBsuqWZNH15yxLBhyJmWto,1788668310)","sourceOfHireType":"LINKEDIN"},{"shouldShowSourceOfHireBadge":false,"*profileTreasuryMediaPosition":"urn:li:collectionResponse:h4rpXos2a8xtjVN/krQKwzQP1WH4lu5s1jzfIkTPynQ=","multiLocaleTitle":{"ru_RU":"Software Developer (Java / JavaScript)"},"dateRange":{"start":{"month":9,"year":2013,"$recipeTypes":["com.linkedin.voyager.dash.deco.common.Date"],"$type":"com.linkedin.common.Date"},"end":{"month":3,"year":2015,"$recipeTypes":["com.linkedin.voyager.dash.deco.common.Date"],"$type":"com.linkedin.common.Date"},"$recipeTypes":["com.linkedin.voyager.dash.deco.common.DateRange"],"$type":"com.linkedin.common.DateRange"},"multiLocaleCompanyName":{"ru_RU":"Luxoft"},"companyName":"Luxoft","description":"Project:\nSwissquote - Online Bank and Trading Platform\n\nResponsibilities:\n- Back-End and Front-End software development","*company":"urn:li:fsd_company:5300","title":"Software Developer (Java / JavaScript)","companyUrn":"urn:li:fsd_company:5300","$recipeTypes":["com.linkedin.voyager.dash.deco.identity.profile.FullProfilePosition"],"$type":"com.linkedin.voyager.dash.identity.profile.Position","entityUrn":"urn:li:fsd_profilePosition:(ACoAAArnC7ABDK0JxoBsuqWZNH15yxLBhyJmWto,478407849)","multiLocaleDescription":{"ru_RU":"Project:\nSwissquote - Online Bank and Trading Platform\n\nResponsibilities:\n- Back-End and Front-End software development"}},{"*profilePositionInPositionGroup":"urn:li:collectionResponse:j0fFqjV0chg0nRUy7aQJa1K1lUlLBqRJ7s19waRKx6o=","dateRange":{"start":{"month":3,"year":2015,"$recipeTypes":["com.linkedin.voyager.dash.deco.common.Date"],"$type":"com.linkedin.common.Date"},"end":{"month":12,"year":2017,"$recipeTypes":["com.linkedin.voyager.dash.deco.common.Date"],"$type":"com.linkedin.common.Date"},"$recipeTypes":["com.linkedin.voyager.dash.deco.common.DateRange"],"$type":"com.linkedin.common.DateRange"},"multiLocaleCompanyName":{"ru_RU":"Daxx Software Development Teams in Ukraine"},"companyName":"Daxx Software Development Teams in Ukraine","*company":"urn:li:fsd_company:505391","companyUrn":"urn:li:fsd_company:505391","$recipeTypes":["com.linkedin.voyager.dash.deco.identity.profile.FullProfilePositionGroup"],"$type":"com.linkedin.voyager.dash.identity.profile.PositionGroup","entityUrn":"urn:li:fsd_profilePositionGroup:(ACoAAArnC7ABDK0JxoBsuqWZNH15yxLBhyJmWto,fbf6b34f74613e91a116749872f6a9ad29021ae2)"},{"*profilePositionInPositionGroup":"urn:li:collectionResponse:4ucxDpBywoTxADkXEBMqRrRqpoa6AYQrXdzywHgf2AY=","dateRange":{"start":{"month":9,"year":2013,"$recipeTypes":["com.linkedin.voyager.dash.deco.common.Date"],"$type":"com.linkedin.common.Date"},"end":{"month":3,"year":2015,"$recipeTypes":["com.linkedin.voyager.dash.deco.common.Date"],"$type":"com.linkedin.common.Date"},"$recipeTypes":["com.linkedin.voyager.dash.deco.common.DateRange"],"$type":"com.linkedin.common.DateRange"},"multiLocaleCompanyName":{"ru_RU":"Luxoft"},"companyName":"Luxoft","*company":"urn:li:fsd_company:5300","companyUrn":"urn:li:fsd_company:5300","$recipeTypes":["com.linkedin.voyager.dash.deco.identity.profile.FullProfilePositionGroup"],"$type":"com.linkedin.voyager.dash.identity.profile.PositionGroup","entityUrn":"urn:li:fsd_profilePositionGroup:(ACoAAArnC7ABDK0JxoBsuqWZNH15yxLBhyJmWto,10d5988432f2a64d537e7d762f8033c1ab2c60fe)"},{"*profilePositionInPositionGroup":"urn:li:collectionResponse:i800kPCFxsv/IaCjtgo0/RzhbdLzk8vCpxomDaVBs1o=","dateRange":{"start":{"month":12,"year":2017,"$recipeTypes":["com.linkedin.voyager.dash.deco.common.Date"],"$type":"com.linkedin.common.Date"},"end":{"month":11,"year":2019,"$recipeTypes":["com.linkedin.voyager.dash.deco.common.Date"],"$type":"com.linkedin.common.Date"},"$recipeTypes":["com.linkedin.voyager.dash.deco.common.DateRange"],"$type":"com.linkedin.common.DateRange"},"multiLocaleCompanyName":{"ru_RU":"Zports.com"},"companyName":"Zports.com","*company":"urn:li:fsd_company:22295607","companyUrn":"urn:li:fsd_company:22295607","$recipeTypes":["com.linkedin.voyager.dash.deco.identity.profile.FullProfilePositionGroup"],"$type":"com.linkedin.voyager.dash.identity.profile.PositionGroup","entityUrn":"urn:li:fsd_profilePositionGroup:(ACoAAArnC7ABDK0JxoBsuqWZNH15yxLBhyJmWto,45892717e675c02d67dbac7b3c480e37d7b42717)"},{"*profilePositionInPositionGroup":"urn:li:collectionResponse:aEzpchD6WQig0UN5hvyW46to9M6qY2i+UWXANzdP/ic=","dateRange":{"start":{"year":2021,"$recipeTypes":["com.linkedin.voyager.dash.deco.common.Date"],"$type":"com.linkedin.common.Date"},"$recipeTypes":["com.linkedin.voyager.dash.deco.common.DateRange"],"$type":"com.linkedin.common.DateRange"},"multiLocaleCompanyName":{"ru_RU":"Fluxon"},"companyName":"Fluxon","*company":"urn:li:fsd_company:27244401","companyUrn":"urn:li:fsd_company:27244401","$recipeTypes":["com.linkedin.voyager.dash.deco.identity.profile.FullProfilePositionGroup"],"$type":"com.linkedin.voyager.dash.identity.profile.PositionGroup","entityUrn":"urn:li:fsd_profilePositionGroup:(ACoAAArnC7ABDK0JxoBsuqWZNH15yxLBhyJmWto,ef88b661c57cfe4004420ca559fe8db815af7fe5)"},{"*profilePositionInPositionGroup":"urn:li:collectionResponse:oy2gmtqziyF1l+T/JfQoKyURiZQGwrq8FxwOMg+CdjA=","dateRange":{"start":{"year":2011,"$recipeTypes":["com.linkedin.voyager.dash.deco.common.Date"],"$type":"com.linkedin.common.Date"},"end":{"month":9,"year":2013,"$recipeTypes":["com.linkedin.voyager.dash.deco.common.Date"],"$type":"com.linkedin.common.Date"},"$recipeTypes":["com.linkedin.voyager.dash.deco.common.DateRange"],"$type":"com.linkedin.common.DateRange"},"multiLocaleCompanyName":{"ru_RU":"PrivatBank"},"companyName":"PrivatBank","*company":"urn:li:fsd_company:165549","companyUrn":"urn:li:fsd_company:165549","$recipeTypes":["com.linkedin.voyager.dash.deco.identity.profile.FullProfilePositionGroup"],"$type":"com.linkedin.voyager.dash.identity.profile.PositionGroup","entityUrn":"urn:li:fsd_profilePositionGroup:(ACoAAArnC7ABDK0JxoBsuqWZNH15yxLBhyJmWto,3c04d95ab65ec83247b54871e3e602e9882f87c4)"},{"*profilePositionInPositionGroup":"urn:li:collectionResponse:hDTVPW5nJysnvtnfPd+UT1DiDtPPbDDITxlq0a0KUcU=","dateRange":{"start":{"month":12,"year":2019,"$recipeTypes":["com.linkedin.voyager.dash.deco.common.Date"],"$type":"com.linkedin.common.Date"},"end":{"year":2021,"$recipeTypes":["com.linkedin.voyager.dash.deco.common.Date"],"$type":"com.linkedin.common.Date"},"$recipeTypes":["com.linkedin.voyager.dash.deco.common.DateRange"],"$type":"com.linkedin.common.DateRange"},"multiLocaleCompanyName":{"ru_RU":"UJET"},"companyName":"UJET","*company":"urn:li:fsd_company:10208060","companyUrn":"urn:li:fsd_company:10208060","$recipeTypes":["com.linkedin.voyager.dash.deco.identity.profile.FullProfilePositionGroup"],"$type":"com.linkedin.voyager.dash.identity.profile.PositionGroup","entityUrn":"urn:li:fsd_profilePositionGroup:(ACoAAArnC7ABDK0JxoBsuqWZNH15yxLBhyJmWto,521c01c42e1bf5945a13abd7f2d1f9cee8792674)"},{"birthDateOn":null,"multiLocalePhoneticLastName":null,"objectUrn":"urn:li:member:182913968","multiLocaleLastName":{"ru_RU":"Tretiakov"},"*profilePositionGroups":"urn:li:collectionResponse:sWRpwHt0nXYaxAgZjr08KNOMabutdwtyj63sJi8n6aM=","*profileCertifications":"urn:li:collectionResponse:9pnULQcqdbyCNfFb1sLb9EQbJ+QCHWExhMZghx2tD2k=","pronounUnion":null,"multiLocaleFirstNamePronunciationHint":{},"multiLocaleLastNamePronunciationHint":{},"*profileTestScores":"urn:li:collectionResponse:CpX6JrNap0R4JzW34J6hiqqL4IVZfiD6up6Bnhv9mz4=","tempStatusExpiredAtUnion":null,"multiLocaleFirstName":{"ru_RU":"Alexandr"},"multiLocaleTempStatus":null,"companyNameOnProfileTopCardShown":true,"*profileLanguages":"urn:li:collectionResponse:qfBOrOtgwd2xXcAMfJYmRjlluMsbpgbVvEcUj1LC1L4=","state":null,"publicIdentifier":"alexandr-tretiakov-ba831051","trackingId":"mgCmNZKNT7aLdjcoFzcF4Q==","phoneticFirstName":null,"multiLocaleSummary":null,"firstNamePronunciationHint":null,"lastNamePronunciationHint":null,"versionTag":"673295016","*profilePatents":"urn:li:collectionResponse:gV5aQDJi5swVYnLldghQcmP7nDZ0YVgDXdF7me9rA2Q=","associatedHashtagsCopy":null,"profilePicture":{"displayImageReference":{"vectorImage":{"$recipeTypes":["com.linkedin.voyager.dash.deco.common.VectorImageOnlyRootUrlAndAttribution"],"rootUrl":"https://media-exp3.licdn.com/dms/image/C4E03AQGWoZSHZr39_g/profile-displayphoto-shrink_","artifacts":[{"width":100,"$recipeTypes":["com.linkedin.voyager.dash.deco.common.VectorArtifact"],"fileIdentifyingUrlPathSegment":"100_100/0/1622747300151?e=1629936000&amp;v=beta&amp;t=QNnA62aaVwZQg7sZAlErRiJC5oG63fOFNQEBANMj9_g","expiresAt":1629936000000,"height":100,"$type":"com.linkedin.common.VectorArtifact"},{"width":200,"$recipeTypes":["com.linkedin.voyager.dash.deco.common.VectorArtifact"],"fileIdentifyingUrlPathSegment":"200_200/0/1622747300151?e=1629936000&amp;v=beta&amp;t=KYPPJM-HGhuVaIg7k5KwIFeGhsNzaIpc-vE4pOrzlTI","expiresAt":1629936000000,"height":200,"$type":"com.linkedin.common.VectorArtifact"},{"width":400,"$recipeTypes":["com.linkedin.voyager.dash.deco.common.VectorArtifact"],"fileIdentifyingUrlPathSegment":"400_400/0/1622747300151?e=1629936000&amp;v=beta&amp;t=F0kvftcSRIh4e9KS9iwvbncxnv_ePet02wd7AdXhcW8","expiresAt":1629936000000,"height":400,"$type":"com.linkedin.common.VectorArtifact"},{"width":800,"$recipeTypes":["com.linkedin.voyager.dash.deco.common.VectorArtifact"],"fileIdentifyingUrlPathSegment":"800_800/0/1622747300151?e=1629936000&amp;v=beta&amp;t=-MQW64SZxXZ2Aon8yO9nIeltQn1uWYlEfhRoaLIJdt0","expiresAt":1629936000000,"height":800,"$type":"com.linkedin.common.VectorArtifact"}],"$type":"com.linkedin.common.VectorImage"}},"$recipeTypes":["com.linkedin.voyager.dash.deco.identity.profile.ProfilePhotoDecoSpecEditableProfilePicture"],"displayImageUrn":"urn:li:digitalmediaAsset:C4E03AQGWoZSHZr39_g","photoFilterEditInfo":{"bottomLeft":{"x":-6.178632484870436E-17,"y":0.760586319218241,"$recipeTypes":["com.linkedin.voyager.dash.deco.common.Coordinate2DFull"],"$type":"com.linkedin.common.Coordinate2D"},"vignette":0.0,"bottomRight":{"x":1.0,"y":0.760586319218241,"$recipeTypes":["com.linkedin.voyager.dash.deco.common.Coordinate2DFull"],"$type":"com.linkedin.common.Coordinate2D"},"topRight":{"x":1.0,"y":0.011400651465798045,"$recipeTypes":["com.linkedin.voyager.dash.deco.common.Coordinate2DFull"],"$type":"com.linkedin.common.Coordinate2D"},"$recipeTypes":["com.linkedin.deco.recipe.anonymous.Anon1309211116"],"$type":"com.linkedin.voyager.dash.identity.profile.PhotoFilterEditInfo","saturation":0.0,"brightness":0.0,"photoFilterType":"ORIGINAL","contrast":0.0,"topLeft":{"x":-6.178632484870436E-17,"y":0.011400651465798045,"$recipeTypes":["com.linkedin.voyager.dash.deco.common.Coordinate2DFull"],"$type":"com.linkedin.common.Coordinate2D"}},"$type":"com.linkedin.voyager.dash.identity.profile.PhotoFilterPicture"},"firstName":"Alexandr","*profileOrganizations":"urn:li:collectionResponse:+bBPGMjmADIFo7pu/0CR0nKPskjMR4GgMoukoDVZjVM=","multiLocaleMaidenName":null,"*profileHonors":"urn:li:collectionResponse:acL7vVTkIBZBvJQm19+MCu50GCiF4EBz8tpG3mVHzoE=","*profileSkills":"urn:li:collectionResponse:TIg1Ok0Kw0Ze6uMW+EttS9TYVCjExFOk1iCqxHkDcj0=","multiLocaleHeadline":{"ru_RU":"Senior Software Engineer (JavaScript / TypeScript) at Fluxon"},"*profileProjects":"urn:li:collectionResponse:cAx439O/rGxh5UZSw2PLpIUxy/t1ystI9/A5+yIrPMk=","*profilePublications":"urn:li:collectionResponse:tD3bKMGm95JhRw4nu7jMRb4yQ+XJZWpSjM37rC94cjQ=","memorialized":false,"lastName":"Tretiakov","multiLocalePhoneticFirstName":null,"volunteerCauses":null,"*industry":"urn:li:fsd_industry:102","showPremiumSubscriberBadge":false,"tempStatusEmoji":null,"maidenName":null,"geoLocationBackfilled":false,"multiLocaleFullNamePronunciationAudio":{},"phoneticLastName":null,"premium":false,"influencer":false,"*profileCourses":"urn:li:collectionResponse:uTsh10Rt88syC+dtXU0ToVqYFPdxQOwhof7waNZ0A4M=","entityUrn":"urn:li:fsd_profile:ACoAAArnC7ABDK0JxoBsuqWZNH15yxLBhyJmWto","*profileEducations":"urn:li:collectionResponse:nNiRf5TgQkorkDvXxPlOWDc8NMX/LGG+x4jDcOUgbTA=","headline":"Senior Software Engineer (JavaScript / TypeScript) at Fluxon","fullNamePronunciationAudio":null,"summary":null,"creator":false,"supportedLocales":[{"country":"RU","language":"ru","$recipeTypes":["com.linkedin.voyager.dash.deco.common.Locale"],"$type":"com.linkedin.common.Locale"}],"locationName":null,"address":null,"multiLocaleAddress":null,"*profileVolunteerExperiences":"urn:li:collectionResponse:YxZtgNUbxB9Ac3TrKVCuMb8TeZpKpFgjUJ3VGo1xUM8=","educationOnProfileTopCardShown":true,"industryUrn":"urn:li:fsd_industry:102","$recipeTypes":["com.linkedin.voyager.dash.deco.identity.profile.FullProfileWithEntities"],"$type":"com.linkedin.voyager.dash.identity.profile.Profile","geoLocation":{"*geo":"urn:li:fsd_geo:102264497","$recipeTypes":["com.linkedin.voyager.dash.deco.identity.profile.ProfileGeoLocation"],"geoUrn":"urn:li:fsd_geo:102264497","$type":"com.linkedin.voyager.dash.identity.profile.ProfileGeoLocation"},"tempStatus":null,"*profileTreasuryMediaProfile":"urn:li:collectionResponse:QM/c88fO9jvkf8Xw0JuXQmHTzZgVauE2s3OBR04qw5I=","location":{"$recipeTypes":["com.linkedin.voyager.dash.deco.identity.profile.ProfileLocation"],"countryCode":"ua","$type":"com.linkedin.voyager.dash.identity.profile.ProfileLocation"},"primaryLocale":{"country":"RU","language":"ru","$recipeTypes":["com.linkedin.voyager.dash.deco.common.Locale"],"$type":"com.linkedin.common.Locale"},"backgroundPicture":null},{"entityUrn":"urn:li:fsd_skill:(ACoAAArnC7ABDK0JxoBsuqWZNH15yxLBhyJmWto,7)","name":"Docker Products","multiLocaleName":{"ru_RU":"Docker Products"},"$recipeTypes":["com.linkedin.voyager.dash.deco.identity.profile.FullProfileSkill"],"$type":"com.linkedin.voyager.dash.identity.profile.Skill"},{"entityUrn":"urn:li:fsd_skill:(ACoAAArnC7ABDK0JxoBsuqWZNH15yxLBhyJmWto,478407916)","name":"Apache Camel","multiLocaleName":{"ru_RU":"Apache Camel"},"$recipeTypes":["com.linkedin.voyager.dash.deco.identity.profile.FullProfileSkill"],"$type":"com.linkedin.voyager.dash.identity.profile.Skill"},{"entityUrn":"urn:li:fsd_skill:(ACoAAArnC7ABDK0JxoBsuqWZNH15yxLBhyJmWto,3)","name":"Express.js","multiLocaleName":{"ru_RU":"Express.js"},"$recipeTypes":["com.linkedin.voyager.dash.deco.identity.profile.FullProfileSkill"],"$type":"com.linkedin.voyager.dash.identity.profile.Skill"},{"entityUrn":"urn:li:fsd_skill:(ACoAAArnC7ABDK0JxoBsuqWZNH15yxLBhyJmWto,478407912)","name":"AngularJS","multiLocaleName":{"ru_RU":"AngularJS"},"$recipeTypes":["com.linkedin.voyager.dash.deco.identity.profile.FullProfileSkill"],"$type":"com.linkedin.voyager.dash.identity.profile.Skill"},{"entityUrn":"urn:li:fsd_skill:(ACoAAArnC7ABDK0JxoBsuqWZNH15yxLBhyJmWto,2)","name":"Node.js","multiLocaleName":{"ru_RU":"Node.js"},"$recipeTypes":["com.linkedin.voyager.dash.deco.identity.profile.FullProfileSkill"],"$type":"com.linkedin.voyager.dash.identity.profile.Skill"},{"entityUrn":"urn:li:fsd_skill:(ACoAAArnC7ABDK0JxoBsuqWZNH15yxLBhyJmWto,6)","name":"TypeScript","multiLocaleName":{"ru_RU":"TypeScript"},"$recipeTypes":["com.linkedin.voyager.dash.deco.identity.profile.FullProfileSkill"],"$type":"com.linkedin.voyager.dash.identity.profile.Skill"},{"entityUrn":"urn:li:fsd_skill:(ACoAAArnC7ABDK0JxoBsuqWZNH15yxLBhyJmWto,478407908)","name":"OOP &amp; OOD","multiLocaleName":{"ru_RU":"OOP &amp; OOD"},"$recipeTypes":["com.linkedin.voyager.dash.deco.identity.profile.FullProfileSkill"],"$type":"com.linkedin.voyager.dash.identity.profile.Skill"},{"entityUrn":"urn:li:fsd_skill:(ACoAAArnC7ABDK0JxoBsuqWZNH15yxLBhyJmWto,478407910)","name":"JavaScript","multiLocaleName":{"ru_RU":"JavaScript"},"$recipeTypes":["com.linkedin.voyager.dash.deco.identity.profile.FullProfileSkill"],"$type":"com.linkedin.voyager.dash.identity.profile.Skill"},{"entityUrn":"urn:li:fsd_skill:(ACoAAArnC7ABDK0JxoBsuqWZNH15yxLBhyJmWto,1)","name":"React","multiLocaleName":{"ru_RU":"React"},"$recipeTypes":["com.linkedin.voyager.dash.deco.identity.profile.FullProfileSkill"],"$type":"com.linkedin.voyager.dash.identity.profile.Skill"},{"entityUrn":"urn:li:fsd_skill:(ACoAAArnC7ABDK0JxoBsuqWZNH15yxLBhyJmWto,478407914)","name":"MongoDB","multiLocaleName":{"ru_RU":"MongoDB"},"$recipeTypes":["com.linkedin.voyager.dash.deco.identity.profile.FullProfileSkill"],"$type":"com.linkedin.voyager.dash.identity.profile.Skill"},{"entityUrn":"urn:li:fsd_skill:(ACoAAArnC7ABDK0JxoBsuqWZNH15yxLBhyJmWto,5)","name":"React Native","multiLocaleName":{"ru_RU":"React Native"},"$recipeTypes":["com.linkedin.voyager.dash.deco.identity.profile.FullProfileSkill"],"$type":"com.linkedin.voyager.dash.identity.profile.Skill"},{"entityUrn":"urn:li:fsd_skill:(ACoAAArnC7ABDK0JxoBsuqWZNH15yxLBhyJmWto,4)","name":"Google Cloud Platform","multiLocaleName":{"ru_RU":"Google Cloud Platform"},"$recipeTypes":["com.linkedin.voyager.dash.deco.identity.profile.FullProfileSkill"],"$type":"com.linkedin.voyager.dash.identity.profile.Skill"},{"entityUrn":"urn:li:fsd_skill:(ACoAAArnC7ABDK0JxoBsuqWZNH15yxLBhyJmWto,478407925)","name":"HTTP","multiLocaleName":{"ru_RU":"HTTP"},"$recipeTypes":["com.linkedin.voyager.dash.deco.identity.profile.FullProfileSkill"],"$type":"com.linkedin.voyager.dash.identity.profile.Skill"},{"entityUrn":"urn:li:fsd_degree:500","$recipeTypes":["com.linkedin.deco.recipe.anonymous.Anon875016385"],"$type":"com.linkedin.voyager.dash.identity.profile.StandardizedDegree"},{"industry":{"*urn:li:fsd_industry:96":"urn:li:fsd_industry:96"},"industryUrns":["urn:li:fsd_industry:96"],"$recipeTypes":["com.linkedin.voyager.dash.deco.identity.profile.LinkablePositionCompany"],"url":"https://www.linkedin.com/company/luxoft/","$type":"com.linkedin.voyager.dash.organization.Company","employeeCountRange":{"start":10001,"$recipeTypes":["com.linkedin.voyager.dash.deco.common.IntegerRange"],"$type":"com.linkedin.common.IntegerRange"},"entityUrn":"urn:li:fsd_company:5300","name":"Luxoft","logo":{"vectorImage":{"$recipeTypes":["com.linkedin.voyager.dash.deco.common.VectorImageOnlyRootUrlAndAttribution"],"rootUrl":"https://media-exp3.licdn.com/dms/image/C560BAQEaPpbzTwh0Vw/company-logo_","artifacts":[{"width":200,"$recipeTypes":["com.linkedin.voyager.dash.deco.common.VectorArtifact"],"fileIdentifyingUrlPathSegment":"200_200/0/1560519830379?e=1632355200&amp;v=beta&amp;t=j6WzmpIrFgq6lRaCTnM83259Vnb_UDoauVfOa4yvkIc","expiresAt":1632355200000,"height":200,"$type":"com.linkedin.common.VectorArtifact"},{"width":100,"$recipeTypes":["com.linkedin.voyager.dash.deco.common.VectorArtifact"],"fileIdentifyingUrlPathSegment":"100_100/0/1560519830379?e=1632355200&amp;v=beta&amp;t=3L40WvRNIw3q3NjktH4UlXS_6U697f-WQ_JnA-cWeug","expiresAt":1632355200000,"height":100,"$type":"com.linkedin.common.VectorArtifact"},{"width":400,"$recipeTypes":["com.linkedin.voyager.dash.deco.common.VectorArtifact"],"fileIdentifyingUrlPathSegment":"400_400/0/1560519830379?e=1632355200&amp;v=beta&amp;t=FEu2XJs9zUHq7eqAIuRo7JyMQYiMDjOoZQ3_PFhopZ0","expiresAt":1632355200000,"height":400,"$type":"com.linkedin.common.VectorArtifact"}],"$type":"com.linkedin.common.VectorImage"}},"universalName":"luxoft"},{"industry":{"*urn:li:fsd_industry:33":"urn:li:fsd_industry:33"},"industryUrns":["urn:li:fsd_industry:33"],"$recipeTypes":["com.linkedin.voyager.dash.deco.identity.profile.LinkablePositionCompany"],"url":"https://www.linkedin.com/company/zports.com/","$type":"com.linkedin.voyager.dash.organization.Company","employeeCountRange":{"start":2,"end":10,"$recipeTypes":["com.linkedin.voyager.dash.deco.common.IntegerRange"],"$type":"com.linkedin.common.IntegerRange"},"entityUrn":"urn:li:fsd_company:22295607","name":"Zports.com","logo":{"vectorImage":{"$recipeTypes":["com.linkedin.voyager.dash.deco.common.VectorImageOnlyRootUrlAndAttribution"],"rootUrl":"https://media-exp3.licdn.com/dms/image/C510BAQEYZ7GbLG1lQQ/company-logo_","artifacts":[{"width":200,"$recipeTypes":["com.linkedin.voyager.dash.deco.common.VectorArtifact"],"fileIdentifyingUrlPathSegment":"200_200/0/1519874029941?e=1632355200&amp;v=beta&amp;t=sAvfhmcuzRsYnzLT3aCDYLX9szTQ5WCfJork-yPWDMA","expiresAt":1632355200000,"height":200,"$type":"com.linkedin.common.VectorArtifact"},{"width":100,"$recipeTypes":["com.linkedin.voyager.dash.deco.common.VectorArtifact"],"fileIdentifyingUrlPathSegment":"100_100/0/1519874029941?e=1632355200&amp;v=beta&amp;t=NkBKiqiTO9L-_op3H2dv0dTzTwO9FtE_HEBgEg4nWGE","expiresAt":1632355200000,"height":100,"$type":"com.linkedin.common.VectorArtifact"},{"width":400,"$recipeTypes":["com.linkedin.voyager.dash.deco.common.VectorArtifact"],"fileIdentifyingUrlPathSegment":"400_400/0/1519874029941?e=1632355200&amp;v=beta&amp;t=gS_8YgrkC7R0fS2YYZI-AgsHvujtSYpyG6ukXcjn31A","expiresAt":1632355200000,"height":400,"$type":"com.linkedin.common.VectorArtifact"}],"$type":"com.linkedin.common.VectorImage"}},"universalName":"zports.com"},{"industry":{"*urn:li:fsd_industry:4":"urn:li:fsd_industry:4"},"industryUrns":["urn:li:fsd_industry:4"],"$recipeTypes":["com.linkedin.voyager.dash.deco.identity.profile.LinkablePositionCompany"],"url":"https://www.linkedin.com/company/fluxonhq/","$type":"com.linkedin.voyager.dash.organization.Company","employeeCountRange":{"start":51,"end":200,"$recipeTypes":["com.linkedin.voyager.dash.deco.common.IntegerRange"],"$type":"com.linkedin.common.IntegerRange"},"entityUrn":"urn:li:fsd_company:27244401","name":"Fluxon","logo":{"vectorImage":{"$recipeTypes":["com.linkedin.voyager.dash.deco.common.VectorImageOnlyRootUrlAndAttribution"],"rootUrl":"https://media-exp3.licdn.com/dms/image/C560BAQGnK-tHrk51Vg/company-logo_","artifacts":[{"width":200,"$recipeTypes":["com.linkedin.voyager.dash.deco.common.VectorArtifact"],"fileIdentifyingUrlPathSegment":"200_200/0/1595608321184?e=1632355200&amp;v=beta&amp;t=D_Z1JZw3z7KSfQlg3elXT2Mw-1-sDt8eDQGU07IANNU","expiresAt":1632355200000,"height":200,"$type":"com.linkedin.common.VectorArtifact"},{"width":100,"$recipeTypes":["com.linkedin.voyager.dash.deco.common.VectorArtifact"],"fileIdentifyingUrlPathSegment":"100_100/0/1595608321184?e=1632355200&amp;v=beta&amp;t=p8Mjo_Mz7cWrXPnwmXhxO-M49nNY1k8adQTLDg6HkKI","expiresAt":1632355200000,"height":100,"$type":"com.linkedin.common.VectorArtifact"},{"width":400,"$recipeTypes":["com.linkedin.voyager.dash.deco.common.VectorArtifact"],"fileIdentifyingUrlPathSegment":"400_400/0/1595608321184?e=1632355200&amp;v=beta&amp;t=xsluPhBMumTRiRroOvwv02c3Lyv1zyKTl76gyYC97oQ","expiresAt":1632355200000,"height":400,"$type":"com.linkedin.common.VectorArtifact"}],"$type":"com.linkedin.common.VectorImage"}},"universalName":"fluxonhq"},{"industry":{"*urn:li:fsd_industry:41":"urn:li:fsd_industry:41"},"industryUrns":["urn:li:fsd_industry:41"],"$recipeTypes":["com.linkedin.voyager.dash.deco.identity.profile.LinkablePositionCompany"],"url":"https://www.linkedin.com/company/privatbank/","$type":"com.linkedin.voyager.dash.organization.Company","employeeCountRange":{"start":10001,"$recipeTypes":["com.linkedin.voyager.dash.deco.common.IntegerRange"],"$type":"com.linkedin.common.IntegerRange"},"entityUrn":"urn:li:fsd_company:165549","name":"PrivatBank","logo":{"vectorImage":{"$recipeTypes":["com.linkedin.voyager.dash.deco.common.VectorImageOnlyRootUrlAndAttribution"],"rootUrl":"https://media-exp3.licdn.com/dms/image/C4E0BAQHfcC_1qBZBOw/company-logo_","artifacts":[{"width":200,"$recipeTypes":["com.linkedin.voyager.dash.deco.common.VectorArtifact"],"fileIdentifyingUrlPathSegment":"200_200/0/1596451062753?e=1632355200&amp;v=beta&amp;t=_3uF7jVIAmdsWqFcG4lCv87TEFCTzV8KAW0JzF8cIqw","expiresAt":1632355200000,"height":200,"$type":"com.linkedin.common.VectorArtifact"},{"width":100,"$recipeTypes":["com.linkedin.voyager.dash.deco.common.VectorArtifact"],"fileIdentifyingUrlPathSegment":"100_100/0/1596451062753?e=1632355200&amp;v=beta&amp;t=OzUnpQDAwoHF-wkeB2sm8CkqNsPUjB-mBg4F_nI-j2g","expiresAt":1632355200000,"height":100,"$type":"com.linkedin.common.VectorArtifact"},{"width":400,"$recipeTypes":["com.linkedin.voyager.dash.deco.common.VectorArtifact"],"fileIdentifyingUrlPathSegment":"400_400/0/1596451062753?e=1632355200&amp;v=beta&amp;t=-Gl-t_jlHf2E0ai_NYUIWtnswSAnJN4F1ZTNhkPmgxA","expiresAt":1632355200000,"height":400,"$type":"com.linkedin.common.VectorArtifact"}],"$type":"com.linkedin.common.VectorImage"}},"universalName":"privatbank"},{"industry":{"*urn:li:fsd_industry:123":"urn:li:fsd_industry:123"},"industryUrns":["urn:li:fsd_industry:123"],"$recipeTypes":["com.linkedin.voyager.dash.deco.identity.profile.LinkablePositionCompany"],"url":"https://www.linkedin.com/company/daxx-bv/","$type":"com.linkedin.voyager.dash.organization.Company","employeeCountRange":{"start":201,"end":500,"$recipeTypes":["com.linkedin.voyager.dash.deco.common.IntegerRange"],"$type":"com.linkedin.common.IntegerRange"},"entityUrn":"urn:li:fsd_company:505391","name":"Дакс: голландская IT компания","logo":{"vectorImage":{"$recipeTypes":["com.linkedin.voyager.dash.deco.common.VectorImageOnlyRootUrlAndAttribution"],"rootUrl":"https://media-exp3.licdn.com/dms/image/C560BAQFOGhfr3YM9QQ/company-logo_","artifacts":[{"width":200,"$recipeTypes":["com.linkedin.voyager.dash.deco.common.VectorArtifact"],"fileIdentifyingUrlPathSegment":"200_200/0/1524831353394?e=1632355200&amp;v=beta&amp;t=UTRgpQLTqqG0ahtKVOmTqs2lsUJNMpvIcoNoQEKVEVQ","expiresAt":1632355200000,"height":200,"$type":"com.linkedin.common.VectorArtifact"},{"width":100,"$recipeTypes":["com.linkedin.voyager.dash.deco.common.VectorArtifact"],"fileIdentifyingUrlPathSegment":"100_100/0/1524831353394?e=1632355200&amp;v=beta&amp;t=JPFBQAuPh6g5e2xkLJ-UwRlNF0_WHNkZiGzL-CjwRaw","expiresAt":1632355200000,"height":100,"$type":"com.linkedin.common.VectorArtifact"},{"width":400,"$recipeTypes":["com.linkedin.voyager.dash.deco.common.VectorArtifact"],"fileIdentifyingUrlPathSegment":"400_400/0/1524831353394?e=1632355200&amp;v=beta&amp;t=L7M30_jKnlQJKy9iMzKiaVftSEMBDcE1Q2HD3aNTV4Q","expiresAt":1632355200000,"height":400,"$type":"com.linkedin.common.VectorArtifact"}],"$type":"com.linkedin.common.VectorImage"}},"universalName":"daxx-bv"},{"industry":{"*urn:li:fsd_industry:53":"urn:li:fsd_industry:53"},"industryUrns":["urn:li:fsd_industry:53"],"$recipeTypes":["com.linkedin.voyager.dash.deco.identity.profile.LinkablePositionCompany"],"url":"https://www.linkedin.com/company/ujet-int/","$type":"com.linkedin.voyager.dash.organization.Company","employeeCountRange":{"start":51,"end":200,"$recipeTypes":["com.linkedin.voyager.dash.deco.common.IntegerRange"],"$type":"com.linkedin.common.IntegerRange"},"entityUrn":"urn:li:fsd_company:10208060","name":"UJET","logo":{"vectorImage":{"$recipeTypes":["com.linkedin.voyager.dash.deco.common.VectorImageOnlyRootUrlAndAttribution"],"rootUrl":"https://media-exp3.licdn.com/dms/image/C4D0BAQEc37L3ye-SSw/company-logo_","artifacts":[{"width":200,"$recipeTypes":["com.linkedin.voyager.dash.deco.common.VectorArtifact"],"fileIdentifyingUrlPathSegment":"200_200/0/1573202123134?e=1632355200&amp;v=beta&amp;t=9Ei3f_OeT1i13w5iuTxYl-tie3E4zUDGy3eXA2ZglCI","expiresAt":1632355200000,"height":200,"$type":"com.linkedin.common.VectorArtifact"},{"width":100,"$recipeTypes":["com.linkedin.voyager.dash.deco.common.VectorArtifact"],"fileIdentifyingUrlPathSegment":"100_100/0/1573202123134?e=1632355200&amp;v=beta&amp;t=dTuOmJrj-ShC3bZeHIQKyZQkjuiyDKU6LpC0RFrFjn8","expiresAt":1632355200000,"height":100,"$type":"com.linkedin.common.VectorArtifact"},{"width":400,"$recipeTypes":["com.linkedin.voyager.dash.deco.common.VectorArtifact"],"fileIdentifyingUrlPathSegment":"400_400/0/1573202123134?e=1632355200&amp;v=beta&amp;t=HhpKZJjRKa82hBChwSbZYgXHi8iA2eIrv_huxStGbYE","expiresAt":1632355200000,"height":400,"$type":"com.linkedin.common.VectorArtifact"}],"$type":"com.linkedin.common.VectorImage"}},"universalName":"ujet-int"},{"active":true,"$recipeTypes":["com.linkedin.voyager.dash.deco.organization.MiniSchool"],"url":"https://www.linkedin.com/school/dnipropetrovs'kij-nacional'nij-universitet/","$type":"com.linkedin.voyager.dash.organization.School","entityUrn":"urn:li:fsd_school:17529","name":"Dnipropetrovs'kij Nacional'nij Universitet","logo":{"vectorImage":{"$recipeTypes":["com.linkedin.voyager.dash.deco.common.VectorImage"],"rootUrl":"https://media-exp3.licdn.com/dms/image/C4D0BAQFqhfbFX7Sayw/company-logo_","artifacts":[{"width":200,"$recipeTypes":["com.linkedin.voyager.dash.deco.common.VectorArtifact"],"fileIdentifyingUrlPathSegment":"200_200/0/1617728989804?e=1632355200&amp;v=beta&amp;t=73uKdC0HxQIEoVldGHYaZXCHF3wCtJvq9VQn7xIWNmI","expiresAt":1632355200000,"height":200,"$type":"com.linkedin.common.VectorArtifact"},{"width":100,"$recipeTypes":["com.linkedin.voyager.dash.deco.common.VectorArtifact"],"fileIdentifyingUrlPathSegment":"100_100/0/1617728989804?e=1632355200&amp;v=beta&amp;t=B3_MpRxKcqWeYBDcM3eyhJdYJXj5XyRAblUyC2yEhPM","expiresAt":1632355200000,"height":100,"$type":"com.linkedin.common.VectorArtifact"},{"width":400,"$recipeTypes":["com.linkedin.voyager.dash.deco.common.VectorArtifact"],"fileIdentifyingUrlPathSegment":"400_400/0/1617728989804?e=1632355200&amp;v=beta&amp;t=3qm3oDyFhLQHvWeox97q4J3erWKvpXp-c3tcnb7rg0I","expiresAt":1632355200000,"height":400,"$type":"com.linkedin.common.VectorArtifact"}],"$type":"com.linkedin.common.VectorImage"}}}]}
</code>
<code style="display: none" id="datalet-bpr-guid-1229185">
{"request":"/voyager/api/identity/dash/profiles?q\u003DmemberIdentity\u0026memberIdentity\u003Dalexandr-tretiakov-ba831051\u0026decorationId\u003Dcom.linkedin.voyager.dash.deco.identity.profile.FullProfileWithEntities-83","status":200,"body":"bpr-guid-1229185","method":"GET"}
</code>
<img src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" style="display: none" class="datalet-bpr-guid-1229185"><code style="display: none" id="bpr-guid-1229187">
{"data":{"customPronoun":null,"memorialized":false,"lastName":"Tretiakov","standardizedPronoun":null,"occupation":"Senior Software Engineer (JavaScript / TypeScript) at Fluxon","objectUrn":"urn:li:member:182913968","backgroundImage":null,"picture":{"artifacts":[{"width":100,"fileIdentifyingUrlPathSegment":"100_100/0/1622747300151?e=1629936000&amp;v=beta&amp;t=QNnA62aaVwZQg7sZAlErRiJC5oG63fOFNQEBANMj9_g","expiresAt":1629936000000,"height":100,"$type":"com.linkedin.common.VectorArtifact"},{"width":200,"fileIdentifyingUrlPathSegment":"200_200/0/1622747300151?e=1629936000&amp;v=beta&amp;t=KYPPJM-HGhuVaIg7k5KwIFeGhsNzaIpc-vE4pOrzlTI","expiresAt":1629936000000,"height":200,"$type":"com.linkedin.common.VectorArtifact"},{"width":400,"fileIdentifyingUrlPathSegment":"400_400/0/1622747300151?e=1629936000&amp;v=beta&amp;t=F0kvftcSRIh4e9KS9iwvbncxnv_ePet02wd7AdXhcW8","expiresAt":1629936000000,"height":400,"$type":"com.linkedin.common.VectorArtifact"},{"width":800,"fileIdentifyingUrlPathSegment":"800_800/0/1622747300151?e=1629936000&amp;v=beta&amp;t=-MQW64SZxXZ2Aon8yO9nIeltQn1uWYlEfhRoaLIJdt0","expiresAt":1629936000000,"height":800,"$type":"com.linkedin.common.VectorArtifact"}],"rootUrl":"https://media-exp3.licdn.com/dms/image/C4E03AQGWoZSHZr39_g/profile-displayphoto-shrink_","$type":"com.linkedin.common.VectorImage"},"$type":"com.linkedin.voyager.identity.shared.MiniProfile","firstName":"Alexandr","entityUrn":"urn:li:fs_miniProfile:ACoAAArnC7ABDK0JxoBsuqWZNH15yxLBhyJmWto","publicIdentifier":"alexandr-tretiakov-ba831051","trackingId":"5kJeXY+tTl2xhotjYbWvqA=="},"included":[]}
</code>
<code style="display: none" id="datalet-bpr-guid-1229187">
{"request":"/voyager/api/identity/miniprofiles/ACoAAArnC7ABDK0JxoBsuqWZNH15yxLBhyJmWto","status":200,"body":"bpr-guid-1229187","method":"GET"}
</code>
<img src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" style="display: none" class="datalet-bpr-guid-1229187"><code style="display: none" id="bpr-guid-1229188">
{"data":{"entityUrn":"urn:li:collectionResponse:2WyooMtoux4tE2feRwdIA+zwbfU0vTyyxYusFv2Slmw=","paging":{"count":10,"start":0,"links":[]},"*elements":["urn:li:fsd_profile:ACoAAArnC7ABDK0JxoBsuqWZNH15yxLBhyJmWto"],"$type":"com.linkedin.restli.common.CollectionResponse"},"meta":{"microSchema":{"version":"2","types":{"com.linkedin.voyager.dash.deco.common.video.AdaptiveStream":{"fields":{"initialBitRate":{"type":"int"},"protocol":{"type":"string"},"mediaType":{"type":"string"},"masterPlaylists":{"type":{"array":"com.linkedin.voyager.dash.deco.common.video.StreamingLocation"}}},"baseType":"com.linkedin.videocontent.AdaptiveStream"},"com.linkedin.voyager.dash.deco.common.text.TextViewModelV2":{"fields":{"textDirection":{"type":"string"},"text":{"type":"string"},"attributesV2":{"type":{"array":"com.linkedin.voyager.dash.deco.common.text.TextAttributeV2"}},"accessibilityTextAttributesV2":{"type":{"array":"com.linkedin.voyager.dash.deco.common.text.TextAttributeV2"}},"accessibilityText":{"type":"string"}},"baseType":"com.linkedin.voyager.dash.common.text.TextViewModel"},"com.linkedin.deco.recipe.anonymous.Anon1529112441":{"fields":{"originalImageUrl":{"type":"string"},"originalHeight":{"type":"int"},"url":{"type":"string"},"originalWidth":{"type":"int"}},"baseType":"com.linkedin.voyager.dash.common.ImageUrl"},"com.linkedin.deco.recipe.anonymous.Anon909968925":{"fields":{"icon":{"type":"com.linkedin.voyager.dash.deco.common.image.ImageViewModel"},"composeNavigationContext":{"type":"com.linkedin.deco.recipe.anonymous.Anon1042380873"},"displayText":{"type":"com.linkedin.voyager.dash.deco.common.text.TextViewModelV2"},"textStartIcon":{"type":"com.linkedin.voyager.dash.deco.common.image.ImageViewModel"},"composeOptionType":{"type":"string"},"entityUrn":{"type":"string"}},"baseType":"com.linkedin.voyager.dash.messaging.compose.ComposeOption"},"com.linkedin.voyager.dash.deco.common.video.StreamingLocation":{"fields":{"url":{"type":"string"},"expiresAt":{"type":"long"}},"baseType":"com.linkedin.videocontent.StreamingLocation"},"com.linkedin.voyager.dash.deco.relationships.MemberRelationshipV2":{"fields":{"memberRelationshipData":{"type":{"union":{"noInvitation":"com.linkedin.voyager.dash.deco.relationships.NoInvitation","invitation":"com.linkedin.voyager.dash.deco.relationships.Invitation","connection":"com.linkedin.voyager.dash.deco.relationships.Connection"}}},"entityUrn":{"type":"string"},"memberRelationshipUnion":{"type":{"union":{"self":"com.linkedin.restli.common.EmptyRecord","connection":"com.linkedin.voyager.dash.deco.relationships.Connection","noConnection":"com.linkedin.voyager.dash.deco.relationships.NoConnection"}}}},"baseType":"com.linkedin.voyager.dash.relationships.MemberRelationship"},"com.linkedin.deco.recipe.anonymous.Anon1976702492":{"fields":{"iweWarned":{"type":"boolean"},"entityUrn":{"type":"string"}},"baseType":"com.linkedin.voyager.dash.identity.profile.Profile"},"com.linkedin.voyager.dash.deco.common.video.VideoPlayMetadata":{"fields":{"thumbnail":{"type":"com.linkedin.voyager.dash.deco.common.VectorImageOnlyRootUrl"},"progressiveStreams":{"type":{"array":"com.linkedin.voyager.dash.deco.common.video.ProgressiveDownloadMetadata"}},"liveStreamCreatedAt":{"type":"long"},"transcripts":{"type":{"array":"com.linkedin.voyager.dash.deco.common.video.Transcript"}},"aspectRatio":{"type":"float"},"media":{"type":"string"},"adaptiveStreams":{"type":{"array":"com.linkedin.voyager.dash.deco.common.video.AdaptiveStream"}},"liveStreamEndedAt":{"type":"long"},"duration":{"type":"long"},"provider":{"type":"string"},"entityUrn":{"type":"string"},"thumbnails":{"type":{"array":"com.linkedin.voyager.dash.deco.common.video.Thumbnail"}},"trackingId":{"type":"string"}},"baseType":"com.linkedin.videocontent.VideoPlayMetadata"},"com.linkedin.voyager.dash.deco.relationships.ProfileWithEmailRequired":{"fields":{"memorialized":{"type":"boolean"},"lastName":{"type":"string"},"firstName":{"type":"string"},"tempStatus":{"type":"string"},"entityUrn":{"type":"string"},"tempStatusEmoji":{"type":"string"},"publicIdentifier":{"type":"string"},"headline":{"type":"string"},"emailRequired":{"type":"boolean"}},"baseType":"com.linkedin.voyager.dash.identity.profile.Profile"},"com.linkedin.deco.recipe.anonymous.Anon2058972220":{"fields":{"invitationUnion":{"type":{"union":{"noInvitation":"com.linkedin.deco.recipe.anonymous.Anon412783727","invitation":"com.linkedin.deco.recipe.anonymous.Anon831664802"}}}},"baseType":"com.linkedin.voyager.dash.relationships.NoConnection"},"com.linkedin.deco.recipe.anonymous.Anon377984030":{"fields":{"professionalEvent":{"type":"com.linkedin.deco.recipe.anonymous.Anon1213723597","resolvedFrom":"professionalEventUrn"},"vectorImage":{"type":"com.linkedin.voyager.dash.deco.common.VectorImageOnlyRootUrlAndAttribution"},"professionalEventUrn":{"type":"string"}},"baseType":"com.linkedin.voyager.dash.common.image.NonEntityProfessionalEventLogo"},"com.linkedin.deco.recipe.anonymous.Anon929195650":{"fields":{"entityUrn":{"type":"string"}},"baseType":"com.linkedin.voyager.dash.organization.School"},"com.linkedin.voyager.dash.deco.common.image.Company":{"fields":{"logo":{"type":{"union":{"url":"string","vectorImage":"com.linkedin.voyager.dash.deco.common.VectorImageOnlyRootUrlAndAttribution"}}},"entityUrn":{"type":"string"}},"baseType":"com.linkedin.voyager.dash.organization.Company"},"com.linkedin.deco.recipe.anonymous.Anon409680083":{"fields":{"type":{"type":"string"},"index":{"type":"int"}},"baseType":"com.linkedin.voyager.dash.common.text.ListItemStyle"},"com.linkedin.voyager.dash.deco.relationships.Invitation":{"fields":{"inviteeMemberResolutionResult":{"type":"com.linkedin.voyager.dash.deco.identity.profile.MiniProfile","resolvedFrom":"inviteeMember"},"invitationType":{"type":"string"},"invitationId":{"type":"long"},"sharedSecret":{"type":"string"},"inviteeMember":{"type":"string"},"entityUrn":{"type":"string"}},"baseType":"com.linkedin.voyager.dash.relationships.invitation.Invitation"},"com.linkedin.deco.recipe.anonymous.Anon1792705474":{"fields":{"invitationUnion":{"type":{"union":{"noInvitation":"com.linkedin.deco.recipe.anonymous.Anon881636240","invitation":"com.linkedin.deco.recipe.anonymous.Anon2066892616"}}}},"baseType":"com.linkedin.voyager.dash.relationships.NoConnection"},"com.linkedin.deco.recipe.anonymous.Anon1219543357":{"fields":{"insightImage":{"type":"com.linkedin.voyager.dash.deco.common.image.ImageViewModel"},"sharedConnectionDetailTarget":{"type":"string"},"text":{"type":"com.linkedin.voyager.dash.deco.common.text.TextViewModelV2"},"navigationUrl":{"type":"string"},"entityUrn":{"type":"string"},"sharedConnectionDetailTargetResolutionResult":{"type":"com.linkedin.deco.recipe.anonymous.Anon587401631","resolvedFrom":"sharedConnectionDetailTarget"}},"baseType":"com.linkedin.voyager.dash.relationships.Insight"},"com.linkedin.deco.recipe.anonymous.Anon412783727":{"fields":{"targetInviteeResolutionResult":{"type":"com.linkedin.deco.recipe.anonymous.Anon352881287","resolvedFrom":"targetInvitee"},"inviter":{"type":"string"},"targetInvitee":{"type":"string"},"inviterResolutionResult":{"type":"com.linkedin.deco.recipe.anonymous.Anon1976702492","resolvedFrom":"inviter"}},"baseType":"com.linkedin.voyager.dash.relationships.invitation.NoInvitation"},"com.linkedin.deco.recipe.anonymous.Anon1226238669":{"fields":{"name":{"type":"string"},"logo":{"type":{"union":{"url":"string","vectorImage":"com.linkedin.voyager.dash.deco.common.VectorImageOnlyRootUrlAndAttribution"}}},"universalName":{"type":"string"},"entityUrn":{"type":"string"},"url":{"type":"string"}},"baseType":"com.linkedin.voyager.dash.organization.Company"},"com.linkedin.voyager.dash.deco.common.Locale":{"fields":{"variant":{"type":"string"},"country":{"type":"string"},"language":{"type":"string"}},"baseType":"com.linkedin.common.Locale"},"com.linkedin.deco.recipe.anonymous.Anon352881287":{"fields":{"entityUrn":{"type":"string"},"emailRequired":{"type":"boolean"}},"baseType":"com.linkedin.voyager.dash.identity.profile.Profile"},"com.linkedin.voyager.dash.deco.common.VectorImageOnlyRootUrl":{"fields":{"rootUrl":{"type":"string"},"artifacts":{"type":{"array":"com.linkedin.voyager.dash.deco.common.VectorArtifact"}}},"baseType":"com.linkedin.common.VectorImage"},"com.linkedin.voyager.dash.deco.common.text.LearningCourse":{"fields":{"title":{"type":"string"},"entityUrn":{"type":"string"}},"baseType":"com.linkedin.voyager.dash.learning.LearningCourse"},"com.linkedin.voyager.dash.deco.common.video.Resolution":{"fields":{"width":{"type":"int"},"height":{"type":"int"}},"baseType":"com.linkedin.videocontent.Resolution"},"com.linkedin.deco.recipe.anonymous.Anon323787407":{"fields":{"entityUrn":{"type":"string"},"following":{"type":"boolean"}},"baseType":"com.linkedin.voyager.dash.feed.FollowingState"},"com.linkedin.voyager.dash.deco.common.text.ProfileForFamiliarName":{"fields":{"lastName":{"type":"string"},"firstName":{"type":"string"},"entityUrn":{"type":"string"}},"baseType":"com.linkedin.voyager.dash.identity.profile.Profile"},"com.linkedin.deco.recipe.anonymous.Anon1697831042":{"fields":{"paging":{"type":"com.linkedin.voyager.dash.deco.common.FullPaging"},"elements":{"type":{"array":"com.linkedin.deco.recipe.anonymous.Anon2134644859"}}},"baseType":"com.linkedin.restli.common.CollectionResponse"},"com.linkedin.deco.recipe.anonymous.Anon991203324":{"fields":{"schoolName":{"type":"string"},"school":{"type":"com.linkedin.deco.recipe.anonymous.Anon1621960601","resolvedFrom":"schoolUrn"},"entityUrn":{"type":"string"},"schoolUrn":{"type":"string"}},"baseType":"com.linkedin.voyager.dash.identity.profile.Education"},"com.linkedin.deco.recipe.anonymous.Anon584899856":{"fields":{"profileUrn":{"type":"string"},"vectorImage":{"type":"com.linkedin.voyager.dash.deco.common.VectorImageOnlyRootUrlAndAttribution"},"profile":{"type":"com.linkedin.deco.recipe.anonymous.Anon587401631","resolvedFrom":"profileUrn"}},"baseType":"com.linkedin.voyager.dash.common.image.NonEntityProfilePicture"},"com.linkedin.deco.recipe.anonymous.Anon1312950162":{"fields":{"entityUrn":{"type":"string"},"memberRelationshipUnion":{"type":{"union":{"self":"com.linkedin.restli.common.EmptyRecord","connection":"com.linkedin.deco.recipe.anonymous.Anon2134644859","noConnection":"com.linkedin.deco.recipe.anonymous.Anon1792705474"}}}},"baseType":"com.linkedin.voyager.dash.relationships.MemberRelationship"},"com.linkedin.voyager.dash.deco.common.video.Transcript":{"fields":{"captionFormat":{"type":"string"},"locale":{"type":"com.linkedin.voyager.dash.deco.common.Locale"},"lines":{"type":{"array":"com.linkedin.voyager.dash.deco.common.video.TranscriptLine"}},"isAutogenerated":{"type":"boolean"},"captionFile":{"type":"string"}},"baseType":"com.linkedin.videocontent.Transcript"},"com.linkedin.deco.recipe.anonymous.Anon1286825962":{"fields":{"sharedSecret":{"type":"string"},"entityUrn":{"type":"string"},"invitationId":{"type":"long"}},"baseType":"com.linkedin.voyager.dash.relationships.invitation.Invitation"},"com.linkedin.voyager.dash.deco.identity.profile.ProfilePhotoDecoSpecReadOnlyProfilePicture":{"fields":{"displayImageWithFrameReferenceUnion":{"type":{"union":{"url":"string","vectorImage":"com.linkedin.voyager.dash.deco.common.VectorImageOnlyRootUrlAndAttribution"}}},"frameType":{"type":"string"},"displayImageUrn":{"type":"string"},"displayImageReference":{"type":{"union":{"url":"string","vectorImage":"com.linkedin.voyager.dash.deco.common.VectorImageOnlyRootUrlAndAttribution"}}}},"baseType":"com.linkedin.voyager.dash.identity.profile.PhotoFilterPicture"},"com.linkedin.voyager.dash.deco.common.Link":{"fields":{"type":{"type":"string"},"rel":{"type":"string"},"href":{"type":"string"}},"baseType":"com.linkedin.restli.common.Link"},"com.linkedin.voyager.dash.deco.common.image.School":{"fields":{"logo":{"type":{"union":{"url":"string","vectorImage":"com.linkedin.voyager.dash.deco.common.VectorImageOnlyRootUrlAndAttribution"}}},"entityUrn":{"type":"string"}},"baseType":"com.linkedin.voyager.dash.organization.School"},"com.linkedin.voyager.dash.deco.common.image.ImageAttribute":{"fields":{"detailData":{"type":{"union":{"profilePictureWithoutFrame":"com.linkedin.voyager.dash.deco.common.image.ProfileWithoutFrame","profilePicture":"com.linkedin.voyager.dash.deco.common.image.Profile","professionalEventLogo":"com.linkedin.voyager.dash.deco.common.image.ProfessionalEvent","schoolLogo":"com.linkedin.voyager.dash.deco.common.image.School","groupLogo":"com.linkedin.voyager.dash.deco.common.image.Group","companyLogo":"com.linkedin.voyager.dash.deco.common.image.Company"}},"resolvedFrom":"detailDataUnion"},"tintColor":{"type":"string"},"detailDataUnion":{"type":{"union":{"profilePictureWithoutFrame":"string","companyLogo":"string","icon":"string","systemImage":"string","nonEntityGroupLogo":"com.linkedin.deco.recipe.anonymous.Anon1436383648","vectorImage":"com.linkedin.voyager.dash.deco.common.VectorImageOnlyRootUrlAndAttribution","nonEntityProfessionalEventLogo":"com.linkedin.deco.recipe.anonymous.Anon377984030","profilePicture":"string","imageUrl":"com.linkedin.deco.recipe.anonymous.Anon1529112441","professionalEventLogo":"string","nonEntitySchoolLogo":"com.linkedin.deco.recipe.anonymous.Anon1568806612","nonEntityCompanyLogo":"com.linkedin.deco.recipe.anonymous.Anon648914460","schoolLogo":"string","groupLogo":"string","ghostImage":"string","nonEntityProfilePicture":"com.linkedin.deco.recipe.anonymous.Anon584899856"}}},"scalingType":{"type":"string"},"displayAspectRatio":{"type":"double"}},"baseType":"com.linkedin.voyager.dash.common.image.ImageAttribute"},"com.linkedin.voyager.dash.deco.identity.profile.ViewProfileInExternalContextAction":{"fields":{"deeplinkUrl":{"type":"string"},"recruiterContext":{"type":"boolean"}},"baseType":"com.linkedin.voyager.dash.identity.profile.actions.ViewProfileInExternalContextAction"},"com.linkedin.deco.recipe.anonymous.Anon1042380873":{"fields":{"paidInMail":{"type":"boolean"},"recipient":{"type":{"map":"com.linkedin.deco.recipe.anonymous.Anon587401631"},"resolvedFrom":"recipientUrns"},"messageRequestContextUrn":{"type":"string"},"recipientUrns":{"type":{"array":"string"}},"targetUrl":{"type":"string"},"existingConversation":{"type":"com.linkedin.deco.recipe.anonymous.Anon807183080","resolvedFrom":"existingConversationUrn"},"existingConversationUrn":{"type":"string"}},"baseType":"com.linkedin.voyager.dash.messaging.compose.ComposeNavigationContext"},"com.linkedin.deco.recipe.anonymous.Anon1119350521":{"fields":{"followeeCount":{"type":"long"},"followerCount":{"type":"long"},"entityUrn":{"type":"string"},"following":{"type":"boolean"}},"baseType":"com.linkedin.voyager.dash.feed.FollowingState"},"com.linkedin.deco.recipe.anonymous.Anon1843097075":{"fields":{"invitationUnion":{"type":{"union":{"noInvitation":"com.linkedin.deco.recipe.anonymous.Anon881636240","invitation":"com.linkedin.deco.recipe.anonymous.Anon1286825962"}}}},"baseType":"com.linkedin.voyager.dash.relationships.NoConnection"},"com.linkedin.deco.recipe.anonymous.Anon881636240":{"fields":{"inviter":{"type":"string"},"inviterResolutionResult":{"type":"com.linkedin.deco.recipe.anonymous.Anon587401631","resolvedFrom":"inviter"}},"baseType":"com.linkedin.voyager.dash.relationships.invitation.NoInvitation"},"com.linkedin.voyager.dash.deco.relationships.Connection":{"fields":{"createdAt":{"type":"long"},"connectedMemberResolutionResult":{"type":"com.linkedin.voyager.dash.deco.identity.profile.MiniProfile","resolvedFrom":"connectedMember"},"connectedMember":{"type":"string"},"entityUrn":{"type":"string"}},"baseType":"com.linkedin.voyager.dash.relationships.Connection"},"com.linkedin.deco.recipe.anonymous.Anon1201354062":{"fields":{"company":{"type":"com.linkedin.deco.recipe.anonymous.Anon1226238669","resolvedFrom":"companyUrn"},"multiLocaleCompanyName":{"type":{"map":"string"}},"entityUrn":{"type":"string"},"companyUrn":{"type":"string"},"companyName":{"type":"string"}},"baseType":"com.linkedin.voyager.dash.identity.profile.Position"},"com.linkedin.voyager.dash.deco.common.image.PhotoFilterPicture":{"fields":{"displayImageWithFrameReferenceUnion":{"type":{"union":{"url":"string","vectorImage":"com.linkedin.voyager.dash.deco.common.VectorImageOnlyRootUrlAndAttribution"}}},"displayImageReference":{"type":{"union":{"url":"string","vectorImage":"com.linkedin.voyager.dash.deco.common.VectorImageOnlyRootUrlAndAttribution"}}}},"baseType":"com.linkedin.voyager.dash.identity.profile.PhotoFilterPicture"},"com.linkedin.voyager.dash.deco.common.image.Group":{"fields":{"logo":{"type":{"union":{"url":"string","vectorImage":"com.linkedin.voyager.dash.deco.common.VectorImageOnlyRootUrlAndAttribution"}}},"entityUrn":{"type":"string"}},"baseType":"com.linkedin.voyager.dash.groups.Group"},"com.linkedin.voyager.dash.deco.common.text.Company":{"fields":{"name":{"type":"string"},"entityUrn":{"type":"string"}},"baseType":"com.linkedin.voyager.dash.organization.Company"},"com.linkedin.voyager.dash.deco.relationships.NoInvitation":{"fields":{"targetInviteeResolutionResult":{"type":"com.linkedin.voyager.dash.deco.relationships.ProfileWithEmailRequired","resolvedFrom":"targetInvitee"},"inviter":{"type":"string"},"targetInvitee":{"type":"string"},"inviterResolutionResult":{"type":"com.linkedin.voyager.dash.deco.relationships.ProfileWithIweWarned","resolvedFrom":"inviter"}},"baseType":"com.linkedin.voyager.dash.relationships.invitation.NoInvitation"},"com.linkedin.deco.recipe.anonymous.Anon1588314847":{"fields":{"paging":{"type":"com.linkedin.voyager.dash.deco.common.FullPaging"},"elements":{"type":{"array":"com.linkedin.deco.recipe.anonymous.Anon1201354062"}}},"baseType":"com.linkedin.restli.common.CollectionResponse"},"com.linkedin.deco.recipe.anonymous.Anon1213723597":{"fields":{"entityUrn":{"type":"string"}},"baseType":"com.linkedin.voyager.dash.events.ProfessionalEvent"},"com.linkedin.voyager.dash.deco.common.video.TranscriptLine":{"fields":{"lineStartAt":{"type":"long"},"caption":{"type":"string"},"lineEndAt":{"type":"long"}},"baseType":"com.linkedin.videocontent.TranscriptLine"},"com.linkedin.deco.recipe.anonymous.Anon1251747613":{"fields":{"urn":{"type":"string"},"modelName":{"type":"string"},"fieldName":{"type":"string"},"value":{"type":"string"}},"baseType":"com.linkedin.voyager.dash.common.StringFieldReference"},"com.linkedin.deco.recipe.anonymous.Anon1927941263":{"fields":{"entityUrn":{"type":"string"}},"baseType":"com.linkedin.voyager.dash.organization.Company"},"com.linkedin.voyager.dash.deco.common.image.ProfileWithoutFrame":{"fields":{"profilePicture":{"type":"com.linkedin.voyager.dash.deco.common.image.PhotoFilterPicture"},"entityUrn":{"type":"string"}},"baseType":"com.linkedin.voyager.dash.identity.profile.Profile"},"com.linkedin.deco.recipe.anonymous.Anon587401631":{"fields":{"entityUrn":{"type":"string"}},"baseType":"com.linkedin.voyager.dash.identity.profile.Profile"},"com.linkedin.deco.recipe.anonymous.Anon1869367056":{"fields":{"entityUrn":{"type":"string"}},"baseType":"com.linkedin.voyager.dash.groups.Group"},"com.linkedin.voyager.dash.deco.identity.profile.ProfileActionsInjection":{"fields":{"secondaryAction":{"type":{"union":{"personalizedConnect":"string","saveToPdf":"string","shareProfileUrlViaMessage":"string","saveToPdfUrl":"string","composeOption":"string","viewProfileInExternalContext":"com.linkedin.voyager.dash.deco.identity.profile.ViewProfileInExternalContextAction","statelessAction":"string","followingState":"string","report":"com.linkedin.deco.recipe.anonymous.Anon743120773","ignore":"string","shareProfileUrl":"string","connection":"com.linkedin.voyager.dash.deco.identity.profile.MemberRelationshipWrapper","withdraw":"string"}}},"secondaryActionResolutionResult":{"type":{"union":{"personalizedConnect":"com.linkedin.deco.recipe.anonymous.Anon4539795","ignore":"com.linkedin.deco.recipe.anonymous.Anon1312950162","composeOption":"com.linkedin.deco.recipe.anonymous.Anon909968925","saveToPdf":"com.linkedin.deco.recipe.anonymous.Anon587401631","followingState":"com.linkedin.deco.recipe.anonymous.Anon323787407","withdraw":"com.linkedin.deco.recipe.anonymous.Anon1213132949"}},"resolvedFrom":"secondaryAction"},"primaryActionResolutionResult":{"type":{"union":{"personalizedConnect":"com.linkedin.deco.recipe.anonymous.Anon4539795","ignore":"com.linkedin.deco.recipe.anonymous.Anon1312950162","composeOption":"com.linkedin.deco.recipe.anonymous.Anon909968925","saveToPdf":"com.linkedin.deco.recipe.anonymous.Anon587401631","followingState":"com.linkedin.deco.recipe.anonymous.Anon323787407","withdraw":"com.linkedin.deco.recipe.anonymous.Anon1213132949"}},"resolvedFrom":"primaryAction"},"primaryAction":{"type":{"union":{"personalizedConnect":"string","saveToPdf":"string","shareProfileUrlViaMessage":"string","saveToPdfUrl":"string","composeOption":"string","viewProfileInExternalContext":"com.linkedin.voyager.dash.deco.identity.profile.ViewProfileInExternalContextAction","statelessAction":"string","followingState":"string","report":"com.linkedin.deco.recipe.anonymous.Anon743120773","ignore":"string","shareProfileUrl":"string","connection":"com.linkedin.voyager.dash.deco.identity.profile.MemberRelationshipWrapper","withdraw":"string"}}},"overflowActionsResolutionResults":{"type":{"map":{"union":{"personalizedConnect":"com.linkedin.deco.recipe.anonymous.Anon4539795","ignore":"com.linkedin.deco.recipe.anonymous.Anon1312950162","composeOption":"com.linkedin.deco.recipe.anonymous.Anon909968925","saveToPdf":"com.linkedin.deco.recipe.anonymous.Anon587401631","followingState":"com.linkedin.deco.recipe.anonymous.Anon323787407","withdraw":"com.linkedin.deco.recipe.anonymous.Anon1213132949"}}},"resolvedFrom":"overflowActions"},"overflowActions":{"type":{"array":{"union":{"personalizedConnect":"string","saveToPdf":"string","shareProfileUrlViaMessage":"string","saveToPdfUrl":"string","composeOption":"string","viewProfileInExternalContext":"com.linkedin.voyager.dash.deco.identity.profile.ViewProfileInExternalContextAction","statelessAction":"string","followingState":"string","report":"com.linkedin.deco.recipe.anonymous.Anon743120773","ignore":"string","shareProfileUrl":"string","connection":"com.linkedin.voyager.dash.deco.identity.profile.MemberRelationshipWrapper","withdraw":"string"}}}}},"baseType":"com.linkedin.voyager.dash.identity.profile.actions.ProfileActions"},"com.linkedin.deco.recipe.anonymous.Anon1621960601":{"fields":{"name":{"type":"string"},"logo":{"type":{"union":{"url":"string","vectorImage":"com.linkedin.voyager.dash.deco.common.VectorImageOnlyRootUrlAndAttribution"}}},"entityUrn":{"type":"string"},"url":{"type":"string"}},"baseType":"com.linkedin.voyager.dash.organization.School"},"com.linkedin.deco.recipe.anonymous.Anon163061530":{"fields":{"name":{"type":"string"},"entityUrn":{"type":"string"}},"baseType":"com.linkedin.voyager.dash.groups.Group"},"com.linkedin.deco.recipe.anonymous.Anon886273009":{"fields":{"videoUrl":{"type":"string"},"legoTrackingId":{"type":"string"}},"baseType":"com.linkedin.voyager.dash.identity.profile.PromotionalProfileVideo"},"com.linkedin.deco.recipe.anonymous.Anon1568806612":{"fields":{"school":{"type":"com.linkedin.deco.recipe.anonymous.Anon929195650","resolvedFrom":"schoolUrn"},"vectorImage":{"type":"com.linkedin.voyager.dash.deco.common.VectorImageOnlyRootUrlAndAttribution"},"schoolUrn":{"type":"string"}},"baseType":"com.linkedin.voyager.dash.common.image.NonEntitySchoolLogo"},"com.linkedin.deco.recipe.anonymous.Anon807183080":{"fields":{"entityUrn":{"type":"string"}},"baseType":"com.linkedin.voyager.dash.messaging.Conversation"},"com.linkedin.voyager.dash.deco.common.text.ProfileForFullName":{"fields":{"lastName":{"type":"string"},"firstName":{"type":"string"},"entityUrn":{"type":"string"}},"baseType":"com.linkedin.voyager.dash.identity.profile.Profile"},"com.linkedin.voyager.dash.deco.identity.profile.TopCardSecondaryData":{"fields":{"profileProfileActions":{"type":"com.linkedin.voyager.dash.deco.identity.profile.ProfileActionsInjection","isInjection":true},"profileInsight":{"type":"com.linkedin.deco.recipe.anonymous.Anon1511022855","isInjection":true},"entityUrn":{"type":"string"},"followingState":{"type":"com.linkedin.deco.recipe.anonymous.Anon1119350521","isInjection":true},"profileTopEducation":{"type":"com.linkedin.deco.recipe.anonymous.Anon988641198","isInjection":true},"memberRelationship":{"type":"com.linkedin.voyager.dash.deco.relationships.MemberRelationshipV2ForInjection","isInjection":true},"profileVideoUnion":{"type":{"union":{"unavailableState":"string","promotionalVideo":"com.linkedin.deco.recipe.anonymous.Anon886273009","processedVideo":"com.linkedin.deco.recipe.anonymous.Anon1209973417"}}},"pronounUnion":{"type":{"union":{"customPronoun":"string","standardizedPronoun":"string"}}},"profileTopPosition":{"type":"com.linkedin.deco.recipe.anonymous.Anon1588314847","isInjection":true},"privacySettings":{"type":"com.linkedin.voyager.dash.deco.identity.profile.ViewerPrivacySettingsForInjection","isInjection":true},"connections":{"type":"com.linkedin.deco.recipe.anonymous.Anon1697831042","isInjection":true}},"baseType":"com.linkedin.voyager.dash.identity.profile.Profile"},"com.linkedin.deco.recipe.anonymous.Anon1209973417":{"fields":{"previewVideo":{"type":"com.linkedin.voyager.dash.deco.common.video.VideoPlayMetadata"},"reportSemaphoreContext":{"type":"com.linkedin.deco.recipe.anonymous.Anon743120773"},"fullVideo":{"type":"com.linkedin.voyager.dash.deco.common.video.VideoPlayMetadata"}},"baseType":"com.linkedin.voyager.dash.identity.profile.ProfileVideo"},"com.linkedin.deco.recipe.anonymous.Anon1511022855":{"fields":{"elements":{"type":{"array":"com.linkedin.deco.recipe.anonymous.Anon1219543357"}}},"baseType":"com.linkedin.restli.common.CollectionResponse"},"com.linkedin.voyager.dash.deco.common.image.Profile":{"fields":{"profilePicture":{"type":"com.linkedin.voyager.dash.deco.common.image.PhotoFilterPicture"},"entityUrn":{"type":"string"}},"baseType":"com.linkedin.voyager.dash.identity.profile.Profile"},"com.linkedin.voyager.dash.deco.common.text.JobPosting":{"fields":{"title":{"type":"string"},"entityUrn":{"type":"string"}},"baseType":"com.linkedin.voyager.dash.jobs.JobPosting"},"com.linkedin.deco.recipe.anonymous.Anon988641198":{"fields":{"paging":{"type":"com.linkedin.voyager.dash.deco.common.FullPaging"},"elements":{"type":{"array":"com.linkedin.deco.recipe.anonymous.Anon991203324"}}},"baseType":"com.linkedin.restli.common.CollectionResponse"},"com.linkedin.voyager.dash.deco.relationships.MemberRelationshipV2ForInjection":{"fields":{"memberRelationshipData":{"type":{"union":{"noInvitation":"com.linkedin.voyager.dash.deco.relationships.NoInvitation","invitation":"com.linkedin.voyager.dash.deco.relationships.Invitation","connection":"com.linkedin.voyager.dash.deco.relationships.Connection"}}},"entityUrn":{"type":"string"},"memberRelationshipUnion":{"type":{"union":{"self":"com.linkedin.restli.common.EmptyRecord","connection":"com.linkedin.voyager.dash.deco.relationships.Connection","noConnection":"com.linkedin.voyager.dash.deco.relationships.NoConnection"}}}},"baseType":"com.linkedin.voyager.dash.relationships.MemberRelationship"},"com.linkedin.voyager.dash.deco.relationships.ProfileWithIweWarned":{"fields":{"memorialized":{"type":"boolean"},"lastName":{"type":"string"},"firstName":{"type":"string"},"tempStatus":{"type":"string"},"entityUrn":{"type":"string"},"tempStatusEmoji":{"type":"string"},"iweWarned":{"type":"boolean"},"publicIdentifier":{"type":"string"},"headline":{"type":"string"}},"baseType":"com.linkedin.voyager.dash.identity.profile.Profile"},"com.linkedin.voyager.dash.deco.identity.profile.ViewerPrivacySettingsForInjection":{"fields":{"fullLastNameShown":{"type":"boolean"},"requireReferral":{"type":"boolean"},"showPublicProfile":{"type":"boolean"},"formerNameVisibilitySetting":{"type":"string"},"messagingSeenReceipts":{"type":"string"},"discloseAsProfileViewer":{"type":"string"},"allowProfileEditBroadcasts":{"type":"boolean"},"messagingTypingIndicators":{"type":"string"},"allowOpenProfile":{"type":"boolean"},"profilePictureVisibilitySetting":{"type":"string"},"entityUrn":{"type":"string"},"publicProfilePictureVisibilitySetting":{"type":"string"},"namePronunciationVisibilitySetting":{"type":"string"},"pronounVisibilitySetting":{"type":"string"}},"baseType":"com.linkedin.voyager.dash.identity.profile.PrivacySettings"},"com.linkedin.voyager.dash.deco.common.image.ImageViewModel":{"fields":{"attributes":{"type":{"array":"com.linkedin.voyager.dash.deco.common.image.ImageAttribute"}},"actionTarget":{"type":"string"},"totalCount":{"type":"int"},"accessibilityTextAttributes":{"type":{"array":"com.linkedin.voyager.dash.deco.common.text.TextAttributeV2"}},"accessibilityText":{"type":"string"}},"baseType":"com.linkedin.voyager.dash.common.image.ImageViewModel"},"com.linkedin.voyager.dash.deco.common.text.TextAttributeV2":{"fields":{"start":{"type":"int"},"length":{"type":"int"},"detailData":{"type":{"union":{"jobPostingName":"com.linkedin.voyager.dash.deco.common.text.JobPosting","profileFamiliarName":"com.linkedin.voyager.dash.deco.common.text.ProfileForFamiliarName","groupName":"com.linkedin.deco.recipe.anonymous.Anon163061530","profileFullName":"com.linkedin.voyager.dash.deco.common.text.ProfileForFullName","learningCourseName":"com.linkedin.voyager.dash.deco.common.text.LearningCourse","companyName":"com.linkedin.voyager.dash.deco.common.text.Company","profileMention":"com.linkedin.voyager.dash.deco.common.text.ProfileForMention","schoolName":"com.linkedin.voyager.dash.deco.common.text.School","hashtag":"com.linkedin.voyager.dash.deco.common.text.Hashtag"}},"resolvedFrom":"detailDataUnion"},"detailDataUnion":{"type":{"union":{"jobPostingName":"string","profileFamiliarName":"string","hyperlink":"string","color":"string","companyName":"string","icon":"string","systemImage":"string","listItemStyle":"com.linkedin.deco.recipe.anonymous.Anon409680083","listStyle":"string","hyperlinkOpenExternally":"string","groupName":"string","profileFullName":"string","stringFieldReference":"com.linkedin.deco.recipe.anonymous.Anon1251747613","learningCourseName":"string","profileMention":"string","style":"string","schoolName":"string","hashtag":"string"}}}},"baseType":"com.linkedin.voyager.dash.common.text.TextAttribute"},"com.linkedin.deco.recipe.anonymous.Anon743120773":{"fields":{"authorProfileId":{"type":"string"},"targetUrn":{"type":"string"},"contentSource":{"type":"string"}},"baseType":"com.linkedin.voyager.dash.common.semaphore.SemaphoreContext"},"com.linkedin.deco.recipe.anonymous.Anon648914460":{"fields":{"companyUrn":{"type":"string"},"company":{"type":"com.linkedin.deco.recipe.anonymous.Anon1927941263","resolvedFrom":"companyUrn"},"vectorImage":{"type":"com.linkedin.voyager.dash.deco.common.VectorImageOnlyRootUrlAndAttribution"}},"baseType":"com.linkedin.voyager.dash.common.image.NonEntityCompanyLogo"},"com.linkedin.deco.recipe.anonymous.Anon1213132949":{"fields":{"entityUrn":{"type":"string"},"memberRelationshipUnion":{"type":{"union":{"self":"com.linkedin.restli.common.EmptyRecord","connection":"com.linkedin.deco.recipe.anonymous.Anon2134644859","noConnection":"com.linkedin.deco.recipe.anonymous.Anon1843097075"}}}},"baseType":"com.linkedin.voyager.dash.relationships.MemberRelationship"},"com.linkedin.voyager.dash.deco.identity.profile.MemberRelationshipWrapper":{"fields":{"memberRelationshipUrn":{"type":"string"},"memberRelationship":{"type":"com.linkedin.voyager.dash.deco.relationships.MemberRelationshipV2","resolvedFrom":"memberRelationshipUrn"}},"baseType":"com.linkedin.voyager.dash.relationships.MemberRelationshipWrapper"},"com.linkedin.voyager.dash.deco.relationships.NoConnection":{"fields":{"memberDistance":{"type":"string"},"invitationUnion":{"type":{"union":{"noInvitation":"com.linkedin.voyager.dash.deco.relationships.NoInvitation","invitation":"com.linkedin.voyager.dash.deco.relationships.Invitation"}}}},"baseType":"com.linkedin.voyager.dash.relationships.NoConnection"},"com.linkedin.deco.recipe.anonymous.Anon4539795":{"fields":{"entityUrn":{"type":"string"},"memberRelationshipUnion":{"type":{"union":{"self":"com.linkedin.restli.common.EmptyRecord","connection":"com.linkedin.deco.recipe.anonymous.Anon2134644859","noConnection":"com.linkedin.deco.recipe.anonymous.Anon2058972220"}}}},"baseType":"com.linkedin.voyager.dash.relationships.MemberRelationship"},"com.linkedin.voyager.dash.deco.common.text.ProfileForMention":{"fields":{"entityUrn":{"type":"string"}},"baseType":"com.linkedin.voyager.dash.identity.profile.Profile"},"com.linkedin.voyager.dash.deco.common.text.Hashtag":{"fields":{"entityUrn":{"type":"string"},"trackingUrn":{"type":"string"},"actionTarget":{"type":"string"}},"baseType":"com.linkedin.voyager.dash.feed.Hashtag"},"com.linkedin.voyager.dash.deco.identity.profile.MiniProfile":{"fields":{"profilePicture":{"type":"com.linkedin.voyager.dash.deco.identity.profile.ProfilePhotoDecoSpecReadOnlyProfilePicture"},"memorialized":{"type":"boolean"},"lastName":{"type":"string"},"firstName":{"type":"string"},"tempStatus":{"type":"string"},"entityUrn":{"type":"string"},"tempStatusEmoji":{"type":"string"},"publicIdentifier":{"type":"string"},"headline":{"type":"string"},"tempStatusExpiredAtUnion":{"type":{"union":{"customizedExpiredAt":"long","standardizedExpiration":"string"}}}},"baseType":"com.linkedin.voyager.dash.identity.profile.Profile"},"com.linkedin.voyager.dash.deco.common.VectorImageOnlyRootUrlAndAttribution":{"fields":{"attribution":{"type":"string"},"rootUrl":{"type":"string"},"artifacts":{"type":{"array":"com.linkedin.voyager.dash.deco.common.VectorArtifact"}}},"baseType":"com.linkedin.common.VectorImage"},"com.linkedin.voyager.dash.deco.common.FullPaging":{"fields":{"start":{"type":"int"},"count":{"type":"int"},"total":{"type":"int"},"links":{"type":{"array":"com.linkedin.voyager.dash.deco.common.Link"}}},"baseType":"com.linkedin.restli.common.CollectionMetadata"},"com.linkedin.deco.recipe.anonymous.Anon831664802":{"fields":{"entityUrn":{"type":"string"},"invitationId":{"type":"long"}},"baseType":"com.linkedin.voyager.dash.relationships.invitation.Invitation"},"com.linkedin.voyager.dash.deco.common.image.ProfessionalEvent":{"fields":{"logoImage":{"type":{"union":{"url":"string","vectorImage":"com.linkedin.voyager.dash.deco.common.VectorImageOnlyRootUrlAndAttribution"}}},"entityUrn":{"type":"string"}},"baseType":"com.linkedin.voyager.dash.events.ProfessionalEvent"},"com.linkedin.voyager.dash.deco.common.video.Thumbnail":{"fields":{"resolution":{"type":"com.linkedin.voyager.dash.deco.common.video.Resolution"},"url":{"type":"string"}},"baseType":"com.linkedin.videocontent.Thumbnail"},"com.linkedin.deco.recipe.anonymous.Anon1436383648":{"fields":{"groupUrn":{"type":"string"},"vectorImage":{"type":"com.linkedin.voyager.dash.deco.common.VectorImageOnlyRootUrlAndAttribution"},"group":{"type":"com.linkedin.deco.recipe.anonymous.Anon1869367056","resolvedFrom":"groupUrn"}},"baseType":"com.linkedin.voyager.dash.common.image.NonEntityGroupLogo"},"com.linkedin.voyager.dash.deco.common.VectorArtifact":{"fields":{"width":{"type":"int"},"fileIdentifyingUrlPathSegment":{"type":"string"},"expiresAt":{"type":"long"},"height":{"type":"int"}},"baseType":"com.linkedin.common.VectorArtifact"},"com.linkedin.voyager.dash.deco.common.text.School":{"fields":{"name":{"type":"string"},"entityUrn":{"type":"string"}},"baseType":"com.linkedin.voyager.dash.organization.School"},"com.linkedin.deco.recipe.anonymous.Anon2066892616":{"fields":{"invitationType":{"type":"string"},"invitationId":{"type":"long"},"sharedSecret":{"type":"string"},"entityUrn":{"type":"string"}},"baseType":"com.linkedin.voyager.dash.relationships.invitation.Invitation"},"com.linkedin.voyager.dash.deco.common.video.ProgressiveDownloadMetadata":{"fields":{"streamingLocations":{"type":{"array":"com.linkedin.voyager.dash.deco.common.video.StreamingLocation"}},"size":{"type":"long"},"bitRate":{"type":"int"},"width":{"type":"int"},"mediaType":{"type":"string"},"mimeType":{"type":"string"},"height":{"type":"int"}},"baseType":"com.linkedin.videocontent.ProgressiveDownloadMetadata"},"com.linkedin.deco.recipe.anonymous.Anon2134644859":{"fields":{"entityUrn":{"type":"string"}},"baseType":"com.linkedin.voyager.dash.relationships.Connection"}}}},"included":[{"paging":{"total":1,"start":0,"count":1,"links":[],"$recipeTypes":["com.linkedin.voyager.dash.deco.common.FullPaging"],"$type":"com.linkedin.restli.common.CollectionMetadata"},"*elements":["urn:li:fsd_profileEducation:(ACoAAArnC7ABDK0JxoBsuqWZNH15yxLBhyJmWto,146825862)"],"entityUrn":"urn:li:collectionResponse:MFvWnuAKzTCiJdWIR30zLmRpnizP4SjACXCtnBAkKcs=","$recipeTypes":["com.linkedin.deco.recipe.anonymous.Anon988641198"],"$type":"com.linkedin.restli.common.CollectionResponse"},{"*elements":["urn:li:fsd_relInsight:(urn:li:fsd_profile:ACoAACZ2DbUBHJ9p7xq7cgqJILaQyOcNvErg49o,urn:li:fsd_profile:ACoAAArnC7ABDK0JxoBsuqWZNH15yxLBhyJmWto,PROFILE)"],"entityUrn":"urn:li:collectionResponse:TGq57OM6SxihnNWwdGVJuoG0STz7T0JG6zmfws8bXLk=","$recipeTypes":["com.linkedin.deco.recipe.anonymous.Anon1511022855"],"$type":"com.linkedin.restli.common.CollectionResponse"},{"paging":{"total":6,"start":0,"count":1,"links":[],"$recipeTypes":["com.linkedin.voyager.dash.deco.common.FullPaging"],"$type":"com.linkedin.restli.common.CollectionMetadata"},"*elements":["urn:li:fsd_profilePosition:(ACoAAArnC7ABDK0JxoBsuqWZNH15yxLBhyJmWto,1788668310)"],"entityUrn":"urn:li:collectionResponse:AaB/30jKQeuaaIUhNnkFllqGo8GBlijDLG706j+cEhQ=","$recipeTypes":["com.linkedin.deco.recipe.anonymous.Anon1588314847"],"$type":"com.linkedin.restli.common.CollectionResponse"},{"paging":{"total":941,"start":0,"count":1,"links":[],"$recipeTypes":["com.linkedin.voyager.dash.deco.common.FullPaging"],"$type":"com.linkedin.restli.common.CollectionMetadata"},"*elements":["urn:li:fsd_connection:ACoAAAAd61YBRigkJOfRGpRSDYm9g4bXaLJU1hM"],"entityUrn":"urn:li:collectionResponse:RlBkvH1JQuiGqwlO2HNJXf9LF/le1D4TZ8kAE19O3vY=","$recipeTypes":["com.linkedin.deco.recipe.anonymous.Anon1697831042"],"$type":"com.linkedin.restli.common.CollectionResponse"},{"followeeCount":null,"entityUrn":"urn:li:fsd_followingState:urn:li:fsd_profile:ACoAAArnC7ABDK0JxoBsuqWZNH15yxLBhyJmWto","following":false,"$recipeTypes":["com.linkedin.deco.recipe.anonymous.Anon323787407","com.linkedin.deco.recipe.anonymous.Anon1119350521"],"followerCount":948,"$type":"com.linkedin.voyager.dash.feed.FollowingState"},{"entityUrn":"urn:li:fsd_profileEducation:(ACoAAArnC7ABDK0JxoBsuqWZNH15yxLBhyJmWto,146825862)","*school":"urn:li:fsd_school:17529","schoolName":"Dnipropetrovs'kij Nacional'nij Universitet","$recipeTypes":["com.linkedin.deco.recipe.anonymous.Anon991203324"],"schoolUrn":"urn:li:fsd_school:17529","$type":"com.linkedin.voyager.dash.identity.profile.Education"},{"entityUrn":"urn:li:fsd_profilePosition:(ACoAAArnC7ABDK0JxoBsuqWZNH15yxLBhyJmWto,1788668310)","multiLocaleCompanyName":{"ru_RU":"Fluxon"},"companyName":"Fluxon","*company":"urn:li:fsd_company:27244401","companyUrn":"urn:li:fsd_company:27244401","$recipeTypes":["com.linkedin.deco.recipe.anonymous.Anon1201354062"],"$type":"com.linkedin.voyager.dash.identity.profile.Position"},{"fullLastNameShown":true,"showPremiumSubscriberBadge":null,"formerNameVisibilitySetting":"CONNECTIONS","discloseAsProfileViewer":"DISCLOSE_FULL","messagingSeenReceipts":null,"allowProfileEditBroadcasts":null,"messagingTypingIndicators":null,"entityUrn":"urn:li:fsd_privacySettings:singleton","publicProfilePictureVisibilitySetting":"CONNECTIONS","pronounVisibilitySetting":"MEMBERS","requireReferral":null,"showPublicProfile":true,"$recipeTypes":["com.linkedin.voyager.dash.deco.identity.profile.ViewerPrivacySettingsForInjection"],"$type":"com.linkedin.voyager.dash.identity.profile.PrivacySettings","allowOpenProfile":false,"profilePictureVisibilitySetting":"CONNECTIONS","namePronunciationVisibilitySetting":"MEMBERS"},{"profilePicture":{"displayImageReference":{"vectorImage":{"$recipeTypes":["com.linkedin.voyager.dash.deco.common.VectorImageOnlyRootUrlAndAttribution"],"rootUrl":"https://media-exp3.licdn.com/dms/image/C5603AQHhbZscCOUaWg/profile-displayphoto-shrink_","artifacts":[{"width":100,"$recipeTypes":["com.linkedin.voyager.dash.deco.common.VectorArtifact"],"fileIdentifyingUrlPathSegment":"100_100/0/1574687341145?e=1629936000&amp;v=beta&amp;t=ue5NtITdWbm7obOzyY0FdEkzLH5PAdYerhnl75tOdfI","expiresAt":1629936000000,"height":100,"$type":"com.linkedin.common.VectorArtifact"},{"width":200,"$recipeTypes":["com.linkedin.voyager.dash.deco.common.VectorArtifact"],"fileIdentifyingUrlPathSegment":"200_200/0/1574687341145?e=1629936000&amp;v=beta&amp;t=dzHNRaXt5j_aTihOMo-qtELL3GxHq1Mh5VavBGdHlyY","expiresAt":1629936000000,"height":200,"$type":"com.linkedin.common.VectorArtifact"},{"width":400,"$recipeTypes":["com.linkedin.voyager.dash.deco.common.VectorArtifact"],"fileIdentifyingUrlPathSegment":"400_400/0/1574687341145?e=1629936000&amp;v=beta&amp;t=IWp-SHYpXGy5FDd1lSZe3kxI-VzTvmStETky409w58A","expiresAt":1629936000000,"height":400,"$type":"com.linkedin.common.VectorArtifact"},{"width":800,"$recipeTypes":["com.linkedin.voyager.dash.deco.common.VectorArtifact"],"fileIdentifyingUrlPathSegment":"800_800/0/1574687341145?e=1629936000&amp;v=beta&amp;t=Kdfto-5CsuJhymQAjLkuxgKe1TH8sKH3qwK28WQyRKk","expiresAt":1629936000000,"height":800,"$type":"com.linkedin.common.VectorArtifact"}],"$type":"com.linkedin.common.VectorImage"}},"$recipeTypes":["com.linkedin.voyager.dash.deco.common.image.PhotoFilterPicture"],"$type":"com.linkedin.voyager.dash.identity.profile.PhotoFilterPicture"},"firstName":"Gospod","lastName":"Elena","entityUrn":"urn:li:fsd_profile:ACoAAAZ8rb8B2i9zXuJj1k6zdmzDrWUnadXRC34","$recipeTypes":["com.linkedin.voyager.dash.deco.common.text.ProfileForFullName","com.linkedin.voyager.dash.deco.common.image.Profile"],"$type":"com.linkedin.voyager.dash.identity.profile.Profile"},{"profilePicture":{"displayImageReference":{"vectorImage":{"$recipeTypes":["com.linkedin.voyager.dash.deco.common.VectorImageOnlyRootUrlAndAttribution"],"rootUrl":"https://media-exp3.licdn.com/dms/image/C5603AQGntQW5879MdQ/profile-displayphoto-shrink_","artifacts":[{"width":100,"$recipeTypes":["com.linkedin.voyager.dash.deco.common.VectorArtifact"],"fileIdentifyingUrlPathSegment":"100_100/0/1517595179063?e=1629936000&amp;v=beta&amp;t=vybTaITaFMKF-Zax4V5cdHjsCyyBMlNP2-yJwgve_Wc","expiresAt":1629936000000,"height":100,"$type":"com.linkedin.common.VectorArtifact"},{"width":200,"$recipeTypes":["com.linkedin.voyager.dash.deco.common.VectorArtifact"],"fileIdentifyingUrlPathSegment":"200_200/0/1517595179063?e=1629936000&amp;v=beta&amp;t=MYq3azWin0p9YGd2tDzI-nPBOmSJeHbHDYvE0ZCjoac","expiresAt":1629936000000,"height":200,"$type":"com.linkedin.common.VectorArtifact"},{"width":400,"$recipeTypes":["com.linkedin.voyager.dash.deco.common.VectorArtifact"],"fileIdentifyingUrlPathSegment":"400_400/0/1517595179063?e=1629936000&amp;v=beta&amp;t=NXRhH3Fx1iykZBFOMZgEd8Ke-Pa5oijtfAEufa5ZqxI","expiresAt":1629936000000,"height":400,"$type":"com.linkedin.common.VectorArtifact"},{"width":800,"$recipeTypes":["com.linkedin.voyager.dash.deco.common.VectorArtifact"],"fileIdentifyingUrlPathSegment":"800_800/0/1517595179063?e=1629936000&amp;v=beta&amp;t=hrrzOoZFrEJ2FMook-TMldAZjRFifLHMI5udAk5uuis","expiresAt":1629936000000,"height":800,"$type":"com.linkedin.common.VectorArtifact"}],"$type":"com.linkedin.common.VectorImage"}},"$recipeTypes":["com.linkedin.voyager.dash.deco.common.image.PhotoFilterPicture"],"$type":"com.linkedin.voyager.dash.identity.profile.PhotoFilterPicture"},"firstName":"Irina","lastName":"Dolganova","entityUrn":"urn:li:fsd_profile:ACoAAA1qGwAB_5ysImFKwjsp2EZ7VuSORDNyLW0","$recipeTypes":["com.linkedin.voyager.dash.deco.common.text.ProfileForFullName","com.linkedin.voyager.dash.deco.common.image.Profile"],"$type":"com.linkedin.voyager.dash.identity.profile.Profile"},{"lastName":"Derzhanivska","memorialized":false,"iweWarned":false,"tempStatusEmoji":null,"$recipeTypes":["com.linkedin.voyager.dash.deco.relationships.ProfileWithIweWarned"],"$type":"com.linkedin.voyager.dash.identity.profile.Profile","firstName":"Mariia","entityUrn":"urn:li:fsd_profile:ACoAACZ2DbUBHJ9p7xq7cgqJILaQyOcNvErg49o","tempStatus":null,"headline":"Software Engineer","publicIdentifier":"mariia-derzhanivska"},{"lastName":"Tretiakov","memorialized":false,"profileProfileActions":{"secondaryActionResolutionResult":{"*composeOption":"urn:li:fsd_composeOption:(ACoAAArnC7ABDK0JxoBsuqWZNH15yxLBhyJmWto,NON_SELF_PROFILE_VIEW,EMPTY_CONTEXT_ENTITY_URN)"},"primaryAction":{"connection":{"memberRelationshipUrn":"urn:li:fsd_memberRelationship:ACoAAArnC7ABDK0JxoBsuqWZNH15yxLBhyJmWto","*memberRelationship":"urn:li:fsd_memberRelationship:ACoAAArnC7ABDK0JxoBsuqWZNH15yxLBhyJmWto","$recipeTypes":["com.linkedin.voyager.dash.deco.identity.profile.MemberRelationshipWrapper"],"$type":"com.linkedin.voyager.dash.relationships.MemberRelationshipWrapper"}},"secondaryAction":{"composeOption":"urn:li:fsd_composeOption:(ACoAAArnC7ABDK0JxoBsuqWZNH15yxLBhyJmWto,NON_SELF_PROFILE_VIEW,EMPTY_CONTEXT_ENTITY_URN)"},"overflowActions":[{"shareProfileUrlViaMessage":"https://www.linkedin.com/in/alexandr-tretiakov-ba831051"},{"saveToPdfUrl":"https://www.linkedin.com/profile/pdf?id=ACoAAArnC7ABDK0JxoBsuqWZNH15yxLBhyJmWto&amp;locale=ru_RU&amp;authType=name&amp;authToken=G_2Q&amp;disablePdfCompression=true&amp;trk=pdf_pro_full"},{"followingState":"urn:li:fsd_followingState:urn:li:fsd_profile:ACoAAArnC7ABDK0JxoBsuqWZNH15yxLBhyJmWto"},{"report":{"targetUrn":"urn:li:member:182913968","contentSource":"PROFILE","authorProfileId":"ACoAAArnC7ABDK0JxoBsuqWZNH15yxLBhyJmWto","$recipeTypes":["com.linkedin.deco.recipe.anonymous.Anon743120773"],"$type":"com.linkedin.voyager.dash.common.semaphore.SemaphoreContext"}}],"overflowActionsResolutionResults":{"2":{"*followingState":"urn:li:fsd_followingState:urn:li:fsd_profile:ACoAAArnC7ABDK0JxoBsuqWZNH15yxLBhyJmWto"}},"$recipeTypes":["com.linkedin.voyager.dash.deco.identity.profile.ProfileActionsInjection"],"$type":"com.linkedin.voyager.dash.identity.profile.actions.ProfileActions"},"*profileInsight":"urn:li:collectionResponse:TGq57OM6SxihnNWwdGVJuoG0STz7T0JG6zmfws8bXLk=","*memberRelationship":"urn:li:fsd_memberRelationship:ACoAAArnC7ABDK0JxoBsuqWZNH15yxLBhyJmWto","tempStatusEmoji":null,"pronounUnion":null,"$recipeTypes":["com.linkedin.deco.recipe.anonymous.Anon587401631","com.linkedin.voyager.dash.deco.relationships.ProfileWithEmailRequired","com.linkedin.voyager.dash.deco.identity.profile.TopCardSecondaryData"],"$type":"com.linkedin.voyager.dash.identity.profile.Profile","firstName":"Alexandr","*profileTopPosition":"urn:li:collectionResponse:AaB/30jKQeuaaIUhNnkFllqGo8GBlijDLG706j+cEhQ=","entityUrn":"urn:li:fsd_profile:ACoAAArnC7ABDK0JxoBsuqWZNH15yxLBhyJmWto","*privacySettings":"urn:li:fsd_privacySettings:singleton","tempStatus":null,"profileVideoUnion":null,"*profileTopEducation":"urn:li:collectionResponse:MFvWnuAKzTCiJdWIR30zLmRpnizP4SjACXCtnBAkKcs=","*connections":"urn:li:collectionResponse:RlBkvH1JQuiGqwlO2HNJXf9LF/le1D4TZ8kAE19O3vY=","*followingState":"urn:li:fsd_followingState:urn:li:fsd_profile:ACoAAArnC7ABDK0JxoBsuqWZNH15yxLBhyJmWto","headline":"Senior Software Engineer (JavaScript / TypeScript) at Fluxon","publicIdentifier":"alexandr-tretiakov-ba831051","emailRequired":false},{"displayText":{"textDirection":"USER_LOCALE","text":"Отправить сообщение","attributesV2":[],"accessibilityText":"Отправить сообщение с помощью Premium","$recipeTypes":["com.linkedin.voyager.dash.deco.common.text.TextViewModelV2"],"$type":"com.linkedin.voyager.dash.common.text.TextViewModel"},"icon":{"attributes":[{"detailDataUnion":{"icon":"IC_LOCK_24DP"},"$recipeTypes":["com.linkedin.voyager.dash.deco.common.image.ImageAttribute"],"$type":"com.linkedin.voyager.dash.common.image.ImageAttribute"}],"$recipeTypes":["com.linkedin.voyager.dash.deco.common.image.ImageViewModel"],"$type":"com.linkedin.voyager.dash.common.image.ImageViewModel"},"composeNavigationContext":{"recipient":{"*urn:li:fsd_profile:ACoAAArnC7ABDK0JxoBsuqWZNH15yxLBhyJmWto":"urn:li:fsd_profile:ACoAAArnC7ABDK0JxoBsuqWZNH15yxLBhyJmWto"},"recipientUrns":["urn:li:fsd_profile:ACoAAArnC7ABDK0JxoBsuqWZNH15yxLBhyJmWto"],"targetUrl":"https://www.linkedin.com/premium/upsell?upsellOrderOrigin=PREMIUM_INMAIL_PROFILE_UPSELL_MODAL&amp;contextUrn=urn%3Ali%3Afs_miniProfile%3AACoAAArnC7ABDK0JxoBsuqWZNH15yxLBhyJmWto&amp;channel=INMAIL","$recipeTypes":["com.linkedin.deco.recipe.anonymous.Anon1042380873"],"$type":"com.linkedin.voyager.dash.messaging.compose.ComposeNavigationContext"},"composeOptionType":"UPSELL","$recipeTypes":["com.linkedin.deco.recipe.anonymous.Anon909968925"],"$type":"com.linkedin.voyager.dash.messaging.compose.ComposeOption","entityUrn":"urn:li:fsd_composeOption:(ACoAAArnC7ABDK0JxoBsuqWZNH15yxLBhyJmWto,NON_SELF_PROFILE_VIEW,EMPTY_CONTEXT_ENTITY_URN)","textStartIcon":{"attributes":[{"detailDataUnion":{"icon":"IC_LOCK_24DP"},"$recipeTypes":["com.linkedin.voyager.dash.deco.common.image.ImageAttribute"],"$type":"com.linkedin.voyager.dash.common.image.ImageAttribute"}],"$recipeTypes":["com.linkedin.voyager.dash.deco.common.image.ImageViewModel"],"$type":"com.linkedin.voyager.dash.common.image.ImageViewModel"}},{"$recipeTypes":["com.linkedin.deco.recipe.anonymous.Anon1226238669"],"url":"https://www.linkedin.com/company/fluxonhq/","$type":"com.linkedin.voyager.dash.organization.Company","entityUrn":"urn:li:fsd_company:27244401","name":"Fluxon","logo":{"vectorImage":{"$recipeTypes":["com.linkedin.voyager.dash.deco.common.VectorImageOnlyRootUrlAndAttribution"],"rootUrl":"https://media-exp3.licdn.com/dms/image/C560BAQGnK-tHrk51Vg/company-logo_","artifacts":[{"width":200,"$recipeTypes":["com.linkedin.voyager.dash.deco.common.VectorArtifact"],"fileIdentifyingUrlPathSegment":"200_200/0/1595608321184?e=1632355200&amp;v=beta&amp;t=D_Z1JZw3z7KSfQlg3elXT2Mw-1-sDt8eDQGU07IANNU","expiresAt":1632355200000,"height":200,"$type":"com.linkedin.common.VectorArtifact"},{"width":100,"$recipeTypes":["com.linkedin.voyager.dash.deco.common.VectorArtifact"],"fileIdentifyingUrlPathSegment":"100_100/0/1595608321184?e=1632355200&amp;v=beta&amp;t=p8Mjo_Mz7cWrXPnwmXhxO-M49nNY1k8adQTLDg6HkKI","expiresAt":1632355200000,"height":100,"$type":"com.linkedin.common.VectorArtifact"},{"width":400,"$recipeTypes":["com.linkedin.voyager.dash.deco.common.VectorArtifact"],"fileIdentifyingUrlPathSegment":"400_400/0/1595608321184?e=1632355200&amp;v=beta&amp;t=xsluPhBMumTRiRroOvwv02c3Lyv1zyKTl76gyYC97oQ","expiresAt":1632355200000,"height":400,"$type":"com.linkedin.common.VectorArtifact"}],"$type":"com.linkedin.common.VectorImage"}},"universalName":"fluxonhq"},{"entityUrn":"urn:li:fsd_school:17529","name":"Dnipropetrovs'kij Nacional'nij Universitet","logo":{"vectorImage":{"$recipeTypes":["com.linkedin.voyager.dash.deco.common.VectorImageOnlyRootUrlAndAttribution"],"rootUrl":"https://media-exp3.licdn.com/dms/image/C4D0BAQFqhfbFX7Sayw/company-logo_","artifacts":[{"width":200,"$recipeTypes":["com.linkedin.voyager.dash.deco.common.VectorArtifact"],"fileIdentifyingUrlPathSegment":"200_200/0/1617728989804?e=1632355200&amp;v=beta&amp;t=73uKdC0HxQIEoVldGHYaZXCHF3wCtJvq9VQn7xIWNmI","expiresAt":1632355200000,"height":200,"$type":"com.linkedin.common.VectorArtifact"},{"width":100,"$recipeTypes":["com.linkedin.voyager.dash.deco.common.VectorArtifact"],"fileIdentifyingUrlPathSegment":"100_100/0/1617728989804?e=1632355200&amp;v=beta&amp;t=B3_MpRxKcqWeYBDcM3eyhJdYJXj5XyRAblUyC2yEhPM","expiresAt":1632355200000,"height":100,"$type":"com.linkedin.common.VectorArtifact"},{"width":400,"$recipeTypes":["com.linkedin.voyager.dash.deco.common.VectorArtifact"],"fileIdentifyingUrlPathSegment":"400_400/0/1617728989804?e=1632355200&amp;v=beta&amp;t=3qm3oDyFhLQHvWeox97q4J3erWKvpXp-c3tcnb7rg0I","expiresAt":1632355200000,"height":400,"$type":"com.linkedin.common.VectorArtifact"}],"$type":"com.linkedin.common.VectorImage"}},"$recipeTypes":["com.linkedin.deco.recipe.anonymous.Anon1621960601"],"url":"https://www.linkedin.com/school/dnipropetrovs'kij-nacional'nij-universitet/","$type":"com.linkedin.voyager.dash.organization.School"},{"entityUrn":"urn:li:fsd_connection:ACoAAAAd61YBRigkJOfRGpRSDYm9g4bXaLJU1hM","$recipeTypes":["com.linkedin.deco.recipe.anonymous.Anon2134644859"],"$type":"com.linkedin.voyager.dash.relationships.Connection"},{"entityUrn":"urn:li:fsd_relInsight:(urn:li:fsd_profile:ACoAACZ2DbUBHJ9p7xq7cgqJILaQyOcNvErg49o,urn:li:fsd_profile:ACoAAArnC7ABDK0JxoBsuqWZNH15yxLBhyJmWto,PROFILE)","insightImage":{"attributes":[{"detailData":{"*profilePicture":"urn:li:fsd_profile:ACoAAAZ8rb8B2i9zXuJj1k6zdmzDrWUnadXRC34"},"detailDataUnion":{"profilePicture":"urn:li:fsd_profile:ACoAAAZ8rb8B2i9zXuJj1k6zdmzDrWUnadXRC34"},"$recipeTypes":["com.linkedin.voyager.dash.deco.common.image.ImageAttribute"],"$type":"com.linkedin.voyager.dash.common.image.ImageAttribute"},{"detailData":{"*profilePicture":"urn:li:fsd_profile:ACoAAA1qGwAB_5ysImFKwjsp2EZ7VuSORDNyLW0"},"detailDataUnion":{"profilePicture":"urn:li:fsd_profile:ACoAAA1qGwAB_5ysImFKwjsp2EZ7VuSORDNyLW0"},"$recipeTypes":["com.linkedin.voyager.dash.deco.common.image.ImageAttribute"],"$type":"com.linkedin.voyager.dash.common.image.ImageAttribute"}],"$recipeTypes":["com.linkedin.voyager.dash.deco.common.image.ImageViewModel"],"$type":"com.linkedin.voyager.dash.common.image.ImageViewModel"},"sharedConnectionDetailTarget":null,"navigationUrl":"https://www.linkedin.com/search/results/people/?facetNetwork=%22F%22&amp;facetConnectionOf=%22ACoAAArnC7ABDK0JxoBsuqWZNH15yxLBhyJmWto%22&amp;origin=MEMBER_PROFILE_CANNED_SEARCH","text":{"textDirection":"USER_LOCALE","text":"26 общих контактов: Gospod Elena, Irina Dolganova и еще 24&nbsp;человека","attributesV2":[{"detailDataUnion":{"style":"BOLD"},"start":0,"length":19,"$recipeTypes":["com.linkedin.voyager.dash.deco.common.text.TextAttributeV2"],"$type":"com.linkedin.voyager.dash.common.text.TextAttribute"},{"detailDataUnion":{"profileFullName":"urn:li:fsd_profile:ACoAAAZ8rb8B2i9zXuJj1k6zdmzDrWUnadXRC34"},"start":20,"length":12,"detailData":{"*profileFullName":"urn:li:fsd_profile:ACoAAAZ8rb8B2i9zXuJj1k6zdmzDrWUnadXRC34"},"$recipeTypes":["com.linkedin.voyager.dash.deco.common.text.TextAttributeV2"],"$type":"com.linkedin.voyager.dash.common.text.TextAttribute"},{"detailDataUnion":{"profileFullName":"urn:li:fsd_profile:ACoAAA1qGwAB_5ysImFKwjsp2EZ7VuSORDNyLW0"},"start":34,"length":15,"detailData":{"*profileFullName":"urn:li:fsd_profile:ACoAAA1qGwAB_5ysImFKwjsp2EZ7VuSORDNyLW0"},"$recipeTypes":["com.linkedin.voyager.dash.deco.common.text.TextAttributeV2"],"$type":"com.linkedin.voyager.dash.common.text.TextAttribute"}],"accessibilityTextAttributesV2":[{"detailDataUnion":{"style":"BOLD"},"start":0,"length":19,"$recipeTypes":["com.linkedin.voyager.dash.deco.common.text.TextAttributeV2"],"$type":"com.linkedin.voyager.dash.common.text.TextAttribute"},{"detailDataUnion":{"profileFullName":"urn:li:fsd_profile:ACoAAAZ8rb8B2i9zXuJj1k6zdmzDrWUnadXRC34"},"start":20,"length":12,"detailData":{"*profileFullName":"urn:li:fsd_profile:ACoAAAZ8rb8B2i9zXuJj1k6zdmzDrWUnadXRC34"},"$recipeTypes":["com.linkedin.voyager.dash.deco.common.text.TextAttributeV2"],"$type":"com.linkedin.voyager.dash.common.text.TextAttribute"},{"detailDataUnion":{"profileFullName":"urn:li:fsd_profile:ACoAAA1qGwAB_5ysImFKwjsp2EZ7VuSORDNyLW0"},"start":34,"length":15,"detailData":{"*profileFullName":"urn:li:fsd_profile:ACoAAA1qGwAB_5ysImFKwjsp2EZ7VuSORDNyLW0"},"$recipeTypes":["com.linkedin.voyager.dash.deco.common.text.TextAttributeV2"],"$type":"com.linkedin.voyager.dash.common.text.TextAttribute"}],"accessibilityText":"26 общих контактов: Gospod Elena, Irina Dolganova и еще 24&nbsp;человека","$recipeTypes":["com.linkedin.voyager.dash.deco.common.text.TextViewModelV2"],"$type":"com.linkedin.voyager.dash.common.text.TextViewModel"},"$recipeTypes":["com.linkedin.deco.recipe.anonymous.Anon1219543357"],"$type":"com.linkedin.voyager.dash.relationships.Insight"},{"memberRelationshipUnion":{"noConnection":{"memberDistance":"DISTANCE_2","$recipeTypes":["com.linkedin.voyager.dash.deco.relationships.NoConnection"],"invitationUnion":{"noInvitation":{"*targetInviteeResolutionResult":"urn:li:fsd_profile:ACoAAArnC7ABDK0JxoBsuqWZNH15yxLBhyJmWto","inviter":"urn:li:fsd_profile:ACoAACZ2DbUBHJ9p7xq7cgqJILaQyOcNvErg49o","targetInvitee":"urn:li:fsd_profile:ACoAAArnC7ABDK0JxoBsuqWZNH15yxLBhyJmWto","$recipeTypes":["com.linkedin.voyager.dash.deco.relationships.NoInvitation"],"$type":"com.linkedin.voyager.dash.relationships.invitation.NoInvitation","*inviterResolutionResult":"urn:li:fsd_profile:ACoAACZ2DbUBHJ9p7xq7cgqJILaQyOcNvErg49o"}},"$type":"com.linkedin.voyager.dash.relationships.NoConnection"}},"entityUrn":"urn:li:fsd_memberRelationship:ACoAAArnC7ABDK0JxoBsuqWZNH15yxLBhyJmWto","memberRelationshipData":{"noInvitation":{"*targetInviteeResolutionResult":"urn:li:fsd_profile:ACoAAArnC7ABDK0JxoBsuqWZNH15yxLBhyJmWto","inviter":"urn:li:fsd_profile:ACoAACZ2DbUBHJ9p7xq7cgqJILaQyOcNvErg49o","targetInvitee":"urn:li:fsd_profile:ACoAAArnC7ABDK0JxoBsuqWZNH15yxLBhyJmWto","$recipeTypes":["com.linkedin.voyager.dash.deco.relationships.NoInvitation"],"$type":"com.linkedin.voyager.dash.relationships.invitation.NoInvitation","*inviterResolutionResult":"urn:li:fsd_profile:ACoAACZ2DbUBHJ9p7xq7cgqJILaQyOcNvErg49o"}},"$recipeTypes":["com.linkedin.voyager.dash.deco.relationships.MemberRelationshipV2","com.linkedin.voyager.dash.deco.relationships.MemberRelationshipV2ForInjection"],"$type":"com.linkedin.voyager.dash.relationships.MemberRelationship"}]}
</code>
<code style="display: none" id="datalet-bpr-guid-1229188">
{"request":"/voyager/api/identity/dash/profiles?q\u003DmemberIdentity\u0026memberIdentity\u003Dalexandr-tretiakov-ba831051\u0026decorationId\u003Dcom.linkedin.voyager.dash.deco.identity.profile.TopCardSecondaryData-28","status":200,"body":"bpr-guid-1229188","method":"GET"}
</code>
<img src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" style="display: none" class="datalet-bpr-guid-1229188"><code style="display: none" id="clientPageInstance">
urn:li:page:d_flagship3_profile_view_base;MzbxeNZ2S8O71QnP5tmS1Q==
</code>

<img src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" style="display: none" class="terminatorlet">


<div id="a11y-notification" class="visually-hidden" role="region" aria-live="polite"></div>


<div id="ember6" class="ember-view"></div>


<!---->
<div class="application-outlet " style="top:auto">
<!---->
<!---->
    <div id="ember7" class="global-nav__a11y-menu ember-view"><div class="global-nav__a11y-menu-container">
<button id="ember8" class="mr4 artdeco-button artdeco-button--muted artdeco-button--2 artdeco-button--secondary ember-view"><!---->
<span class="artdeco-button__text">
Перейти к поиску
</span></button>

<button id="ember9" class="artdeco-button artdeco-button--muted artdeco-button--2 artdeco-button--secondary ember-view"><!---->
<span class="artdeco-button__text">
Перейти к основному контенту
</span></button>

<button id="ember10" class="global-nav__a11y-menu-close artdeco-button artdeco-button--circle artdeco-button--muted artdeco-button--2 artdeco-button--tertiary ember-view">  <li-icon aria-hidden="true" type="cancel-icon" class="artdeco-button__icon"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" data-supported-dps="24x24" fill="currentColor" class="mercado-match" width="24" height="24" focusable="false">
<path d="M13.42 12L20 18.58 18.58 20 12 13.42 5.42 20 4 18.58 10.58 12 4 5.42 5.42 4 12 10.58 18.58 4 20 5.42z"></path>
</svg></li-icon>

<span class="artdeco-button__text">
Закрыть меню переходов
</span></button>
</div></div>
    <header id="global-nav" class="global-nav global-alert-offset-top ember-view">
<svg class="global-nav__icons" xmlns="http://www.w3.org/2000/svg">

<symbol id="global-nav-icon--classic__home" height="24" width="24">
<path d="M22 9.45l-9.15-6.19a1.5 1.5 0 00-1.69 0L2 9.45 3.06 11l.94-.63V20a1 1 0 001 1h6v-5h2v5h6a1 1 0 001-1v-9.63l.94.63zM18 19h-3v-4a1 1 0 00-1-1h-4a1 1 0 00-1 1v4H6V8.89l6-4 6 4V19z"></path>
</symbol>

<symbol id="global-nav-icon--classic__home--active" height="24" width="24">
<path d="M22 8.45l-9.15-6.19a1.5 1.5 0 00-1.69 0L2 8.45 3.06 10 4 9.37V19a1 1 0 001 1h5v-5h4v5h5a1 1 0 001-1V9.37l.94.63z"></path>
</symbol>

<symbol id="global-nav-icon--mercado__home" height="24" width="24">
<path d="m23 9v2h-2v7c0 1.7-1.3 3-3 3h-4v-6h-4v6h-4c-1.7 0-3-1.3-3-3v-7h-2v-2l11-7z"></path>
</symbol>

<symbol id="global-nav-icon--mercado__home--active" height="24" width="24">
<path d="m23 9v2h-2v7c0 1.7-1.3 3-3 3h-4v-6h-4v6h-4c-1.7 0-3-1.3-3-3v-7h-2v-2l11-7z"></path>
<path d="m20 2h-3v3.2l3 1.9z"></path>
</symbol>


<symbol id="global-nav-icon--classic__my-network" height="24" width="24">
<path d="M20.74 14.2L19 13.54v-.68l.25-.41A5 5 0 0020 9.82V9a3 3 0 00-6 0v.82a5 5 0 00.75 2.63l.25.41v.68l-1 .37a4 4 0 00-.58-.28l-2.45-1v-1.8A8 8 0 0012 7V6a4 4 0 00-8 0v1a8 8 0 001 3.86v1.84l-2.45 1A4 4 0 000 17.35V20a1 1 0 001 1h21a1 1 0 001-1v-2.53a3.5 3.5 0 00-2.26-3.27zM16 8.75a1 1 0 012 0v1.44a3 3 0 01-.38 1.46l-.33.6a.25.25 0 01-.22.13h-.14a.25.25 0 01-.22-.13l-.33-.6a3 3 0 01-.38-1.46V8.75zM6 5.85a2 2 0 014 0v1.43a6 6 0 01-.71 2.83l-.29.61a1 1 0 01-.88.53h-.2a1 1 0 01-.92-.53l-.33-.61A6 6 0 016 7.28V5.85zM14 19H2v-1.75a2 2 0 011.26-1.86L7 13.92v-1a3 3 0 001 .18 3 3 0 001-.18v1l3.72 1.42A2 2 0 0114 17.21V19zm7 0h-5v-1.65a4 4 0 00-.55-2l1.05-.4v-.88a2 2 0 00.4.05h.2a2 2 0 00.4-.05v.88l2.53 1a1.5 1.5 0 011 1.4V19z"></path>
</symbol>

<symbol id="global-nav-icon--classic__my-network--active" height="24" width="24">
<path d="M16 17.85V20a1 1 0 01-1 1H1a1 1 0 01-1-1v-2.15a4 4 0 012.55-3.73l2.95-1.2v-1.21l-.73-1.3A6 6 0 014 7.47V6a4 4 0 014.39-4A4.12 4.12 0 0112 6.21v1.26a6 6 0 01-.77 2.94l-.73 1.3v1.21l2.95 1.2A4 4 0 0116 17.85zm4.75-3.65L19 13.53v-1a6 6 0 001-3.31V9a3 3 0 00-6 0v.18a6 6 0 00.61 2.58A3.61 3.61 0 0016 13a3.62 3.62 0 012 3.24V21h4a1 1 0 001-1v-2.53a3.5 3.5 0 00-2.25-3.27z"></path>
</symbol>

<symbol id="global-nav-icon--mercado__my-network" height="24" width="24">
<path d="m12 16v6h-9v-6c0-1.7 1.3-3 3-3h3c1.7 0 3 1.3 3 3zm5.5-3c1.9 0 3.5-1.6 3.5-3.5s-1.6-3.5-3.5-3.5-3.5 1.6-3.5 3.5 1.6 3.5 3.5 3.5zm1 2h-2c-1.4 0-2.5 1.1-2.5 2.5v4.5h7v-4.5c0-1.4-1.1-2.5-2.5-2.5zm-11-13c-2.5 0-4.5 2-4.5 4.5s2 4.5 4.5 4.5 4.5-2 4.5-4.5-2-4.5-4.5-4.5z"></path>
</symbol>

<symbol id="global-nav-icon--mercado__my-network--active" height="24" width="24">
<path d="m16.5 11c-2.485 0-4.5-2.015-4.5-4.5s2.015-4.5 4.5-4.5 4.5 2.015 4.5 4.5-2.015 4.5-4.5 4.5z"></path>
<path d="m21 16c0-1.657-1.343-3-3-3h-3c-1.657 0-3 1.343-3 3v6h9z"></path>
<path d="m3 9.5c0 1.933 1.566 3.5 3.5 3.5s3.5-1.567 3.5-3.5-1.566-3.5-3.5-3.5-3.5 1.567-3.5 3.5z"></path>
<path d="m10 17.5c0-1.381-1.119-2.5-2.5-2.5h-2c-1.381 0-2.5 1.119-2.5 2.5v4.5h7z"></path>
</symbol>


<symbol id="global-nav-icon--classic__discover" height="24" width="24">
<path d="M12,2A10,10,0,1,0,22,12,10,10,0,0,0,12,2Zm0,18a8,8,0,1,1,8-8A8,8,0,0,1,12,20ZM7.05,17,14,14,17,7.05,10,10Zm5-6.2A1.25,1.25,0,1,1,10.75,12,1.25,1.25,0,0,1,12,10.75Z" fill-opacity=".9"></path>
</symbol>

<symbol id="global-nav-icon--classic__discover--active" height="24" width="24">
<path d="M12,2A10,10,0,1,0,22,12,10,10,0,0,0,12,2Zm0,18a8,8,0,1,1,8-8A8,8,0,0,1,12,20ZM9.17,12,12,19A7,7,0,0,1,12,5ZM12,13.25A1.25,1.25,0,1,1,13.25,12,1.25,1.25,0,0,1,12,13.25ZM19,12a7,7,0,0,1-7,7l2.83-7L12,5A7,7,0,0,1,19,12Z" fill-opacity=".9"></path>
</symbol>

<symbol id="global-nav-icon--mercado__discover" height="24" width="24">
<path d="M12,2A10,10,0,1,0,22,12,10,10,0,0,0,12,2Zm0,18a8,8,0,1,1,8-8A8,8,0,0,1,12,20ZM7.05,17,14,14,17,7.05,10,10Zm5-6.2A1.25,1.25,0,1,1,10.75,12,1.25,1.25,0,0,1,12,10.75Z" fill-opacity=".9"></path>
</symbol>

<symbol id="global-nav-icon--mercado__discover--active" height="24" width="24">
<path d="M12,2A10,10,0,1,0,22,12,10,10,0,0,0,12,2Zm0,18a8,8,0,1,1,8-8A8,8,0,0,1,12,20ZM9.17,12,12,19A7,7,0,0,1,12,5ZM12,13.25A1.25,1.25,0,1,1,13.25,12,1.25,1.25,0,0,1,12,13.25ZM19,12a7,7,0,0,1-7,7l2.83-7L12,5A7,7,0,0,1,19,12Z" fill-opacity=".9"></path>
</symbol>


<symbol id="global-nav-icon--classic__jobs" height="24" width="24">
<path d="M21 7h-4V6a3 3 0 00-3-3h-4a3 3 0 00-3 3v1H3a1 1 0 00-1 1v11a1 1 0 001 1h18a1 1 0 001-1V8a1 1 0 00-1-1zM9 6a1 1 0 011-1h4a1 1 0 011 1v1H9V6zm11 12H4v-5h16v5zm0-6H4V9h16v3z"></path>
</symbol>

<symbol id="global-nav-icon--classic__jobs--active" height="24" width="24">
<path d="M2 13h20v6a1 1 0 01-1 1H3a1 1 0 01-1-1v-6zm20-5v4H2V8a1 1 0 011-1h4V6a3 3 0 013-3h4a3 3 0 013 3v1h4a1 1 0 011 1zm-7-2a1 1 0 00-1-1h-4a1 1 0 00-1 1v1h6V6z"></path>
</symbol>

<symbol id="global-nav-icon--mercado__jobs" height="24" width="24">
<path d="m17 6v-1c0-1.7-1.3-3-3-3h-4c-1.7 0-3 1.3-3 3v1h-5v4c0 1.7 1.3 3 3 3h14c1.7 0 3-1.3 3-3v-4zm-8-1c0-.6.4-1 1-1h4c.6 0 1 .4 1 1v1h-6zm10 9c1.2 0 2.3-.5 3-1.4v4.4c0 1.7-1.3 3-3 3h-14c-1.7 0-3-1.3-3-3v-4.4c.7.9 1.8 1.4 3 1.4z"></path>
</symbol>

<symbol id="global-nav-icon--mercado__jobs--active" height="24" width="24">
<path d="m7 14c-1.6 0-3-1-3.7-2.4l-1.3-3.1v8.5c0 1.7 1.3 3 3 3h14c1.7 0 3-1.3 3-3v-3z"></path>
<path d="m22.8 10.2-1.8-4.2h-3.9v-1c0-1.7-1.3-3-3-3h-4c-1.7 0-3 1.3-3 3v1h-5.1l2.2 5.2c.5 1.1 1.6 1.8 2.8 1.8h14c1.4 0 2.4-1.5 1.8-2.8zm-7.7-4.2h-6v-1c0-.6.4-1 1-1h4c.6 0 1 .4 1 1z"></path>
</symbol>


<symbol id="global-nav-icon--classic__messaging" height="24" width="24">
<path d="M21 8H8a1 1 0 00-1 1v10a1 1 0 001 1h10l4 3V9a1 1 0 00-1-1zm-1 11.11L18.52 18H9v-8h11v9.11zM12 15h5v1h-5v-1zm-8-2h1v2H3a1 1 0 01-1-1V4a1 1 0 011-1h13a1 1 0 011 1v2h-2V5H4v8zm14 0h-7v-1h7v1z"></path>
</symbol>

<symbol id="global-nav-icon--classic__messaging--active" height="24" width="24">
<path d="M21 8H8a1 1 0 00-1 1v10a1 1 0 001 1h10l4 3V9a1 1 0 00-1-1zm-4 8h-5v-1h5zm1-3h-7v-1h7zm-1-9v2H6a1 1 0 00-1 1v8H3a1 1 0 01-1-1V4a1 1 0 011-1h13a1 1 0 011 1z"></path>
</symbol>

<symbol id="global-nav-icon--mercado__messaging" height="24" width="24">
<path d="M16 3H8C6.14348 3 4.36301 3.77847 3.05025 5.16416C1.7375 6.54984 1 8.42923 1 10.3889C1 12.3485 1.7375 14.2279 3.05025 15.6136C4.36301 16.9993 6.14348 17.7778 8 17.7778H12V22L20.16 16.3106C21.0512 15.639 21.7751 14.7495 22.2697 13.7183C22.7643 12.687 23.0148 11.5446 23 10.3889C23 8.42923 22.2625 6.54984 20.9497 5.16416C19.637 3.77847 17.8565 3 16 3ZM8 11.7083C7.75277 11.7083 7.5111 11.631 7.30554 11.486C7.09998 11.341 6.93976 11.1349 6.84515 10.8938C6.75054 10.6527 6.72579 10.3874 6.77402 10.1315C6.82225 9.87553 6.9413 9.64043 7.11612 9.4559C7.29093 9.27137 7.51366 9.14571 7.75614 9.0948C7.99861 9.04389 8.24995 9.07002 8.47835 9.16988C8.70676 9.26975 8.90199 9.43886 9.03934 9.65585C9.17669 9.87283 9.25 10.1279 9.25 10.3889C9.25 10.7388 9.1183 11.0744 8.88388 11.3219C8.64946 11.5693 8.33152 11.7083 8 11.7083ZM12 11.7083C11.7528 11.7083 11.5111 11.631 11.3055 11.486C11.1 11.341 10.9398 11.1349 10.8452 10.8938C10.7505 10.6527 10.7258 10.3874 10.774 10.1315C10.8222 9.87553 10.9413 9.64043 11.1161 9.4559C11.2909 9.27137 11.5137 9.14571 11.7561 9.0948C11.9986 9.04389 12.2499 9.07002 12.4784 9.16988C12.7068 9.26975 12.902 9.43886 13.0393 9.65585C13.1767 9.87283 13.25 10.1279 13.25 10.3889C13.25 10.7388 13.1183 11.0744 12.8839 11.3219C12.6495 11.5693 12.3315 11.7083 12 11.7083ZM16 11.7083C15.7528 11.7083 15.5111 11.631 15.3055 11.486C15.1 11.341 14.9398 11.1349 14.8452 10.8938C14.7505 10.6527 14.7258 10.3874 14.774 10.1315C14.8222 9.87553 14.9413 9.64043 15.1161 9.4559C15.2909 9.27137 15.5137 9.14571 15.7561 9.0948C15.9986 9.04389 16.2499 9.07002 16.4784 9.16988C16.7068 9.26975 16.902 9.43886 17.0393 9.65585C17.1767 9.87283 17.25 10.1279 17.25 10.3889C17.25 10.7388 17.1183 11.0744 16.8839 11.3219C16.6495 11.5693 16.3315 11.7083 16 11.7083Z"></path>
</symbol>

<symbol id="global-nav-icon--mercado__messaging--active" height="24" width="24">
<path clip-rule="evenodd" d="m11.99 2.00003h3.996c.7888-.00263 1.5704.15062 2.3.45097.7295.30035 1.3926.74189 1.9513 1.29931.5587.55741 1.0021 1.21973 1.3045 1.94899.3025.72926.4582 1.51112.4582 2.30073v.48c-.0007.99073-.2465 1.96587-.7154 2.83837-.469.8724-1.1464 1.6151-1.9719 2.1616l-.3297.22c-.0773-1.804-.848-3.5083-2.1512-4.75689-1.3032-1.24856-3.0379-1.94474-4.8418-1.94308h-3.99599c-.65929.00095-1.31514.09522-1.94805.28.17568-1.45488.87721-2.79509 1.97223-3.76778s2.50781-1.51059 3.97181-1.51222zm-3.996 6h3.996c1.5897 0 3.1143.63214 4.2384 1.75736 1.1241 1.12521 1.7556 2.65131 1.7556 4.24261v.48c-.0007.9908-.2465 1.9659-.7154 2.8383-.4689.8725-1.1464 1.6152-1.9719 2.1617l-5.30469 3.52v-3h-1.99801c-1.5897 0-3.1143-.6321-4.2384-1.7573-1.12409-1.1252-1.7556-2.6514-1.7556-4.2427s.63151-3.1174 1.7556-4.24261c1.1241-1.12522 2.6487-1.75736 4.2384-1.75736zm-1.55401 6.83147c.16428.1099.35743.1685.55501.1685.26496 0 .51905-.1053.7064-.2929.18735-.1875.2926-.4419.2926-.7071 0-.1978-.05859-.3911-.16836-.5555-.10977-.1645-.26579-.2927-.44833-.3683-.18255-.0757-.38341-.0955-.5772-.057-.19379.0386-.37179.1339-.51151.2737-.13971.1399-.23485.3181-.2734.512-.03855.194-.01876.3951.05685.5778s.20365.3389.36794.4488zm2.997 0c.16429.1099.35743.1685.55502.1685.26499 0 .51909-.1053.70639-.2929.1874-.1875.2926-.4419.2926-.7071 0-.1978-.0586-.3911-.1684-.5555-.1097-.1645-.2657-.2927-.4483-.3683-.1825-.0757-.3834-.0955-.57719-.057-.19379.0386-.37179.1339-.5115.2737-.13972.1399-.23486.3181-.27341.512-.03855.194-.01876.3951.05685.5778s.20366.3389.36794.4488zm2.99701 0c.1643.1099.3574.1685.555.1685.265 0 .5191-.1053.7064-.2929.1874-.1875.2926-.4419.2926-.7071 0-.1978-.0586-.3911-.1684-.5555-.1097-.1645-.2657-.2927-.4483-.3683-.1825-.0757-.3834-.0955-.5772-.057-.1938.0386-.3718.1339-.5115.2737-.1397.1399-.2349.3181-.2734.512-.0385.194-.0188.3951.0569.5778.0756.1827.2036.3389.3679.4488z"></path>
</symbol>


<symbol id="global-nav-icon--classic__notifications" height="24" width="24">
<path d="M20.94 19L19 14.49s-.41-3.06-.8-6.06A6.26 6.26 0 0012 3a6.26 6.26 0 00-6.21 5.44L5 14.49 3.06 19a.71.71 0 00-.06.28.75.75 0 00.75.76H10a2 2 0 104 0h6.27a.74.74 0 00.67-1.04zM12 4.75a4.39 4.39 0 014.35 3.81c.28 2.1.56 4.35.7 5.44H7l.65-5.44A4.39 4.39 0 0112 4.75zM5.52 18l1.3-3h10.36l1.3 3h-13z"></path>
</symbol>

<symbol id="global-nav-icon--classic__notifications--active" height="24" width="24">
<path d="M18.94 14H5.06l.73-5.56A6.26 6.26 0 0112 3a6.26 6.26 0 016.21 5.44zm2 5l-1.71-4H4.78l-1.72 4a.71.71 0 00-.06.28.75.75 0 00.75.76H10a2 2 0 104 0h6.27a.74.74 0 00.67-1.04z"></path>
</symbol>

<symbol id="global-nav-icon--mercado__notifications" height="24" width="24">
<path d="M13.7 19C13.9 19.3 14 19.6 14 20C14 21.1 13.1 22 12 22C10.9 22 10 21.1 10 20C10 19.6 10.1 19.3 10.3 19H2V18C2 17 2.4 16.1 3.2 15.2L4.2 14H19.9L20.9 15.2C21.7 16.2 22.1 17.1 22.1 18V19H13.7ZM18.2 7.4C17.8 4.3 15.1 2 12 2C8.9 2 6.2 4.3 5.8 7.4L5 13H19L18.2 7.4Z"></path>
</symbol>

<symbol id="global-nav-icon--mercado__notifications--active" height="24" width="24">
<path d="M21.4 17L20.7 15.6L5.2 12.2L4 13.1C3 13.9 2.4 14.7 2.2 15.6L2 16.6L21.7 21L21.9 20C22 19.7 22 19.5 22 19.2C22 18.5 21.8 17.8 21.4 17Z"></path>
<path d="M20.5 8.8C20.8 5.7 18.7 2.8 15.6 2.1C15.1 2 14.6 2 14.2 2C11.6 2 9.19999 3.6 8.29999 6.1L6.29999 11.4L20.1 14.5L20.5 8.8Z"></path>
<path d="M11 20C11 21.1 11.9 22 13 22C14.1 22 15 21.1 15 20C15 19.8 15 19.7 14.9 19.5L11.4 18.7C11.2 19.1 11 19.5 11 20Z"></path>
</symbol>

<symbol id="global-nav-icon--classic__groups" height="24" width="24">
<circle cx="12" cy="7" r="3.33"></circle>
<path d="M21.54 15a10 10 0 00.46-2.77 3 3 0 11-1.28-5.14 10 10 0 00-17.42 0A3 3 0 112 12.23 9.85 9.85 0 002.48 15H7v5.75h.12a10 10 0 001.88.8V12h6v9.54a9.93 9.93 0 002-.89V15h4.54z" opacity=".25"></path>
<path d="M4 7a3 3 0 00-3 3 3 3 0 103-3zM20.71 7.09A3 3 0 1023 10a3 3 0 00-2.29-2.91z" opacity=".7"></path>
<path d="M9 12v9.52a9.81 9.81 0 006 0V12H9z"></path>
<path d="M2.48 15a10.09 10.09 0 00.92 2.09L2 22l5-1.25V15H2.48zM21.54 15H17v5.65A10 10 0 0021.54 15z" opacity=".7"></path>
</symbol>


<symbol id="global-nav-icon--classic__work" height="24" width="24">
<path d="M10 10h4v4h-4v-4zm0 11h4v-4h-4v4zm-7-7h4v-4H3v4zm0 7h4v-4H3v4zM3 7h4V3H3v4zm14 7h4v-4h-4v4zm0-11v4h4V3h-4zm-7 4h4V3h-4v4zm7 14h4v-4h-4v4z"></path>
</symbol>

<symbol id="global-nav-icon--mercado__work" height="24" width="24">
<path clip-rule="evenodd" d="m17 21h4v-4h-4zm-7-14h4v-4h-4zm7 0h4v-4h-4zm0 7h4v-4h-4zm-14-7h4v-4h-4zm0 14h4v-4h-4zm0-7h4v-4h-4zm7 7h4v-4h-4zm0-7h4v-4h-4z"></path>
</symbol>


<symbol id="global-nav-icon--classic__learning" height="24" width="24">
<path d="M22 5v14H2V5h20m1-2H1a1 1 0 00-1 1v16a1 1 0 001 1h22a1 1 0 001-1V4a1 1 0 00-1-1z"></path>
<path d="M2 5v14h10V5H2zm8 12H4v-2h6v2zm0-4H4v-2h6v2zm0-4H4V7h6v2z" opacity=".25"></path>
<path opacity=".55" d="M14 7h6v2h-6zM14 11h6v2h-6zM14 15h6v2h-6z"></path>
<path d="M10 7.53v8.93a.28.28 0 00.44.23l6.43-4.44a.33.33 0 000-.52L10.44 7.3a.28.28 0 00-.44.23z"></path>
</symbol>


<symbol id="global-nav-icon--classic__post-a-job" height="24" width="24">
<circle cx="12" cy="4" r="2" opacity=".7"></circle>
<path d="M21 10H3a1 1 0 00-1 1v10a1 1 0 001 1h18a1 1 0 001-1V11a1 1 0 00-1-1zm-5 9H8v-2h8v2zm2-4H6v-2h12v2z"></path>
<g opacity=".55">
  <path d="M9.57 5.75l-2.41 4.83 1.68.84 2.28-4.57a3 3 0 01-1.55-1.1zM14.43 5.75a3 3 0 01-1.55 1.1l2.28 4.57 1.68-.84z" opacity=".55"></path>
</g>
</symbol>

<symbol id="global-nav-icon--classic__sales-navigator" height="24" width="24">
<path d="M12 1.88A10.13 10.13 0 111.88 12 10.14 10.14 0 0112 1.88M12 0a12 12 0 1012 12A12 12 0 0012 0z"></path>
<path d="M12 9.88A2.13 2.13 0 119.88 12 2.13 2.13 0 0112 9.88M12 9a3 3 0 103 3 3 3 0 00-3-3z"></path>
<path d="M12 15a2.94 2.94 0 01-3-3.46L6.31 17a.56.56 0 00-.05.25.46.46 0 00.44.47.6.6 0 00.3-.03L12.46 15a3 3 0 01-.46 0z" opacity=".7"></path>
<path d="M17.27 6.25a.55.55 0 00-.25.06L11.54 9A2.94 2.94 0 0115 12.46L17.69 7a.53.53 0 00.05-.24.48.48 0 00-.47-.51z"></path>
</symbol>

<symbol id="global-nav-icon--classic__recruiter" height="24" width="24">
<path d="M11 13v3.78a6 6 0 004 0V13h-4z"></path>
<circle cx="13" cy="9" r="2.33"></circle>
<path d="M13 2a9 9 0 00-7.61 13.78L2.22 19a.75.75 0 000 1.06L4 21.78a.75.75 0 001.06 0l3.17-3.17A9 9 0 1013 2zm0 15.13A6.13 6.13 0 1119.13 11 6.12 6.12 0 0113 17.13z" opacity=".7"></path>
</symbol>

<symbol id="global-nav-icon--classic__elevate" height="24" width="24">
<circle cx="12" cy="11" r="3"></circle>
<path d="M9 16h6v5a1 1 0 01-1 1h-4a1 1 0 01-1-1v-5z"></path>
<path d="M7.77 15.23A.94.94 0 007.85 14a5.12 5.12 0 010-6 .94.94 0 00-.08-1.22.94.94 0 00-1.41.09 7 7 0 000 8.29.94.94 0 001.41.07z" opacity=".7"></path>
<path d="M2.88 11A9.08 9.08 0 015 5.17a.93.93 0 00-.07-1.25A1 1 0 003.52 4a11 11 0 000 14 1 1 0 001.4.08.93.93 0 00.08-1.25A9.08 9.08 0 012.88 11z" opacity=".25"></path>
<path d="M17.13 11a5.1 5.1 0 01-1 3 .94.94 0 00.08 1.22.94.94 0 001.41-.09 7 7 0 000-8.29.94.94 0 00-1.41-.09.94.94 0 00-.06 1.25 5.1 5.1 0 01.98 3z" opacity=".7"></path>
<path d="M23 11a11 11 0 00-2.52-7 1 1 0 00-1.4-.08.93.93 0 00-.08 1.25 9.11 9.11 0 010 11.67.93.93 0 00.07 1.25 1 1 0 001.4-.08A11 11 0 0023 11z" opacity=".25"></path>
</symbol>

<symbol id="global-nav-icon--classic__ads" height="24" width="24">
<path d="M12 17.13a5.13 5.13 0 010-10.25V4a8 8 0 108 8h-2.87A5.13 5.13 0 0112 17.13z" opacity=".7"></path>
<path d="M23.31 6.34l-4.95-.71-.7-4.94-3.54 3.53.35 2.48-3.89 3.89a2 2 0 002.83 2.83l3.89-3.89 2.48.35z"></path>
</symbol>

<symbol id="global-nav-icon--classic__cac" height="24" width="24">
<path d="M16.56 8.11l1.31-2.27a1 1 0 00-.37-1.37l-1.73-1a1 1 0 00-1.36.37L13.1 6.1a6 6 0 013.46 2.01zM10.91 6.1L9.59 3.84a1 1 0 00-.9-.5.94.94 0 00-.47.13l-1.73 1a1 1 0 00-.37 1.37l1.32 2.27a6 6 0 013.47-2.01z" opacity=".45"></path>
<path d="M12 6a6 6 0 106 6 6 6 0 00-6-6zm0 9.13A3.13 3.13 0 1115.13 12 3.13 3.13 0 0112 15.13z" opacity=".7"></path>
<path d="M9.62 10H4a1 1 0 00-1 1v2a1 1 0 001 1h5.62a3.07 3.07 0 010-4zM20 10h-5.62a3.07 3.07 0 010 4H20a1 1 0 001-1v-2a1 1 0 00-1-1z"></path>
<path d="M17.87 18.16l-1.31-2.27a6 6 0 01-3.47 2l1.31 2.27a1 1 0 001.37.37l1.73-1a1 1 0 00.37-1.36zM7.44 15.89l-1.31 2.27a1 1 0 00.37 1.37l1.73 1a1 1 0 001.36-.37l1.31-2.26a6 6 0 01-3.46-2.01z" opacity=".45"></path>
</symbol>

<symbol id="global-nav-icon--classic__profinder" height="24" width="24">
<circle cx="12" cy="7" r="2.34"></circle>
<path d="M11 16.76l-2.12 2.12-4.56-4.56a.67.67 0 010-.95l1.17-1.17a.67.67 0 01.95 0z" opacity=".35"></path>
<path d="M13.12 18.88l-1.41 1.41a1 1 0 01-1.41 0l-1.42-1.41L11 16.76z" opacity=".55"></path>
<path d="M18.68 9.07L11 16.76l2.12 2.12 7.68-7.68a.7.7 0 00.2-.51.64.64 0 00-.2-.44l-1.17-1.18a.67.67 0 00-.95 0z" opacity=".7"></path>
<path d="M11 16.76l3-3V12h-4v3.76l1 1z"></path>
</symbol>

<symbol id="global-nav-icon--classic__salary" height="24" width="24">
<path d="M21 21H3a.94.94 0 01-1-1v-1h20v1a.94.94 0 01-.88 1H21z" opacity=".7"></path>
<path d="M21 3H3a.94.94 0 00-1 1v12a.94.94 0 00.88 1H21a.94.94 0 001-1V4a.94.94 0 00-.88-1H21zm-1 9a5 5 0 00-3 3H7a5 5 0 00-3-3V8a5 5 0 003-3h10a5 5 0 003 3v4z"></path>
<path d="M12 6a4 4 0 00-2.83 6.83l5.66-5.66A4 4 0 0012 6z"></path>
<path d="M16 10a4 4 0 00-1.17-2.83l-5.66 5.66A4 4 0 0016 10z" opacity=".45"></path>
</symbol>


<symbol id="global-nav-icon--classic__overflow" width="24" height="24">
<path d="M14 12a2 2 0 11-2-2 2 2 0 012 2zM4 10a2 2 0 102 2 2 2 0 00-2-2zm16 0a2 2 0 102 2 2 2 0 00-2-2z"></path>
</symbol>


<symbol id="global-nav-icon--classic__down-arrow" width="16" height="16" data-supported-dps="16x16">
<path d="M8.8 10.66L14 5.12a.07.07 0 00-.07-.12H2.07a.07.07 0 00-.07.12l5.2 5.54a1.1 1.1 0 001.6 0z"></path>
</symbol>
</svg>


<div class="global-nav__content">
<a href="/feed/?doFeedRefresh=true&amp;nis=true" id="ember12" class="ember-view global-nav__branding" data-link-to="feed">
<svg xmlns="http://www.w3.org/2000/svg" width="34" height="34" viewBox="0 0 34 34" class="global-nav__logo">
  <title>
    LinkedIn
  </title>

  <g>
<!---->        <path d="M34,2.5v29A2.5,2.5,0,0,1,31.5,34H2.5A2.5,2.5,0,0,1,0,31.5V2.5A2.5,2.5,0,0,1,2.5,0h29A2.5,2.5,0,0,1,34,2.5ZM10,13H5V29h5Zm.45-5.5A2.88,2.88,0,0,0,7.59,4.6H7.5a2.9,2.9,0,0,0,0,5.8h0a2.88,2.88,0,0,0,2.95-2.81ZM29,19.28c0-4.81-3.06-6.68-6.1-6.68a5.7,5.7,0,0,0-5.06,2.58H17.7V13H13V29h5V20.49a3.32,3.32,0,0,1,3-3.58h.19c1.59,0,2.77,1,2.77,3.52V29h5Z" fill="currentColor"></path>
  </g>
</svg>
</a>

<div id="global-nav-search" class="global-nav__search ">

        <div class="search-global-typeahead   global-nav__search-typeahead">
<div id="global-nav-typeahead" class="search-typeahead-v2 search-global-typeahead__typeahead">
<div class="a11y-text" aria-live="polite">Найдено 0&nbsp;рекомендаций.  </div>

<div id="ember14" class="ember-view" aria-label="Поиск"><input class="search-global-typeahead__input always-show-placeholder" placeholder="Поиск" role="combobox" aria-autocomplete="list" aria-activedescendant="" aria-expanded="false" aria-owns="" aria-label="Поиск" type="text">
</div>
<div aria-hidden="true" class="search-global-typeahead__search-icon-container">
  <li-icon aria-hidden="true" type="search-icon" class="search-global-typeahead__search-icon" size="small"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" data-supported-dps="16x16" fill="currentColor" class="mercado-match" width="16" height="16" focusable="false">
<path d="M14.56 12.44L11.3 9.18a5.51 5.51 0 10-2.12 2.12l3.26 3.26a1.5 1.5 0 102.12-2.12zM3 6.5A3.5 3.5 0 116.5 10 3.5 3.5 0 013 6.5z"></path>
</svg></li-icon>
</div>

<div class="search-box__overlay--hidden global-alert-offset-top "></div>
<!---->  
</div>

<button class="search-global-typeahead__collapsed-search-button" aria-label="Нажмите, чтобы начать поиск" type="button">
<li-icon aria-hidden="true" type="search-icon" class="search-global-typeahead__collapsed-search-button-icon t-black--light" size="medium"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" data-supported-dps="24x24" fill="currentColor" class="mercado-match" width="24" height="24" focusable="false">
<path d="M21.41 18.59l-5.27-5.28A6.83 6.83 0 0017 10a7 7 0 10-7 7 6.83 6.83 0 003.31-.86l5.28 5.27a2 2 0 002.82-2.82zM5 10a5 5 0 115 5 5 5 0 01-5-5z"></path>
</svg></li-icon>
<div class="search-global-typeahead__collapsed-search-button-text t-black--light t-12 t-normal">Поиск</div>
</button>

<div id="ember15" class="ember-view"><!----></div>
</div>

    
</div>

<nav class="global-nav__nav" aria-labelledby="primary-navigation">
<h2 class="visually-hidden" id="primary-navigation">
  Основная навигация
</h2>

<ul class="global-nav__primary-items ">
      <li class="global-nav__primary-item">
        <a data-test-global-nav-link="feed" data-resource="feed/badge" data-link-to="feed" data-control-name="nav_homepage" href="/feed/" id="ember16" class="global-nav__primary-link ember-view">  <div id="ember17" class="global-nav__primary-link-notif artdeco-notification-badge ember-view">  <span class="notification-badge notification-badge--show ">
    <span aria-hidden="true" class="notification-badge__no-count"></span>
    <span class="a11y-text" data-test-notification-a11y="">новых уведомления «Обновления в ленте»</span>
</span>

<svg class="global-nav__icon " xmlns="http://www.w3.org/2000/svg">
<use href="#global-nav-icon--mercado__home" class="global-nav__icon-path"></use>
</svg>

</div>

<span class="global-nav__primary-link-text">
Главная
</span></a>
      </li>
      <li class="global-nav__primary-item">
        <a data-test-global-nav-link="mynetwork" data-resource="voyagerCommunicationsTabBadges" data-link-to="mynetwork" data-control-name="nav_mynetwork" data-alias="relationships" href="/mynetwork/" id="ember19" class="global-nav__primary-link ember-view">  <svg class="global-nav__icon " xmlns="http://www.w3.org/2000/svg">
<use href="#global-nav-icon--mercado__my-network" class="global-nav__icon-path"></use>
</svg>

<span class="global-nav__primary-link-text">
Сеть
</span></a>
      </li>
      <li class="global-nav__primary-item">
        <a data-test-global-nav-link="jobs" data-resource="voyagerCommunicationsTabBadges" data-link-to="jobs" data-control-name="nav_jobs" href="/jobs/" id="ember21" class="global-nav__primary-link ember-view">  <svg class="global-nav__icon " xmlns="http://www.w3.org/2000/svg">
<use href="#global-nav-icon--mercado__jobs" class="global-nav__icon-path"></use>
</svg>

<span class="global-nav__primary-link-text">
Вакансии
</span></a>
      </li>
      <li class="global-nav__primary-item">
        <a data-test-global-nav-link="messaging" data-resource="voyagerCommunicationsTabBadges" data-link-to="messaging" data-control-name="nav_messaging" href="/messaging/" id="ember23" class="global-nav__primary-link ember-view">  <svg class="global-nav__icon " xmlns="http://www.w3.org/2000/svg">
<use href="#global-nav-icon--mercado__messaging" class="global-nav__icon-path"></use>
</svg>

<span class="global-nav__primary-link-text">
Сообщения
</span></a>
      </li>
      <li class="global-nav__primary-item">
        <a data-test-global-nav-link="notifications" data-resource="voyagerCommunicationsTabBadges" data-link-to="notifications" data-control-name="nav_notifications" data-alias="identity" href="/notifications/" id="ember25" class="global-nav__primary-link ember-view">  <div id="ember26" class="global-nav__primary-link-notif artdeco-notification-badge ember-view">  <span class="notification-badge notification-badge--show ">
      <span aria-hidden="true" class="notification-badge__count ">3</span>
      <span class="a11y-text" data-test-notification-a11y="">3 новых уведомления </span>
</span>

<svg class="global-nav__icon " xmlns="http://www.w3.org/2000/svg">
<use href="#global-nav-icon--mercado__notifications" class="global-nav__icon-path"></use>
</svg>

</div>

<span class="global-nav__primary-link-text">
Уведомления
</span></a>
      </li>

  <li class="global-nav__primary-item ">
    <div id="ember29" class="global-nav__me artdeco-dropdown artdeco-dropdown--placement-bottom artdeco-dropdown--justification-left ember-view">
<button aria-expanded="false" id="ember30" class="global-nav__primary-link artdeco-dropdown__trigger artdeco-dropdown__trigger--placement-bottom ember-view" type="button" tabindex="0">
<img width="24" src="https://media-exp3.licdn.com/dms/image/C4D03AQFn3ug3E1r59Q/profile-displayphoto-shrink_100_100/0/1617054793555?e=1629936000&amp;v=beta&amp;t=qVEICCqQBqVbEnGffyY8jMKhSfplXoKkmwVzeEQ4qHI" height="24" alt="Mariia Derzhanivska" id="ember31" class="global-nav__me-photo ember-view">

<span class="global-nav__primary-link-text">
  Профиль

  <svg class="global-nav__icon global-nav__icon--small" xmlns="http://www.w3.org/2000/svg">
<use href="#global-nav-icon--classic__down-arrow" class="global-nav__icon-path"></use>
</svg>
</span>

<!----></button>

<div tabindex="-1" aria-hidden="true" id="ember33" class="global-nav__me-content artdeco-dropdown__content artdeco-dropdown--is-dropdown-element artdeco-dropdown__content--justification-right artdeco-dropdown__content--placement-bottom ember-view"><!----></div>
</div>

<!---->
  </li>

  <li class="global-nav__primary-item global-nav__primary-item--divider ">
    
<div id="ember34" class="ember-view">
<button aria-expanded="false" class="global-nav__primary-link" type="button">

  <svg class="global-nav__icon " xmlns="http://www.w3.org/2000/svg">
<use href="#global-nav-icon--classic__work" class="global-nav__icon-path"></use>
</svg>

<span class="global-nav__primary-link-text">
  Для работы

  <svg class="global-nav__icon global-nav__icon--small" xmlns="http://www.w3.org/2000/svg">
<use href="#global-nav-icon--classic__down-arrow" class="global-nav__icon-path"></use>
</svg>
</span>

</button>

<!---->


<div id="ember37" class="ember-view"><!----></div></div>
  </li>

  <li class="global-nav__primary-item global-nav__spotlight ">
    
    
  <div class="premium-upsell-link">
    <a href="https://www.linkedin.com/premium/products/?upsellOrderOrigin=premium_nav_upsell_text&amp;destRedirectURL=https%3A%2F%2Fwww.linkedin.com%2Fin%2Falexandr-tretiakov-ba831051%2F%3FshowPremiumWelcomeBanner%3Dtrue" class="link-without-visited-state global-nav__primary-link global-nav__primary-link--premium global-nav__spotlight-upsell premium-upsell-link--extra-long">
      Попробовать Premium бесплатно
    </a>
  </div>



  </li>

<!---->    </ul>
</nav>
</div>
</header>

<div class="videoinappalert-inapp-alerts-manager hidden">

<!---->    
</div>

<!---->
<!---->
<div class="authentication-outlet">
<div id="profile-content" class="extended">
<div class="body">
<div id="profile-wrapper" class="pv-profile-wrapper pv-profile-wrapper--below-nav">
<!---->
<div id="ember38" class="self-focused ember-view">
<!---->
<div id="ember39" class="pv-profile-sticky-header pv-profile-sticky-header--hidden ember-view"><!----></div>

<div class="
scaffold-layout
scaffold-layout--breakpoint-none
scaffold-layout--main-aside

scaffold-layout--static

">
<!---->
<div class="
  scaffold-layout__inner scaffold-layout-container
  scaffold-layout-container--static
">
  <section class="scaffold-layout__ad">
    
      <section class="
ad-banner-container
is-header-zone
pv-ad-banner--light
">
<iframe class="ad-banner" width="100%" height="17" src="about:blank" scrolling="no" title="Реклама"></iframe>

<!---->
<!---->

<!----></section>


  
  </section>

<!---->
  <div class="
    scaffold-layout__row
    scaffold-layout__content
    scaffold-layout__content--main-aside
    
    scaffold-layout__content--has-aside
    
  ">
<!---->
    <main id="main" class="
        scaffold-layout__main
        
      ">
        
    <div>
        <section id="ember41" class="artdeco-card ember-view pv-top-card"><!---->

<img src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" class="hidden" data-elementtiming="true" alt="" role="none">
<div class="live-video-hero-image
" style="min-height: 195.5px; max-height: 195.5px;">
<div class="live-video-hero-image__bg-image">

<!---->

    <div tabindex="0" aria-label="Изображение фона профиля" class="profile-background-image profile-background-image--loading">
<!----></div>



</div>
<div class="live-video-hero-image__live-video">
<!---->  </div>
</div>

<div class="ph5 pb5">
<div class="display-flex">
  <div class="pv-top-card--photo__v2 text-align-left">
      <div class="pv-top-card__photo-wrapper ml0">
          
<div class="presence-entity presence-entity--size-9 pv-top-card__image">
<img src="https://media-exp3.licdn.com/dms/image/C4E03AQGWoZSHZr39_g/profile-displayphoto-shrink_400_400/0/1622747300151?e=1629936000&amp;v=beta&amp;t=F0kvftcSRIh4e9KS9iwvbncxnv_ePet02wd7AdXhcW8" loading="lazy" alt="Alexandr Tretiakov" id="ember43" class="presence-entity__image  pv-top-card__photo  lazy-image ember-view">


<div class="presence-entity__indicator  presence-entity__indicator--size-9 presence-indicator hidden presence-indicator--size-9">
<span class="visually-hidden">
  Статус: офлайн
  </span>
</div>

</div>

      </div>
  </div>

  <div class="flex-1 flex-column">
    <div class="pv-top-card__badge-wrap">
<!---->
<!---->        </div>
  </div>
</div>
<!---->

<div class="display-flex justify-space-between pt2">
<div class="pv-text-details__left-panel mr5">
<div>
  <h1 class="text-heading-xlarge inline t-24 v-align-middle break-words">Alexandr Tretiakov</h1>
<!----><!----><!---->        <span class="distance-badge t-black--light t-14

t-black--light

 pv-text-details__separator text-body-small v-align-middle">
<span class="visually-hidden">
  контакт 2-го&nbsp;уровня
</span>
<span class="dist-value " aria-hidden="true">
2-й
</span>
</span>
</div>
<!---->    <div class="text-body-medium break-words">
  Senior Software Engineer (JavaScript / TypeScript) at Fluxon
</div>
<!----><!---->    <div class="pb2">
  <span class="text-body-small inline t-black--light break-words">
    Украина
  </span>
      <span class="pv-text-details__separator t-black--light">
        <a href="/in/alexandr-tretiakov-ba831051/detail/contact-info/" id="ember44" class="ember-view link-without-visited-state cursor-pointer text-heading-small inline-block break-words">
          Контактная информация
        </a>
      </span>
</div>
</div>
<ul class="pv-text-details__right-panel">
    <li>
      <a href="#" class="display-flex mb2 link-without-visited-state t-black">
        <img src="https://media-exp3.licdn.com/dms/image/C560BAQGnK-tHrk51Vg/company-logo_100_100/0/1595608321184?e=1632355200&amp;v=beta&amp;t=p8Mjo_Mz7cWrXPnwmXhxO-M49nNY1k8adQTLDg6HkKI" alt="" id="ember45" class="ember-view EntityPhoto-square-1 flex-shrink-zero mr2">
        <h2 class="text-heading-small align-self-center flex-1">
          <div class="
inline-show-more-text
inline-show-more-text--is-collapsed
inline-show-more-text--is-collapsed-with-line-clamp


" style="line-height:2rem;max-height:4rem;-webkit-line-clamp:2;" aria-label="Текущая компания">

Fluxon

<!----></div>

        </h2>
      </a>
    </li>
    <li>
      <a href="#" class="display-flex link-without-visited-state t-black">
        <img src="https://media-exp3.licdn.com/dms/image/C4D0BAQFqhfbFX7Sayw/company-logo_100_100/0/1617728989804?e=1632355200&amp;v=beta&amp;t=B3_MpRxKcqWeYBDcM3eyhJdYJXj5XyRAblUyC2yEhPM" alt="" id="ember46" class="ember-view EntityPhoto-square-1 flex-shrink-zero mr2">
        <h2 class="text-heading-small align-self-center flex-1">
          <div class="
inline-show-more-text
inline-show-more-text--is-collapsed
inline-show-more-text--is-collapsed-with-line-clamp


" style="line-height:2rem;max-height:4rem;-webkit-line-clamp:2;" aria-label="Образование">

Dnipropetrovs'kij Nacional'nij Universitet

<!----></div>

        </h2>
      </a>
    </li>
</ul>
</div>


<ul class="pv-top-card--list pv-top-card--list-bullet display-flex pb1">

<!---->
<li class="text-body-small">
    <span class="t-black--light">
      <span class="t-bold">500+</span> контакт
    </span>
</li>
</ul>

    <a class="app-aware-link display-flex pv1 align-items-center" href="https://www.linkedin.com/search/results/people/?facetNetwork=%22F%22&amp;facetConnectionOf=%22ACoAAArnC7ABDK0JxoBsuqWZNH15yxLBhyJmWto%22&amp;origin=MEMBER_PROFILE_CANNED_SEARCH">
<div id="ember47" class="ivm-image-view-model ember-view mr2">  <ul class="ivm-image-view-model__img-list--stacked list-style-none display-flex justify-center">
  <li class="ivm-image-view-model__img-list-item--stacked">
    <div class="
ivm-view-attr__img-wrapper ivm-view-attr__img-wrapper--use-img-tag display-flex

">
<!---->      <img width="32" src="https://media-exp3.licdn.com/dms/image/C5603AQHhbZscCOUaWg/profile-displayphoto-shrink_100_100/0/1574687341145?e=1629936000&amp;v=beta&amp;t=ue5NtITdWbm7obOzyY0FdEkzLH5PAdYerhnl75tOdfI" loading="lazy" height="32" alt="" id="ember48" class="ivm-view-attr__img--centered ivm-view-attr__img--stacked ivm-view-attr__img--stacked-circle-size-1 EntityPhoto-circle-1-stackedFacepile  lazy-image ember-view">
</div>

  </li>
  <li class="ivm-image-view-model__img-list-item--stacked">
    <div class="
ivm-view-attr__img-wrapper ivm-view-attr__img-wrapper--use-img-tag display-flex

">
<!---->      <img width="32" src="https://media-exp3.licdn.com/dms/image/C5603AQGntQW5879MdQ/profile-displayphoto-shrink_100_100/0/1517595179063?e=1629936000&amp;v=beta&amp;t=vybTaITaFMKF-Zax4V5cdHjsCyyBMlNP2-yJwgve_Wc" loading="lazy" height="32" alt="" id="ember49" class="ivm-view-attr__img--centered ivm-view-attr__img--stacked ivm-view-attr__img--stacked-circle-size-1 EntityPhoto-circle-1-stackedFacepile  lazy-image ember-view">
</div>

  </li>
</ul>

<!----></div>
<span class="t-normal t-black--light t-14">
<span aria-hidden="true"><strong><!---->26 общих контактов:<!----></strong><span class="white-space-pre"> </span><!----><!---->Gospod Elena<!----><!---->,<span class="white-space-pre"> </span><!---->Irina Dolganova<!----><span class="white-space-pre"> </span>и еще 24&nbsp;человека<!----></span><span class="visually-hidden"><strong><!---->26 общих контактов:<!----></strong><span class="white-space-pre"> </span><!----><!---->Gospod Elena<!----><!---->,<span class="white-space-pre"> </span><!---->Irina Dolganova<!----><span class="white-space-pre"> </span>и еще 24&nbsp;человека<!----></span>
</span>
</a>

<!---->

<div class="pv-top-card-v2-ctas pt2 display-flex">
<!---->
<!---->
  <div class="pvs-profile-actions ">
                
<button data-control-name="connect" aria-label="Установить контакт с участником Alexandr Tretiakov" id="ember50" class="pvs-profile-actions__action artdeco-button artdeco-button--2 artdeco-button--primary ember-view" type="button"><!---->
<span class="artdeco-button__text">
Установить контакт
</span></button>

<!---->

                <div id="ember51" class="ember-view"><div id="ember52" class="ember-view"><!----></div>  <button data-control-name="message_btn_interstitial_upsell" id="ember53" class="pvs-profile-actions__action artdeco-button artdeco-button--secondary artdeco-button--muted  artdeco-button artdeco-button--2 artdeco-button--secondary ember-view">  <li-icon aria-hidden="true" type="lock-icon" class="artdeco-button__icon" size="small"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" data-supported-dps="16x16" fill="currentColor" class="mercado-match" width="16" height="16" focusable="false">
<path d="M12 6V5a4 4 0 00-8 0v1a2 2 0 00-2 2v5a2 2 0 002 2h8a2 2 0 002-2V8a2 2 0 00-2-2zm-3 6H7V9h2zM6 6V5a2 2 0 014 0v1z"></path>
</svg></li-icon>

<span class="artdeco-button__text">
Отправить сообщение
</span></button>
</div>


      <div id="ember54" class="artdeco-dropdown artdeco-dropdown--placement-bottom artdeco-dropdown--justification-left ember-view">
<button aria-expanded="false" id="ember55" class="artdeco-dropdown__trigger artdeco-dropdown__trigger--placement-bottom ember-view 
    pvs-profile-actions__action
    artdeco-button
    artdeco-button--secondary
    artdeco-button--muted
    artdeco-button--2
    
  " type="button" tabindex="0">
    <span aria-label="Другие действия">Еще</span>

<!----></button>
<div tabindex="-1" aria-hidden="true" id="ember56" class="pvs-overflow-actions-dropdown__content artdeco-dropdown__content artdeco-dropdown--is-dropdown-element artdeco-dropdown__content--justification-left artdeco-dropdown__content--placement-bottom ember-view"><div class="artdeco-dropdown__content-inner">

  <ul>
      <li>
          
<div data-control-name="share-profile" id="ember221" class="pvs-profile-actions__action display-flex align-items-center  artdeco-dropdown__item artdeco-dropdown__item--is-dropdown ember-view" tabindex="0"><!---->
  <li-icon aria-hidden="true" type="share-linkedin-icon" class="mr3" size="large"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" data-supported-dps="24x24" fill="currentColor" class="mercado-match" width="24" height="24" focusable="false">
<path d="M23 12l-4.61 7H16l4-6H8a3.92 3.92 0 00-4 3.84V17a4 4 0 00.19 1.24L5.12 21H3l-.73-2.22A6.4 6.4 0 012 16.94 6 6 0 018 11h12l-4-6h2.39z"></path>
</svg></li-icon>
<span class="display-flex t-normal" aria-hidden="true">Поделиться профилем в сообщении</span>
<span class="a11y-text">Поделиться профилем участника Alexandr Tretiakov в сообщении</span>
</div>

      </li>
      <li>
          
<div data-control-name="save_to_pdf" id="ember222" class="pvs-profile-actions__action display-flex align-items-center  artdeco-dropdown__item artdeco-dropdown__item--is-dropdown ember-view" tabindex="0"><!---->
  <li-icon aria-hidden="true" type="download-icon" class="mr3" size="large"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" data-supported-dps="24x24" fill="currentColor" class="mercado-match" width="24" height="24" focusable="false">
<path d="M21 14v5a3 3 0 01-3 3H6a3 3 0 01-3-3v-5h2v5a1 1 0 001 1h12a1 1 0 001-1v-5zm-4-.57V11l-4 2.85V3h-2v10.85L7 11v2.43L12 17z"></path>
</svg></li-icon>
<span class="display-flex t-normal" aria-hidden="true">Сохранить&nbsp;в&nbsp;PDF</span>
<span class="a11y-text">Сохраните профиль участника Alexandr Tretiakov в PDF</span>
</div>

      </li>
      <li>
            
<div data-control-name="follow" id="ember223" class="pvs-profile-actions__action display-flex align-items-center  artdeco-dropdown__item artdeco-dropdown__item--is-dropdown ember-view" tabindex="0"><!---->
  <li-icon aria-hidden="true" type="plus-icon" class="mr3" size="large"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" data-supported-dps="24x24" fill="currentColor" class="mercado-match" width="24" height="24" focusable="false">
<path d="M21 13h-8v8h-2v-8H3v-2h8V3h2v8h8z"></path>
</svg></li-icon>
<span class="display-flex t-normal" aria-hidden="true">Отслеживать</span>
<span class="a11y-text">Отслеживать участника Alexandr Tretiakov</span>
</div>


      </li>
      <li>
          
<div data-control-name="report" id="ember224" class="pvs-profile-actions__action display-flex align-items-center  artdeco-dropdown__item artdeco-dropdown__item--is-dropdown ember-view" tabindex="0"><!---->
  <li-icon aria-hidden="true" type="flag-icon" class="mr3" size="large"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" data-supported-dps="24x24" fill="currentColor" class="mercado-match" width="24" height="24" focusable="false">
<path d="M17.9 4.38a5.82 5.82 0 01-1.9.31 6.1 6.1 0 01-1.9-.31l-3.2-1.07A6.41 6.41 0 009 3a5.57 5.57 0 00-1.9.31L6 3.67V2H4v20h2v-8l1.1-.37a6.41 6.41 0 011.9-.32 5.82 5.82 0 011.9.31l3.2 1.07a6 6 0 003.8 0L20 14V3.68z"></path>
</svg></li-icon>
<span class="display-flex t-normal" aria-hidden="true">Пожаловаться или заблокировать</span>
<span class="a11y-text">Пожаловаться или заблокировать профиль участника Alexandr Tretiakov</span>
</div>


<!---->
      </li>
  </ul>

</div>
</div>
</div>

</div>

</div>
</div>

<!---->
</section>

<!---->

<!---->
<!---->
<!---->
      <div class="profile-detail">
            <div style="" id="ember62" class="pv-deferred-area ember-view">  <div class="pv-deferred-area__content">


<!---->
<!---->
<!---->              

</div>
</div>


            <div style="" id="ember65" class="pv-deferred-area ember-view">  <div class="pv-deferred-area__content">


              <section id="ember225" style="display: none;" class="pv-highlights-section pv-profile-section artdeco-container-card artdeco-card ember-view"><h2 class="pv-highlights-section__heading pv-profile-section__card-heading">
Основные сведения
</h2>

<ul id="highlights-container" class="pv-highlights-section__list list-style-none">
<!----></ul>

<!----></section>
          

</div>
</div>

<!---->              <div id="ember67" class="pv-oc ember-view">  
            <section id="ember95" style="display: none;" class="pv-profile-section pv-about-section artdeco-card p5 mt4 ember-view"><header class="pv-profile-section__card-header">
<h2 class="pv-profile-section__card-heading">
Общие сведения
</h2>

<!----></header>

<!----></section>
          
</div>
<!---->                <div style="" id="ember69" class="pv-deferred-area ember-view">  <div class="pv-deferred-area__content">


            <section id="ember158" class="pv-profile-section pv-recent-activity-section-v2 artdeco-card p5 mt4 ember-view"><header class="pv-profile-section__card-header">
<h2 class="pv-profile-section__card-heading pv-recent-activity-section-v2__headline">
Действия
</h2>
<div class="align-self-center ember-view">
<!---->  </div>
</header>

<span class="align-self-center t-14 t-black--light">
  948&nbsp;отслеживающих
</span>

<div class="pv-recent-activity-section-v2__summary t-14 t-black--light t-normal">
<div class="pv-recent-activity-section-v2__columns">
  <p class="t-14 pb2">
        Публикации, которые создал(а), прокомментировал(а) или поделился(ась) Alexandr в течение последних 90&nbsp;дней, отображаются здесь.
          </p>
</div>
</div>

<a data-control-name="recent_activity_null_state_see_all" href="/in/alexandr-tretiakov-ba831051/detail/recent-activity/" id="ember159" class="pv-profile-section__card-action-bar artdeco-container-card-action-bar artdeco-button artdeco-button--tertiary artdeco-button--3 artdeco-button--fluid artdeco-button--muted ember-view">  <span class="pv-profile-section__section-info" aria-hidden="true">
См. все действия
</span>
<span class="visually-hidden">
См. все действия
</span>
</a></section>
          

</div>
</div>

        <div id="oc-background-section" class="pv-oc ember-view">  
          <span class="background-details">
            <div id="ember96" class="ember-view"><section id="ember97" class="pv-profile-section pv-profile-section--reorder-enabled background-section artdeco-card mt4 ember-view">  <div id="ember98" class="pv-profile-section-pager ember-view">
<section id="experience-section" class="pv-profile-section experience-section ember-view"><header class="pv-profile-section__card-header">
<h2 class="pv-profile-section__card-heading">
Опыт работы
</h2>

<!----></header>

<ul class="pv-profile-section__section-info section-info pv-profile-section__section-info--has-more">
<li id="ember100" class="pv-entity__position-group-pager pv-profile-section__list-item ember-view">        <section id="1788668310" class="pv-profile-section__card-item-v2 pv-profile-section pv-position-entity ember-view">  <div class="display-flex justify-space-between full-width">
<div class="display-flex flex-column full-width">
<a data-control-name="background_details_company" href="/company/fluxonhq/" id="ember102" class="full-width ember-view">          <div class="pv-entity__logo company-logo">
<img src="https://media-exp3.licdn.com/dms/image/C560BAQGnK-tHrk51Vg/company-logo_100_100/0/1595608321184?e=1632355200&amp;v=beta&amp;t=p8Mjo_Mz7cWrXPnwmXhxO-M49nNY1k8adQTLDg6HkKI" loading="lazy" alt="Fluxon" id="ember104" class="pv-entity__logo-img EntityPhoto-square-5 lazy-image ember-view">
</div>
<div class="pv-entity__summary-info pv-entity__summary-info--background-section ">
<h3 class="t-16 t-black t-bold">Senior Software Engineer (JavaScript / TypeScript)</h3>
<p class="visually-hidden">Название компании</p>
<p class="pv-entity__secondary-title t-14 t-black t-normal">
  Fluxon
    <span class="pv-entity__secondary-title separator">Полный рабочий день</span>
</p>
<div class="display-flex">
<h4 class="pv-entity__date-range t-14 t-black--light t-normal">
  <span class="visually-hidden">Даты начала и окончания работы</span>
  <span>2021 – настоящее время</span>
</h4>
  <h4 class="t-14 t-black--light t-normal">
    <span class="visually-hidden">Продолжительность трудоустройства</span>
    <span class="pv-entity__bullet-item-v2">меньше года</span>
  </h4>
</div>

<!---->
<h4 class="pv-entity__soh t-14 t-black t-normal block">
<span id="ember106" class="ember-view">

<span class="source-of-hire-linkedin"><li-icon aria-hidden="true" type="linkedin-inbug-color-icon" class="pv-source-of-hire__logo" size="small"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" data-supported-dps="16x16" class="mercado-match" width="16" height="16" focusable="false">
<path d="M15 2v12a1 1 0 01-1 1H2a1 1 0 01-1-1V2a1 1 0 011-1h12a1 1 0 011 1zM5 6H3v7h2zm.25-2A1.25 1.25 0 104 5.25 1.25 1.25 0 005.25 4zM13 9.29c0-2.2-.73-3.49-2.86-3.49A2.71 2.71 0 007.89 7V6H6v7h2V9.73a1.73 1.73 0 011.52-1.92h.14C10.82 7.8 11 8.94 11 9.73V13h2z" fill="#0a66c2"></path>
</svg></li-icon> Компания LinkedIn</span> помогла мне найти эту работу
</span>
</h4>

</div>

</a>
<!---->    </div>

<!---->  </div>
</section>

</li><li id="ember107" class="pv-entity__position-group-pager pv-profile-section__list-item ember-view">        <section id="1642213763" class="pv-profile-section__card-item-v2 pv-profile-section pv-position-entity ember-view">  <div class="display-flex justify-space-between full-width">
<div class="display-flex flex-column full-width">
<a data-control-name="background_details_company" href="/company/ujet-int/" id="ember109" class="full-width ember-view">          <div class="pv-entity__logo company-logo">
<img src="https://media-exp3.licdn.com/dms/image/C4D0BAQEc37L3ye-SSw/company-logo_100_100/0/1573202123134?e=1632355200&amp;v=beta&amp;t=dTuOmJrj-ShC3bZeHIQKyZQkjuiyDKU6LpC0RFrFjn8" loading="lazy" alt="UJET" id="ember111" class="pv-entity__logo-img EntityPhoto-square-5 lazy-image ember-view">
</div>
<div class="pv-entity__summary-info pv-entity__summary-info--background-section mb2">
<h3 class="t-16 t-black t-bold">Senior Software Engineer (JavaScript / TypeScript)</h3>
<p class="visually-hidden">Название компании</p>
<p class="pv-entity__secondary-title t-14 t-black t-normal">
  UJET
    <span class="pv-entity__secondary-title separator">Полный рабочий день</span>
</p>
<div class="display-flex">
<h4 class="pv-entity__date-range t-14 t-black--light t-normal">
  <span class="visually-hidden">Даты начала и окончания работы</span>
  <span>дек. 2019 г. – 2021</span>
</h4>
  <h4 class="t-14 t-black--light t-normal">
    <span class="visually-hidden">Продолжительность трудоустройства</span>
    <span class="pv-entity__bullet-item-v2">2&nbsp;г.</span>
  </h4>
</div>

<!---->
<!---->
</div>

</a>
    <div id="ember113" class="pv-entity__extra-details t-14 t-black--light ember-view"><div class="
inline-show-more-text
inline-show-more-text--is-collapsed


pv-entity__description t-14 t-black t-normal
" style="line-height:2rem;max-height:8rem;">

Project:<br>The platform of customizable ECUs and firmware that control driving, onboard IoT sensors of electric scooters, and consists of the admin tool and several customer-facing and back-office mobile applications.<br><br>Responsibilities:<br>- Developing both Back-End services, Front-End, and mobile apps<br><br>Technology stack:<br>TypeScript / JavaScript<br>Node.js / PHP<br>React / Redux / Redux-Saga / MobX / Ant Design<br>React Native<br>Docker<br>MongoDB / MySQL

  <span class="inline-show-more-text__link-container-collapsed">
      <span>…</span>
    <button class="inline-show-more-text__button  link" aria-expanded="false" type="button">
      См. еще
    </button>
  </span>

<!----></div>
<!----></div>
</div>

<!---->  </div>
</section>

</li><li id="ember114" class="pv-entity__position-group-pager pv-profile-section__list-item ember-view">        <section id="1500139591" class="pv-profile-section__card-item-v2 pv-profile-section pv-position-entity ember-view">  <div class="display-flex justify-space-between full-width">
<div class="display-flex flex-column full-width">
<a data-control-name="background_details_company" href="/company/zports.com/" id="ember116" class="full-width ember-view">          <div class="pv-entity__logo company-logo">
<img src="https://media-exp3.licdn.com/dms/image/C510BAQEYZ7GbLG1lQQ/company-logo_100_100/0/1519874029941?e=1632355200&amp;v=beta&amp;t=NkBKiqiTO9L-_op3H2dv0dTzTwO9FtE_HEBgEg4nWGE" loading="lazy" alt="Zports.com" id="ember118" class="pv-entity__logo-img EntityPhoto-square-5 lazy-image ember-view">
</div>
<div class="pv-entity__summary-info pv-entity__summary-info--background-section mb2">
<h3 class="t-16 t-black t-bold">Senior Full Stack JavaScript Developer (React / Node.js)</h3>
<p class="visually-hidden">Название компании</p>
<p class="pv-entity__secondary-title t-14 t-black t-normal">
  Zports.com
    <span class="pv-entity__secondary-title separator">Полный рабочий день</span>
</p>
<div class="display-flex">
<h4 class="pv-entity__date-range t-14 t-black--light t-normal">
  <span class="visually-hidden">Даты начала и окончания работы</span>
  <span>дек. 2017 г. – нояб. 2019 г.</span>
</h4>
  <h4 class="t-14 t-black--light t-normal">
    <span class="visually-hidden">Продолжительность трудоустройства</span>
    <span class="pv-entity__bullet-item-v2">2&nbsp;г.</span>
  </h4>
</div>

<!---->
<!---->
</div>

</a>
    <div id="ember120" class="pv-entity__extra-details t-14 t-black--light ember-view"><div class="
inline-show-more-text
inline-show-more-text--is-collapsed


pv-entity__description t-14 t-black t-normal
" style="line-height:2rem;max-height:8rem;">

Project:<br>Sports recruitment and networking platforms that help to apply to open jobs and connect with players, coaches, teams, agents, and scouts, and promote yourself by posting your sports performances, photos, or videos.<br><br>Responsibilities:<br>- Lead the small distributed team of 4 devs<br>- Work directly with the CEO to clarify requirements and writing specs<br>- Design and implement the system architecture<br><br>Technology stack:<br>AWS<br>React/Redux<br>Node.js<br>MongoDB<br>PHP<br>MySQL

  <span class="inline-show-more-text__link-container-collapsed">
      <span>…</span>
    <button class="inline-show-more-text__button  link" aria-expanded="false" type="button">
      См. еще
    </button>
  </span>

<!----></div>
<!----></div>
</div>

<!---->  </div>
</section>

</li><li id="ember121" class="pv-entity__position-group-pager pv-profile-section__list-item ember-view">        <section id="1022531896" class="pv-profile-section__card-item-v2 pv-profile-section pv-position-entity ember-view">  <div class="display-flex justify-space-between full-width">
<div class="display-flex flex-column full-width">
<a data-control-name="background_details_company" href="/company/daxx-bv/" id="ember123" class="full-width ember-view">          <div class="pv-entity__logo company-logo">
<img src="https://media-exp3.licdn.com/dms/image/C560BAQFOGhfr3YM9QQ/company-logo_100_100/0/1524831353394?e=1632355200&amp;v=beta&amp;t=JPFBQAuPh6g5e2xkLJ-UwRlNF0_WHNkZiGzL-CjwRaw" loading="lazy" alt="Daxx Software Development Teams in Ukraine" id="ember125" class="pv-entity__logo-img EntityPhoto-square-5 lazy-image ember-view">
</div>
<div class="pv-entity__summary-info pv-entity__summary-info--background-section mb2">
<h3 class="t-16 t-black t-bold">Senior Full Stack JavaScript/Java Developer</h3>
<p class="visually-hidden">Название компании</p>
<p class="pv-entity__secondary-title t-14 t-black t-normal">
  Daxx Software Development Teams in Ukraine
<!---->  </p>
<div class="display-flex">
<h4 class="pv-entity__date-range t-14 t-black--light t-normal">
  <span class="visually-hidden">Даты начала и окончания работы</span>
  <span>март 2015 г. – дек. 2017 г.</span>
</h4>
  <h4 class="t-14 t-black--light t-normal">
    <span class="visually-hidden">Продолжительность трудоустройства</span>
    <span class="pv-entity__bullet-item-v2">2&nbsp;г.&nbsp;10&nbsp;мес.</span>
  </h4>
</div>

<h4 class="pv-entity__location t-14 t-black--light t-normal block">
<span class="visually-hidden">Регион</span>
<span>Dnepr</span>
</h4>

<!---->
</div>

</a>
    <div id="ember127" class="pv-entity__extra-details t-14 t-black--light ember-view"><div class="
inline-show-more-text
inline-show-more-text--is-collapsed


pv-entity__description t-14 t-black t-normal
" style="line-height:2rem;max-height:8rem;">

Project:<br>Financial cloud-based close management solution to help finance professionals improve the efficiency and enhance controls in the close-to-filing process.<br><br>Responsibilities:<br>- Work with the CTO and CEO to design and implement the system architecture<br>- Supervise and mentor other workers at the company<br>- Maintain cloud infrastructure for a distributed application.<br>- Assist in the collection of user requirements and writing technical specifications<br><br>Technology stack:<br>Google cloud<br>Angular.js<br>Node.js<br>Java<br>MongoDB

  <span class="inline-show-more-text__link-container-collapsed">
      <span>…</span>
    <button class="inline-show-more-text__button  link" aria-expanded="false" type="button">
      См. еще
    </button>
  </span>

<!----></div>
<!----></div>
</div>

<!---->  </div>
</section>

</li><li id="ember128" class="pv-entity__position-group-pager pv-profile-section__list-item ember-view">        <section id="478407849" class="pv-profile-section__card-item-v2 pv-profile-section pv-position-entity ember-view">  <div class="display-flex justify-space-between full-width">
<div class="display-flex flex-column full-width">
<a data-control-name="background_details_company" href="/company/luxoft/" id="ember130" class="full-width ember-view">          <div class="pv-entity__logo company-logo">
<img src="https://media-exp3.licdn.com/dms/image/C560BAQEaPpbzTwh0Vw/company-logo_100_100/0/1560519830379?e=1632355200&amp;v=beta&amp;t=3L40WvRNIw3q3NjktH4UlXS_6U697f-WQ_JnA-cWeug" loading="lazy" alt="Luxoft" id="ember132" class="pv-entity__logo-img EntityPhoto-square-5 lazy-image ember-view">
</div>
<div class="pv-entity__summary-info pv-entity__summary-info--background-section mb2">
<h3 class="t-16 t-black t-bold">Software Developer (Java / JavaScript)</h3>
<p class="visually-hidden">Название компании</p>
<p class="pv-entity__secondary-title t-14 t-black t-normal">
  Luxoft
<!---->  </p>
<div class="display-flex">
<h4 class="pv-entity__date-range t-14 t-black--light t-normal">
  <span class="visually-hidden">Даты начала и окончания работы</span>
  <span>сент. 2013 г. – март 2015 г.</span>
</h4>
  <h4 class="t-14 t-black--light t-normal">
    <span class="visually-hidden">Продолжительность трудоустройства</span>
    <span class="pv-entity__bullet-item-v2">1&nbsp;г.&nbsp;7&nbsp;мес.</span>
  </h4>
</div>

<!---->
<!---->
</div>

</a>
    <div id="ember134" class="pv-entity__extra-details t-14 t-black--light ember-view"><div class="
inline-show-more-text
inline-show-more-text--is-collapsed


pv-entity__description t-14 t-black t-normal
" style="line-height:2rem;max-height:8rem;">

Project:<br>Swissquote - Online Bank and Trading Platform<br><br>Responsibilities:<br>- Back-End and Front-End software development

  <span class="inline-show-more-text__link-container-collapsed">
      <span>…</span>
    <button class="inline-show-more-text__button  link" aria-expanded="false" type="button">
      См. еще
    </button>
  </span>

<!----></div>
<!----></div>
</div>

<!---->  </div>
</section>

</li>  </ul>

<div id="ember135" class="pv-experience-section__see-more pv-profile-section__actions-inline ember-view"><button class="pv-profile-section__see-more-inline pv-profile-section__text-truncate-toggle artdeco-button artdeco-button--tertiary artdeco-button--muted" aria-expanded="false" type="button">Дополнительные сведения об опыте работы&nbsp;(1)
<li-icon aria-hidden="true" type="chevron-down-icon" class="pv-profile-section__toggle-detail-icon" size="small"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" data-supported-dps="16x16" fill="currentColor" class="mercado-match" width="16" height="16" focusable="false">
<path d="M1 5l7 4.61L15 5v2.39L8 12 1 7.39z"></path>
</svg></li-icon></button>

<!----></div>
</section>

</div>

<div id="ember136" class="pv-profile-section-pager ember-view">
<section id="education-section" class="pv-profile-section education-section ember-view"><header class="pv-profile-section__card-header">
<h2 class="pv-profile-section__card-heading">
Образование
</h2>

<!----></header>

<ul class="pv-profile-section__section-info section-info pv-profile-section__section-info--has-no-more">
  <li id="146825862" class="pv-profile-section__list-item pv-education-entity pv-profile-section__card-item ember-view"><div class="display-flex justify-space-between full-width">
<div class="display-flex flex-column full-width">
<a data-control-name="background_details_school" href="/school/17529/?legacySchoolId=17529" id="ember139" class="ember-view">        <div class="pv-entity__logo">
<img src="https://media-exp3.licdn.com/dms/image/C4D0BAQFqhfbFX7Sayw/company-logo_100_100/0/1617728989804?e=1632355200&amp;v=beta&amp;t=B3_MpRxKcqWeYBDcM3eyhJdYJXj5XyRAblUyC2yEhPM" loading="lazy" alt="Dnipropetrovs'kij Nacional'nij Universitet" id="ember141" class="pv-entity__logo-img pv-entity__logo-img EntityPhoto-square-4 lazy-image ember-view">
</div>

<div class="pv-entity__summary-info pv-entity__summary-info--background-section">
<div class="pv-entity__degree-info">
<h3 class="pv-entity__school-name t-16 t-black t-bold">Dnipropetrovs'kij Nacional'nij Universitet</h3>

  <p class="pv-entity__secondary-title pv-entity__degree-name t-14 t-black t-normal">
    <span class="visually-hidden">Название степени</span>
    <span class="pv-entity__comma-item">Master's degree</span>
  </p>
  <p class="pv-entity__secondary-title pv-entity__fos t-14 t-black t-normal">
    <span class="visually-hidden">Специализация</span>
    <span class="pv-entity__comma-item">Computer Science</span>
  </p>
<!---->  </div>

<p class="pv-entity__dates t-14 t-black--light t-normal">
  <span class="visually-hidden">Даты начала и окончания или ожидаемый год окончания</span>
  <span>
        <time>2006</time> – <time>2011</time>
  </span>
</p>

<!----></div>

</a>
<!---->  </div>

<!----></div>
</li>
</ul>

<!----></section>

</div>

<!---->
<!----></section></div>
          </span>
        
</div>

          <div style="min-height: 145px" id="ember73" class="pv-deferred-area pv-deferred-area--pending pv-deferred-area--occluded ember-view">  <div id="ember74" class="pv-deferred-area__loader artdeco-loader ember-view"><!---->
<span class="artdeco-loader__bars"></span>
<span class="artdeco-loader__bars"></span>
<span class="artdeco-loader__bars"></span>
<span class="artdeco-loader__bars"></span>
<span class="artdeco-loader__bars"></span>
<span class="artdeco-loader__bars"></span>
<span class="artdeco-loader__bars"></span>
<span class="artdeco-loader__bars"></span>
<span class="artdeco-loader__bars"></span>
<span class="artdeco-loader__bars"></span>
<span class="artdeco-loader__bars"></span>
<span class="artdeco-loader__bars"></span>
</div>
</div>


          <div style="min-height: 285px" id="ember76" class="pv-deferred-area pv-deferred-area--pending pv-deferred-area--occluded ember-view">  <div id="ember77" class="pv-deferred-area__loader artdeco-loader ember-view"><!---->
<span class="artdeco-loader__bars"></span>
<span class="artdeco-loader__bars"></span>
<span class="artdeco-loader__bars"></span>
<span class="artdeco-loader__bars"></span>
<span class="artdeco-loader__bars"></span>
<span class="artdeco-loader__bars"></span>
<span class="artdeco-loader__bars"></span>
<span class="artdeco-loader__bars"></span>
<span class="artdeco-loader__bars"></span>
<span class="artdeco-loader__bars"></span>
<span class="artdeco-loader__bars"></span>
<span class="artdeco-loader__bars"></span>
</div>
</div>


        <div id="ember78" class="pv-occludable__accomplishments ember-view"><!----></div>

          <div style="min-height: 200px" id="ember80" class="pv-deferred-area pv-deferred-area--pending pv-deferred-area--occluded ember-view">  <div id="ember81" class="pv-deferred-area__loader artdeco-loader ember-view"><!---->
<span class="artdeco-loader__bars"></span>
<span class="artdeco-loader__bars"></span>
<span class="artdeco-loader__bars"></span>
<span class="artdeco-loader__bars"></span>
<span class="artdeco-loader__bars"></span>
<span class="artdeco-loader__bars"></span>
<span class="artdeco-loader__bars"></span>
<span class="artdeco-loader__bars"></span>
<span class="artdeco-loader__bars"></span>
<span class="artdeco-loader__bars"></span>
<span class="artdeco-loader__bars"></span>
<span class="artdeco-loader__bars"></span>
</div>
</div>

      </div>
    </div>
  
    </main>

      <aside class="
          scaffold-layout__aside
          
        ">
        
    <div class="pv-content__right-rail">
<!---->
<!---->
      <div id="ember82" class="ember-view">  <section class="
ad-banner-container

artdeco-card overflow-hidden
">
<iframe class="ad-banner" width="300" height="250" src="about:blank" scrolling="no" title="Реклама"></iframe>

<!---->
<!---->

<!----></section>

</div>

        <div style="" id="ember85" class="pv-deferred-area ember-view">  <div class="pv-deferred-area__content">


<!---->
<!---->          

</div>
</div>


        <div id="ember94" class="pv-occludable__course-recommendations ember-view"><!----></div>
                  <div id="ember87" class="sticky ember-view" style="height: 250px; width: 322px; margin: 0px auto;">
          <div class="pv-ad-banner">
            <div id="ember88" class="ember-view">  <section class="
ad-banner-container

artdeco-card overflow-hidden
">
<iframe class="ad-banner" width="300" height="250" src="about:blank" scrolling="no" title="Реклама"></iframe>

<!---->
<!---->

<!----></section>

</div>
          </div>
        
</div>
    </div>
  
      </aside>
  </div>

<!---->  </div>
</div>


<footer class="global-footer global-footer--static">
<div id="ember90" class="global-footer__occlusion-hint ember-view"><!----></div>
</footer>

</div>

<!---->
<!---->

</div>

</div>
</div>

</div>

<!----><aside id="msg-overlay" class="msg-overlay-container">
<div tabindex="-1" class="msg-overlay-list-bubble
msg-overlay-list-bubble--is-minimized
ml4">
<header class="msg-overlay-bubble-header">
<!---->
<section class="msg-overlay-bubble-header__details flex-row align-items-center ml1">
  <div class="presence-entity presence-entity--size-1">
<img src="https://media-exp3.licdn.com/dms/image/C4D03AQFn3ug3E1r59Q/profile-displayphoto-shrink_100_100/0/1617054793555?e=1629936000&amp;v=beta&amp;t=qVEICCqQBqVbEnGffyY8jMKhSfplXoKkmwVzeEQ4qHI" loading="lazy" alt="Mariia Derzhanivska" id="ember144" class="presence-entity__image   EntityPhoto-circle-1 lazy-image ember-view">


<div class="presence-entity__indicator  presence-entity__indicator--size-1 presence-indicator presence-indicator--is-online presence-indicator--size-1">
<span class="visually-hidden">
  Статус: онлайн
</span>
</div>

</div>
  <button class="msg-overlay-bubble-header__button truncate ml2" type="button">
    <h4 class="truncate t-14 t-bold t-black">
      <span aria-hidden="true">
        Сообщения
      </span>
      <span class="visually-hidden">
        Вы на экране обмена сообщениями. Нажмите клавишу ввода, чтобы открыть список обсуждений.
      </span>
    </h4>
  </button>
<!----><!---->    </section>
<section class="msg-overlay-bubble-header__controls display-flex">
  <button id="ember145" class="msg-overlay-bubble-header__control msg-overlay-bubble-header__control--new-convo-btn artdeco-button artdeco-button--circle artdeco-button--muted artdeco-button--1 artdeco-button--tertiary ember-view">  <li-icon aria-hidden="true" type="compose-icon" class="artdeco-button__icon" size="small"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" data-supported-dps="16x16" fill="currentColor" class="mercado-match" width="16" height="16" focusable="false">
<path d="M15 2.53a1.51 1.51 0 01-.44 1L9.15 9 6 10l1-3.12 5.44-5.44A1.5 1.5 0 0115 2.53zM12 11a1 1 0 01-1 1H5a1 1 0 01-1-1V5a1 1 0 011-1h3V2H5a3 3 0 00-3 3v6a3 3 0 003 3h6a3 3 0 003-3V8h-2z"></path>
</svg></li-icon>

<span class="artdeco-button__text">
Написать сообщение
</span></button>

  <div id="ember146" class="artdeco-dropdown artdeco-dropdown--placement-top artdeco-dropdown--justification-right ember-view">
    <button aria-expanded="false" id="ember147" class="artdeco-button artdeco-button--1 artdeco-button--circle artdeco-button--tertiary artdeco-button--muted artdeco-dropdown__trigger artdeco-dropdown__trigger--placement-top ember-view" type="button" tabindex="0">
      <li-icon type="ellipsis-horizontal-icon" size="small" color="true" role="img" aria-label="Открыть раскрывающееся меню обмена сообщениями"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" data-supported-dps="16x16" fill="currentColor" class="mercado-match" width="16" height="16" focusable="false">
<path d="M3 9.5A1.5 1.5 0 114.5 8 1.5 1.5 0 013 9.5zM11.5 8A1.5 1.5 0 1013 6.5 1.5 1.5 0 0011.5 8zm-5 0A1.5 1.5 0 108 6.5 1.5 1.5 0 006.5 8z"></path>
</svg></li-icon>
    
<!----></button>
    <div class="msg-overlay-bubble-header__dropdown-container">
      <div tabindex="-1" aria-hidden="true" id="ember148" class="artdeco-dropdown__content artdeco-dropdown--is-dropdown-element artdeco-dropdown__content--has-arrow artdeco-dropdown__content--arrow-right artdeco-dropdown__content--justification-right artdeco-dropdown__content--placement-top ember-view"><!----></div>
    </div>
  </div>

<!---->
  <button id="ember149" class="msg-overlay-bubble-header__control msg-overlay-bubble-header__control--new-convo-btn artdeco-button artdeco-button--circle artdeco-button--muted artdeco-button--1 artdeco-button--tertiary ember-view">  <li-icon aria-hidden="true" type="chevron-up-icon" class="artdeco-button__icon" size="small"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" data-supported-dps="16x16" fill="currentColor" class="mercado-match" width="16" height="16" focusable="false">
<path d="M15 11L8 6.39 1 11V8.61L8 4l7 4.61z"></path>
</svg></li-icon>

<span class="artdeco-button__text">
Вы на экране обмена сообщениями. Нажмите клавишу ввода, чтобы открыть список обсуждений.
</span></button>
</section>
</header>
<!---->
<!---->
<section class="scrollable msg-overlay-list-bubble__content

 msg-overlay-list-bubble__content--scrollable">
<!---->  </section>

<!---->
<!----><!----></div>

<!---->
<!---->
<div id="msg-overlay__emoji-hoverable-outlet"></div>
</aside>

<img src="https://px.ads.linkedin.com/collect/?pid=6883&amp;fmt=gif&amp;_t=1624448492259" id="ember150" class="third-party-tracking-pixel hidden ember-view">
<img src="https://c.bing.com/c.gif?Red3=MSLI_pd&amp;LIID=AVzJK6vL1HmwUnBJvZZEG-KCQfPu&amp;_t=1624448492261" id="ember151" class="third-party-tracking-pixel hidden ember-view">
<img src="https://ib.adnxs.com/setuid?entity=373&amp;code=ATLE4Oz6SwOfzHU7WOQ0VEkra2ei&amp;_t=1624448492266" id="ember152" class="third-party-tracking-pixel hidden ember-view">
<img src="https://eb2.3lift.com/xuid?mid=6250&amp;xuid=isLIMember&amp;dongle=2b63&amp;rdir=https%3A%2F%2Fpx%2Eads%2Elinkedin%2Ecom%2Fsetuid%3Fpartner%3Dtriplelift%26tlUid%3D%24UID%26emid%3DAQFOS0GZPDGvuQAAAXo4rNO8BO3-fA-Tglxi-93p76io7tj0aMTwJx08oFN40WjS3oBHMhbt&amp;_t=1624448492268" id="ember153" class="third-party-tracking-pixel hidden ember-view">
<img src="https://sync.teads.tv/um?eid=161&amp;uid=&amp;fb=https%3A%2F%2Fpx.ads.linkedin.com%2Fsetuid%3Fpartner%3Dteads%26exuid%3D%5BVID%5D&amp;_t=1624448492269" id="ember154" class="third-party-tracking-pixel hidden ember-view">
<img src="https://px.ads.linkedin.com/setuid?partner=googleadx&amp;_t=1624448492271" id="ember155" class="third-party-tracking-pixel hidden ember-view">
<img src="https://px.ads.linkedin.com/setuid?partner=doubleClick&amp;_t=1624448492272" id="ember156" class="third-party-tracking-pixel hidden ember-view">
<img src="https://token.rubiconproject.com/token?pid=4858&amp;pt=n&amp;_t=1624448492273" id="ember157" class="third-party-tracking-pixel hidden ember-view">


</div>

<div id="li-modal-container"></div>

<div id="artdeco-hoverable-outlet"></div>

<div id="ember92" class="entity-hovercard-container hidden ember-view"><div class="entity-hovercard   p4" role="tooltip" tabindex="-1">
<section class="entity-hovercard__loading-state">
  Загрузка…
</section>
</div></div>

<!---->
<!---->
<div id="type-ahead-wormhole" class="type-ahead type-ahead-wormhole">
</div>

<div id="toast-wormhole" class="toast-wormhole">
</div>

<iframe title="cedex beacon iframe" sandbox="allow-scripts" style="display:none;" src="//radar.cedexis.com/1/11326/radar.html">
</iframe>

<div><!----></div>
<div id="uppeople_extension"></div></body>`;

viewport.appendChild(k);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

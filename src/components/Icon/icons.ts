import { ReactComponent as cv } from './assets/cv.svg';
import { ReactComponent as user } from './assets/user.svg';
import { ReactComponent as mail } from './assets/mail.svg';
import { ReactComponent as lock } from './assets/lock.svg';
import { ReactComponent as logo } from './assets/logo.svg';
import { ReactComponent as check } from './assets/check.svg';
import { ReactComponent as close } from './assets/close.svg';
import { ReactComponent as error } from './assets/error.svg';
import { ReactComponent as skype } from './assets/skype.svg';
import { ReactComponent as logout } from './assets/logout.svg';
import { ReactComponent as salary } from './assets/salary.svg';
import { ReactComponent as noPhoto } from './assets/no-photo.svg';
import { ReactComponent as linkedin } from './assets/linkedin.svg';
import { ReactComponent as error404 } from './assets/error-404.svg';
import { ReactComponent as settings } from './assets/settings_icn.svg';
import { ReactComponent as candidate } from './assets/candidate_icn.svg';
import { ReactComponent as errorBoundary } from './assets/error-boundary.svg';
import { ReactComponent as buttonNavigation } from './assets/button-navigation.svg';

export type IconsType =
  | 'cv'
  | 'user'
  | 'mail'
  | 'lock'
  | 'logo'
  | 'close'
  | 'error'
  | 'skype'
  | 'check'
  | 'logout'
  | 'salary'
  | 'linkedin'
  | 'no-photo'
  | 'settings'
  | 'candidate'
  | 'error-404'
  | 'error-boundary'
  | 'button-navigation';

type Icons = {
  [key in IconsType]: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
};

export const icons: Icons = {
  cv,
  lock,
  user,
  mail,
  logo,
  close,
  error,
  skype,
  logout,
  check,
  salary,
  linkedin,
  settings,
  candidate,
  'no-photo': noPhoto,
  'error-404': error404,
  'error-boundary': errorBoundary,
  'button-navigation': buttonNavigation,
};

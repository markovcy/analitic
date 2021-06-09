import React from 'react';
import cx from 'classnames';
import LogoBlack from '../../images/logo_black.png';
import LogoWhite from '../../images/logo_white.png';
import styles from './Widget.module.scss';

interface WidgetProps {
  isExpanded: boolean;
  isCandidateExist?: boolean;
  onWidgetClick: () => void;
}

export const Widget = (props: WidgetProps) => {
  const { isCandidateExist, onWidgetClick, isExpanded } = props;

  return (
    <div
      className={cx(styles.wrapper, {
        [styles.expanded]: isExpanded,
      })}
    >
      <button type="button" className={styles.widget} onClick={onWidgetClick}>
        <div className={styles.icon}>
          <img src={isCandidateExist ? LogoWhite : LogoBlack} alt="logo" />
        </div>
        <p className={styles.text}>
          {isCandidateExist ? 'Candidate exists' : 'Is not in CRM'}
        </p>
      </button>
    </div>
  );
};

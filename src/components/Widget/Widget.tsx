import React from 'react';
import LogoBlack from '../../images/logo_black.png';
import LogoWhite from '../../images/logo_white.png';
import Styles from './Widget.module.scss';

interface WidgetProps {
  isCandidateExist: boolean;
}

const Widget = (props: WidgetProps) => {
  const { isCandidateExist } = props;

  const onButtonClick = () => {
    console.log('hello hello from button');
  };
  return (
    <div className={Styles.widget}>
      <button onClick={onButtonClick} type="button">
        <img src={isCandidateExist ? LogoBlack : LogoWhite} alt="logo" />
      </button>
    </div>
  );
};

export default Widget;

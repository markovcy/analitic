import React, { PureComponent } from 'react';

import { Icon } from '@upp/chrome/components';

import styles from './ErrorBoundary.module.scss';

interface ErrorBoundaryProps {
  chidlren?: React.ReactNode;
  description?: string;
  isShowError?: boolean;
}

interface ErrorBoundaryState {
  error: string;
  hasError: boolean;
}

export class ErrorBoundary extends PureComponent<
  ErrorBoundaryProps,
  ErrorBoundaryState
> {
  state = {
    error: '',
    hasError: false,
  };

  componentDidCatch(e: Error) {
    this.setState({
      error: e.message,
      hasError: true,
    });
  }

  render() {
    const { error, hasError } = this.state;
    const { children, description, isShowError = true } = this.props;

    if (hasError) {
      return isShowError ? (
        <div className={styles.errorBoundary}>
          <Icon name="error-boundary" className={styles.icon} />
          <h2>Oops something went wrong...</h2>
          <h3 className={styles.error}>{error}</h3>
          {description && (
            <h4
              className={styles.description}
              // eslint-disable-next-line react/no-danger
              dangerouslySetInnerHTML={{ __html: description }}
            />
          )}
        </div>
      ) : null;
    }

    return children;
  }
}

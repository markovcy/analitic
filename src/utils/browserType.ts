type BrowserType = 'Opera' | 'Chrome' | 'Safari' | 'Firefox' | 'IE' | 'Unknown';

export const browserType = ((): BrowserType => {
  if (
    (navigator.userAgent.indexOf('Opera') ||
      navigator.userAgent.indexOf('OPR')) !== -1
  ) {
    return 'Opera';
  }

  if (navigator.userAgent.indexOf('Chrome') !== -1) {
    return 'Chrome';
  }

  if (navigator.userAgent.indexOf('Safari') !== -1) {
    return 'Safari';
  }

  if (navigator.userAgent.indexOf('Firefox') !== -1) {
    return 'Firefox';
  }

  if (
    navigator.userAgent.indexOf('MSIE') !== -1 ||
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    Boolean(document.documentMode)
  ) {
    return 'IE';
  }

  return 'Unknown';
})();

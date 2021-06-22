import { browserType } from './browserType';

const isDev = process.env.NODE_ENV === 'development';

export const storage = {
  get: async (key: string): Promise<string | null> => {
    if (isDev) {
      return localStorage.getItem(key);
    }

    switch (browserType) {
      case 'Chrome':
        return new Promise((resolve) => {
          chrome.storage.sync.get(key, (items): void =>
            resolve(items[key] || null)
          );
        });

      default:
        return null;
    }
  },
  set: (key: string, value: string): void => {
    if (isDev) {
      return localStorage.setItem(key, value);
    }

    switch (browserType) {
      case 'Chrome':
        return chrome.storage.sync.set({ [key]: value });

      default:
        return undefined;
    }
  },
  remove: (key: string): void => {
    if (isDev) {
      return localStorage.removeItem(key);
    }

    switch (browserType) {
      case 'Chrome':
        return chrome.storage.sync.remove(key);

      default:
        return undefined;
    }
  },
};

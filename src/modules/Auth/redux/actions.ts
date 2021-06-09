import { generateActionTypes, generateActions } from '@upp/chrome/store';

export const USER = generateActionTypes('USER');

export const user = generateActions(USER);

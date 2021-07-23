import { generateActionTypes, generateActions } from '@upp/chrome/store';

export const FORM = generateActionTypes('FORM');
export const URL = generateActionTypes('URL');

export const form = generateActions(FORM);
export const url = generateActions(URL);

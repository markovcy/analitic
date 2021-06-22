import { generateActionTypes, generateActions } from '@upp/chrome/store';

export const FORM = generateActionTypes('FORM');

export const form = generateActions(FORM);

import {action} from '../utils/actionUtils';

export const OPEN_DRAWER = 'OPEN_DRAWER';
export const openDrawer = visible=> action(OPEN_DRAWER,{visible});
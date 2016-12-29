import {callApi} from '../../service/index';

export const login = data=>callApi('/api/login',data,'post');
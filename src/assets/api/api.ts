import axios from 'axios';
import {
  IAuthTokens,
  TokenRefreshRequest,
  applyAuthTokenInterceptor,
  getBrowserSessionStorage,
} from 'axios-jwt';

const BASE_URL = 'http://localhost:4200';

/**
 * Default Axios instance.
 */
const axiosInstance = axios.create({
  baseURL: BASE_URL,
});

const requestRefresh: TokenRefreshRequest = async (
  refreshToken: string,
): Promise<IAuthTokens | string> => {
  const response = await axios.post(`/auth/refresh_token`, {
    token: refreshToken,
  });

  // return {
  // 	accessToken: response.data.access_token,
  // 	refreshToken: response.data.refresh_token,
  // };

  return response.data.access_token;
};

const getStorage = getBrowserSessionStorage;

applyAuthTokenInterceptor(axiosInstance, { requestRefresh, getStorage });

export { axiosInstance };

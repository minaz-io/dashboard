/**
 * umi-request
 * More details, please refer api document: https://github.com/umijs/umi-request
 */
import { extend } from 'umi-request';
import { notification } from 'antd';
import * as config from '@/config';
import * as helpers from '@/utils/helpers';

const codeMessage = {
  200: 'The server successfully returned the requested data.',
  201: 'Create or modified data is successful.',
  202: 'Requests have entered the background queue.',
  204: 'The data was deleted successfully.',
  400: 'There was an error in the request issued, and the server did not create or modify data.',
  401: 'The user does not have permission (token, user name, wrong password). Will redirect to login page.',
  403: 'The user is authorized, but access is prohibited.',
  404: 'The request issued was for a non-existent record, and the server did not operate.',
  406: 'The request format is not correct.',
  410: 'The requested resource is permanently deleted and will no longer be available.',
  422: 'When creating an object, a validation error occurred.',
  500: 'Internal server error.',
  502: 'Gateway error.',
  503: 'The service is unavailable, the server is temporarily overloaded or maintained.',
  504: 'Gateway timeout.',
};

/**
 * Error handler
 */
const errorHandler = (error: { response: Response }): Response => {
  const { response } = error;
  if (response && response.status) {
    const errorText = codeMessage[response.status] || response.statusText;
    const { status, url } = response;

    notification.error({
      message: `Request error. ${status}: ${url}`,
      description: errorText,
    });

    if (status == 401 || status == 403) {
      helpers.redirectToLogin(window.location.pathname);
    }
  } else if (!response) {
    helpers.redirectToLogin();
  }
  return response;
};

/**
 * Default params for request
 */
const request = extend({
  prefix: config.prefix,
  errorHandler,
  credentials: 'include',
});

request.interceptors.request.use(
  (url: string, fromOptions: any) => {
    const auth = helpers.getStoredAuth();
    const { headers = {}, ...rest } = fromOptions;
    if (!auth) {
      notification.error({
        message: 'No authorization',
        description: 'You have no authrization, please login in.',
      });
      helpers.redirectToLogin(window.location.pathname);
    }
    const options = {
      ...rest,
      headers: {
        ...headers,
        Authorization: auth,
      },
    };
    return {
      url: `${url}`,
      options,
    };
  },
  { global: false },
);

export default request;

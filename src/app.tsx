import * as config from '@/config';
import { history } from 'umi';
import * as helpers from '@/utils/helpers';

export function onRouteChange(props: any) {
  const { matchedRoutes } = props;
  if (matchedRoutes.length) {
    const title = matchedRoutes[matchedRoutes.length - 1].route.title;
    document.title = (title ? `${title} | ` : '') + config.platform;
  }
  const location = props.location;
  const pathname = location.pathname;
  const storedAuth = helpers.getStoredAuth();
  if (storedAuth) {
    if (pathname == '/login') {
      history.push(config.DEFAULT_PATH);
    }
  } else {
    if (pathname !== '/login') {
      history.push(`/login?from=${pathname}`);
    }
  }
}

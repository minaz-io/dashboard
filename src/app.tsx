import * as config from '@/config';

export function onRouteChange(props: any) {
  const { matchedRoutes } = props;
  if (matchedRoutes.length) {
    const title = matchedRoutes[matchedRoutes.length - 1].route.title;
    document.title = (title ? `${title} | ` : '') + config.platform;
  }
}

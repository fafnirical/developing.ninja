import type { RouteConfig } from '@remix-run/route-config';

import { remixRoutesOptionAdapter } from '@remix-run/routes-option-adapter';
import { flatRoutes } from 'remix-flat-routes';

export default remixRoutesOptionAdapter((defineRoutes) =>
  flatRoutes('routes', defineRoutes, {
    ignoredRouteFiles: [
      '.*',
      '**/*.css',
      '**/*.test.{js,jsx,ts,tsx}',

      '**/*.server.{js,jsx,ts,tsx}',
      '**/*.client.{js,jsx,ts,tsx}',
    ],
  }),
) satisfies RouteConfig;

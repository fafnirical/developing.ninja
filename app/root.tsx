import type { LinkDescriptor, LinksFunction } from '@remix-run/node';

import { cssBundleHref } from '@remix-run/css-bundle';
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from '@remix-run/react';

import tailwindStyleSheetUrl from './styles/tailwind.css';

export const links: LinksFunction = () => {
  return [
    // Preload CSS to avoid render blocking.
    { as: 'style', href: tailwindStyleSheetUrl, rel: 'preload' },
    ...(cssBundleHref
      ? [{ as: 'style', href: cssBundleHref, rel: 'preload' }]
      : []),

    // Actually load CSS later to avoid render blocking.
    { href: tailwindStyleSheetUrl, rel: 'stylesheet' },
    ...(cssBundleHref ? [{ href: cssBundleHref, rel: 'stylesheet' }] : []),
  ] satisfies LinkDescriptor[];
};

export default function App() {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta content="width=device-width, initial-scale=1" name="viewport" />
        <Meta />
        <Links />
      </head>
      <body>
        <Outlet />
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}

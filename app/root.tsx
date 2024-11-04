import type { LinksFunction } from '@remix-run/node';
import type { ReactNode } from 'react';

import {
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from '@remix-run/react';

import tailwindStyleSheetUrl from './styles/tailwind.css?url';

export const links: LinksFunction = () => [
  { href: tailwindStyleSheetUrl, rel: 'stylesheet' },
];

export function Layout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta content="width=device-width, initial-scale=1" name="viewport" />
        <Meta />
        <Links />
      </head>
      <body>
        {children}
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

export default function App() {
  return <Outlet />;
}

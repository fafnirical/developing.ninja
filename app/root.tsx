import type { ReactNode } from 'react';
import type { LinksFunction } from 'react-router';

import { Links, Meta, Outlet, Scripts, ScrollRestoration } from 'react-router';

import tailwindStyleSheetUrl from '#app/styles/tailwind.css?url';

export const links: LinksFunction = () => [
  { href: tailwindStyleSheetUrl, rel: 'stylesheet' },
];

export default function App() {
  return <Outlet />;
}

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

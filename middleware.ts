import createMiddleware from 'next-intl/middleware';
import { locales, defaultLocale } from './src/i18n';

export default createMiddleware({
  // A list of all locales that are supported
  locales,
  // Used when no locale matches
  defaultLocale,
  // If this locale is matched, pathnames work without a prefix (e.g. `/about`)
  localePrefix: 'as-needed',
});

export const config = {
  // Skip all paths that should not be internationalized
  matcher: ['/((?!api|_next|.*\..*).*)'],
import { NextRequest } from 'next/server';
import createMiddleware from 'next-intl/middleware';

// This middleware intercepts requests and handles locale detection and routing
export default createMiddleware({
  // A list of all locales that are supported
  locales: ['en', 'fr'],
  
  // The default locale to be used when visiting
  // a non-locale prefixed path e.g. `/about`
  defaultLocale: 'en',
});

export const config = {
  // Match all pathnames except for
  // - files with extensions (e.g. favicon.ico)
  // - API routes
  // - _next paths
  matcher: ['/((?!api|_next|.*\\..*).*)'],
};

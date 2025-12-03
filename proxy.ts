// src/middleware.ts
import { clerkMiddleware, createRouteMatcher } from '@clerk/nextjs/server';

const isPublic = createRouteMatcher([
  '/',
  '/sign-in(.*)',     // ← Added (.*) to allow all sub-paths like /sign-in/verify
  '/sign-up(.*)',     // ← Added (.*) to allow all sub-paths like /sign-up/verify
  '/api/webhooks(.*)', // ← Added (.*) for good measure
]);

export default clerkMiddleware((auth, req) => {
  if (!isPublic(req)) {
    auth.protect();
  }
});

export const config = {
  matcher: ['/((?!.*\\..*|_next).*)', '/', '/(api|trpc)(.*)'],
};
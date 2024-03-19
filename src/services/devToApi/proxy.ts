/**
 * Proxy for DEV.to API routes to this app's BFF /api/exteral/dev routes. The configuration is defined in the next.config.js file.
 */
export const PROXY_URL = `${
    process.env.NEXT_PUBLIC_APP_URL || ''
}/api/external/dev`;

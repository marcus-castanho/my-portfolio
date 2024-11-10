import path from 'path';

/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            /**DEV.to CDN host */
            {
                protocol: 'https',
                hostname: 'media.dev.to',
                port: '',
                pathname: '/**',
            },
            /**DEV.to CDN 2 host */
            {
                protocol: 'https',
                hostname: 'media2.dev.to',
                port: '',
                pathname: '/**',
            },
            /**GitHub raw content CDN host */
            {
                protocol: 'https',
                hostname: 'raw.githubusercontent.com',
                port: '',
                pathname: '/**',
            },
        ],
    },
    async rewrites() {
        return [
            /**
             * DEV.to API is hosted on another domain so it can't set cookies for browser app via Set-Cookie header. For now, proxy all of the DEV.to API routes to this app's BFF /api/exteral/dev routes
             */
            {
                source: '/api/external/dev/:path*',
                destination: `${process.env.NEXT_PUBLIC_DEV_TO_API_URL}/:path*`,
            },
        ];
    },
    /**Handlebars must be precompiled in order to work with webpack. So this alias is used to import the module directly from the compiled folder /dist */
    webpack(config) {
        config.resolve.alias = {
            ...config.resolve.alias,
            handlebars: path.resolve(
                process.cwd(),
                'node_modules',
                'handlebars',
                'dist',
                'cjs',
                'handlebars.js',
            ),
        };
        return config;
    },
};

export default nextConfig;

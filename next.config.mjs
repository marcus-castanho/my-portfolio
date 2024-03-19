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
};

export default nextConfig;

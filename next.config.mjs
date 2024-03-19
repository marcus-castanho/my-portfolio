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
};

export default nextConfig;

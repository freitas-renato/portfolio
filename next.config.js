/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'instrutherm.com.br',
            },
            {
                protocol: 'https',
                hostname: 'raw.githubusercontent.com'
            }
        ],
    },
};

module.exports = nextConfig

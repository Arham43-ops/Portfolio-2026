import type { NextConfig } from 'next';
import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin('./src/i18n/request.ts');

const nextConfig: NextConfig = {
    reactStrictMode: true,
    transpilePackages: ['three'],
    images: {
        remotePatterns: [
            { protocol: 'https', hostname: 'cdn.jsdelivr.net' },
            { protocol: 'https', hostname: 'images.unsplash.com' },
            { protocol: 'https', hostname: 'assets.aceternity.com' }
        ],
        formats: ['image/avif', 'image/webp'],
    },
    async redirects() {
        return [
            { source: '/gallery/Foto Utama.webp', destination: '/gallery/new-photo-1.jpeg', permanent: false },
            { source: '/gallery/FotoSC1.webp', destination: '/gallery/new-photo-2.jpeg', permanent: false },
            { source: '/gallery/FotoSC2.webp', destination: '/gallery/new-photo-3.jpeg', permanent: false },
            { source: '/gallery/FotoSC3.webp', destination: '/gallery/new-photo-4.jpeg', permanent: false },
            { source: '/gallery/FotoSC4.webp', destination: '/gallery/new-photo-5.jpeg', permanent: false },
            { source: '/gallery/FotoSC5.webp', destination: '/gallery/new-photo-6.jpeg', permanent: false },
            { source: '/gallery/academicaffairsdivision1.webp', destination: '/gallery/new-photo-7.jpeg', permanent: false },
            { source: '/gallery/computernetworkpracticumassistant2.webp', destination: '/gallery/new-photo-3.jpeg', permanent: false },
            { source: '/gallery/dataentryassistant1.webp', destination: '/gallery/new-photo-4.jpeg', permanent: false },
            { source: '/gallery/delegateaiesecfutureleaders20241.webp', destination: '/gallery/new-photo-5.jpeg', permanent: false },
            { source: '/gallery/environmentalhygieneteam1.webp', destination: '/gallery/new-photo-6.jpeg', permanent: false },
            { source: '/gallery/environmentalhygieneteam2.webp', destination: '/gallery/new-photo-7.jpeg', permanent: false },
            { source: '/gallery/logisticsoperatorcampusexpo20242.webp', destination: '/gallery/new-photo-3.jpeg', permanent: false },
            { source: '/gallery/researchassistant1.webp', destination: '/gallery/new-photo-4.jpeg', permanent: false },
            { source: '/gallery/researchassistant2.webp', destination: '/gallery/new-photo-5.jpeg', permanent: false },
        ];
    },
};

export default withNextIntl(nextConfig);

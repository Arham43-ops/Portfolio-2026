import type { Metadata, Viewport } from 'next';
import { Inter, JetBrains_Mono, Playfair_Display, Alex_Brush } from 'next/font/google';
import { getMessages, getLocale } from 'next-intl/server';
import { ThemeProvider, I18nProvider, SmoothScrollProvider } from '@/providers';
import { portfolioData } from '@/data/portfolio';

import '@/styles/globals.css';

const inter = Inter({
    subsets: ['latin'],
    variable: '--font-inter',
    display: 'swap',
});

const jetbrainsMono = JetBrains_Mono({
    subsets: ['latin'],
    variable: '--font-jetbrains',
    display: 'swap',
});

const playfair = Playfair_Display({
    subsets: ['latin'],
    variable: '--font-playfair',
    display: 'swap',
});

const signature = Alex_Brush({
    weight: '400',
    subsets: ['latin'],
    variable: '--font-signature',
    display: 'swap',
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://portfolio-07.antideploy.com';
const siteName = 'Arham Topiwala Portfolio';
const siteDescription =
    'Arham Topiwala is a Full Stack Web Developer specializing in scalable web applications, RESTful APIs, performance optimization, databases, and AI integrations.';

export const metadata: Metadata = {
    metadataBase: new URL(siteUrl),
    title: {
        default: 'Arham Topiwala | Full Stack Web Developer',
        template: '%s | Arham Topiwala',
    },
    description: siteDescription,
    keywords: [
        'Arham Topiwala',
        'Full Stack Web Developer',
        'Full Stack Developer Ahmedabad',
        'React Developer',
        'Next.js Developer',
        'Django Developer',
        'REST API Developer',
        'Python Developer',
        'TypeScript Developer',
        'Web Performance Optimization',
    ],
    authors: [{ name: 'Arham Topiwala', url: siteUrl }],
    creator: 'Arham Topiwala',
    publisher: 'Arham Topiwala',
    alternates: {
        canonical: '/',
    },
    openGraph: {
        type: 'website',
        locale: 'en_US',
        url: siteUrl,
        title: 'Arham Topiwala | Full Stack Web Developer',
        description: siteDescription,
        siteName,
        images: [
            {
                url: '/opengraph-image',
                width: 1200,
                height: 630,
                alt: 'Arham Topiwala — Full Stack Web Developer',
            },
        ],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Arham Topiwala | Full Stack Web Developer',
        description: siteDescription,
        images: ['/opengraph-image'],
    },
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            'max-video-preview': -1,
            'max-image-preview': 'large',
            'max-snippet': -1,
        },
    },
    icons: {
        icon: [
            { url: '/Arfazrll_light.svg', media: '(prefers-color-scheme: light)' },
            { url: '/Arfazrll_dark.svg', media: '(prefers-color-scheme: dark)' },
        ],
    },
};

export const viewport: Viewport = {
    themeColor: [
        { media: '(prefers-color-scheme: light)', color: '#ffffff' },
        { media: '(prefers-color-scheme: dark)', color: '#0a0a0f' },
    ],
    width: 'device-width',
    initialScale: 1,
    minimumScale: 1,
};

import { ThemeAwareClickSpark } from '@/components/ui/ThemeAwareClickSpark';
import { ConditionalNavigation } from '@/components/layout/ConditionalNavigation';
import { ArcPreloaderWrapper } from '@/components/layout/ArcPreloaderWrapper';
import { ChatBot } from '@/components/layout/ChatBot';

const personSchema = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    '@id': `${siteUrl}/#person`,
    name: portfolioData.personal.name,
    url: siteUrl,
    jobTitle: portfolioData.personal.title,
    description: portfolioData.personal.bio,
    image: `${siteUrl}${portfolioData.personal.avatar}`,
    email: portfolioData.personal.email,
    telephone: portfolioData.personal.phone,
    address: {
        '@type': 'PostalAddress',
        addressLocality: 'Ahmedabad',
        addressRegion: 'Gujarat',
        addressCountry: 'IN',
    },
    sameAs: portfolioData.personal.socialLinks.map((link) => link.url),
};

const websiteSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': `${siteUrl}/#website`,
    url: siteUrl,
    name: siteName,
    description: siteDescription,
    publisher: {
        '@id': `${siteUrl}/#person`,
    },
    inLanguage: 'en-US',
};

export default async function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    const locale = await getLocale();
    const messages = await getMessages();

    return (
        <html lang={locale} data-scroll-behavior="smooth" suppressHydrationWarning>
            <body className={`${inter.variable} ${jetbrainsMono.variable} ${playfair.variable} ${signature.variable} font-sans relative`}>
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
                />
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
                />
                <ThemeProvider>
                    <I18nProvider locale={locale} messages={messages}>
                        <SmoothScrollProvider>
                            <ThemeAwareClickSpark>
                                <ArcPreloaderWrapper>
                                    <ConditionalNavigation>
                                        {children}
                                    </ConditionalNavigation>
                                </ArcPreloaderWrapper>
                                <ChatBot headless />
                            </ThemeAwareClickSpark>
                        </SmoothScrollProvider>
                    </I18nProvider>
                </ThemeProvider>
            </body>
        </html>
    );
}

/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	compiler: {
		styledComponents: true,
	},
	i18n: {
		locales: ['fa'],
		defaultLocale: 'fa',
	},
	images: {
		unoptimized: true,
		domains: ['https://cdn.otaghak.com/otg-images-new/X500/'],
	},
};

export default nextConfig;

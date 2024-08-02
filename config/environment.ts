export const environment = {
	PRODUCTION: process.env.NEXT_PUBLIC_NODE_ENV === 'production',
	ENV: process.env.NEXT_PUBLIC_NODE_ENV,
	VERSION: process.env.NEXT_PUBLIC_VERSION,

	APP_DEBUG: process.env.NEXT_PUBLIC_APP_DEBUG === 'true',

	APP_URL: process.env.NEXT_PUBLIC_APP_URL,
	API_BASE_URL: process.env.NEXT_PUBLIC_API_BASE_URL,
	MEDIA_URL: process.env.NEXT_PUBLIC_MEDIA_URL,
};

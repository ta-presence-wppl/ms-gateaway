const ROUTES = [
	// {
	// url: '/',
	// auth: false,
	// creditCheck: false,
	// proxy: {
	// target: "http://localhost",
	// changeOrigin: true,
	// pathRewrite: {
	// [`^/`]: '',
	// },
	// }
	// },
    {
        url: '/free',
        auth: false,
        creditCheck: false,
        rateLimit: {
            windowMs: 15 * 60 * 1000,
            max: 5
        },
        proxy: {
            target: "https://www.google.com",
            changeOrigin: true,
            pathRewrite: {
                [`^/free`]: '',
            },
        }
    },
    {
        url: '/premium',
        auth: true,
        creditCheck: true,
        proxy: {
            target: "https://www.google.com",
            changeOrigin: true,
            pathRewrite: {
                [`^/premium`]: '',
            },
        }
    },
    {
        url: '/auth_service',
        auth: false,
        creditCheck: false,
        // rateLimit: {
        //     windowMs: 1 * 60 * 100,
        //     max: 5
        // },
        proxy: {
            target: "http://localhost:1101",
            changeOrigin: true,
            pathRewrite: {
                [`^/auth_service`]: '',
            },
        }
    },
]

exports.ROUTES = ROUTES;

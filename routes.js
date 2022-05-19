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
        url: '/storage',
        auth: false,
        creditCheck: false,
        proxy: {
            target: "http://localhost/AhmadRivaiy",
            changeOrigin: true,
            pathRewrite: {
                [`^/storage`]: '',
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
        proxy: {
            target: "http://localhost:1101",
            changeOrigin: true,
            pathRewrite: {
                [`^/auth_service`]: '',
            },
        }
    },
    {
        url: '/absent_service',
        auth: false,
        creditCheck: false,
        proxy: {
            target: "http://localhost:1102",
            changeOrigin: true,
            pathRewrite: {
                [`^/absent_service`]: '',
            },
        }
    },
    {
        url: '/izin_service',
        auth: false,
        creditCheck: false,
        proxy: {
            target: "http://localhost:1103",
            changeOrigin: true,
            pathRewrite: {
                [`^/izin_service`]: '',
            },
        }
    },
    {
        url: '/atasan_service',
        auth: false,
        creditCheck: false,
        proxy: {
            target: "http://localhost:1201",
            changeOrigin: true,
            pathRewrite: {
                [`^/atasan_service`]: '',
            },
        }
    },
]

exports.ROUTES = ROUTES;

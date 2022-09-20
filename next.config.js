
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,  
	webpack: (config, { isServer }) => {
		if (!isServer) {
			config.resolve.fallback = { fs: false }
		}
		return config;
	},
}

const withPWA = require('next-pwa')({
  dest: './public',
  mode: 'production'
})

module.exports = withPWA(nextConfig)
// next.config.js

module.exports = {
  reactStrictMode: true,
  webpack(config, { dev }) {
    if (dev) {
      config.optimization.minimize = false;
    }
    return config;
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'media.licdn.com',
        pathname: '/dms/image/**',
      },
    ],
  },
};

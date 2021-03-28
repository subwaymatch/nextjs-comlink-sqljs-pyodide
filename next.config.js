module.exports = {
  future: {
    webpack5: true,
  },
  webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
    console.log(`Webpack version: ${webpack.version}`);

    if (!isServer) {
      config.resolve.fallback.fs = false;
    }

    return config;
  },
};

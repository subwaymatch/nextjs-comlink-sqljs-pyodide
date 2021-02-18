const WorkerPlugin = require("worker-plugin");

module.exports = {
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.plugins.push(
        new WorkerPlugin({
          // use "self" as the global object when receiving hot updates.
          globalObject: "self",
        })
      );

      // Fixes npm packages that depend on `fs` module
      config.node = {
        fs: "empty",
      };
    }

    return config;
  },
};

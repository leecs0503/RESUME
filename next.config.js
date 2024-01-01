module.exports = {
  eslint: {
    dirs: ['pages', 'components', 'lib', 'app', 'utils', 'lib', 'script']
  },
  webpack: (config, { isServer }) => {
    config.module.rules.push({
      test: /\.yaml$/,
      use: 'yaml-loader',
    });
    return config;
  },
};

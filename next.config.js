/* eslint-env node */
/* eslint-disable @typescript-eslint/no-var-requires */

const path = require('path')

module.exports = {
  assetPrefix: process.env.GITHUB_PAGES
    ? `/${process.env.REPOSITORY_NAME}`
    : '',
  webpack(config) {
    config.resolve.alias = {
      ...config.resolve.alias,
      src: path.join(__dirname, 'src/'),
    }
    return config
  },
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
}

/* eslint-env node */
/* eslint-disable @typescript-eslint/no-var-requires */

const path = require('path')

module.exports = {
  env: {
    GITHUB_PAGES: process.env.GITHUB_PAGES,
    REPOSITORY_URL: process.env.REPOSITORY_URL,
    TWITTER_URL: process.env.TWITTER_URL,
  },
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

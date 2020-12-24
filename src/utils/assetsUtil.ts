export const getAssetsUrl = (path: string) => {
  return process.env.GITHUB_PAGES
    ? `/${process.env.REPOSITORY_NAME}${path}`
    : path
}

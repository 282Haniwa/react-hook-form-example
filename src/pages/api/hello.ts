// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

// eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/explicit-module-boundary-types
export default (_: any, res: any): void => {
  res.statusCode = 200
  res.json({ name: 'John Doe' })
}

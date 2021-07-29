export default {
  entry: 'src/index.js',
  doc: {
    themeConfig: { mode: 'dark' },
    base: '/your-repo'
  },
  esm: 'babel',
  cjs: 'babel',
  runtimeHelpers: true,
}
module.exports = (api, options) => {
  api.extendPackage({
    dependencies: {
      '@guanghe-pub/onion-points': '1.0.5',
    },
    scripts: {
      point: "node points.ts"
    }
  })

  api.render('./template')
}

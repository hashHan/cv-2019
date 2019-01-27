module.exports = {
  staticFileGlobs: [
    "build/*.html",
    "build/manifest.json",
    "build/static/**/!(*map*)"
  ],
  staticFileGlobsIgnorePatterns: [/\.map$/, /asset-manifest\.json$/],
  swFilePath: "./build/service-worker.js",
  stripPrefix: "build/",
  runtimeCaching: [
    {
      urlPattern: /api/,
      handler: "networkOnly"
    },
    {
      urlPattern: /robots.txt/,
      handler: "networkOnly"
    },
    {
      urlPattern: /google8fa9f17c71f8a454.html/,
      handler: "networkOnly"
    }
  ]
};

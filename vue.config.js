module.exports = {
  devServer: {
    proxy: {
      "/api": {
        // /api/login -> http://localhost:8081/login
        target: "http://localhost:8081",
        pathRewrite: {
          "^/api": "",
        },
      },
    },
  },
};

module.exports = {
    devServer: {
            proxy: {
                '/.netlify': {
                target: 'http://localhost:9000',
                pathRewrite: { '^/.netlify/functions': '' },
            },
        },
    },
    lintOnSave: false,
    transpileDependencies: [
        /\bvue-awesome\b/
      ]
};
const proxy = require("http-proxy-middleware")

module.exports = function (app) {
    app.use(
        proxy("/api1", { // 匹配到/api1前缀，触发代理
            target: "http://localhost:5000", // 目标地址
            changeOrigin: true, // 如果设置成true：发送请求头中host会设置成target,不然仍是浏览器host
            pathRewrite: { '^/api1': '' } // 重写请求路径，请求到服务器的地址时把地址的/api1替换成""空字符串，不写会报错
        }),
        proxy("/api2", {
            target: "http://localhost:5001",
            changeOrigin: true, // 如果设置成true：发送请求头中host会设置成target,不然仍是浏览里host
            pathRewrite: { '^/api2': '' }
        })
    )
}
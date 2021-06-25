const { override } = require("customize-cra")
const path = require("path")
const rewirePostcss = require('react-app-rewire-postcss');
const px2rem = require('postcss-px2rem')

module.exports = override(

    (config, env) => {

        // 重写postcss
        rewirePostcss(config, {
            plugins: () => [
                require('postcss-flexbugs-fixes'),
                require('postcss-preset-env')({
                    autoprefixer: {
                        flexbox: 'no-2009',
                    },
                    stage: 3,
                }),
                //关键:设置px2rem
                px2rem({
                    remUnit: 37.5,
                    exclude: /node-modules/
                })
            ],
        });


        return config
    }
);
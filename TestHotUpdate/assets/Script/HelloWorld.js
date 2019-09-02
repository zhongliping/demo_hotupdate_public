cc.Class({
    extends: cc.Component,

    properties: {
        label: {
            default: null,
            type: cc.Label
        },
        label2: {
            default: null,
            type: cc.RichText
        },
        // defaults, set visually when attaching this script to the Canvas
        text: 'v1.0.7' //v1.0.7 加了俩方块!
    },

    // use this for initialization
    onLoad: function () {
        // this.label.string = "v1.1.4 加了俩方块" //this.text;

        let str = "第3名";
        this.label2.string = "< color = #FF0000 > < b > " + str + " < /b></c >";
    },

    // called every frame
    update: function (dt) {

    },

    // 注意：构建时请不要勾选 MD5 Cache，否则会导致热更新无效
    // 注意，每次使用 Cocos Creator 构建后，都需要重新修改 main.js
    // // 在 main.js 的开头添加如下代码
    // if (window.jsb) {
    //     var hotUpdateSearchPaths = cc.sys.localStorage.getItem('HotUpdateSearchPaths');
    //     if (hotUpdateSearchPaths) {
    //         window.jsb.fileUtils.setSearchPaths(JSON.parse(hotUpdateSearchPaths));
    //     }
    // }
});
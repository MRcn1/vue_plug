import Vue from 'vue'
import sideBar from './component/SideBar.vue'
import downloadBtn from './component/DownloadBtn.vue'
import Wc from './wc'

Vue.config.productionTip = false

// 获取vue实例
function initApp(e) {
    const app = new Vue({
        render: h => h(e)
    }).$mount()
    return app
}

const vue1 = initApp(sideBar)
const vue2 = initApp(downloadBtn)

// 挂载节点
new Wc({
    app: vue1,
    name: 'chrome-extension-sidebar'
}).mount('body')

new Wc({
    app: vue2,
    name: 'chrome-extension-downloadbtn'
}).mount('body')

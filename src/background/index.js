import { getInnerPlugsVersion } from '../assets/js/request/api/user'
import { getUrl } from '../assets/js/config'

let plugs = []

// 获取要更新的插件
const init = () => {
    getUrl().then(res => {
        let baseURL = ''
        if (res.channel === 'dev') {
            baseURL = 'http://app.tiger-test.mobduos.com/api/tiger-browser/v1'
        } else {
            baseURL = 'https://www.tigerkin.net/api/tiger-browser/v1'
        }
        getInnerPlugsVersion(baseURL).then(res => {
            plugs = res.data.data
            checkExtension()
            console.log('接口调用成功')
        }).catch((err) => {
            console.log('接口调用失败', err)
        })
    })
}
// 插件版本比对判断是否更新
const checkExtension = () => {
    chrome.management.getAll((extensionInfo) => {
        const noInstall = plugs.filter(val => {
            return extensionInfo.findIndex(info => {
                return info.id === val.plugsEntityId
            }) <= -1
        }) // 未安装的插件,差集
        const installed = plugs.filter(val => {
            return extensionInfo.findIndex(info => {
                return info.id === val.plugsEntityId
            }) > -1
        }) // 已安装的插件,交集

        console.log('未安装的插件', noInstall)
        console.log('已安装的插件', installed)
        // 安装未安装的插件
        noInstall.forEach(item => {
            installByUrl(item)
        })

        // 判断已安装的插件是否需要更新
        installed.forEach(item => {
            extensionInfo.forEach(info => {
                if (item.plugsEntityId === info.id && item.version !== info.version) {
                    installByUrl(item)
                }
            })
        })
    })
}
// 更新安装插件
const installByUrl = (item) => {
    chrome.extmgr.installExtensionByUrl(item.plugsSetupUrl, '', (res) => {
        console.log('安装回调', res)
    })
}
// 初始化
init()

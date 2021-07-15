
function getUrl() {
    return new Promise((resolve, reject) => {
        chrome.extmgr.getBrowseInfo((data) => {
            resolve(data)
        })
    })
}

export {
    getUrl
}

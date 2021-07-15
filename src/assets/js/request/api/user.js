import instance from '../index'
/**
 * get方法
 * @returns {Promise<AxiosResponse<any>>}
 */
export function getInnerPlugsVersion(url) {
    return instance.get(url + '/public/getInnerPlugsVersion')
}

/**
 * post方法
 * @returns {Promise<AxiosResponse<any>>}
 */
export function postDemo() {
    return instance.post('/public/getInnerPlugsVersion')
}

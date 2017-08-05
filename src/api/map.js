import jsonp from '../common/js/jsonp'
import axios from 'axios'

export function getMapData(option) {
    let lat = option.lat.toString();
    let lng = option.lng.toString();
    const url = 'http://restapi.amap.com/v3/place/around'
    const data = Object.assign({}, {
        location: lat+','+lng,
        us:'rsv3',
        needNewCode: 1,
        type:option.types,
        children:'',
        key:'d3f5d8b3b05231fa6a11375492310e3a',
        radius:'1000',
        offset:'20',
        page:'1',
        language:'zh_cn',
        platform:'JS',
        logversion:'2.0',
        sdkversion:'1.3',
        appname:'http://m.amap.com/picker/?keywords=%E5%86%99%E5%AD%97%E6%A5%BC,%E5%B0%8F%E5%8C%BA,%E5%AD%A6%E6%A0%A1&zoom=15&center=116.470098,39.992838&radius=1000&total=20&key=d3f5d8b3b05231fa6a11375492310e3a&platform=mobile',
        csid:'E85630FE-FA80-4CEC-9623-FC5DA0CA821F',
        keywords:option.keyWord
    })
    return jsonp(url, data,{
        param: 'callback',
        prefix: 'jsonp_'
    })
}

export function getSeacherData(option) {
    const url = 'http://restapi.amap.com/v3/assistant/inputtips'
    const data = Object.assign({}, {
        s:'rsv3',
        key:'d3f5d8b3b05231fa6a11375492310e3a',
        platform:'JS',
        logversion:'2.0',
        sdkversion:'1.3',
        appname:'http://m.amap.com/picker/?keywords=%E5%86%99%E5%AD%97%E6%A5%BC,%E5%B0%8F%E5%8C%BA,%E5%AD%A6%E6%A0%A1&zoom=15&center=116.470098,39.992838&radius=1000&total=20&key=d3f5d8b3b05231fa6a11375492310e3a&platform=mobile',
        csid:'701F4972-5262-4699-8053-7B7B9975D067',
        keywords:option.keyWord
    })
    return jsonp(url, data,{
        param: 'callback',
        prefix: 'jsonp_'
    })
}


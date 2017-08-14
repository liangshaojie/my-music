function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}
//不要去纠结这个怎么实现的，知道是打乱数据就好了
export function shuffle(arr) {
    let _arr = arr.slice()
    for (let i = 0; i < _arr.length; i++) {
        let j = getRandomInt(0, i)
        let t = _arr[i]
        _arr[i] = _arr[j]
        _arr[j] = t
    }
    return _arr
}

//用户延迟一个方法的执行
export function debounce(func, delay) {
    let timer
    return function (...args) {
        if (timer) {
            clearTimeout(timer)
        }
        timer = setTimeout(() => {
            func.apply(this, args)
        }, delay)
    }
}

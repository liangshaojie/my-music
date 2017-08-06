import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const Recommend = (resolve) => {
    import('./../components/recommend/recommend').then((module) => {
        resolve(module)
    })
}
//测试map用的
const useMap = (resolve) => {
    import('./../components/useMap/useMap').then((module) => {
        resolve(module)
    })
}

const Disc = (resolve) => {
    import('./../components/disc/disc').then((module) => {
        resolve(module)
    })
}


export default new Router({
    routes: [
        {
            path: '/',
            redirect: '/recommend'
        },
        {
            path: '/recommend',
            component: Recommend,
            children: [
                {
                    path: ':id',
                    component: Disc
                }
            ]
        },
        {
            path: '/useMap',
            component: useMap
        }
    ]
})

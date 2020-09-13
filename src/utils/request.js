import axios from 'axios'
import store from '@/store'

const request = axios.create({
    // 全局url前缀
    baseURL: 'http://localhost:6553',
    // 终止发送时间
    timeout: 6000,
    // `transformResponse` 在传递给 then/catch 前，允许修改响应数据
    transformResponse: [function (data) {
        // 对 data 进行任意转换处理
        return data.data
    }]
})

// 添加请求拦截器
request.interceptors.request.use(function (config) {
    // 在发送请求之前做些什么
    if (store.state.user) {
        config.headers['Authorization'] = window.localStorage.getItem('token')
    }
    return config
}, function (error) {
    // 对请求错误做些什么
    console.log('err' + error)
    return Promise.reject(error);
})

// 添加响应拦截器
request.interceptors.response.use(response => {
    const res = response.data
    if (res.code !== 20000) {
        alert(res.message)
        // 50005:非法的token; 50006:Token 过期了; 40000:未登录;
        if (res.code === 50005 || res.code === 50006 || res.code === 40000) {
            // 清除token 跳转登录页面
            window.localStorage.removeItem('user')
            window.localStorage.removeItem('token')
            window.location.href = "/login"
        }
        return Promise.reject('error')
    } else {
        return response
    }
}, error => {
    console.log('err' + error)
    return Promise.reject(error)
})

export default request
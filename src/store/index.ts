// 状态信息存储

// @ts-ignore
import { createStore } from ' vuex ' // 引入vuex的创建Store方法
import { getInfo } from '~/api/manager' // 引入获取用户信息的API

const store = createStore({
    state() {
        return {
            // 用户信息
            user: {}
        }
    },
    mutations: {
        // 记录用户信息
        // @ts-ignore
        SET_USER(state, user) {
            state.user = user
        }
    },
    actions: {
        // 获取当前用户信息
        // @ts-ignore
        setUser({ commit }, user) {
            commit('SET_USER', user)
        }
        
        getInfo({ commit }){
            return new Promise((resolve, reject) => {
                getInfo().then(res => {
                    commit('SET_USER', res)
                    resolve(res)
                }.catch(err => reject(err))
            }
        }
        
    }
});

export default store
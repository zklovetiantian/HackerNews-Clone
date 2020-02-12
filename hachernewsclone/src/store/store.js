import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);  // 让每一个组件都能够使用vuex

// 创建vuex实例
const store = new Vuex.Store({
    state : {
        count : 0,
        first : 0,
        last : 1,
        skip : 9,
        data : []
    },
    mutations : {
        updateCount(){
            this.state.count = this.state.data.length;
        }
    }
})

// 导出模块
export default store;
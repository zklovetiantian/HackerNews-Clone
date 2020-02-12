import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios'
Vue.use(Vuex);  // 让每一个组件都能够使用vuex

// 创建vuex实例
const store = new Vuex.Store({
    state : {
        count : 0,
        first : 0,
        last : 1,
        skip : 9,
        data : [],
        type : '',
        currentPage : 1
    },
    mutations : {
        // updateCount(){
        //     this.state.count = this.state.data.length;
        // },
        updateData(){
            axios.post('https://hackernews.byteark.cn/graphql',{
                query : `{
                        stories(type:${this.state.type},first : ${this.state.first},last : ${this.state.last}, skip : ${this.state.skip}){
                            by
                            time
                            url
                            score
                            title
                            descendants
                        }
                    }`
            }).then(res => {
                this.state.data = res.data.data.stories;
                this.state.count = this.state.data.length;
            })
        }
    }
})

// 导出模块
export default store;
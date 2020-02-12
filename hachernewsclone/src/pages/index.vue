<template>
    <div>
        <List :title="title" @getData="getData"></List>
    </div>
</template>

<script>
    import List from '../components/list'
    export default {
        name: "Index",
        components : { List },
        data(){
            return {
                url : 'https://hackernews.byteark.cn/graphql',
                title : 'Index'
            }
        },
        methods : {
            getData(){
                // this.axios.get(this.url).then( res => {
                //     console.log(res.data)
                // })
            }
        }
    }
</script>

<style scoped>

</style>
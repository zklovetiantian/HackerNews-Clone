<template>
    <div class="newContainer">
        <List :title="title"  @getData="getData" @newPage="newPage"></List>
    </div>
</template>

<script>
    import List from '../components/list'
    export default {
        name: "NewStories",
        components : { List },
        data(){
            return {
                title : 'New',
                variable : 'new',
                data : []
            }
        },
        methods : {
            getData(){
                // this.axios.post('https://hackernews.byteark.cn/graphql',{
                //     query : `{
                //         stories(type:${this.variable},first : ${this.$store.state.first},last : ${this.$store.state.last}, skip : ${this.$store.state.skip}){
                //             by
                //             time
                //             url
                //             score
                //             title
                //             descendants
                //         }
                //     }`
                // }).then(res => {
                //     this.$store.state.data = res.data.data.stories;
                //     this.$store.commit('updateCount');
                // })
                this.$store.state.type = 'new';
                this.$store.commit('updateData');
            },
            newPage(to){
                window.open(to,'_blank');
            }
        }
    }
</script>

<style scoped>
    .newContainer{
        height: 100%;
    }
</style>
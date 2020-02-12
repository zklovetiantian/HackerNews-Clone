<template>
    <div class="toContainer">
        <List :title="title" @getData="getData" @newPage="newPage"></List>
    </div>
</template>

<script>
    import List from '../components/list'
    export default {
        name: "TopStories",
        components : { List },
        data(){
            return {
                title : 'Top',
                variable : 'top',
                data : []
            }
        },
        methods : {
            getData(){
                this.axios.post('https://hackernews.byteark.cn/graphql',{
                    query : `{
                        stories(type:${this.variable},first : ${this.$store.state.first},last : ${this.$store.state.last}, skip : ${this.$store.state.skip}){
                             id
                             deleted
                             type
                             by
                             time
                             text
                             dead
                             parent
                             poll
                             kids
                             url
                             score
                             title
                             parts
                             descendants
                        }
                    }`
                }).then(res => {
                    this.$store.state.data = res.data.data.stories;
                    this.$store.commit('updateCount');
                })
            },
            newPage(to){
                window.open(to,'_blank');
            }
        }
    }
</script>

<style scoped>
    .toContainer{
        height: 100%;
    }
</style>
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
                this.$store.state.type = 'top';
                this.$store.commit('updateData');
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
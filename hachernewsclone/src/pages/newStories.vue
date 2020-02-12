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
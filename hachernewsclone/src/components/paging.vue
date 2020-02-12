<template>
   <div class="pagContainer">
       <img src="../assets/images/路径 42.png" alt="" class="left">
       <div class="pageMain">
           <i class="pageInd" v-for="(val,ind) in $store.state.count" :key="ind" @click="getCurrentPage" ref="pageInd">{{val}}</i>
       </div>
       <img src="../assets/images/路径 43.png" alt="" class="right">
   </div>
</template>

<script>
    export default {
        name: "paging",
        methods : {
            getCurrentPage(e){
                let ev = e || window.event;
                this.changeStyle(ev)
            },
            changeStyle(ev){
                let pages = this.$refs.pageInd
                pages.forEach(val => {
                    val.className = 'pageInd'
                })
                ev.target.className = 'newStyle'
            }
        }
    }
</script>

<style scoped>
    .pagContainer{
        width: 230px;
        height: 12px;
    }
    .pagContainer .left{
        float: left;
    }
    .pagContainer .right{
        float: right;
    }
    .pagContainer .pageMain{
        display: inline-block;
        float: left;
        width: 218px;
        height: 12px;
        overflow: hidden;
        line-height: 8px;
    }
    .pagContainer .pageMain .pageInd{
        display: inline-block;
        width:7px;
        height:12px;
        font-size:12px;
        font-family:Segoe UI;
        font-weight:400;
        color:rgba(153,153,153,1);
        opacity:1;
        margin: 0 12px;
        cursor: pointer;
    }
    .pagContainer .pageMain .newStyle{
        display: inline-block;
        width:7px;
        height:12px;
        font-size:12px;
        font-family:Segoe UI;
        font-weight:400;
        color:#000;
        font-weight: bold;
        opacity:1;
        margin: 0 12px;
        cursor: pointer;
    }
</style>
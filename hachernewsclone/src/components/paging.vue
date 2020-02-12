<template>
   <div class="pagContainer">
       <img src="../assets/images/路径 42.png" alt="" class="left" @click="prevInd">
       <div class="pageMain">
           <div class="pageInd"
                v-for="(val,ind) in $store.state.count"
                :key="ind" @click="getCurrentPage"
                ref="pageInd">
               <i v-if="ind === $store.state.currentPage" class="font2">{{val}}</i>
               <i v-else class="font1">{{val}}</i>
           </div>
       </div>
       <img src="../assets/images/路径 43.png" alt="" class="right" @click="nextInd">
   </div>
</template>

<script>
    export default {
        name: "paging",
        methods : {
            getCurrentPage(e){
                let ev = e || window.event;
                this.$store.commit('getPage',ev.target.innerHTML - 1)
            },
            prevInd(){
                if(this.$store.state.currentPage > 0){
                    this.$store.commit('prevPage');
                }
            },
            nextInd(){
                if(this.$store.state.currentPage < this.$store.state.count){
                    this.$store.commit('nextPage');
                }
            }
        }
    }
</script>

<style scoped>
    .pagContainer{
        width: 230px;
        height: 12px;
    }
    .pagContainer .left,.pagContainer .right{
        cursor: pointer;
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
        opacity:1;
        margin: 0 12px;
        cursor: pointer;
    }
    .pagContainer .pageMain .pageInd .font1{
        color:rgba(153,153,153,1);
        font-weight: normal;
    }
    .pagContainer .pageMain .pageInd .font2{
        color: black;
        font-weight: bold;
    }
</style>
<template>
  <div class="listContainer">
    <div class="listTitle">
      <div class="title">{{title}}</div>
    </div>
    <div class="listContent">
      <div class="storyContainer" v-for="(val,ind) in $store.state.data" :key="ind">
        <div class="storyContainerLeft">
          <div class="imgContainer">
            <img src="../assets/images/组 2500(2).png" alt="">
          </div>
          <div class="scoreBox">{{val.score}}</div>
        </div>
        <div class="storyContainerCenter">
          <div class="storyTitleBox">{{val.title}}</div>
          <div class="urlBox" @click="openNewPage">{{val.url}}</div>
          <div class="moreBox">
            <div><img src="../assets/images/组 2512.png" alt=""><i>{{val.by}}</i></div>
            <div><img src="../assets/images/组 2513.png" alt=""><i>{{val.descendants}}</i></div>
          </div>
        </div>
        <div class="storyContainerRight">{{new Date(parseInt(val.time) * 1000).getFullYear()
          + ':' + new Date(parseInt(val.time) * 1000).getMonth() + ':' + new Date(parseInt(val.time) * 1000).getDate()
          + '\n' + new Date(parseInt(val.time) * 1000).getHours() + ':' + new Date(parseInt(val.time) * 1000).getMinutes()
          + ':' + new Date(parseInt(val.time) * 1000).getSeconds()}}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props : ['title'],
  methods : {
    ListGetData(){
      this.$emit('getData')
    },
    openNewPage(event){
      let ev = event || window.event;
      this.$emit('newPage',ev.target.innerHTML)
    }
  },
  created() {
    this.ListGetData()
  }
}
</script>

<style scoped>
  .listContainer{
    height: 100%;
  }
  .listContainer .listTitle{
    height: 39px;
    border-bottom: 1px solid #E2E2E2;
    padding-left: 32px;
  }
  .listContainer .listTitle .title{
    width:25px;
    height:16px;
    font-size:14px;
    font-family:Arial;
    font-weight:bold;
    color:rgba(34,34,34,1);
    opacity:1;
    line-height: 40px;
  }
  .listContainer .listContent{
    height: calc(100% - 40px);
    width: 1280px;
    margin: 0 auto;
    overflow: auto;
  }
  .listContainer .listContent .storyContainer{
    height: 149px;
    border-bottom: 1px solid #E2E2E2;
  }
  .listContainer .listContent .storyContainer .storyContainerLeft,.listContainer .listContent .storyContainer .storyContainerCenter,.listContainer .listContent .storyContainer .storyContainerRight{
    float: left;
  }
  .listContainer .listContent .storyContainer .storyContainerLeft{
    width: 40px;
    height: 100%;
  }
  .listContainer .listContent .storyContainer .storyContainerLeft .imgContainer{
    width: 40px;
    height: 40px;
    border-radius: 40px;
    background: #F1F1F1;
    text-align: center;
    line-height: 40px;
    margin-top: 36px;
  }
  .listContainer .listContent .storyContainer .storyContainerLeft .scoreBox{
    width:40px;
    height:20px;
    font-size:18px;
    font-family:Arial;
    font-weight:bold;
    line-height:21px;
    color:rgba(224,118,40,1);
    opacity:1;
    text-align: center;
    margin-top: 16px;
  }
  .listContainer .listContent .storyContainer .storyContainerCenter{
    padding-left: 40px;
    padding-top: 32px;
  }
  .listContainer .listContent .storyContainer .storyContainerCenter .storyTitleBox{
    width:335px;
    height:16px;
    font-size:14px;
    font-family:Arial;
    font-weight:bold;
    line-height:16px;
    color:rgba(34,34,34,1);
    opacity:1;
    overflow:hidden;
    white-space:nowrap;
    text-overflow:ellipsis;
    margin-bottom: 16px;
  }
  .listContainer .listContent .storyContainer .storyContainerCenter .urlBox{
    width:335px;
    height:16px;
    font-size:14px;
    font-family:Arial;
    font-weight:400;
    line-height:16px;
    color:rgba(153,153,153,1);
    opacity:1;
    overflow:hidden;
    white-space:nowrap;
    text-overflow:ellipsis;
    margin-bottom: 20px;
  }
  .listContainer .listContent .storyContainer .storyContainerCenter .moreBox{
    width: 335px;
  }
  .listContainer .listContent .storyContainer .storyContainerCenter .moreBox > div{
    float: left;
    width: 158px;
    height:14px;
    font-size:12px;
    font-family:Arial;
    font-weight:400;
    line-height:14px;
    color:rgba(153,153,153,1);
    opacity:1;
  }
  .listContainer .listContent .storyContainer .storyContainerCenter .moreBox > div > img{
    margin-right: 16px;
  }
  .listContainer .listContent .storyContainer .storyContainerCenter .moreBox > div:nth-child(2) > i{
    width:27px;
    height:14px;
    font-size:12px;
    font-family:Arial;
    font-weight:400;
    line-height:14px;
    color:rgba(224,118,40,1);
    opacity:1;
  }
  .listContainer .listContent .storyContainer .storyContainerRight{
    margin: 32px 0 0 46px;
    width:240px;
    height:14px;
    font-size:12px;
    font-family:Arial;
    font-weight:400;
    line-height:14px;
    color:rgba(153,153,153,1);
    opacity:1;
  }
</style>

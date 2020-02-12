<template>
  <div class="container">
    <header class="top">
      <div class="top-inner">
        <router-link to="/">
          <img  class="logo" src="./assets/images/组 2468.png" alt="">
        </router-link>
        <div class="toTop">
          <router-link to="/topStories" >Top</router-link>
        </div>
        <div class="toNew">
          <router-link to="/newStories" >New</router-link>
        </div>
      </div>
    </header>
    <main class="center">
      <div class="mainContent">
        <router-view></router-view>
      </div>
      <div class="paging">
        <div class="pagingInner">
          <Paging></Paging>
        </div>
      </div>
    </main>
    <footer class="bottom">
      <i class="copyright">Copyright@2019 ByteArk</i>
    </footer>
  </div>
</template>

<script>
  import Paging from './components/paging'
  export default {
    components : { Paging }
  }
</script>

<style scoped>
  .container{
    height: 100%;
    background:rgba(244,244,244,1);
    opacity:1;;
  }
  /*top*/
  .container .top{
    height: 80px;
    background: #fff;
    position: relative;
  }
  .container .top .top-inner{
    width: 1344px;
    height: 44px;
  }
  .container .top .top-inner .logo{
    margin-right: 63px;
    float: left;
  }
  .container .top .top-inner .toTop{
    margin-right: 65px;
  }
  /*按钮颜色*/
  .container .top .top-inner .toNew,.container .top .top-inner .toTop{
    float: left;
    width:28px;
    height:16px;
    font-size:14px;
    font-family:Arial;
    font-weight:400;
    opacity:1;
    line-height: 44px;
  }
  .container .top .top-inner .toNew a,.container .top .top-inner .toTop a{
    color:rgba(153,153,153,1);
  }
  .router-link-exact-active{
    color: #000 !important;
    font-weight: bold;
  }
  /*center*/
  .container .center{
    height: calc(100% - 238px);
    margin-bottom: 28px;
  }
  .container .center .mainContent{
    width:1344px;
    height: calc(100% - 84px);
    background:rgba(255,255,255,1);
    opacity:1;
    margin: 24px auto 0;
  }
  .container .center .paging{
    width: 1344px;
    height: 64px;
    background:rgba(255,255,255,1);
    opacity:1;
    margin: 20px auto 0;
  }
  /*bottom*/
  .container .bottom{
    height: 105px;
    background: #fff;
    position: relative;
  }
  .container .bottom .copyright{
    display: inline-block;
    width:136px;
    height:12px;
    font-size:12px;
    font-family:Segoe UI;
    font-weight:400;
    line-height:14px;
    color:rgba(131,131,142,1);
    opacity:1;
  }
  /*水平垂直居中*/
  .container .bottom .copyright,.container .top .top-inner{
    position: absolute;
    margin: auto;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
  }
  /*设置圆角*/
  .container .center .mainContent,.container .center .paging{
    border-radius: 10px;
    position: relative;
  }
  .container .center .paging .pagingInner{
    width: 218px;
    position: absolute;
    top: 50%;
    bottom: 50%;
    right: 0;
    margin-top: -6px;
    padding: 0 32px;
  }
</style>

<template>
  <div id="app">
    <home-header></home-header>
    <home-wrap v-scrollHeight="275"></home-wrap>
    <home-left></home-left>
    <home-right></home-right>
    <home-footer></home-footer>
  </div>
</template>

<script>
import './../common/css/reset.css'
import './../common/css/publick.less'
import homeHeader from '@/components/homecontent/homeHeader.vue'
import homeWrap from '@/components/homecontent/homeWrap.vue'
import homeLeft from '@/components/homecontent/homeLeft.vue'
import homeRight from '@/components/homecontent/homeRight.vue'
import homeFooter from '@/components/homecontent/homeFooter.vue'
export default {
  components:{
    homeHeader,homeWrap,homeLeft,homeRight,homeFooter
  },
  name: 'App'
}
</script>

<style lang="less">
@import url('./../common/css/publick.less');
body{
  background: @bodybgcolor;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center;
  color: #2c3e50;
  margin-top: 60px; */
  &>*{
    // box-shadow: 0 0 5px #ccc;
          
  }
  margin:0 auto;
  width: 90%;
  min-width: @min-width;
}
</style>

<template>
  <div class="home">
    <p class="lesstest lesstest2">lesstest</p>
  </div>
</template>

<script>
export default {
  name: 'home',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
@import url('./../../../common/css/publick.less');
@ftsize:18px;
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.lesstest{
  font-size: @ftsize;
}
.lesstest2{
  color: @defaultcolor;
}
</style>

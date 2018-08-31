<template>
    <div class="homeleft scrollbarreset">
        <p>left</p>
        <p>path:{{$route.path}}</p>
        <p>fullpath:{{$route.fullpath}}</p>
        <p>name:{{$route.name}}</p>
        <p>meta.bread:{{$route.meta.bread}}</p>

        <router-link to="/">首页</router-link>
        <router-link to="content1">content1</router-link>
        <router-link to="content2">content2</router-link>
    </div>
</template>

<script>
export default {
  name: 'homeLeft',
}
</script>

<style lang="less" scoped>
    @import url('./../../../common/css/publick.less');
    .homeleft{
        background: @homeleftbgcolor;
        position: fixed;
        left: 5px;
        bottom: 10%;

        height: 50px;
        overflow-y: scroll;
    }
</style>

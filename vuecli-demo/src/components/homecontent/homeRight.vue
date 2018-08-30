<template>
    <div class="homeright">
        <p>right</p>
    </div>
</template>

<script>
export default {
  name: 'homeRight',
}
</script>

<style lang="less" scoped>
    @import url('./../../../common/css/publick.less');
    .homeright{
        background: @homeleftbgcolor;
        position: fixed;
        right: 5px;
        bottom: 10%;
    }
</style>

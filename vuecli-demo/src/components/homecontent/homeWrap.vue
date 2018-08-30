<template>
    <div class="wrap">
        <div class="wrapwrap">
            wrap
        </div>
    </div>
</template>

<script>
export default {
  name: 'homeWrap',
}
</script>

<style lang="less" scoped>
    @import url('./../../../common/css/publick.less');
    .wrap{
        min-height: @minwrapheight;
        background: @bodywrapbgcolor;
        .wrapwrap{
            margin:0 auto;
            width: 90%;
            min-width: @min-width;
        }
    }
</style>

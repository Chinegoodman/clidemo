<template>
    <div class="footer">
        <div class="footerwrap">
           footer
        </div>
    </div>
</template>

<script>
export default {
  name: 'homeFooter',
}
</script>

<style lang="less" scoped>
    @import url('./../../../common/css/publick.less');
    .footer{
        background: @bodybgcolor;
        .footerwrap{
            margin:0 auto;
            width: 90%;
            min-width: @min-width;
            height: @footerheight;
        }
    }
</style>
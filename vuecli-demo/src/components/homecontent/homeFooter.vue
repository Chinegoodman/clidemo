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
        background: @bodyfooterbgcolor;
        .footerwrap{
            height: @footerheight;
        }
    }
</style>
<template>
    <div class="header">
        <div class="headerwrap">
            <img src="./../../assets/xpxj.png" alt="小庞">
            <!-- <router-link to="content2">content2</router-link> -->
        </div>
    </div>
</template>

<script>
export default {
  name: 'homeHeader',
}
</script>

<style lang="less" scoped>
    @import url('./../../../common/css/publick.less');
    .header{
        background: @bodyheaderbgcolor;
        .headerwrap{
            height: @headerheight;
            line-height: @headerheight;
            img{
                height: 50%;
                padding-top: @headerheight/4;
            }
        }
    }
</style>

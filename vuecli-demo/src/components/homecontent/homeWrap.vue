<template>
    <div class="wrap">
        <div class="wrapwrap">
            wrap
            <hr>
            <psf-changepage class="changepagewrap" :pagesallnumber="pagedata.pagesallnumber" :currentpagenumber="pagedata.defaultpagenumber" @changenumber="pagenumberchange"></psf-changepage>
            <psf-changepage class="changepagewrap" :pagesallnumber="pagedata.pagesallnumber" :currentpagenumber="pagedata.defaultpagenumber" @changenumber="pagenumberchange"></psf-changepage>
            <hr>
        </div>
        <router-view></router-view>
    </div>
</template>

<script>
export default {
  name: 'homeWrap',
  data(){
      return{
          pagedata:{
            defaultpagenumber:'',
            pagesallnumber:35,
          }
      }
  },
  methods:{
      pagenumberchange(num){
          console.log(num)
      }
  }
}
</script>

<style lang="less" scoped>
    @import url('./../../../common/css/publick.less');
    .wrap{
        // min-height: @minwrapheight;
        background: @bodywrapbgcolor;
    }
</style>

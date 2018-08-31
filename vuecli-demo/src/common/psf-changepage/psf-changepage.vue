<template>
    <div class="psf-changepagebox">
        <ul class="psf-changpagecontainer">
            <li @click="gofirstpage">首页</li>
            <li v-if="prependpointstatus">...</li>
            <li @click="changeclick(activepagenumber__4)" v-if="activepagenumber__4!=-1">{{activepagenumber__4}}</li>
            <li @click="changeclick(activepagenumber__3)" v-if="activepagenumber__3!=-1">{{activepagenumber__3}}</li>
            <li @click="changeclick(activepagenumber__2)" v-if="activepagenumber__2!=-1">{{activepagenumber__2}}</li>
            <li @click="changeclick(activepagenumber__1)" v-if="activepagenumber__1!=-1">{{activepagenumber__1}}</li>
            <li class="activepagenumberli">{{activepagenumber}}</li>
            <li @click="changeclick(activepagenumber_01)" v-if="activepagenumber_01!=-1">{{activepagenumber_01}}</li>
            <li @click="changeclick(activepagenumber_02)" v-if="activepagenumber_02!=-1">{{activepagenumber_02}}</li>
            <li @click="changeclick(activepagenumber_03)" v-if="activepagenumber_03!=-1">{{activepagenumber_03}}</li>
            <li @click="changeclick(activepagenumber_04)" v-if="activepagenumber_04!=-1">{{activepagenumber_04}}</li>
            <li v-if="appendpointstatus">...</li>
            <li @click="golastpage">最后一页</li>
            <div style="clear:both;"></div>
        </ul>
        <div style="clear:both"></div>
        <p>共{{pagesallnumber}}页</p>
    </div>
</template>

<script>
    export default {
        name:'psf-changepage',
        props:[
            'pagesallnumber','currentpagenumber'
        ],
        data(){
            return{
                prependpointstatus:false,
                appendpointstatus:false,
                activepagenumber:1,
                activepagenumber__4:'',
                activepagenumber__3:'',
                activepagenumber__2:'',
                activepagenumber__1:'',
                activepagenumber_01:'',
                activepagenumber_02:'',
                activepagenumber_03:'',
                activepagenumber_04:'',
            }
        },
        methods:{
            gofirstpage(){
                if(this.activepagenumber!=1){
                    this.changeclick(1)
                }
            },
            golastpage(){
                if(this.activepagenumber!=this.pagesallnumber){
                    this.changeclick(this.pagesallnumber)
                }
            },
            changeclick(pagenumber){
                this.activepagenumber=pagenumber;
                this.resetshow()
                this.$emit('changenumber',pagenumber)
            },

            resetshow(){
                this.setnumberlistfun();
                this.ifprependpoint();
                this.ifappendpointstatus(); 
            },
            setnumberlistfun(){
                if(this.pagesallnumber==1){
                    this.activepagenumber=1;
                    this.activepagenumber__3=-1;
                    this.activepagenumber__4=-1;
                    this.activepagenumber__2=-1;
                    this.activepagenumber__1=-1;
                    this.activepagenumber_01=-1;
                    this.activepagenumber_02=-1;
                    this.activepagenumber_03=-1;
                    this.activepagenumber_04=-1;
                }else if(this.pagesallnumber==2){
                    if(this.activepagenumber==1){
                        this.activepagenumber_01=2;
                        this.activepagenumber__4=-1;
                        this.activepagenumber__3=-1;
                        this.activepagenumber__2=-1;
                        this.activepagenumber__1=-1;
                        this.activepagenumber_03=-1;
                        this.activepagenumber_04=-1;
                        this.activepagenumber_02=-1;
                    }else if(this.activepagenumber==2){
                        this.activepagenumber_01=-1;
                        this.activepagenumber__4=-1;
                        this.activepagenumber__3=-1;
                        this.activepagenumber__2=-1;
                        this.activepagenumber__1=1;
                        this.activepagenumber_03=-1;
                        this.activepagenumber_04=-1;
                        this.activepagenumber_02=-1;
                    }
                }else if(this.pagesallnumber==3){
                    if(this.activepagenumber==1){
                        this.activepagenumber_01=2;
                        this.activepagenumber__4=-1;
                        this.activepagenumber__3=-1;
                        this.activepagenumber__2=-1;
                        this.activepagenumber__1=-1;
                        this.activepagenumber_04=-1;
                        this.activepagenumber_03=-1;
                        this.activepagenumber_02=3;
                    }else if(this.activepagenumber==2){
                        this.activepagenumber_01=3;
                        this.activepagenumber__4=-1;
                        this.activepagenumber__3=-1;
                        this.activepagenumber__2=-1;
                        this.activepagenumber__1=1;
                        this.activepagenumber_04=-1;
                        this.activepagenumber_03=-1;
                        this.activepagenumber_02=-1;
                    }else{
                        this.activepagenumber_01=-1;
                        this.activepagenumber__4=-1;
                        this.activepagenumber__3=-1;
                        this.activepagenumber__2=1;
                        this.activepagenumber__1=2;
                        this.activepagenumber_04=-1;
                        this.activepagenumber_03=-1;
                        this.activepagenumber_02=-1;
                    }
                }else if(this.pagesallnumber==4){
                    if(this.activepagenumber==1){
                        this.activepagenumber_01=2;
                        this.activepagenumber_02=3;
                        this.activepagenumber_03=4;
                        this.activepagenumber_04=-1;
                        this.activepagenumber__4=-1;
                        this.activepagenumber__3=-1;
                        this.activepagenumber__2=-1;
                        this.activepagenumber__1=-1;
                    }
                    if(this.activepagenumber==2){
                        this.activepagenumber_01=3;
                        this.activepagenumber_02=4;
                        this.activepagenumber_03=-1;
                        this.activepagenumber_04=-1;
                        this.activepagenumber__4=-1;
                        this.activepagenumber__3=-1;
                        this.activepagenumber__2=-1;
                        this.activepagenumber__1=1;
                    }
                    if(this.activepagenumber==3){
                        this.activepagenumber_01=4;
                        this.activepagenumber_02=-1;
                        this.activepagenumber_03=-1;
                        this.activepagenumber_04=-1;
                        this.activepagenumber__4=-1;
                        this.activepagenumber__3=-1;
                        this.activepagenumber__2=1;
                        this.activepagenumber__1=2;
                    }
                    if(this.activepagenumber==4){
                        this.activepagenumber_01=-1;
                        this.activepagenumber_02=-1;
                        this.activepagenumber_03=-1;
                        this.activepagenumber_04=-1;
                        this.activepagenumber__4=-1;
                        this.activepagenumber__3=1;
                        this.activepagenumber__2=2;
                        this.activepagenumber__1=3;
                    }
                }else if(this.pagesallnumber==5){
                    if(this.activepagenumber==1){
                        this.activepagenumber_01=2;
                        this.activepagenumber_02=3;
                        this.activepagenumber_03=4;
                        this.activepagenumber_04=5;
                        this.activepagenumber__4=-1;
                        this.activepagenumber__3=-1;
                        this.activepagenumber__2=-1;
                        this.activepagenumber__1=-1;
                    }
                    if(this.activepagenumber==2){
                        this.activepagenumber_01=3;
                        this.activepagenumber_02=4;
                        this.activepagenumber_03=5;
                        this.activepagenumber_04=-1;
                        this.activepagenumber__4=-1;
                        this.activepagenumber__3=-1;
                        this.activepagenumber__2=-1;
                        this.activepagenumber__1=1;
                    }
                    if(this.activepagenumber==3){
                        this.activepagenumber_01=4;
                        this.activepagenumber_02=5;
                        this.activepagenumber_03=-1;
                        this.activepagenumber_04=-1;
                        this.activepagenumber__4=-1;
                        this.activepagenumber__3=-1;
                        this.activepagenumber__2=1;
                        this.activepagenumber__1=2;
                    }
                    if(this.activepagenumber==4){
                        this.activepagenumber_01=5;
                        this.activepagenumber_02=-1;
                        this.activepagenumber_03=-1;
                        this.activepagenumber_04=-1;
                        this.activepagenumber__4=-1;
                        this.activepagenumber__3=1;
                        this.activepagenumber__2=2;
                        this.activepagenumber__1=3;
                    }
                    if(this.activepagenumber==5){
                        this.activepagenumber_01=-1;
                        this.activepagenumber_02=-1;
                        this.activepagenumber_03=-1;
                        this.activepagenumber_04=-1;
                        this.activepagenumber__4=1;
                        this.activepagenumber__3=2;
                        this.activepagenumber__2=3;
                        this.activepagenumber__1=4;
                    }
                }else if(this.pagesallnumber==6){
                    if(this.activepagenumber==1){
                        this.activepagenumber_01=2;
                        this.activepagenumber_02=3;
                        this.activepagenumber_03=4;
                        this.activepagenumber_04=5;
                        this.activepagenumber__4=-1;
                        this.activepagenumber__3=-1;
                        this.activepagenumber__2=-1;
                        this.activepagenumber__1=-1;
                    }
                    if(this.activepagenumber==2){
                        this.activepagenumber_01=3;
                        this.activepagenumber_02=4;
                        this.activepagenumber_03=5;
                        this.activepagenumber_04=-1;
                        this.activepagenumber__4=-1;
                        this.activepagenumber__3=-1;
                        this.activepagenumber__2=-1;
                        this.activepagenumber__1=1;
                    }
                    if(this.activepagenumber==3){
                        this.activepagenumber_01=4;
                        this.activepagenumber_02=5;
                        this.activepagenumber_03=-1;
                        this.activepagenumber_04=-1;
                        this.activepagenumber__4=-1;
                        this.activepagenumber__3=-1;
                        this.activepagenumber__2=1;
                        this.activepagenumber__1=2;
                    }
                    if(this.activepagenumber==4){
                        this.activepagenumber_01=5;
                        this.activepagenumber_02=6;
                        this.activepagenumber_03=-1;
                        this.activepagenumber_04=-1;
                        this.activepagenumber__4=-1;
                        this.activepagenumber__3=-1;
                        this.activepagenumber__2=2;
                        this.activepagenumber__1=3;
                    }
                    if(this.activepagenumber==5){
                        this.activepagenumber_01=6;
                        this.activepagenumber_02=-1;
                        this.activepagenumber_03=-1;
                        this.activepagenumber_04=-1;
                        this.activepagenumber__4=1;
                        this.activepagenumber__3=2;
                        this.activepagenumber__2=3;
                        this.activepagenumber__1=4;
                    }
                    if(this.activepagenumber==6){
                        this.activepagenumber_01=-1;
                        this.activepagenumber_02=-1;
                        this.activepagenumber_03=-1;
                        this.activepagenumber_04=-1;
                        this.activepagenumber__4=2;
                        this.activepagenumber__3=3;
                        this.activepagenumber__2=4;
                        this.activepagenumber__1=5;
                    }
                }else if(this.pagesallnumber==7){
                    if(this.activepagenumber==1){
                        this.activepagenumber_01=2;
                        this.activepagenumber_02=3;
                        this.activepagenumber_03=4;
                        this.activepagenumber_04=5;
                        this.activepagenumber__4=-1;
                        this.activepagenumber__3=-1;
                        this.activepagenumber__2=-1;
                        this.activepagenumber__1=-1;
                    }
                    if(this.activepagenumber==2){
                        this.activepagenumber_01=3;
                        this.activepagenumber_02=4;
                        this.activepagenumber_03=5;
                        this.activepagenumber_04=-1;
                        this.activepagenumber__4=-1;
                        this.activepagenumber__3=-1;
                        this.activepagenumber__2=-1;
                        this.activepagenumber__1=1;
                    }
                    if(this.activepagenumber==3){
                        this.activepagenumber_01=4;
                        this.activepagenumber_02=5;
                        this.activepagenumber_03=-1;
                        this.activepagenumber_04=-1;
                        this.activepagenumber__4=-1;
                        this.activepagenumber__3=-1;
                        this.activepagenumber__2=1;
                        this.activepagenumber__1=2;
                    }
                    if(this.activepagenumber==4){
                        this.activepagenumber_01=5;
                        this.activepagenumber_02=6;
                        this.activepagenumber_03=-1;
                        this.activepagenumber_04=-1;
                        this.activepagenumber__4=-1;
                        this.activepagenumber__3=-1;
                        this.activepagenumber__2=2;
                        this.activepagenumber__1=3;
                    }
                    if(this.activepagenumber==5){
                        this.activepagenumber_01=6;
                        this.activepagenumber_02=7;
                        this.activepagenumber_03=-1;
                        this.activepagenumber_04=-1;
                        this.activepagenumber__4=-1;
                        this.activepagenumber__3=-1;
                        this.activepagenumber__2=3;
                        this.activepagenumber__1=4;
                    }
                    if(this.activepagenumber==6){
                        this.activepagenumber_01=7;
                        this.activepagenumber_02=-1;
                        this.activepagenumber_03=-1;
                        this.activepagenumber_04=-1;
                        this.activepagenumber__4=-1;
                        this.activepagenumber__3=3;
                        this.activepagenumber__2=4;
                        this.activepagenumber__1=5;
                    }
                    if(this.activepagenumber==7){
                        this.activepagenumber_01=-1;
                        this.activepagenumber_02=-1;
                        this.activepagenumber_03=-1;
                        this.activepagenumber_04=-1;
                        this.activepagenumber__4=3;
                        this.activepagenumber__3=4;
                        this.activepagenumber__2=5;
                        this.activepagenumber__1=6;
                    }
                }else if(this.pagesallnumber>7){
                    if(this.activepagenumber==1){
                        this.activepagenumber_01=2;
                        this.activepagenumber_02=3;
                        this.activepagenumber_03=4;
                        this.activepagenumber_04=5;
                        this.activepagenumber__4=-1;
                        this.activepagenumber__3=-1;
                        this.activepagenumber__2=-1;
                        this.activepagenumber__1=-1;
                    }
                    if(this.activepagenumber==2){
                        this.activepagenumber_01=3;
                        this.activepagenumber_02=4;
                        this.activepagenumber_03=5;
                        this.activepagenumber_04=-1;
                        this.activepagenumber__4=-1;
                        this.activepagenumber__3=-1;
                        this.activepagenumber__2=-1;
                        this.activepagenumber__1=1;
                    }
                    if(this.activepagenumber==3){
                        this.activepagenumber_01=4;
                        this.activepagenumber_02=5;
                        this.activepagenumber_03=-1;
                        this.activepagenumber_04=-1;
                        this.activepagenumber__4=-1;
                        this.activepagenumber__3=-1;
                        this.activepagenumber__2=1;
                        this.activepagenumber__1=2;
                    }
                    if(this.activepagenumber>=4&&this.activepagenumber<this.pagesallnumber-2){
                        this.activepagenumber_01=this.activepagenumber+1;
                        this.activepagenumber_02=this.activepagenumber+2;
                        this.activepagenumber_03=-1;
                        this.activepagenumber_04=-1;
                        this.activepagenumber__4=-1;
                        this.activepagenumber__3=-1;
                        this.activepagenumber__2=this.activepagenumber-2;
                        this.activepagenumber__1=this.activepagenumber-1;
                    }
                    if(this.activepagenumber==this.pagesallnumber-2){
                        this.activepagenumber_01=this.activepagenumber+1;
                        this.activepagenumber_02=this.activepagenumber+2;
                        this.activepagenumber_03=-1;
                        this.activepagenumber_04=-1;
                        this.activepagenumber__4=-1;
                        this.activepagenumber__3=-1;
                        this.activepagenumber__2=this.activepagenumber-2;
                        this.activepagenumber__1=this.activepagenumber-1;
                    }
                    if(this.activepagenumber==this.pagesallnumber-1){
                        this.activepagenumber_01=this.activepagenumber+1;
                        this.activepagenumber_02=-1;
                        this.activepagenumber_03=-1;
                        this.activepagenumber_04=-1;
                        this.activepagenumber__4=-1;
                        this.activepagenumber__3=this.activepagenumber-4;
                        this.activepagenumber__2=this.activepagenumber-3;
                        this.activepagenumber__1=this.activepagenumber-2;
                    }
                    if(this.activepagenumber==this.pagesallnumber){
                        this.activepagenumber_01=-1;
                        this.activepagenumber_02=-1;
                        this.activepagenumber_03=-1;
                        this.activepagenumber_04=-1;
                        this.activepagenumber__4=this.activepagenumber-4;
                        this.activepagenumber__3=this.activepagenumber-3;
                        this.activepagenumber__2=this.activepagenumber-2;
                        this.activepagenumber__1=this.activepagenumber-1;
                    }
                }
            },
            ifprependpoint(){
                if(this.pagesallnumber<=5){
                    this.prependpointstatus=false;
                }else if(this.activepagenumber>=4){
                    this.prependpointstatus=true;
                }else{
                    this.prependpointstatus=false;
                }
            },
            ifappendpointstatus(){
                if(this.pagesallnumber<=5){
                // 总页数少于5隐藏
                    this.appendpointstatus=false;
                }else if(this.activepagenumber+3>this.pagesallnumber){
                // 总页数少于5隐藏
                    this.appendpointstatus=false;
                }else{
                    this.appendpointstatus=true;
                }
            },
        },
        mounted() {
        },
        created() {
            if(typeof(this.currentpagenumber)=="number"){
                this.changeclick(this.currentpagenumber)
            }else{
                this.changeclick(1)
            }
        },
    }
</script>

<style scoped>
    .psf-changepagebox{
        
    }
    .psf-changpagecontainer{
        list-style: none;
        margin: 0;
        padding: 0;
        display: inline-block;
    }
    .psf-changpagecontainer>li{
        float: left;
        height: 20px;
        line-height: 20px;
        padding: 5px 10px;
        background-color: #ccc;
        margin-right:5px;
    }
    .psf-changpagecontainer>li:last-child{
        margin-right: 0;
    }
    .psf-changpagecontainer>li.activepagenumberli{
        background-color: #000;
        color: #fff;
    }
</style>

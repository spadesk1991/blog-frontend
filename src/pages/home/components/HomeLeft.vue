<template>
    <div class="home-left">
        <div class="img">
            <img src="" alt="touxiang">
        </div>
        <div class="info">
            <div>
                昵称：<span class="font-cl">{{nikename}}</span>
            </div>
            <div>
                QQ：<span class="font-cl">{{qq}}</span>
            </div>
            <div>
                微信：<span class="font-cl">{{wechat}}</span>
            </div>
            <div>
                github：<a class="font-cl" :href="github">{{github}}</a>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'HomeLeft',
  data () {
    return {
      nikename: '张三',
      qq: '11111',
      wechat: 'wx11111',
      github: 'https://github.com'
    }
  }
}
</script>

<style scoped>
    .home-left{
        background-color: #545c64;
        width:400px;
        height: 600px;
        border-radius: 20px;
    }
    .home-left .img {
        width: 100px;
        height: 100px;
        background: white;
        border-radius: 50px;
        margin-top: 20px;
        margin-left:150px;
        overflow: hidden;
    }
    .home-left .info{
        margin-top:20px;
        margin-left: 100px;
        line-height: 40px;
        font-size: 13px;
    }
    .home-left .info .font-cl{
        color: rgb(25, 34, 29)
    }
</style>

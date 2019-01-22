<template>
  <div class="detail">
    <h1 class="title">这是标题</h1>
    <div class="tags">
      <el-tag class="tag" type="success" >标签</el-tag>
      <el-tag type="success" class="tag">标签</el-tag>
      <el-tag type="success" class="tag">标签</el-tag>
      <el-tag type="success" class="tag">标签</el-tag>
    </div>
    <div class="header">
      <div class="info">
        <div>作者：</div>
        <div>日期：</div>
        <div>分类：</div>
      </div>
      <div class="page">
        <router-link tag="div" to="/" >上一页：323</router-link>
        <router-link tag="div" to="/" >下一页：1111112313123123</router-link>
      </div>
    </div>
    <mavon-editor
        class="md"
      :value="context"
      codeStyle='atelier-cave-dark'
      :subfield ="prop.subfield"
      :defaultOpen ="prop.defaultOpen"
      :toolbarsFlag ="prop.toolbarsFlag"
      :editable="prop.editable"
      :ishljs="prop.ishljs"
      :boxShadow="prop.boxShadow"
      :scrollStyle="prop.scrollStyle"
    ></mavon-editor>
    <div class="msg-list">
      <h2 class="board" >留言板：</h2>
      <div class="msg">
      <span>大佬：</span> <span class="content">这篇文件真是太好啦！！！222332323232323232233322323232332433333333343435t35t3343ygfdgdfsgdfgsdrgfdsrfgserdgsdfgsfdgsdfgfdgdfgdsfg     </span>
      </div>
      <div class="msg">
      <span>大佬：</span> <span class="content">这篇文件真是太好啦！！！222332323232323232233322323232332433333333343435t35t3343ygfdgdfsgdfgsdrgfdsrfgserdgsdfgsfdgsdfgfdgdfgdsfg     </span>
      </div>
      <div class="msg">
      <span>大佬：</span> <span class="content">这篇文件真是太好啦！！！222332323232323232233322323232332433333333343435t35t3343ygfdgdfsgdfgsdrgfdsrfgserdgsdfgsfdgsdfgfdgdfgdsfg     </span>
      </div>
      <div class="msg">
      <span>大佬：</span> <span class="content">这篇文件真是太好啦！！！222332323232323232233322323232332433333333343435t35t3343ygfdgdfsgdfgsdrgfdsrfgserdgsdfgsfdgsdfgfdgdfgdsfg     </span>
      </div>
      <div class="msg">
      <span>大佬：</span> <span class="content">这篇文件真是太好啦！！！222332323232323232233322323232332433333333343435t35t3343ygfdgdfsgdfgsdrgfdsrfgserdgsdfgsfdgsdfgfdgdfgdsfg     </span>
      </div>
    </div>
    <div class="foot">

    </div>
  </div>
</template>

<script>
export default {
  name: 'Detail',
  data () {
    return {
      context: ' ## 暗示法士大夫```jsconst koa = require("koa");const router = reuire("koa-router");```' +
       ' ## 暗示法士大夫```jsconst koa = require("koa");const router = reuire("koa-router");```' +
       ' ## 暗示法士大夫```jsconst koa = require("koa");const router = reuire("koa-router");```' +
       ' ## 暗示法士大夫```jsconst koa = require("koa");const router = reuire("koa-router");```' +
       ' ## 暗示法士大夫```jsconst koa = require("koa");const router = reuire("koa-router");```' +
       ' ## 暗示法士大夫```jsconst koa = require("koa");const router = reuire("koa-router");```' +
       ' ## 暗示法士大夫```jsconst koa = require("koa");const router = reuire("koa-router");```' +
       ' ## 暗示法士大夫```jsconst koa = require("koa");const router = reuire("koa-router");```' +
       ' ## 暗示法士大夫```jsconst koa = require("koa");const router = reuire("koa-router");```'
    }
  },
  computed: {
    prop () {
      let data = {
        subfield: false, // 单双栏模式
        defaultOpen: 'preview', // edit： 默认展示编辑区域 ， preview： 默认展示预览区域
        editable: false,
        toolbarsFlag: false,
        scrollStyle: true,
        boxShadow: true,
        ishljs: true
      }
      return data
    }

  }
}
</script>

<style scoped>
.detail .md{
  width: 60%;
  margin-left: 20%;
}
.detail .md >>> .v-note-panel{
  box-shadow: none;
}
.detail .md >>> .v-note-panel .v-note-show{
   background: gray;
}
.detail .md >>>.v-note-panel .v-note-show .v-show-content {
   background: rgb(199, 237, 202);
   border-radius: 20px;
}
.detail .title {
  text-align: center;
  font-size: 30px;
}
.detail .header {
  margin:0 21%;
  line-height: 20px;
  display: flex;
  justify-content: space-between;
  padding-bottom: 10px;
}
.detail .tags {
  text-align: center;
}
/* .detail .header .tags .tag{
  font-size: 30px;
  line-height: 20px;
  opacity:1;
  background: white
} */
/* .detail .header .tags .tag:hover{
  cursor:pointer;
  color: #000;
} */
.detail .msg-list{
  margin:0 20%;
  width: 60%;
}
.detail .msg {
  background: rgb(224, 237, 199);
  color: #000;
  border-radius: 8px;
  font-size: 15px;
  word-wrap:break-word;
  line-height: 23px;
  padding: 10px;
  margin-bottom: 20px;
}
.detail .foot {
  height: 50px;
}
</style>

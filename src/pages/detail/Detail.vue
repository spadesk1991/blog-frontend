<template>
  <div class="detail">
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
   background-color: gray;
}

</style>

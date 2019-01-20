<template>
    <div class="header">
        <el-menu :default-active="activeIndex"
        class="el-menu-demo"
        mode="horizontal"
        background-color="#545c64"
        text-color="#fff"
        active-text-color="#ffd04b"
        @select="handleSelect">
            <router-link  tag="el-menu-item" to="/" class="radius" index="1">主页</router-link>
            <el-menu-item  class="radius" index="3" >分类</el-menu-item>
            <el-menu-item  class="radius" index="4">热门</el-menu-item>
            <el-menu-item index="6" class="radius float">我的</el-menu-item>
            <router-link tag="el-menu-item" index="5" class="radius float" to="/edit">写博客</router-link>
        </el-menu>
    </div>
</template>

<script>
export default {
  data () {
    return {
      activeIndex: '1',
      activeIndex2: '1'
    }
  },
  methods: {
    handleSelect (key, keyPath) {
      console.log(key, keyPath)
    }
  }
}
</script>
<style  scoped>
    .el-menu-demo {
        padding:0 20%;
        border-radius: .5rem;
    }
    .el-menu-demo .float {
        float:right;
    }
    .el-menu-demo .radius {
        border-radius: 2rem;
    }
</style>

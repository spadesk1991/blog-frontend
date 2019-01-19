<template>
    <div class="header">
        <el-menu :default-active="activeIndex"
        class="el-menu-demo"
        mode="horizontal"
        background-color="#545c64"
        text-color="#fff"
        active-text-color="#ffd04b"
        @select="handleSelect">
            <el-menu-item class="radius" index="1">处理中心</el-menu-item>
            <!-- <el-submenu index="2">
                <template slot="title">我的工作台</template>
                <el-menu-item index="2-1">选项1</el-menu-item>
                <el-menu-item index="2-2">选项2</el-menu-item>
                <el-menu-item index="2-3">选项3</el-menu-item>
                <el-submenu index="2-4">
                <template slot="title">选项4</template>
                <el-menu-item index="2-4-1">选项1</el-menu-item>
                <el-menu-item index="2-4-2">选项2</el-menu-item>
                <el-menu-item index="2-4-3">选项3</el-menu-item>
                </el-submenu>
            </el-submenu> -->
            <el-menu-item  class="radius" index="3" >消息中心</el-menu-item>
            <el-menu-item  class="radius" index="4">订单管理</el-menu-item>
            <el-menu-item index="5" class="me radius">我的</el-menu-item>
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
        padding-left: 20%;
        /* height:80px */
        border-radius: .5rem;
    }
    .el-menu-demo .me {
        float:right;
        /* width:100px; */
        margin-right: 20%;
    }
    .el-menu-demo .radius {
        border-radius: 2rem;
    }
</style>

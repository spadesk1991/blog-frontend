<template>
  <div class="home">
      <home-left class="h-left"></home-left>
      <div class="list">
          <div class="detail" @click="handleClick(item.id)"  v-for="item of blogList" :key="item.id">
              <div class="title">
                这是标题
              </div>
              <div class="info">
                这是内容
              </div>
              <div class="tag">
                <el-tag type="success">标签一</el-tag>
                <el-tag type="success">标签一</el-tag>
                <el-tag type="success">标签一</el-tag>
                <el-tag type="success">标签一</el-tag>
                <el-tag type="success">标签一</el-tag>
                <el-badge :value="12" class="right comment">
                  <el-button size="small">评论</el-button>
                </el-badge>
                <el-badge :value="12" class="right nice">
                  <el-button size="small">赞</el-button>
                </el-badge>
              </div>
          </div>
      </div>
  </div>
</template>

<script>
import HomeLeft from '@/pages/home/components/HomeLeft'
export default {
  name: 'Home',
  data () {
    return {
      blogList: [
        {
          id: '111'
        },
        {
          id: '112'
        },
        {
          id: '113'
        },
        {
          id: '114'
        },
        {
          id: '114'
        },
        {
          id: '114'
        },
        {
          id: '114'
        },
        {
          id: '114'
        },
        {
          id: '114'
        },
        {
          id: '114'
        },
        {
          id: '114'
        },
        {
          id: '114'
        },
        {
          id: '114'
        },
        {
          id: '114'
        },
        {
          id: '114'
        },
        {
          id: '114'
        },
        {
          id: '114'
        },
        {
          id: '114'
        },
        {
          id: '114'
        },
        {
          id: '114'
        },
        {
          id: '114'
        },
        {
          id: '114'
        },
        {
          id: '114'
        },
        {
          id: '114'
        },
        {
          id: '114'
        },
        {
          id: '114'
        },
        {
          id: '114'
        },
        {
          id: '114'
        },
        {
          id: '115'
        }
      ]
    }
  },
  components: {
    HomeLeft
  },
  methods: {
    handleClick (id) {
      this.$router.push('/detail/' + id)
    }
  }
}
</script>

<style scoped>
.home {
   display: flex;
   padding-top:20px;
}
.home .h-left {
  position:sticky;
  top:65px;
}
.home .list {
  width: 60%;
  margin-left: 10px;
}

.home .list .detail {
  margin-bottom: 10px;
  line-height: 25px;
  padding-top:10px;
  padding-left: 10px;
  height: 80px;
  background: #545c64;
  border-radius: 5px;
}
.home .list .detail:hover {
  background: #494c4e;
}
.home .list .detail .info{
  overflow: hidden;
  font-size: 12px;
  text-overflow:ellipsis;
  white-space: nowrap;
}
.home .list .detail .title{
  font-size: 15px;
}

.home .list .detail .tag .right{
  float:right;
  margin-right: 25px;
}
.home .list .detail .tag .right >>> .el-button{
  background: gray;
  border-color: gray
}

</style>

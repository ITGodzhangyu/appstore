<template>
  <div class="tab-container">   
    <el-tabs style='margin-top:20px;' v-model="activeName" type="border-card" tab-position='left'>
      <el-tab-pane v-for="item in tabMapOptions" :label="item.label" :key='item.key' :name="item.key">
        <keep-alive>
          <tab-pane v-if='activeName==item.key' :type='item.key' @create='showCreatedTimes'></tab-pane>
        </keep-alive>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
import tabPane from './components/tabPane'

export default {
  name: 'tab',
  components: { tabPane },
  data() {
    return {
      tabMapOptions: [
        { label: '基础软件', key: 'CN' },
        { label: '开发工具', key: 'US' },
        { label: 'SDK/API', key: 'JP' },
        { label: '微服务', key: 'EU' }
      ],
      activeName: 'CN',
      createdTimes: 0
    }
  },
  methods: {
    showCreatedTimes() {
      this.createdTimes = this.createdTimes + 1
    }
  }
}
</script>

<style scoped>
  .tab-container{
    margin: 0px;
  }
</style>
